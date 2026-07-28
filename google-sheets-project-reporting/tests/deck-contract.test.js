import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import vm from "node:vm";

const sourceDataUrl = new URL("../src/case-study-data.js", import.meta.url);

async function loadFrozenDeck() {
  const source = await readFile(sourceDataUrl, "utf8");
  const context = { window: {} };
  vm.runInNewContext(source, context, { filename: sourceDataUrl.pathname });
  return context.window.CASE_STUDY;
}

test("frozen source deck preserves the eight-stage service story and narration contract", async () => {
  const deck = await loadFrozenDeck();

  assert.equal(deck.slides.length, 8);
  assert.equal(
    deck.slides[0].title,
    "When the spreadsheet works—but the workflow around it does not",
  );
  assert.equal(
    deck.slides[1].eyebrow,
    "Self-built sample proof",
  );
  assert.equal(
    deck.slides[7].title,
    "Show me the Sheet process you still run by hand",
  );
  assert.deepEqual(
    Array.from(deck.slides, (slide) => slide.artifact.type),
    ["compare", "media", "media", "pipeline", "media", "media", "workflow", "workflow"],
  );
  assert.equal(
    deck.slides.filter((slide) => /\.mp3\?v=/.test(slide.audio)).length,
    8,
  );
  assert.equal(
    deck.slides.filter((slide) => /service-reframe/.test(slide.audio)).length,
    7,
  );
  assert.match(deck.footerNote, /AI-generated Cedar narration/);
  assert.equal(deck.startMode, "idle");
});
test("staged narration text matches the canonical spec and reused CTA bytes", async () => {
  const spec = JSON.parse(
    await readFile(new URL("../specs/slides.yaml", import.meta.url), "utf8"),
  );

  assert.equal(spec.slides.length, 8);

  for (const [index, slide] of spec.slides.entries()) {
    const id = String(index + 1).padStart(2, "0");
    const staged = (
      await readFile(
        new URL(`../audio/service-reframe/slide-${id}.txt`, import.meta.url),
        "utf8",
      )
    ).trim();

    assert.equal(staged, slide.narration.script);
  }

  const reusedCta = await readFile(
    new URL("../audio/slide-09.mp3", import.meta.url),
  );
  const reusedHash = createHash("sha256").update(reusedCta).digest("hex");

  assert.equal(spec.slides[7].narration.audio, "audio/slide-09.mp3");
  assert.equal(reusedHash, spec.slides[7].narration.output_sha256);
});