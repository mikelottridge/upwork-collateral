(function (root, factory) {
  const api = factory(root);
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.PresentationAnalytics = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function (root) {
  "use strict";

  const ENDPOINT = "https://productmanagementresources.pro/api/presentation-events";
  const VALID_EVENTS = new Set(["view", "final_slide", "cta_click"]);
  const VALID_PRESENTATIONS = new Set(["google-sheets", "medical", "financial", "psychologist"]);
  const clients = new Map();

  function getSessionStorage(environment) {
    try {
      return environment && environment.sessionStorage ? environment.sessionStorage : null;
    } catch (_) {
      return null;
    }
  }

  function getSearch(environment) {
    try {
      return environment && environment.location ? environment.location.search : "";
    } catch (_) {
      return "";
    }
  }

  function buildPayload(input) {
    return {
      schema_version: "1",
      event: input.event,
      presentation: input.presentation,
      session_id: input.sessionId,
      source: input.attribution.source || "direct",
      medium: input.attribution.medium || "",
      campaign: input.attribution.campaign || "",
      content: input.attribution.content || "",
    };
  }

  async function sendPayload(payload, environment) {
    const env = environment || root || {};
    const encoded = new URLSearchParams(payload).toString();
    try {
      if (env.navigator && typeof env.navigator.sendBeacon === "function" && env.Blob) {
        const body = new env.Blob([encoded], {
          type: "application/x-www-form-urlencoded;charset=UTF-8",
        });
        if (env.navigator.sendBeacon(ENDPOINT, body)) return true;
      }
      if (typeof env.fetch !== "function") return false;
      const response = await env.fetch(ENDPOINT, {
        method: "POST",
        body: encoded,
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        keepalive: true,
        credentials: "omit",
      });
      return !response || response.ok !== false;
    } catch (_) {
      return false;
    }
  }

  function createClient(options) {
    const settings = options || {};
    const storage = settings.storage;
    const transport = settings.transport || ((payload) => sendPayload(payload));

    async function track(event) {
      if (!VALID_EVENTS.has(event) || !VALID_PRESENTATIONS.has(settings.presentation) || !settings.sessionId) {
        return false;
      }
      const key = `pmr.presentation.sent.${settings.sessionId}.${settings.presentation}.${event}`;
      try {
        if (storage && storage.getItem(key)) return false;
      } catch (_) {
        return false;
      }
      const payload = buildPayload({
        event,
        presentation: settings.presentation,
        sessionId: settings.sessionId,
        attribution: settings.attribution || {},
      });
      try {
        const sent = await transport(payload);
        if (!sent && sent !== undefined) return false;
        if (storage) storage.setItem(key, "1");
        return true;
      } catch (_) {
        return false;
      }
    }

    return { track };
  }

  function createVisibleViewTracker(options) {
    const settings = options || {};
    const documentRef = settings.document;
    const delayMs = settings.delayMs || 2000;
    const schedule = settings.setTimeout || root.setTimeout.bind(root);
    const cancel = settings.clearTimeout || root.clearTimeout.bind(root);
    let timer = null;
    let completed = false;

    function clear() {
      if (timer !== null) {
        cancel(timer);
        timer = null;
      }
    }

    function onVisibilityChange() {
      clear();
      if (completed || !documentRef || documentRef.visibilityState !== "visible") return;
      timer = schedule(() => {
        timer = null;
        completed = true;
        settings.onVisible();
      }, delayMs);
    }

    return {
      start() {
        if (!documentRef) return;
        documentRef.addEventListener("visibilitychange", onVisibilityChange);
        onVisibilityChange();
      },
      stop() {
        clear();
        if (documentRef) documentRef.removeEventListener("visibilitychange", onVisibilityChange);
      },
    };
  }

  function start(presentation) {
    if (clients.has(presentation)) return clients.get(presentation);
    const context = root.PresentationContext;
    if (!context || !VALID_PRESENTATIONS.has(presentation)) {
      return { track: async () => false };
    }
    const storage = getSessionStorage(root);
    const attribution = context.parseContext(getSearch(root));
    const sessionId = context.getSessionId(
      storage,
      root.crypto && typeof root.crypto.randomUUID === "function"
        ? () => root.crypto.randomUUID()
        : null
    );
    const client = createClient({
      presentation,
      sessionId,
      attribution,
      storage,
    });
    const viewTracker = createVisibleViewTracker({
      document: root.document,
      delayMs: 2000,
      onVisible: () => client.track("view"),
    });
    viewTracker.start();
    client.stop = () => viewTracker.stop();
    clients.set(presentation, client);
    return client;
  }

  return {
    ENDPOINT,
    buildPayload,
    createClient,
    createVisibleViewTracker,
    getSessionStorage,
    sendPayload,
    start,
  };
});
