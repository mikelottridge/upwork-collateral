import assert from "node:assert/strict";
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

test("frozen source deck preserves the approved nine-stage calculation story", async () => {
  const deck = await loadFrozenDeck();

  assert.equal(deck.slides.length, 9);
  assert.equal(
    deck.slides[0].title,
    "The arithmetic is usually easy. Trusting the inputs and definitions is harder.",
  );
  assert.equal(
    deck.slides[1].title,
    "One native Google Sheet makes the whole calculation chain inspectable.",
  );
  assert.equal(
    deck.slides[8].title,
    "The contract transfers; the financial example does not have to.",
  );
  assert.deepEqual(
    Array.from(deck.slides, (slide) => slide.artifact.type),
    ["compare", "table", "table", "table", "table", "table", "compare", "compare", "steps"],
  );
  assert.equal(
    deck.slides.filter((slide) => /audio\/calculation-example\/slide-\d{2}\.mp3/.test(slide.audio)).length,
    9,
  );
  assert.equal(
    deck.slides.filter((slide) => slide.narration?.script?.length > 0).length,
    9,
  );
  assert.match(deck.footerNote, /AI-generated Cedar narration/);
  assert.match(deck.about, /native Google Sheet/);
  assert.match(deck.about, /not client work/);
  assert.equal(deck.startMode, "idle");
});

test("buyer-facing source references the native Google Sheet and never the XLSX import source", async () => {
  const [html, source] = await Promise.all([
    readFile(new URL("../index.html", import.meta.url), "utf8"),
    readFile(sourceDataUrl, "utf8"),
  ]);

  assert.match(html, /17iLgTFtRTJGNlXX2I28mwz8THpAsdQl23Jeo4F2nE04/);
  assert.doesNotMatch(`${html}\n${source}`, /\.xlsx/i);
});

test("base and Upwork modes change contact information only", async () => {
  const source = await readFile(new URL("../src/presentation-context.js", import.meta.url), "utf8");
  const context = { URLSearchParams };
  context.globalThis = context;
  vm.runInNewContext(source, context, { filename: "presentation-context.js" });

  const base = context.PresentationContext.getContact("");
  const upwork = context.PresentationContext.getContact("?upwork=1&utm_source=portfolio");

  assert.equal(base.mode, "general");
  assert.equal(upwork.mode, "upwork");
  assert.match(base.href, /^mailto:/);
  assert.match(upwork.href, /^https:\/\/www\.upwork\.com\//);
  assert.equal(
    context.PresentationContext.parseContext("?utm_source=upwork").contactMode,
    "general",
  );
});
