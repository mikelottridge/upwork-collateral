import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import vm from "node:vm";

const sourceDataUrl = new URL(
  "../src/case-study-data.js",
  import.meta.url,
);

async function loadFrozenDeck() {
  const source = await readFile(sourceDataUrl, "utf8");
  const context = { window: {} };
  vm.runInNewContext(source, context, { filename: sourceDataUrl.pathname });
  return context.window.CASE_STUDY;
}

test("frozen source deck preserves the nine-slide story and narration contract", async () => {
  const deck = await loadFrozenDeck();

  assert.equal(deck.slides.length, 9);
  assert.equal(
    deck.slides[0].title,
    "One governed workflow produces priorities, workload views, and stakeholder drafts.",
  );
  assert.equal(
    deck.slides[8].title,
    "Bring the Google Sheet your team still turns into reports by hand.",
  );
  assert.deepEqual(
    Array.from(deck.slides, (slide) => slide.artifact.type),
    [
      "pipeline",
      "compare",
      "media",
      "pipeline",
      "table",
      "media",
      "media",
      "media",
      "workflow",
    ],
  );
  assert.equal(
    deck.slides.filter((slide) => /\.mp3\?v=/.test(slide.audio)).length,
    9,
  );
  assert.equal(deck.startMode, "idle");
});
