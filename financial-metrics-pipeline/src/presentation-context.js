(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.PresentationContext = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const SESSION_KEY = "pmr.presentation.session_id";
  const SUPPORTED_PARAMS = ["upwork", "utm_source", "utm_medium", "utm_campaign", "utm_content"];
  const EMAIL = "mikelottridge@productmanagementresources.pro";
  const UPWORK_PROFILE = "https://www.upwork.com/freelancers/mikelottridge";

  function normalizeValue(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9._-]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80);
  }

  function parseContext(search) {
    const params = new URLSearchParams(search || "");
    return {
      contactMode: params.get("upwork") === "1" ? "upwork" : "general",
      source: normalizeValue(params.get("utm_source")) || "direct",
      medium: normalizeValue(params.get("utm_medium")),
      campaign: normalizeValue(params.get("utm_campaign")),
      content: normalizeValue(params.get("utm_content")),
    };
  }

  function getContact(search) {
    if (parseContext(search).contactMode === "upwork") {
      return {
        mode: "upwork",
        label: "View Mike Lottridge on Upwork",
        description: "Use my Upwork profile to message me about the calculation or model you need reviewed.",
        href: UPWORK_PROFILE,
        external: true,
      };
    }
    return {
      mode: "general",
      label: "Email Mike Lottridge",
      description: "Tell me which calculation, model, or spreadsheet workflow you need made trustworthy.",
      href: `mailto:${EMAIL}`,
      external: false,
    };
  }

  function propagateUrl(href, search) {
    const fragmentIndex = href.indexOf("#");
    const fragment = fragmentIndex >= 0 ? href.slice(fragmentIndex) : "";
    const withoutFragment = fragmentIndex >= 0 ? href.slice(0, fragmentIndex) : href;
    const queryIndex = withoutFragment.indexOf("?");
    const path = queryIndex >= 0 ? withoutFragment.slice(0, queryIndex) : withoutFragment;
    const targetParams = new URLSearchParams(queryIndex >= 0 ? withoutFragment.slice(queryIndex + 1) : "");
    const sourceParams = new URLSearchParams(search || "");

    SUPPORTED_PARAMS.forEach((name) => {
      if (name === "upwork") {
        if (sourceParams.get(name) === "1") targetParams.set(name, "1");
        else targetParams.delete(name);
        return;
      }
      const normalized = normalizeValue(sourceParams.get(name));
      if (normalized) targetParams.set(name, normalized);
      else targetParams.delete(name);
    });

    const query = targetParams.toString();
    return `${path}${query ? `?${query}` : ""}${fragment}`;
  }

  function propagateLinks(documentRef, search) {
    if (!documentRef || typeof documentRef.querySelectorAll !== "function") return;
    documentRef.querySelectorAll("a[data-presentation-link]").forEach((link) => {
      const href = link.getAttribute("href");
      if (href) link.setAttribute("href", propagateUrl(href, search));
    });
  }

  function getSessionId(storage, randomUUID) {
    const makeUUID = randomUUID || (
      typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
        ? () => crypto.randomUUID()
        : null
    );
    if (!storage || !makeUUID) return "";
    try {
      const existing = storage.getItem(SESSION_KEY);
      if (existing) return existing;
      const created = makeUUID();
      storage.setItem(SESSION_KEY, created);
      return created;
    } catch (_) {
      return "";
    }
  }

  function installNarrationCue(button, options) {
    if (!button) return function () {};
    const settings = options || {};
    const matchMedia = settings.matchMedia || (
      typeof window !== "undefined" && typeof window.matchMedia === "function"
        ? window.matchMedia.bind(window)
        : null
    );
    if (matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return function () {};
    }
    const schedule = settings.setTimeout || setTimeout;
    const cancel = settings.clearTimeout || clearTimeout;
    let timer = null;
    function clear() {
      button.classList.remove("guided-flash");
      if (timer !== null) {
        cancel(timer);
        timer = null;
      }
      button.removeEventListener("click", clear);
    }
    button.classList.add("guided-flash");
    button.addEventListener("click", clear);
    timer = schedule(clear, 5000);
    return clear;
  }

  function renderCta(container, options) {
    if (!container || typeof document === "undefined") return null;
    const settings = options || {};
    const contact = getContact(settings.search || "");
    const wrapper = document.createElement("aside");
    wrapper.className = "presentation-cta";
    wrapper.setAttribute("aria-label", "Contact Mike Lottridge");

    const eyebrow = document.createElement("div");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = "Next step";
    const heading = document.createElement("h2");
    heading.textContent = "Have a calculation that needs to be trustworthy?";
    const description = document.createElement("p");
    description.textContent = contact.description;
    const link = document.createElement("a");
    link.className = "btn btn-accent presentation-cta-link";
    link.href = contact.href;
    link.textContent = contact.label;
    if (contact.external) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    if (typeof settings.onClick === "function") {
      link.addEventListener("click", () => settings.onClick(contact));
    }
    wrapper.append(eyebrow, heading, description, link);
    container.append(wrapper);
    return wrapper;
  }

  return {
    EMAIL,
    SESSION_KEY,
    SUPPORTED_PARAMS,
    UPWORK_PROFILE,
    getContact,
    getSessionId,
    installNarrationCue,
    normalizeValue,
    parseContext,
    propagateLinks,
    propagateUrl,
    renderCta,
  };
});
