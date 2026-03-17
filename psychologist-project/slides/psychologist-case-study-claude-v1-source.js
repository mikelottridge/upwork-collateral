"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// psychologist-case-study-claude-v1-source.js
// Generates: psychologist-case-study-claude-v1.pptx
//
// Run: node psychologist-case-study-claude-v1-source.js
// Requires: npm install -g pptxgenjs
// ─────────────────────────────────────────────────────────────────────────────

const pptxgen = require("pptxgenjs");

// ─── PALETTE ─────────────────────────────────────────────────────────────────
// Deep Navy + Warm Teal + Amber — clinical precision meets approachable design
const C = {
  navy:    "1B2A4A",   // primary dark (title/closing slides)
  navyMid: "243660",   // mid-tone navy for decorative shapes
  navyDeep:"0D1C33",   // deeper navy for stat cards / footer
  teal:    "4A9B8E",   // accent teal (icons, step circles, highlights)
  amber:   "C9973A",   // warm amber (big stat numbers, quote mark)
  bg:      "F5F4F1",   // warm off-white for content slides
  card:    "FFFFFF",   // white card surfaces
  ink:     "2D3142",   // primary body text
  muted:   "6B7280",   // secondary / caption text
  line:    "DDD9D1",   // subtle dividers
  white:   "FFFFFF",
  iceBlue: "AABBD4",   // light text on dark backgrounds
  skyBlue: "7A9EC0",   // subtler light on dark
};

const FONT_H = "Trebuchet MS";   // headings — personality without gimmick
const FONT_B = "Calibri";        // body — clean and readable

// Slide canvas: LAYOUT_16x9 = 10" × 5.625"

// Factory — always return a fresh shadow object (PptxGenJS mutates in place)
const mkShadow = () => ({
  type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.10,
});

// ─────────────────────────────────────────────────────────────────────────────
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Mike";
pres.title = "From Assessment Data to Patient-Ready Reports";

// =============================================================================
// SLIDE 1 — COVER
// Dark navy background; large title; credential bar at bottom
// =============================================================================
{
  const s = pres.addSlide();
  s.background = { color: C.navy };

  // Decorative ovals — top-right bleed gives depth without imagery
  s.addShape(pres.shapes.OVAL, {
    x: 7.6, y: -1.4, w: 4.2, h: 4.2,
    fill: { color: C.navyMid }, line: { color: C.navyMid },
  });
  s.addShape(pres.shapes.OVAL, {
    x: 8.5, y: -0.5, w: 2.4, h: 2.4,
    fill: { color: "253F6E" }, line: { color: "253F6E" },
  });
  // Small accent oval bottom-left
  s.addShape(pres.shapes.OVAL, {
    x: -0.6, y: 4.2, w: 2.0, h: 2.0,
    fill: { color: C.navyMid }, line: { color: C.navyMid },
  });

  // Eyebrow
  s.addText("CLIENT PROJECT  ·  CLINICAL REPORTING SYSTEM", {
    x: 0.7, y: 1.05, w: 7.5, h: 0.3,
    fontSize: 9, fontFace: FONT_B, color: C.teal,
    bold: true, charSpacing: 3, margin: 0,
  });

  // Main title
  s.addText("From Assessment Data\nto Patient-Ready Reports", {
    x: 0.7, y: 1.45, w: 8.0, h: 2.0,
    fontSize: 40, fontFace: FONT_H, color: C.white,
    bold: true, lineSpacingMultiple: 1.18, margin: 0,
  });

  // Subtitle / lead
  s.addText(
    "A long-running Python / Flask system for longitudinal analysis, " +
    "automated chart generation, and multilingual patient reporting.",
    {
      x: 0.7, y: 3.55, w: 6.8, h: 0.8,
      fontSize: 14, fontFace: FONT_B, color: C.iceBlue, margin: 0,
    }
  );

  // Bottom credential bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.04, w: 10, h: 0.585,
    fill: { color: C.navyDeep }, line: { color: C.navyDeep },
  });
  const creds = [
    "Expert-Vetted",
    "100% Job Success",
    "1,900+ Hours",
    "MSEE · Georgia Tech",
  ];
  creds.forEach((text, i) => {
    const cx = 0.55 + i * 2.35;
    s.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: 5.14, w: 0.06, h: 0.26,
      fill: { color: C.teal }, line: { color: C.teal },
    });
    s.addText(text, {
      x: cx + 0.13, y: 5.11, w: 2.1, h: 0.36,
      fontSize: 10, fontFace: FONT_B, color: C.iceBlue,
      margin: 0, valign: "middle",
    });
  });
}

// =============================================================================
// SLIDE 2 — THE CHALLENGE
// Left: problem narrative + bullet points; Right: synthetic data table card
// =============================================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg };

  // ── LEFT COLUMN ──────────────────────────────────────────────────────────
  s.addText("THE PROBLEM", {
    x: 0.5, y: 0.42, w: 4.3, h: 0.28,
    fontSize: 9, fontFace: FONT_B, color: C.teal,
    bold: true, charSpacing: 3, margin: 0,
  });

  s.addText("Raw data stops short\nof what clients need.", {
    x: 0.5, y: 0.8, w: 4.3, h: 1.25,
    fontSize: 30, fontFace: FONT_H, color: C.ink,
    bold: true, lineSpacingMultiple: 1.2, margin: 0,
  });

  s.addText(
    "Repeated assessments generate large volumes of tabular data. Without a " +
    "system to carry that data forward, analysis stays trapped in back-office " +
    "exports — never reaching the practitioners and patients who need it.",
    {
      x: 0.5, y: 2.18, w: 4.2, h: 1.05,
      fontSize: 13, fontFace: FONT_B, color: C.muted, margin: 0,
    }
  );

  // Teal-dot callout points
  const points = [
    "Longitudinal trends are invisible when measurements stay in raw tables.",
    "Charts and reports must be part of the workflow — not an afterthought.",
  ];
  points.forEach((txt, i) => {
    const py = 3.38 + i * 0.62;
    s.addShape(pres.shapes.OVAL, {
      x: 0.5, y: py + 0.11, w: 0.17, h: 0.17,
      fill: { color: C.teal }, line: { color: C.teal },
    });
    s.addText(txt, {
      x: 0.76, y: py, w: 3.95, h: 0.52,
      fontSize: 12.5, fontFace: FONT_B, color: C.ink, margin: 0,
    });
  });

  // ── RIGHT COLUMN: table card ─────────────────────────────────────────────
  const CARD_X = 5.1, CARD_Y = 0.38, CARD_W = 4.55, CARD_H = 4.85;

  s.addShape(pres.shapes.RECTANGLE, {
    x: CARD_X, y: CARD_Y, w: CARD_W, h: CARD_H,
    fill: { color: C.card }, line: { color: C.line },
    shadow: mkShadow(),
  });

  // Table header bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: CARD_X, y: CARD_Y, w: CARD_W, h: 0.44,
    fill: { color: C.navy }, line: { color: C.navy },
  });
  s.addText("Assessment dataset snapshot (synthetic)", {
    x: CARD_X + 0.14, y: CARD_Y + 0.02, w: CARD_W - 0.2, h: 0.4,
    fontSize: 10, fontFace: FONT_B, color: C.white,
    bold: true, valign: "middle", margin: 0,
  });

  // Column headers
  const COL_X = [CARD_X + 0.15, CARD_X + 1.6, CARD_X + 2.9];
  const COL_W = [1.35, 1.2, 1.45];
  const COL_LABELS = ["Client batch", "Period", "Status"];
  COL_LABELS.forEach((lbl, ci) => {
    s.addText(lbl, {
      x: COL_X[ci], y: CARD_Y + 0.5, w: COL_W[ci], h: 0.28,
      fontSize: 9, fontFace: FONT_B, color: C.muted, bold: true, margin: 0,
    });
  });

  // Header divider
  s.addShape(pres.shapes.RECTANGLE, {
    x: CARD_X + 0.1, y: CARD_Y + 0.82, w: CARD_W - 0.2, h: 0.012,
    fill: { color: C.line }, line: { color: C.line },
  });

  // Data rows
  const STATUS_COLORS = {
    captured:   C.teal,
    compared:   "46527d",
    queued:     C.muted,
    translated: C.amber,
  };
  const rows = [
    ["Batch A", "T1", "captured"],
    ["Batch A", "T2", "compared"],
    ["Batch B", "T1", "queued"],
    ["Batch B", "T3", "translated"],
  ];
  rows.forEach(([batch, period, status], ri) => {
    const ry = CARD_Y + 0.9 + ri * 0.56;
    const rowBg = ri % 2 === 1 ? "F2F1EE" : C.card;
    // Row background stripe
    s.addShape(pres.shapes.RECTANGLE, {
      x: CARD_X, y: ry - 0.04, w: CARD_W, h: 0.54,
      fill: { color: rowBg }, line: { color: rowBg },
    });
    s.addText(batch, {
      x: COL_X[0], y: ry, w: COL_W[0], h: 0.38,
      fontSize: 11.5, fontFace: FONT_B, color: C.ink, margin: 0,
    });
    s.addText(period, {
      x: COL_X[1], y: ry, w: COL_W[1], h: 0.38,
      fontSize: 11.5, fontFace: FONT_B, color: C.ink, margin: 0,
    });
    // Status pill
    const sc = STATUS_COLORS[status] || C.muted;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: COL_X[2] - 0.04, y: ry + 0.05, w: 1.1, h: 0.27,
      fill: { color: sc, transparency: 80 }, line: { color: sc, width: 0.5 },
      rectRadius: 0.08,
    });
    s.addText(status, {
      x: COL_X[2] - 0.04, y: ry + 0.05, w: 1.1, h: 0.27,
      fontSize: 9, fontFace: FONT_B, color: sc,
      bold: true, align: "center", valign: "middle", margin: 0,
    });
    // Row divider (except last)
    if (ri < rows.length - 1) {
      s.addShape(pres.shapes.RECTANGLE, {
        x: CARD_X + 0.1, y: ry + 0.5, w: CARD_W - 0.2, h: 0.01,
        fill: { color: C.line }, line: { color: C.line },
      });
    }
  });

  // Footer note inside card
  s.addShape(pres.shapes.RECTANGLE, {
    x: CARD_X, y: CARD_Y + CARD_H - 0.48, w: CARD_W, h: 0.48,
    fill: { color: "EEF6F5" }, line: { color: "EEF6F5" },
  });
  s.addText("→  The system carries this data all the way to patient-ready reports", {
    x: CARD_X + 0.14, y: CARD_Y + CARD_H - 0.44, w: CARD_W - 0.2, h: 0.4,
    fontSize: 10, fontFace: FONT_B, color: C.teal, bold: true,
    valign: "middle", margin: 0,
  });
}

// =============================================================================
// SLIDE 3 — THE WORKFLOW
// 4 numbered step cards in a row with arrows between them
// =============================================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg };

  s.addText("THE WORKFLOW", {
    x: 0.5, y: 0.36, w: 9, h: 0.28,
    fontSize: 9, fontFace: FONT_B, color: C.teal,
    bold: true, charSpacing: 3, align: "center", margin: 0,
  });

  s.addText("One path from intake to report delivery.", {
    x: 0.5, y: 0.72, w: 9, h: 0.65,
    fontSize: 30, fontFace: FONT_H, color: C.ink,
    bold: true, align: "center", margin: 0,
  });

  s.addText(
    "Every step — intake, analysis, charting, and final report assembly — " +
    "runs inside one consistent Python / Flask application.",
    {
      x: 1.2, y: 1.48, w: 7.6, h: 0.45,
      fontSize: 13, fontFace: FONT_B, color: C.muted,
      align: "center", margin: 0,
    }
  );

  // Step cards
  // 4 cards × 2.06" wide + 3 arrows × 0.28" + 2 margins × 0.49" = 10"
  const CARD_W = 2.06;
  const ARROW_W = 0.28;
  const MARGIN_X = 0.49;
  const STEP_Y = 2.1;
  const STEP_H = 3.1;

  const steps = [
    { num: "1", title: "Intake",   body: "Load assessment datasets and repeated measures into the system." },
    { num: "2", title: "Analyze",  body: "Compute longitudinal trends and comparative statistical views." },
    { num: "3", title: "Chart",    body: "Render visual outputs ready for clinician interpretation." },
    { num: "4", title: "Report",   body: "Assemble patient-facing summaries in the patient's language." },
  ];

  steps.forEach((step, i) => {
    const sx = MARGIN_X + i * (CARD_W + ARROW_W);

    // Card background
    s.addShape(pres.shapes.RECTANGLE, {
      x: sx, y: STEP_Y, w: CARD_W, h: STEP_H,
      fill: { color: C.card }, line: { color: C.line },
      shadow: mkShadow(),
    });

    // Top accent strip
    s.addShape(pres.shapes.RECTANGLE, {
      x: sx, y: STEP_Y, w: CARD_W, h: 0.07,
      fill: { color: C.teal }, line: { color: C.teal },
    });

    // Number circle
    const CX = sx + CARD_W / 2 - 0.38;
    s.addShape(pres.shapes.OVAL, {
      x: CX, y: STEP_Y + 0.22, w: 0.76, h: 0.76,
      fill: { color: C.navy }, line: { color: C.navy },
    });
    s.addText(step.num, {
      x: CX, y: STEP_Y + 0.22, w: 0.76, h: 0.76,
      fontSize: 22, fontFace: FONT_H, color: C.white,
      bold: true, align: "center", valign: "middle", margin: 0,
    });

    // Step title
    s.addText(step.title, {
      x: sx + 0.08, y: STEP_Y + 1.14, w: CARD_W - 0.16, h: 0.44,
      fontSize: 17, fontFace: FONT_H, color: C.ink,
      bold: true, align: "center", margin: 0,
    });

    // Step body
    s.addText(step.body, {
      x: sx + 0.12, y: STEP_Y + 1.65, w: CARD_W - 0.24, h: 1.3,
      fontSize: 11.5, fontFace: FONT_B, color: C.muted,
      align: "center", margin: 0,
    });

    // Arrow between steps
    if (i < steps.length - 1) {
      s.addText("→", {
        x: sx + CARD_W, y: STEP_Y + 1.1, w: ARROW_W, h: 0.5,
        fontSize: 20, fontFace: FONT_B, color: C.teal,
        align: "center", margin: 0,
      });
    }
  });
}

// =============================================================================
// SLIDE 4 — LONGITUDINAL ANALYSIS
// Left: title + narrative + amber stat callout; Right: synthetic line chart
// =============================================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg };

  // ── LEFT COLUMN ──────────────────────────────────────────────────────────
  s.addText("ANALYSIS", {
    x: 0.5, y: 0.42, w: 4.1, h: 0.28,
    fontSize: 9, fontFace: FONT_B, color: C.teal,
    bold: true, charSpacing: 3, margin: 0,
  });

  s.addText("Longitudinal trends\nbecome visible.", {
    x: 0.5, y: 0.8, w: 4.1, h: 1.3,
    fontSize: 30, fontFace: FONT_H, color: C.ink,
    bold: true, lineSpacingMultiple: 1.2, margin: 0,
  });

  s.addText(
    "Repeated measurements are analyzed together — not in isolation. " +
    "The system tracks trajectory across sessions and surfaces the trend " +
    "in a chart suitable for clinical interpretation.",
    {
      x: 0.5, y: 2.25, w: 4.1, h: 1.05,
      fontSize: 13, fontFace: FONT_B, color: C.muted, margin: 0,
    }
  );

  // Stat callout card (dark navy)
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.5, w: 3.85, h: 1.5,
    fill: { color: C.navy }, line: { color: C.navy },
    shadow: mkShadow(),
  });
  s.addText("157%", {
    x: 0.62, y: 3.56, w: 1.5, h: 0.72,
    fontSize: 40, fontFace: FONT_H, color: C.amber, bold: true, margin: 0,
  });
  s.addText("synthetic score change\nacross T1 → T6\n(illustrative only)", {
    x: 0.62, y: 4.22, w: 3.55, h: 0.68,
    fontSize: 10.5, fontFace: FONT_B, color: C.iceBlue, margin: 0,
  });

  // ── RIGHT COLUMN: line chart ──────────────────────────────────────────────
  s.addChart(pres.charts.LINE, [
    {
      name: "Composite Score",
      labels: ["T1", "T2", "T3", "T4", "T5", "T6"],
      values: [42, 55, 68, 74, 93, 108],
    },
  ], {
    x: 4.85, y: 0.38, w: 4.85, h: 4.42,
    lineSize: 3,
    lineSmooth: true,
    chartColors: ["4A9B8E"],
    chartArea: { fill: { color: "FFFFFF" }, roundedCorners: false },
    catAxisLabelColor: "6B7280",
    valAxisLabelColor: "6B7280",
    catAxisLabelFontSize: 11,
    valAxisLabelFontSize: 11,
    valGridLine: { color: "E5E7EB", size: 0.75 },
    catGridLine: { style: "none" },
    showValue: true,
    dataLabelColor: "1B2A4A",
    dataLabelFontSize: 10,
    dataLabelFontBold: true,
    showLegend: false,
    showTitle: false,
  });

  s.addText("Illustrative trend only  ·  Synthetic data  ·  No PHI", {
    x: 4.85, y: 4.84, w: 4.85, h: 0.28,
    fontSize: 8.5, fontFace: FONT_B, color: C.muted,
    align: "center", italic: true, margin: 0,
  });
}

// =============================================================================
// SLIDE 5 — MULTILINGUAL OUTPUT
// Two side-by-side document panels: English + Localized
// =============================================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg };

  s.addText("MULTILINGUAL OUTPUT", {
    x: 0.5, y: 0.36, w: 9, h: 0.28,
    fontSize: 9, fontFace: FONT_B, color: C.teal,
    bold: true, charSpacing: 3, align: "center", margin: 0,
  });

  s.addText("Reports that work in the patient's language.", {
    x: 0.5, y: 0.72, w: 9, h: 0.62,
    fontSize: 28, fontFace: FONT_H, color: C.ink,
    bold: true, align: "center", margin: 0,
  });

  s.addText(
    "The output structure stays clear and usable after translation — " +
    "pushing the workflow beyond analytics into communication design.",
    {
      x: 1.0, y: 1.42, w: 8, h: 0.42,
      fontSize: 12.5, fontFace: FONT_B, color: C.muted,
      align: "center", margin: 0,
    }
  );

  // Two document panels
  const PW = 4.35, PH = 3.7, PY = 1.95;
  const panels = [
    {
      x: 0.4,
      headerColor: C.navy,
      label: "English",
      title: "Patient-facing summary",
      accent: C.navy,
      sections: [
        { hdr: "Plain-language summary",  body: "The report remains readable for the end client, not just the practitioner." },
        { hdr: "Trend explanation",        body: "Interpretation stays attached to the chart within the report structure." },
        { hdr: "Consistent formatting",   body: "Layout supports clear delivery instead of raw technical output." },
      ],
    },
    {
      x: 5.25,
      headerColor: C.teal,
      label: "Localized",
      title: "Translated summary",
      accent: C.teal,
      sections: [
        { hdr: "Readable after translation",  body: "The same structure survives localization without becoming awkward." },
        { hdr: "Patient-friendly framing",    body: "Output stays suitable for actual client communication." },
        { hdr: "Parallel layout",             body: "The translated version still fits the expected reporting template." },
      ],
    },
  ];

  panels.forEach((panel) => {
    // Card
    s.addShape(pres.shapes.RECTANGLE, {
      x: panel.x, y: PY, w: PW, h: PH,
      fill: { color: C.card }, line: { color: C.line },
      shadow: mkShadow(),
    });
    // Header bar
    s.addShape(pres.shapes.RECTANGLE, {
      x: panel.x, y: PY, w: PW, h: 0.5,
      fill: { color: panel.headerColor }, line: { color: panel.headerColor },
    });
    s.addText(panel.label, {
      x: panel.x + 0.14, y: PY + 0.04, w: 1.0, h: 0.42,
      fontSize: 11, fontFace: FONT_B, color: C.white,
      bold: true, valign: "middle", margin: 0,
    });
    s.addText(panel.title, {
      x: panel.x + 1.2, y: PY + 0.04, w: PW - 1.3, h: 0.42,
      fontSize: 10, fontFace: FONT_B, color: "CADCFC",
      valign: "middle", margin: 0,
    });

    // Section rows
    panel.sections.forEach((sec, si) => {
      const sy = PY + 0.62 + si * 1.0;
      // Left accent bar
      s.addShape(pres.shapes.RECTANGLE, {
        x: panel.x + 0.15, y: sy, w: 0.05, h: 0.76,
        fill: { color: panel.accent }, line: { color: panel.accent },
      });
      s.addText(sec.hdr, {
        x: panel.x + 0.28, y: sy, w: PW - 0.38, h: 0.3,
        fontSize: 11.5, fontFace: FONT_H, color: C.ink, bold: true, margin: 0,
      });
      s.addText(sec.body, {
        x: panel.x + 0.28, y: sy + 0.32, w: PW - 0.38, h: 0.44,
        fontSize: 10.5, fontFace: FONT_B, color: C.muted, margin: 0,
      });
      // Divider (except last section)
      if (si < panel.sections.length - 1) {
        s.addShape(pres.shapes.RECTANGLE, {
          x: panel.x + 0.15, y: sy + 0.9, w: PW - 0.25, h: 0.012,
          fill: { color: C.line }, line: { color: C.line },
        });
      }
    });
  });

  // Arrow between panels
  s.addText("→", {
    x: 4.71, y: PY + PH / 2 - 0.3, w: 0.54, h: 0.55,
    fontSize: 28, fontFace: FONT_H, color: C.teal,
    align: "center", margin: 0,
  });
}

// =============================================================================
// SLIDE 6 — CREDENTIALS & SOCIAL PROOF
// Dark navy; 4 stat cards; large verified client quote
// =============================================================================
{
  const s = pres.addSlide();
  s.background = { color: C.navy };

  // Decorative oval bottom-left
  s.addShape(pres.shapes.OVAL, {
    x: -1.4, y: 3.6, w: 4.0, h: 4.0,
    fill: { color: C.navyMid }, line: { color: C.navyMid },
  });

  s.addText("BY THE NUMBERS", {
    x: 0.6, y: 0.36, w: 8.8, h: 0.28,
    fontSize: 9, fontFace: FONT_B, color: C.teal,
    bold: true, charSpacing: 3, align: "center", margin: 0,
  });

  s.addText("A record built across long-running client relationships.", {
    x: 0.6, y: 0.72, w: 8.8, h: 0.56,
    fontSize: 24, fontFace: FONT_H, color: C.white,
    bold: true, align: "center", margin: 0,
  });

  // 4 stat cards
  const stats = [
    { val: "470 hrs",  sub: "On this engagement" },
    { val: "1,900+",   sub: "Total Upwork hours" },
    { val: "100%",     sub: "Job Success Score" },
    { val: "5.0 / 5",  sub: "Client rating" },
  ];
  const STAT_W = 2.0, STAT_GAP = 0.22;
  const STAT_TOTAL = stats.length * STAT_W + (stats.length - 1) * STAT_GAP;
  const STAT_MARGIN = (10 - STAT_TOTAL) / 2;

  stats.forEach((st, i) => {
    const sx = STAT_MARGIN + i * (STAT_W + STAT_GAP);
    s.addShape(pres.shapes.RECTANGLE, {
      x: sx, y: 1.5, w: STAT_W, h: 1.55,
      fill: { color: C.navyDeep }, line: { color: C.navyDeep },
      shadow: mkShadow(),
    });
    // Top teal strip on each stat card
    s.addShape(pres.shapes.RECTANGLE, {
      x: sx, y: 1.5, w: STAT_W, h: 0.06,
      fill: { color: C.teal }, line: { color: C.teal },
    });
    s.addText(st.val, {
      x: sx + 0.05, y: 1.58, w: STAT_W - 0.1, h: 0.75,
      fontSize: 34, fontFace: FONT_H, color: C.amber,
      bold: true, align: "center", margin: 0,
    });
    s.addText(st.sub, {
      x: sx + 0.05, y: 2.34, w: STAT_W - 0.1, h: 0.56,
      fontSize: 11, fontFace: FONT_B, color: C.skyBlue,
      align: "center", margin: 0,
    });
  });

  // Quote block
  const QX = 0.55, QY = 3.28, QW = 8.9, QH = 1.95;
  s.addShape(pres.shapes.RECTANGLE, {
    x: QX, y: QY, w: QW, h: QH,
    fill: { color: C.navyDeep }, line: { color: C.navyDeep },
  });
  // Amber left border
  s.addShape(pres.shapes.RECTANGLE, {
    x: QX, y: QY, w: 0.07, h: QH,
    fill: { color: C.amber }, line: { color: C.amber },
  });
  // Large opening quote glyph
  s.addText("\u201C", {
    x: QX + 0.15, y: QY + 0.02, w: 0.65, h: 0.7,
    fontSize: 60, fontFace: "Georgia", color: C.amber,
    bold: true, margin: 0,
  });
  // Quote text
  s.addText(
    "I can highly recommend Michael for your software development needs. " +
    "Michael has been consistent in delivering quality work.",
    {
      x: QX + 0.88, y: QY + 0.22, w: QW - 1.0, h: 1.1,
      fontSize: 15.5, fontFace: "Georgia", color: C.white,
      italic: true, valign: "middle", margin: 0,
    }
  );
  // Attribution
  s.addText("— Upwork client review  ·  Expert-Vetted  ·  MSEE Georgia Tech", {
    x: QX + 0.88, y: QY + 1.48, w: QW - 1.0, h: 0.36,
    fontSize: 10, fontFace: FONT_B, color: C.skyBlue, margin: 0,
  });
}

// =============================================================================
// SLIDE 7 — CLOSING
// Dark navy; positioning statement; tag pills; credential bar
// =============================================================================
{
  const s = pres.addSlide();
  s.background = { color: C.navy };

  // Decorative ovals
  s.addShape(pres.shapes.OVAL, {
    x: 7.2, y: 2.3, w: 4.2, h: 4.2,
    fill: { color: C.navyMid }, line: { color: C.navyMid },
  });
  s.addShape(pres.shapes.OVAL, {
    x: -1.5, y: -1.2, w: 3.2, h: 3.2,
    fill: { color: "253F6E" }, line: { color: "253F6E" },
  });

  s.addText("IS THIS YOUR PROBLEM?", {
    x: 0.65, y: 0.65, w: 7.5, h: 0.3,
    fontSize: 9, fontFace: FONT_B, color: C.teal,
    bold: true, charSpacing: 3, margin: 0,
  });

  s.addText(
    "If your workflow stops short\nof something clients can actually use —",
    {
      x: 0.65, y: 1.05, w: 7.5, h: 1.6,
      fontSize: 33, fontFace: FONT_H, color: C.white,
      bold: true, lineSpacingMultiple: 1.2, margin: 0,
    }
  );

  s.addText(
    "this is the kind of engagement where Mike is a strong fit. Process the data, " +
    "explain it clearly, and deliver something usable in real communication.",
    {
      x: 0.65, y: 2.78, w: 6.8, h: 0.82,
      fontSize: 14.5, fontFace: FONT_B, color: C.iceBlue, margin: 0,
    }
  );

  // Tag pills
  const tags = [
    "Data-to-Report Workflows",
    "Python / Flask",
    "Multilingual Output",
    "High-Trust Delivery",
  ];
  const TAG_W = 2.12, TAG_H = 0.38, TAG_GAP = 0.2;
  const TAG_TOTAL = tags.length * TAG_W + (tags.length - 1) * TAG_GAP;
  const TAG_MARGIN = (10 - TAG_TOTAL) / 2;
  tags.forEach((tag, i) => {
    const tx = TAG_MARGIN + i * (TAG_W + TAG_GAP);
    s.addShape(pres.shapes.RECTANGLE, {
      x: tx, y: 3.78, w: TAG_W, h: TAG_H,
      fill: { color: C.navyDeep }, line: { color: C.teal, width: 1 },
    });
    s.addText(tag, {
      x: tx, y: 3.78, w: TAG_W, h: TAG_H,
      fontSize: 9.5, fontFace: FONT_B, color: C.teal,
      align: "center", valign: "middle", margin: 0,
    });
  });

  // Bottom credential bar (mirrors Slide 1)
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.04, w: 10, h: 0.585,
    fill: { color: C.navyDeep }, line: { color: C.navyDeep },
  });
  const creds = [
    "Expert-Vetted",
    "100% Job Success",
    "1,900+ Hours",
    "MSEE · Georgia Tech",
  ];
  creds.forEach((text, i) => {
    const cx = 0.55 + i * 2.35;
    s.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: 5.14, w: 0.06, h: 0.26,
      fill: { color: C.teal }, line: { color: C.teal },
    });
    s.addText(text, {
      x: cx + 0.13, y: 5.11, w: 2.1, h: 0.36,
      fontSize: 10, fontFace: FONT_B, color: C.iceBlue,
      margin: 0, valign: "middle",
    });
  });
}

// =============================================================================
// WRITE FILE
// =============================================================================
pres
  .writeFile({
    fileName:
      "/home/mike/collateral/psychologist-project/slides/psychologist-case-study-claude-v1.pptx",
  })
  .then(() => {
    console.log("✓ Deck written: psychologist-case-study-claude-v1.pptx");
  })
  .catch((err) => {
    console.error("✗ Error writing deck:", err);
    process.exit(1);
  });
