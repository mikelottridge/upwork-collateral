import Reveal from "reveal.js";
import "reveal.js/reveal.css";
import "./styles.css";
import "./presentation-context.js";
import "./presentation-analytics.js";
import "./case-study-data.js";

import { renderSlide } from "./deck-renderer.js";
import { createNarrationController } from "./narration-controller.js";
import { installFocusedKeyboardNavigation, isManualPhoneMode } from "./interaction-policy.js";

const sourceDeck = window.CASE_STUDY;
const fatalState = document.querySelector("[data-fatal-state]");

if (!sourceDeck?.slides?.length) {
  fatalState.hidden = false;
  fatalState.textContent =
    "The presentation content could not be loaded. Check src/case-study-data.js.";
  throw new Error("Frozen CASE_STUDY payload missing");
}

const context = window.PresentationContext;
const isLocalPreview = ["localhost", "127.0.0.1"].includes(window.location.hostname);
const analytics = !isLocalPreview && window.PresentationAnalytics
  ? window.PresentationAnalytics.start(sourceDeck.presentationId)
  : { track: async () => false };

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value || "";
}

function renderHero() {
  setText("[data-project-eyebrow]", sourceDeck.eyebrow);
  setText("[data-project-title]", sourceDeck.title);
  setText("[data-project-lead]", sourceDeck.lead);
  setText("[data-project-about]", sourceDeck.about);
  setText("[data-project-approach]", sourceDeck.approach);
  setText("[data-footer-note]", sourceDeck.footerNote);

  const quote = document.querySelector("[data-project-quote]");
  quote.textContent = sourceDeck.quote?.text || "";
  if (sourceDeck.quote?.attribution) {
    const cite = document.createElement("cite");
    cite.textContent = sourceDeck.quote.attribution;
    quote.append(cite);
  }

  const signals = document.querySelector("[data-project-signals]");
  for (const signal of sourceDeck.signals || []) {
    const item = document.createElement("span");
    item.textContent = signal;
    signals.append(item);
  }

  const tags = document.querySelector("[data-project-tags]");
  for (const tag of sourceDeck.tags || []) {
    const item = document.createElement("span");
    item.textContent = tag;
    tags.append(item);
  }

  const metrics = document.querySelector("[data-metric-grid]");
  for (const metric of sourceDeck.metrics || []) {
    const item = document.createElement("article");
    const value = document.createElement("strong");
    const label = document.createElement("span");
    value.textContent = metric.value;
    label.textContent = metric.label;
    item.append(value, label);
    metrics.append(item);
  }
}

function renderSourceSlides() {
  const slides = document.querySelector("[data-slides]");
  slides.innerHTML = sourceDeck.slides
    .map((slide, index) => renderSlide(slide, index, sourceDeck.slides.length))
    .join("");

  const finalCta = slides.querySelector("[data-final-cta]");
  if (finalCta && context) {
    context.renderCta(finalCta, {
      search: window.location.search,
      onClick: () => analytics.track("cta_click"),
    });
  }
}

function renderSlideIndex(revealDeck) {
  const nav = document.querySelector("[data-slide-index]");
  sourceDeck.slides.forEach((slide, index) => {
    const button = document.createElement("button");
    const number = document.createElement("span");
    const label = document.createElement("span");
    button.type = "button";
    button.dataset.slideTarget = String(index);
    number.textContent = String(index + 1).padStart(2, "0");
    label.textContent = slide.eyebrow || `Slide ${index + 1}`;
    button.append(number, label);
    button.addEventListener("click", () => {
      revealDeck.slide(index);
      revealDeck.getRevealElement().focus();
    });
    nav.append(button);
  });
}

renderHero();
renderSourceSlides();

const revealRoot = document.querySelector(".presentation-deck");
const revealDeck = new Reveal(revealRoot, {
  embedded: true,
  keyboard: false,
  controls: false,
  progress: false,
  hash: true,
  history: true,
  center: false,
  disableLayout: true,
  transition: "fade",
  transitionSpeed: "fast",
  backgroundTransition: "none",
  touch: true,
  overview: false,
  help: false,
  autoPlayMedia: false,
});

await revealDeck.initialize();
installFocusedKeyboardNavigation(revealRoot, revealDeck);
renderSlideIndex(revealDeck);

const prevButton = document.querySelector("[data-action='prev']");
const nextButton = document.querySelector("[data-action='next']");
const narrationButton = document.querySelector("[data-action='narration']");
const progressCopy = document.querySelector("[data-progress-copy]");
const progressFill = document.querySelector("[data-progress-fill]");
const playbackStatus = document.querySelector("[data-playback-status]");
const progressionMode = document.querySelector("[data-progression-mode]");
const navButtons = Array.from(document.querySelectorAll("[data-slide-target]"));

let narration;
const revealAdapter = {
  next() {
    const index = revealDeck.getIndices().h;
    if (index >= sourceDeck.slides.length - 1) {
      narration.stop();
      return;
    }
    revealDeck.next();
  },
};

function currentSlideData() {
  return sourceDeck.slides[revealDeck.getIndices().h];
}

function updatePlaybackState(state) {
  const labels = {
    starting: "Starting recorded narration…",
    playing: "Recorded narration playing",
    fallback: "Audio failed; using source timing",
    blocked: "Playback was blocked; press Start to retry",
    idle: "Narration idle",
  };
  playbackStatus.textContent = labels[state] || "Narration idle";
  narrationButton.textContent =
    state === "playing" || state === "fallback"
      ? "Stop narrated tour"
      : "Start narrated tour";
  narrationButton.classList.toggle(
    "is-running",
    state === "playing" || state === "fallback",
  );
}

narration = createNarrationController({
  deck: revealAdapter,
  getSlide: currentSlideData,
  onState: updatePlaybackState,
  shouldAutoAdvance: () => !isManualPhoneMode(revealRoot, window),
});

function syncProgressionMode() {
  progressionMode.textContent = isManualPhoneMode(revealRoot, window)
    ? "Manual progression on this screen"
    : "";
}

function syncNavigation() {
  syncProgressionMode();
  const index = revealDeck.getIndices().h;
  const total = sourceDeck.slides.length;
  prevButton.disabled = index === 0;
  nextButton.disabled = index === total - 1;
  progressCopy.textContent = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  progressFill.style.width = `${((index + 1) / total) * 100}%`;
  navButtons.forEach((button, buttonIndex) => {
    const active = buttonIndex === index;
    button.classList.toggle("is-active", active);
    if (active) button.setAttribute("aria-current", "step");
    else button.removeAttribute("aria-current");
  });
}

prevButton.addEventListener("click", () => {
  revealDeck.prev();
  revealDeck.getRevealElement().focus();
});
nextButton.addEventListener("click", () => {
  revealDeck.next();
  revealDeck.getRevealElement().focus();
});
narrationButton.addEventListener("click", async () => {
  if (narration.isRunning()) narration.stop();
  else {
    await analytics.track("guided_start");
    await narration.start();
  }
  revealDeck.getRevealElement().focus();
});

revealDeck.on("slidechanged", async ({ indexh }) => {
  syncNavigation();
  if (indexh === sourceDeck.slides.length - 1) {
    await analytics.track("final_slide");
  }
  await narration.handleSlideChanged();
});

window.addEventListener("resize", syncProgressionMode);
window.addEventListener("orientationchange", syncProgressionMode);

syncNavigation();
updatePlaybackState("idle");

