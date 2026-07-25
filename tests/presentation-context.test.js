const test = require("node:test");
const assert = require("node:assert/strict");

const context = require("../shared/presentation-context.js");

test("only upwork=1 selects the Upwork contact mode", () => {
  assert.equal(context.parseContext("?upwork=1").contactMode, "upwork");
  assert.equal(context.parseContext("?upwork=true").contactMode, "general");
  assert.equal(context.parseContext("?upwork=0").contactMode, "general");
  assert.equal(context.parseContext("").contactMode, "general");
});

test("UTM values are normalized and untagged traffic is direct", () => {
  assert.deepEqual(context.parseContext("?utm_source=LinkedIn&utm_medium=Social%20Post&utm_campaign=Q3%20Portfolio&utm_content=A%2FB"), {
    contactMode: "general",
    source: "linkedin",
    medium: "social-post",
    campaign: "q3-portfolio",
    content: "a-b",
  });
  assert.equal(context.parseContext("").source, "direct");
  assert.equal(context.parseContext("?utm_source=%20%20").source, "direct");
});

test("supported attribution is propagated without losing target query or fragment", () => {
  const result = context.propagateUrl(
    "./medical-project/site/?autoplay=0#proof",
    "?upwork=1&utm_source=upwork&utm_medium=profile&utm_campaign=portfolio&utm_content=medical"
  );
  assert.equal(
    result,
    "./medical-project/site/?autoplay=0&upwork=1&utm_source=upwork&utm_medium=profile&utm_campaign=portfolio&utm_content=medical#proof"
  );
});

test("unsupported and empty parameters are not propagated", () => {
  assert.equal(
    context.propagateUrl("./medical-project/site/", "?upwork=0&utm_source=&utm_term=ignored"),
    "./medical-project/site/"
  );
});

test("session id is stable within sessionStorage and valid UUID format", () => {
  const values = new Map();
  const storage = {
    getItem: (key) => values.get(key) || null,
    setItem: (key, value) => values.set(key, value),
  };
  let calls = 0;
  const randomUUID = () => {
    calls += 1;
    return "123e4567-e89b-42d3-a456-426614174000";
  };

  assert.equal(context.getSessionId(storage, randomUUID), "123e4567-e89b-42d3-a456-426614174000");
  assert.equal(context.getSessionId(storage, randomUUID), "123e4567-e89b-42d3-a456-426614174000");
  assert.equal(calls, 1);
});

test("contact selection exposes no email in Upwork mode", () => {
  const upwork = context.getContact("?upwork=1");
  assert.equal(upwork.href, "https://www.upwork.com/freelancers/mikelottridge");
  assert.equal(upwork.label, "View Mike Lottridge on Upwork");
  assert.doesNotMatch(`${upwork.label} ${upwork.description} ${upwork.href}`, /@|mailto:/i);

  const general = context.getContact("");
  assert.equal(general.href, "mailto:mikelottridge@productmanagementresources.pro");
  assert.equal(general.label, "Email Mike Lottridge");
});

test("narration cue animates for five seconds and stops on interaction", () => {
  const classes = new Set();
  const listeners = new Map();
  let scheduled;
  let cleared = false;
  const button = {
    classList: {
      add: (name) => classes.add(name),
      remove: (name) => classes.delete(name),
    },
    addEventListener: (name, fn) => listeners.set(name, fn),
    removeEventListener: (name) => listeners.delete(name),
  };

  context.installNarrationCue(button, {
    matchMedia: () => ({ matches: false }),
    setTimeout: (fn, ms) => {
      scheduled = { fn, ms };
      return 42;
    },
    clearTimeout: (id) => {
      assert.equal(id, 42);
      cleared = true;
    },
  });

  assert.equal(classes.has("guided-flash"), true);
  assert.equal(scheduled.ms, 5000);
  listeners.get("click")();
  assert.equal(classes.has("guided-flash"), false);
  assert.equal(cleared, true);
});

test("narration cue remains still when reduced motion is requested", () => {
  let scheduled = false;
  const button = {
    classList: { add: () => assert.fail("animation class should not be added"), remove: () => {} },
    addEventListener: () => {},
    removeEventListener: () => {},
  };
  context.installNarrationCue(button, {
    matchMedia: () => ({ matches: true }),
    setTimeout: () => { scheduled = true; },
    clearTimeout: () => {},
  });
  assert.equal(scheduled, false);
});
