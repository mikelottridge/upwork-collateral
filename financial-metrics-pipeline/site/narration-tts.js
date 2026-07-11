(function () {
  const NativeAudio = window.Audio;
  const synth = window.speechSynthesis;
  const TTS_PREFIX = "tts:";
  let userGestureReceived = false;
  let activeInstance = null;

  function unlockNarration() {
    userGestureReceived = true;
  }

  document.addEventListener("pointerdown", unlockNarration, { capture: true, passive: true });
  document.addEventListener("click", unlockNarration, { capture: true, passive: true });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") unlockNarration();
  }, { capture: true });

  function blockedError(message) {
    const error = new Error(message);
    error.name = "NotAllowedError";
    return error;
  }

  function preferredVoice() {
    if (!synth || typeof synth.getVoices !== "function") return null;
    const voices = synth.getVoices();
    return (
      voices.find((voice) => voice.lang === "en-US" && /Microsoft|Google|Samantha|Alex/i.test(voice.name)) ||
      voices.find((voice) => voice.lang === "en-US") ||
      voices.find((voice) => /^en\b/i.test(voice.lang)) ||
      null
    );
  }

  class NarrationAudio {
    constructor(src) {
      this.src = src;
      this.currentTime = 0;
      this.playbackRate = 1;
      this._utterance = null;
      this._endedListeners = [];
    }

    addEventListener(type, callback, options) {
      if (type !== "ended" || typeof callback !== "function") return;
      this._endedListeners.push({ callback, once: Boolean(options && options.once) });
    }

    _emitEnded() {
      const listeners = this._endedListeners.slice();
      this._endedListeners = this._endedListeners.filter((listener) => !listener.once);
      listeners.forEach((listener) => listener.callback());
    }

    play() {
      if (!synth || typeof window.SpeechSynthesisUtterance !== "function") {
        return Promise.reject(blockedError("Speech synthesis is unavailable in this browser."));
      }
      if (!userGestureReceived) {
        return Promise.reject(blockedError("Start narration with a click or keyboard action."));
      }

      if (activeInstance && activeInstance !== this) activeInstance.pause();
      synth.cancel();

      const text = this.src.slice(TTS_PREFIX.length).trim();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = Number.isFinite(this.playbackRate) ? this.playbackRate : 1;
      utterance.pitch = 1;
      utterance.volume = 1;
      const voice = preferredVoice();
      if (voice) utterance.voice = voice;

      this._utterance = utterance;
      activeInstance = this;
      utterance.onend = () => {
        if (activeInstance === this) activeInstance = null;
        this._utterance = null;
        this._emitEnded();
      };
      utterance.onerror = (event) => {
        if (activeInstance === this) activeInstance = null;
        this._utterance = null;
        if (event.error !== "canceled" && event.error !== "interrupted") this._emitEnded();
      };

      synth.speak(utterance);
      return Promise.resolve();
    }

    pause() {
      if (activeInstance === this && synth) {
        synth.cancel();
        activeInstance = null;
      }
      this._utterance = null;
    }
  }

  window.Audio = function AudioWithNarration(src) {
    if (typeof src === "string" && src.startsWith(TTS_PREFIX)) {
      return new NarrationAudio(src);
    }
    return new NativeAudio(src);
  };
  window.Audio.prototype = NativeAudio.prototype;
})(window);