import assert from "node:assert/strict";
import { test } from "node:test";

import { renderSlide } from "../src/deck-renderer.js";

const slide = {
  eyebrow: "Controlled source",
  title: "The source remains unchanged.",
  lead: "Reveal.js receives a derived view.",
  durationMs: 12000,
  bullets: ["Copy is preserved.", "Assets are copied.", "Runtime is replaced."],
  artifact: {
    type: "workflow",
    label: "Migration path",
    steps: [{ title: "Map", copy: "Freeze source." }],
  },
};

test("slide renderer produces Reveal markup with source timing and three points", () => {
  const html = renderSlide(slide, 2, 9);

  assert.match(html, /^<section/);
  assert.match(html, /data-source-duration="12000"/);
  assert.match(html, /Controlled source/);
  assert.match(html, /The source remains unchanged\./);
  assert.equal((html.match(/class="point"/g) || []).length, 3);
  assert.doesNotMatch(html, /data-final-cta/);
});

test("final slide exposes a CTA mount without inventing CTA copy", () => {
  const html = renderSlide(slide, 8, 9);

  assert.match(html, /data-final-cta/);
});
