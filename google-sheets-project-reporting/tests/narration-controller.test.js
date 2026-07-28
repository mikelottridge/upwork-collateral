import assert from "node:assert/strict";
import { test } from "node:test";

import { createNarrationController } from "../src/narration-controller.js";

function harness({ playError = null, shouldAutoAdvance = () => true } = {}) {
  const events = new Map();
  const audios = [];
  const timers = [];
  let advances = 0;
  let current = {
    audio: "../audio/slide-01.mp3?v=cedar",
    durationMs: 17800,
  };

  const controller = createNarrationController({
    deck: { next: () => advances++ },
    getSlide: () => current,
    audioFactory: (src) => {
      const audio = {
        src,
        paused: false,
        currentTime: 7,
        addEventListener(name, handler) {
          events.set(name, handler);
        },
        pause() {
          this.paused = true;
        },
        play() {
          return playError ? Promise.reject(playError) : Promise.resolve();
        },
      };
      audios.push(audio);
      return audio;
    },
    schedule: (callback, delay) => {
      timers.push({ callback, delay });
      return timers.length;
    },
    cancel: () => {},
    onState: () => {},
    shouldAutoAdvance,
  });

  return {
    audios,
    controller,
    events,
    get advances() {
      return advances;
    },
    set current(value) {
      current = value;
    },
    timers,
  };
}

test("narration remains idle until the viewer starts it", () => {
  const state = harness();

  assert.equal(state.controller.isRunning(), false);
  assert.equal(state.audios.length, 0);
});

test("start plays the current recorded MP3 and advances once when it ends", async () => {
  const state = harness();

  await state.controller.start();
  assert.equal(state.audios[0].src, "../audio/slide-01.mp3?v=cedar");

  state.events.get("ended")();
  assert.equal(state.advances, 1);
});

test("non-policy media failure schedules the source slide duration", async () => {
  const state = harness({ playError: new Error("decoder failed") });

  await state.controller.start();

  assert.equal(state.timers.length, 1);
  assert.equal(state.timers[0].delay, 17800);
  state.timers[0].callback();
  assert.equal(state.advances, 1);
});

test("autoplay policy rejection returns to idle without silent advance", async () => {
  const error = new Error("user gesture required");
  error.name = "NotAllowedError";
  const state = harness({ playError: error });

  await state.controller.start();

  assert.equal(state.controller.isRunning(), false);
  assert.equal(state.timers.length, 0);
  assert.equal(state.advances, 0);
});

test("slide changes stop prior audio before playing the new clip", async () => {
  const state = harness();
  await state.controller.start();
  const prior = state.audios[0];
  state.current = {
    audio: "../audio/slide-02.mp3?v=cedar",
    durationMs: 16700,
  };

  await state.controller.handleSlideChanged();

  assert.equal(prior.paused, true);
  assert.equal(prior.currentTime, 0);
  assert.equal(state.audios[1].src, "../audio/slide-02.mp3?v=cedar");
});

test("phone manual mode does not advance when audio ends", async () => {
  const state = harness({ shouldAutoAdvance: () => false });
  await state.controller.start();
  state.events.get("ended")();
  assert.equal(state.advances, 0);
  assert.equal(state.controller.isRunning(), false);
});

test("phone manual mode does not schedule fallback advance", async () => {
  const state = harness({ playError: new Error("decoder failed"), shouldAutoAdvance: () => false });
  await state.controller.start();
  assert.equal(state.timers.length, 0);
  assert.equal(state.advances, 0);
  assert.equal(state.controller.isRunning(), false);
});