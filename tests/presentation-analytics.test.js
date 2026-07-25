const test = require("node:test");
const assert = require("node:assert/strict");

const analytics = require("../shared/presentation-analytics.js");

function memoryStorage() {
  const values = new Map();
  return {
    getItem: (key) => values.get(key) || null,
    setItem: (key, value) => values.set(key, String(value)),
  };
}

test("event payload contains only the approved anonymous fields", () => {
  assert.deepEqual(
    analytics.buildPayload({
      event: "view",
      presentation: "medical",
      sessionId: "123e4567-e89b-42d3-a456-426614174000",
      attribution: {
        source: "linkedin",
        medium: "social",
        campaign: "portfolio",
        content: "medical",
      },
    }),
    {
      schema_version: "1",
      event: "view",
      presentation: "medical",
      session_id: "123e4567-e89b-42d3-a456-426614174000",
      source: "linkedin",
      medium: "social",
      campaign: "portfolio",
      content: "medical",
    }
  );
});

test("each event is emitted once per presentation and tab session", async () => {
  const sent = [];
  const client = analytics.createClient({
    presentation: "financial",
    sessionId: "123e4567-e89b-42d3-a456-426614174000",
    attribution: { source: "direct", medium: "", campaign: "", content: "" },
    storage: memoryStorage(),
    transport: async (payload) => sent.push(payload),
  });

  assert.equal(await client.track("view"), true);
  assert.equal(await client.track("view"), false);
  assert.equal(await client.track("final_slide"), true);
  assert.equal(await client.track("final_slide"), false);
  assert.equal(await client.track("cta_click"), true);
  assert.equal(await client.track("cta_click"), false);
  assert.deepEqual(sent.map((item) => item.event), ["view", "final_slide", "cta_click"]);
});

test("a failed transport remains silent and does not mark the event sent", async () => {
  const storage = memoryStorage();
  const client = analytics.createClient({
    presentation: "psychologist",
    sessionId: "123e4567-e89b-42d3-a456-426614174000",
    attribution: { source: "direct", medium: "", campaign: "", content: "" },
    storage,
    transport: async () => {
      throw new Error("offline");
    },
  });

  assert.equal(await client.track("view"), false);
  assert.equal(await client.track("view"), false);
});

test("transport prefers sendBeacon and falls back to keepalive fetch", async () => {
  const beaconCalls = [];
  const fetchCalls = [];
  const payload = {
    schema_version: "1",
    event: "cta_click",
    presentation: "google-sheets",
    session_id: "123e4567-e89b-42d3-a456-426614174000",
    source: "upwork",
    medium: "profile",
    campaign: "portfolio",
    content: "",
  };

  const beaconResult = await analytics.sendPayload(payload, {
    navigator: { sendBeacon: (url, body) => { beaconCalls.push({ url, body }); return true; } },
    fetch: async (...args) => fetchCalls.push(args),
    Blob,
  });
  assert.equal(beaconResult, true);
  assert.equal(beaconCalls.length, 1);
  assert.equal(fetchCalls.length, 0);

  const fallbackResult = await analytics.sendPayload(payload, {
    navigator: { sendBeacon: () => false },
    fetch: async (...args) => { fetchCalls.push(args); return { ok: true }; },
    Blob,
  });
  assert.equal(fallbackResult, true);
  assert.equal(fetchCalls.length, 1);
  assert.deepEqual(fetchCalls[0][1], {
    method: "POST",
    body: new URLSearchParams(payload).toString(),
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    keepalive: true,
    credentials: "omit",
  });
});

test("visible view requires two continuous visible seconds", () => {
  const listeners = new Map();
  const fakeDocument = {
    visibilityState: "visible",
    addEventListener: (name, fn) => listeners.set(name, fn),
    removeEventListener: (name) => listeners.delete(name),
  };
  const timers = new Map();
  let timerId = 0;
  const calls = [];
  const tracker = analytics.createVisibleViewTracker({
    document: fakeDocument,
    delayMs: 2000,
    setTimeout: (fn, ms) => {
      timerId += 1;
      timers.set(timerId, { fn, ms });
      return timerId;
    },
    clearTimeout: (id) => timers.delete(id),
    onVisible: () => calls.push("view"),
  });

  tracker.start();
  assert.equal([...timers.values()][0].ms, 2000);
  fakeDocument.visibilityState = "hidden";
  listeners.get("visibilitychange")();
  assert.equal(timers.size, 0);
  fakeDocument.visibilityState = "visible";
  listeners.get("visibilitychange")();
  const timer = [...timers.values()][0];
  timer.fn();
  assert.deepEqual(calls, ["view"]);
  tracker.stop();
});
