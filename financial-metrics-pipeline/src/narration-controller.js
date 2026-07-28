import { assetUrl } from "./asset-url.js";

function isPolicyBlock(error) {
  if (!error) return false;
  return (
    error.name === "NotAllowedError" ||
    /user gesture|interact|not allowed|permission/i.test(error.message || "")
  );
}

export function createNarrationController({
  deck,
  getSlide,
  audioFactory = (src) => new Audio(src),
  schedule = setTimeout,
  cancel = clearTimeout,
  onState = () => {},
  shouldAutoAdvance = () => true,
}) {
  let running = false;
  let audio = null;
  let timer = null;

  function clearPlayback() {
    if (timer !== null) {
      cancel(timer);
      timer = null;
    }
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      audio = null;
    }
  }

  function advance() {
    if (!running) return;
    timer = null;
    if (!shouldAutoAdvance()) {
      running = false;
      onState("idle");
      return;
    }
    deck.next();
  }

  function scheduleFallback(slide) {
    if (!running || timer !== null) return;
    if (!shouldAutoAdvance()) {
      running = false;
      onState("idle");
      return;
    }
    timer = schedule(advance, slide.durationMs || 9000);
    onState("fallback");
  }

  async function playCurrent() {
    if (!running) return false;
    clearPlayback();
    const slide = getSlide();
    if (!slide?.audio) {
      scheduleFallback(slide || {});
      return false;
    }

    const currentAudio = audioFactory(assetUrl(slide.audio));
    audio = currentAudio;
    currentAudio.addEventListener(
      "ended",
      () => {
        if (audio !== currentAudio || !running) return;
        audio = null;
        advance();
      },
      { once: true },
    );
    currentAudio.addEventListener(
      "error",
      () => {
        if (audio !== currentAudio) return;
        audio = null;
        scheduleFallback(slide);
      },
      { once: true },
    );

    try {
      await currentAudio.play();
      onState("playing");
      return true;
    } catch (error) {
      if (audio === currentAudio) audio = null;
      if (isPolicyBlock(error)) {
        running = false;
        onState("blocked");
        return false;
      }
      scheduleFallback(slide);
      return false;
    }
  }

  async function start() {
    running = true;
    onState("starting");
    return playCurrent();
  }

  function stop() {
    running = false;
    clearPlayback();
    onState("idle");
  }

  async function handleSlideChanged() {
    if (!running) {
      clearPlayback();
      return false;
    }
    return playCurrent();
  }

  return {
    handleSlideChanged,
    isRunning: () => running,
    playCurrent,
    start,
    stop,
  };
}
