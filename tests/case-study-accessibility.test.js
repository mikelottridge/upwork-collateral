const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const css = fs.readFileSync(path.join(root, "shared", "case-study.css"), "utf8");
const renderer = fs.readFileSync(path.join(root, "shared", "case-study.js"), "utf8");

test("final CTA keeps explicit readable text color inside dark slides", () => {
  const ctaRule = css.match(/\.presentation-cta\s*\{([^}]+)\}/);
  assert.ok(ctaRule, "presentation CTA rule must exist");
  assert.match(ctaRule[1], /color:\s*var\(--ink\)/);
});

test("spacebar preserves native activation for focused links and buttons", () => {
  assert.match(renderer, /INPUT\|TEXTAREA\|SELECT\|BUTTON\|A/);
});
