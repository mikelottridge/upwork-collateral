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

test("published physician deck contains the approved six-slide story", () => {
  assert.equal(deck.slides.length, 6);
  assert.equal(deck.audioRate, 1);
  assert.match(deck.slides[0].title, /abnormal results belong together/i);
  assert.equal(deck.slides[1].artifact.rows.length, 6);
  assert.equal(deck.slides[1].artifact.rows.filter(row => row[1].includes("Low")).length, 3);
  assert.match(html, /case-study-data-v4\.js/);
  assert.match(html, /AI-generated voice/i);
  assert.match(html, /DigitalOcean/);
});

test("demo provenance, illustrative report and safe first contact are visible", () => {
  assert.match(deck.footerNote, /synthetic lab data/);
  assert.equal(deck.slides[4].artifact.choices.length, 2);
  const report = deck.slides[5].links[0];
  assert.ok(fs.existsSync(path.resolve(site, report.href)));
  assert.match(deck.contact.description, /fictional example/i);
  assert.doesNotMatch(deck.contact.description, /Upwork|email|mailto/i);
});

test("all active visuals, transcripts and narration clips are present", () => {
  for (const slide of deck.slides) {
    if (slide.artifact.src) assert.ok(fs.existsSync(path.resolve(site, slide.artifact.src)));
    const mp3 = path.resolve(site, slide.audio.split("?")[0]);
    assert.ok(fs.statSync(mp3).size > 10_000);
    assert.equal(fs.readFileSync(mp3.replace(/\.mp3$/, ".txt"), "utf8").trim(), slide.transcript);
  }
});
