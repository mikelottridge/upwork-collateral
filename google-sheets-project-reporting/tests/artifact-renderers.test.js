import assert from "node:assert/strict";
import { test } from "node:test";

import { renderArtifact } from "../src/artifact-renderers.js";

test("pipeline and workflow artifacts render ordered steps", () => {
  const html = renderArtifact({
    type: "pipeline",
    label: "Execution path",
    steps: [
      { icon: "1", title: "Select", copy: "Choose inputs." },
      { icon: "2", title: "Validate", copy: "Check fields." },
    ],
  });

  assert.match(html, /artifact-steps/);
  assert.match(html, /Execution path/);
  assert.match(html, /Select/);
  assert.match(html, /Validate/);
});

test("compare and table artifacts preserve semantic status content", () => {
  const compare = renderArtifact({
    type: "compare",
    label: "Workflow change",
    panels: [
      { tone: "bad", title: "Manual", stat: "Copy", lines: ["Drifts"] },
      { tone: "good", title: "Controlled", stat: "Preview", lines: ["Stable"] },
    ],
  });
  const table = renderArtifact({
    type: "table",
    label: "Daily actions",
    columns: ["Task", "Timing"],
    rows: [["TSK-1002", { type: "status", value: "Overdue" }]],
  });

  assert.match(compare, /compare-bad/);
  assert.match(compare, /compare-good/);
  assert.match(table, /role="table"/);
  assert.match(table, /status-value/);
  assert.match(table, /Overdue/);
});

test("media artifacts use migrated image, video, poster, and mobile paths", () => {
  const image = renderArtifact({
    type: "media",
    kind: "image",
    src: "../screenshots/proof.png?v=3",
    alt: "Proof image",
    caption: "Verified proof.",
  });
  const video = renderArtifact({
    type: "media",
    kind: "video",
    src: "../video/proof.webm?v=1",
    poster: "../screenshots/poster.png?v=1",
    mobileSrc: "../screenshots/mobile.svg?v=1",
    mobileAlt: "Mobile proof",
    alt: "Workflow proof",
  });

  assert.match(image, /src="\.\.\/screenshots\/proof\.png\?v=3"/);
  assert.match(video, /src="\.\.\/video\/proof\.webm\?v=1"/);
  assert.match(video, /poster="\.\.\/screenshots\/poster\.png\?v=1"/);
  assert.match(video, /mobile-proof/);
});

test("renderer escapes presentation copy before inserting HTML", () => {
  const html = renderArtifact({
    type: "workflow",
    label: "<script>alert(1)</script>",
    steps: [{ title: "<b>Map</b>", copy: "A & B" }],
  });

  assert.doesNotMatch(html, /<script>/);
  assert.doesNotMatch(html, /<b>Map<\/b>/);
  assert.match(html, /&lt;script&gt;/);
  assert.match(html, /A &amp; B/);
});
