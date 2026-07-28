import assert from "node:assert/strict";
import { test } from "node:test";

import { renderSlide } from "../src/deck-renderer.js";

test("narrated slides expose the existing script as a readable transcript", () => {
  const html = renderSlide(
    {
      eyebrow: "Proof",
      title: "The narration remains recorded.",
      lead: "The source script remains available.",
      durationMs: 10000,
      bullets: [],
      artifact: { type: "workflow", label: "Flow", steps: [] },
      narration: { script: "This is the existing narration script." },
    },
    0,
    1,
  );

  assert.match(html, /<summary>Read transcript<\/summary>/);
  assert.match(html, /This is the existing narration script\./);
});
