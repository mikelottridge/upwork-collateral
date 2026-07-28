import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

test("delivered HTML carries the canonical source-integrity manifest", async () => {
  const [html, specText] = await Promise.all([
    readFile(new URL("../index.html", import.meta.url), "utf8"),
    readFile(new URL("../specs/slides.yaml", import.meta.url), "utf8"),
  ]);
  const spec = JSON.parse(specText);
  for (const slide of spec.slides) {
    assert.ok(html.includes(slide.headline), `${slide.id} title missing`);
  }
});

test("every narration clip is certified before fallback timing is accepted", async () => {
  const spec = JSON.parse(
    await readFile(new URL("../specs/slides.yaml", import.meta.url), "utf8"),
  );

  for (const slide of spec.slides) {
    assert.equal(
      slide.narration.status,
      "ready",
      `${slide.id} narration is not certified`,
    );
    assert.equal(
      typeof slide.narration.duration_seconds,
      "number",
      `${slide.id} measured duration is missing`,
    );
    assert.match(
      slide.narration.output_sha256,
      /^[a-f0-9]{64}$/,
      `${slide.id} audio hash is missing`,
    );
    const buffer = slide.seconds - slide.narration.duration_seconds;
    assert.ok(
      buffer >= 0.75 && buffer <= 1.5,
      `${slide.id} buffer was ${buffer}`,
    );
  }
});

test("Reveal vendor shadows are stripped by the production build", async () => {
  const config = await readFile(new URL("../vite.config.js", import.meta.url), "utf8");
  assert.match(config, /text-shadow/);
  assert.match(config, /box-shadow/);
  assert.match(config, /reveal\.js\/dist\/reveal\.css/);
});

test("runtime honors reduced motion and permits explicit local analytics QA", async () => {
  const source = await readFile(new URL("../src/main.js", import.meta.url), "utf8");
  assert.match(source, /prefers-reduced-motion: reduce/);
  assert.match(source, /params\.get\("analytics"\) === "1"/);
});

test("skip link remains fully off-screen until focused", async () => {
  const css = await readFile(new URL("../src/styles.css", import.meta.url), "utf8");
  assert.match(css, /\.skip-link[\s\S]*translateY\(-220%\)/);
});

test("tablet breakpoint prevents the desktop grid from clipping at 768px", async () => {
  const css = await readFile(new URL("../src/styles.css", import.meta.url), "utf8");
  assert.match(css, /@media \(max-width: 820px\)/);
});
