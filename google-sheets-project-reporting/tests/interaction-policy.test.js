import assert from "node:assert/strict";
import { test } from "node:test";

import { installFocusedKeyboardNavigation, isManualPhoneMode } from "../src/interaction-policy.js";

function keyboardHarness() {
  let listener;
  const element = { addEventListener(type, callback) { if (type === "keydown") listener = callback; }, removeEventListener() {} };
  const calls = [];
  const cleanup = installFocusedKeyboardNavigation(element, { next: () => calls.push("next"), prev: () => calls.push("prev") });
  return { calls, cleanup, fire(key, target = { closest: () => null }) { let prevented = false; listener({ key, target, defaultPrevented: false, altKey: false, ctrlKey: false, metaKey: false, preventDefault: () => { prevented = true; } }); return prevented; } };
}

test("focused arrow keys navigate exactly once", () => {
  const state = keyboardHarness();
  assert.equal(state.fire("ArrowRight"), true);
  assert.equal(state.fire("ArrowLeft"), true);
  assert.deepEqual(state.calls, ["next", "prev"]);
  state.fire("Enter");
  assert.deepEqual(state.calls, ["next", "prev"]);
});

test("interactive descendants keep their arrow keys", () => {
  const state = keyboardHarness();
  const target = { closest: selector => selector.includes("button") ? {} : null };
  assert.equal(state.fire("ArrowRight", target), false);
  assert.deepEqual(state.calls, []);
});

test("phone mode is manual only when the stage exceeds the viewport", () => {
  const tallStage = { getBoundingClientRect: () => ({ height: 980 }) };
  assert.equal(isManualPhoneMode(tallStage, { width: 390, height: 844 }), true);
  assert.equal(isManualPhoneMode(tallStage, { width: 1024, height: 768 }), false);
  assert.equal(isManualPhoneMode({ getBoundingClientRect: () => ({ height: 700 }) }, { width: 390, height: 844 }), false);
});