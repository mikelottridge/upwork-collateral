const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const project = path.join(root, "medical-project");
const site = path.join(project, "site");
const context = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(path.join(site, "case-study-data-v4.js"), "utf8"), context);
const deck = context.window.CASE_STUDY;
const html = fs.readFileSync(path.join(site, "index.html"), "utf8");

function collectStrings(value, strings = []) {
  if (typeof value === "string") strings.push(value);
  else if (Array.isArray(value)) value.forEach((item) => collectStrings(item, strings));
  else if (value && typeof value === "object") Object.values(value).forEach((item) => collectStrings(item, strings));
  return strings;
}

test("published physician deck contains the approved six-slide story", () => {
  assert.equal(deck.slides.length, 6);
  assert.equal(deck.audioRate, 1.25);
  assert.match(deck.title, /physician-controlled lab-review workflow/i);
  assert.deepEqual(
    JSON.parse(JSON.stringify(deck.metrics[3])),
    { value: "Python · Flask", label: "DigitalOcean server setup" },
  );
  assert.match(html, /case-study-data-v4\.js/);
  assert.match(html, /AI-generated voice/i);
});

test("published copy has visible privacy framing and neutral contact language", () => {
  const copy = collectStrings(deck).join("\n");
  const closing = deck.slides[5].bullets.join("\n");
  assert.doesNotMatch(copy, /fictional|invented/i);
  assert.match(copy, /Using synthetic data for demo purposes/);
  assert.match(closing, /contact option shown/i);
  assert.doesNotMatch(closing, /Upwork|email|mailto/i);
});

test("all published screenshots and narration files are present", () => {
  for (const screenshot of [
    "demo-01-source-extraction.png",
    "demo-02-guideline-review.png",
    "demo-03-physician-rulebook.png",
    "demo-04-approval-audit.png",
  ]) {
    assert.ok(fs.existsSync(path.join(project, "screenshots", screenshot)), screenshot);
  }

  for (let index = 1; index <= 6; index += 1) {
    const stem = `slide-${String(index).padStart(2, "0")}`;
    for (const extension of ["mp3", "txt"]) {
      const filename = `${stem}.${extension}`;
      const filepath = path.join(project, "audio-v4", filename);
      assert.ok(fs.existsSync(filepath), filename);
      assert.ok(fs.statSync(filepath).size > (extension === "mp3" ? 10_000 : 50), filename);
    }
  }
});

test("narration leaves data provenance to the opening visual", () => {
  const narration = fs.readdirSync(path.join(project, "audio-v4"))
    .filter((filename) => filename.endsWith(".txt"))
    .sort()
    .map((filename) => fs.readFileSync(path.join(project, "audio-v4", filename), "utf8"))
    .join("\n");
  assert.doesNotMatch(narration, /synthetic|fictional|invented/i);
  assert.match(narration, /contact me using the option shown/i);
});
