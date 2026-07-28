import assert from "node:assert/strict";
import { test } from "node:test";

import { assetUrl } from "../src/asset-url.js";

test("production presentation assets remain parent-relative from site/index.html", () => {
  assert.equal(assetUrl("../audio/slide-01.mp3?v=cedar-20260725"), "../audio/slide-01.mp3?v=cedar-20260725");
  assert.equal(assetUrl("../screenshots/task-tracker-focused-v2.png?v=3"), "../screenshots/task-tracker-focused-v2.png?v=3");
  assert.equal(assetUrl("../video/workflow-report-proof.webm?v=1"), "../video/workflow-report-proof.webm?v=1");
  assert.equal(assetUrl("https://example.com/proof.png"), "https://example.com/proof.png");
  assert.equal(assetUrl("/absolute/proof.png"), "/absolute/proof.png");
  assert.equal(assetUrl(""), "");
  assert.equal(assetUrl(null), "");
});