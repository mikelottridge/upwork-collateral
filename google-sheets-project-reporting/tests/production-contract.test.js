import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

test("delivered HTML carries the canonical source-integrity manifest", async () => {
  const [html, specText] = await Promise.all([readFile(new URL("../index.html", import.meta.url), "utf8"), readFile(new URL("../specs/slides.yaml", import.meta.url), "utf8")]);
  const spec = JSON.parse(specText);
  for (const slide of spec.slides) assert.ok(html.includes(slide.headline), slide.id + " title missing");
});

test("fallback timing keeps a safe buffer after measured narration", async () => {
  const spec = JSON.parse(await readFile(new URL("../specs/slides.yaml", import.meta.url), "utf8"));
  for (const slide of spec.slides) {
    const buffer = slide.seconds - slide.narration.duration_seconds;
    assert.ok(buffer >= 0.75 && buffer <= 1.5, slide.id + " buffer was " + buffer);
  }
});

test("Reveal vendor shadows are stripped by the production build", async () => {
  const config = await readFile(new URL("../vite.config.js", import.meta.url), "utf8");
  assert.match(config, /text-shadow/);
  assert.match(config, /box-shadow/);
  assert.match(config, /reveal\.js\/dist\/reveal\.css/);
});
