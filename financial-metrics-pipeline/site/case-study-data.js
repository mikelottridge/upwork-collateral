window.CASE_STUDY = {
  eyebrow: "Real investor PDF proof: SEC financial metrics pipeline",
  theme: {
    accent: "#176b5f",
    "accent-soft": "rgba(23, 107, 95, 0.12)",
    "accent-2": "#b3832f",
    "accent-2-soft": "rgba(179, 131, 47, 0.14)",
    "hero-bg": "#14201e",
    "hero-bg-2": "#213834",
    "hero-bg-3": "#0d1715",
    "nav-bg": "#14201e",
  },
  title: "A real Disney investor-PDF page yielded a source-linked 13-row table for $0.0095.",
  lead:
    "On page 22, pdfplumber found zero tables. A one-page recovery call, limited to that page and recorded at $0.0095, returned a reviewable table with its source evidence intact.",
  heroVisual: {
    src: "../screenshots/demo-ui.png?v=2",
    alt: "Financial metrics pipeline demo showing SEC source refresh, normalized rows, and confidence flags.",
    caption:
      "The working application combines live SEC evidence, normalized financial rows, conflict flags, and a real investor-PDF bakeoff.",
  },
  about:
    "This is a working proof for financial-data automation where official exhibits, investor PDFs, and conflicting source values have to remain reviewable.",
  approach:
    "Start with live SEC facts and official documents. Use deterministic parsing where it works. When a difficult page fails, use a bounded model call that preserves the evidence and cost record.",
  quote: {
    text: "Four conflicts are surfaced instead of silently choosing a number. The PDF recovery keeps every extracted row tied to an official document and human review.",
    attribution: "Mike Lottridge, proposal demo",
  },
  tags: [
    "Official Disney PDF",
    "13 source-linked rows",
    "$0.0095 one-page recovery",
    "4 conflicts surfaced",
    "Human review handoff",
  ],
  signals: ["Real PDF proof", "Conflict-aware output", "Human review ready"],
  metrics: [
    { value: "0 tables", label: "Deterministic parser on the selected PDF page" },
    { value: "13 rows", label: "Reviewable extraction from the same page" },
    { value: "$0.0095", label: "Recorded estimated cost for one selected page" },
    { value: "4 conflicts", label: "Surfaced for review instead of hidden" },
  ],
  footerNote:
    "Built by Mike Lottridge. Narration is AI-generated. Source data comes from public SEC endpoints, official filing documents, and a checked-in PDF bakeoff artifact.",
  defaultDurationMs: 6800,
  audioRate: 1.06,
  slides: [
    {
      eyebrow: "15-second proof",
      title: "A real Disney investor-PDF page yielded a 13-row, source-linked table for $0.0095.",
      lead:
        "The selected Disney Q2 FY24 page had zero detectable tables with pdfplumber. A one-page OpenAI recovery returned a structured reconciliation table from that same official document.",
      audio: "../audio/slide-01.mp3",
      bullets: [
        "Example output: As reported | pre-tax income/loss $657M | Disney Q2 FY24 deck, page 22 | extracted-table confidence.",
        "The source URL, page number, checksum, excerpt, token usage, and estimated cost remain attached for review.",
      ],
      artifact: {
        type: "compare",
        label: "Source-linked output, then recovery proof",
        panels: [
          {
            tone: "bad",
            title: "Deterministic baseline",
            stat: "0 tables found",
            lines: [
              "pdfplumber ran against page 22 of the Disney Q2 FY24 investor deck.",
              "The selected reconciliation page had no detectable table grid.",
              "The pipeline records the failure instead of inventing cells.",
            ],
          },
          {
            tone: "good",
            title: "One-page recovery",
            stat: "13 reviewable rows",
            lines: [
              "The recovery was limited to the selected page, not a black-box batch call.",
              "Rows, cells, source excerpt, and extracted-table confidence were returned.",
              "Actual recorded call cost: $0.0095.",
            ],
          },
        ],
      },
    },
    {
      eyebrow: "Why the client should care",
      title: "The proof answers a business question: what happens when an investor PDF breaks the normal batch?",
      lead:
        "At 40 to 50 companies, a difficult deck should become a one-page exception with a visible cost and review record - not a reason the whole batch stops.",
      audio: "../audio/slide-02.mp3",
      bullets: [
        "The recovery is limited to one selected page, records its tokens and cost, and never replaces source precedence.",
        "Every extracted value stays tied to the original document, excerpt, period, unit, and confidence state.",
        "A reviewer can see whether the fallback helped, what it cost, and when to escalate instead of guessing.",
      ],
      artifact: {
        type: "metrics",
        label: "Recorded bakeoff evidence",
        items: [
          { label: "Document", value: "Official Disney Q2 FY24 deck" },
          { label: "Selected page", value: "22 of 24" },
          { label: "Bounded call", value: "3,286 input + 1,034 output tokens" },
          { label: "Audit hook", value: "URL, checksum, excerpt, and flag" },
        ],
      },
    },
    {
      eyebrow: "Working product proof",
      title: "The PDF check is part of a working SEC pipeline, not a one-off prompt.",
      lead:
        "The same app refreshes SEC companyfacts, downloads official exhibits, normalizes results, applies source precedence, and exposes conflicts for review.",
      audio: "../audio/slide-03.mp3",
      bullets: [
        "Live SEC companyfacts and official SEC-hosted EX-99 exhibits supply the primary evidence path.",
        "Every normalized row keeps the metric, period, value, source type, document, confidence flag, and supporting excerpt.",
        "Four conflicts were surfaced in the proof set instead of being hidden behind a single selected value.",
      ],
      artifact: {
        type: "pipeline",
        label: "The reviewable data contract",
        steps: [
          { icon: "1", title: "Ingest", copy: "SEC facts, filing exhibits, investor PDFs, and transcript-shaped sources." },
          { icon: "2", title: "Extract", copy: "Use structured tags first; use a one-page PDF recovery only when needed." },
          { icon: "3", title: "Normalize", copy: "Create one evidence-backed row shape across every source." },
          { icon: "4", title: "Resolve", copy: "Apply precedence, flag conflicts, and queue uncertainty for review." },
        ],
      },
    },
    {
      eyebrow: "Actual output",
      title: "The proof produces financial rows and flags disagreements before export.",
      lead:
        "The result is not a schema-only mockup. It contains real SEC-backed values for Netflix and Disney, and it surfaces four conflicts before an export can silently hide them.",
      audio: "../audio/slide-04.mp3",
      bullets: [
        "Revenue and operating income are selected from live SEC companyfacts with reported-exact confidence.",
        "The same row shape can feed CSV, Excel, a database table, or a warehouse export.",
        "Four conflicts are surfaced for review instead of being silently resolved behind the final export.",
      ],
      artifact: {
        type: "table",
        label: "Selected rows from the demo run",
        toolbar: "Real normalized output examples",
        columns: ["Company / metric", "Selected value", "Source + confidence"],
        rows: [
          ["Netflix revenue", "$12,250M", "XBRL / reported exact"],
          ["Netflix operating income", "$3,957M", "XBRL / reported exact"],
          ["Disney revenue", "$25,168M", "XBRL / reported exact"],
          ["Disney operating income", "$4,603M", "XBRL / reported exact"],
          ["Netflix paid subscribers", "301.6M", "Transcript fixture / quoted statement"],
          ["Disney ARPU", "$7.19", "Transcript fixture / quoted statement"],
        ],
      },
    },
    {
      eyebrow: "Conflict review",
      title: "A disagreement is surfaced before it becomes a bad export.",
      lead:
        "The pipeline does not silently pick a winner when sources disagree. It records the candidates, applies declared precedence, and leaves the decision reviewable.",
      audio: "../audio/slide-05.mp3",
      bullets: [
        "Example: Netflix revenue, CY2026Q1. Selected: $12,250M from SEC companyfacts with reported-exact confidence.",
        "The conflict reason is retained: different non-ambiguous values appeared across sources, so XBRL won by declared precedence.",
        "Four such conflicts are surfaced in the proof set before export.",
      ],
      artifact: {
        type: "table",
        label: "Actual conflict-review pattern",
        toolbar: "Netflix revenue | CY2026Q1",
        columns: ["Candidate", "Evidence", "Decision"],
        rows: [
          ["$12,250M", "SEC companyfacts / reported exact", "Selected by declared precedence"],
          ["Different source value", "Lower-precedence evidence", "Conflict remains visible"],
          ["Source trail", "URLs and excerpts retained", "Reviewer can inspect"],
        ],
      },
    },
    {
      eyebrow: "Delivery path",
      title: "A defined path from source inventory to a scaled client batch.",
      lead:
        "The delivery approach is already defined: source inventory, batch proof, then scale. The same evidence contract carries from a pilot run through 40 to 50 companies.",
      audio: "../audio/slide-06.mp3",
      bullets: [
        "Confirm the company universe, metrics, source hierarchy, PDF page rules, and export format.",
        "Deliver a client-specific pilot batch with QA exports, source links, and conflict review.",
        "Expand PDF validation, transcript coverage, and the full company universe without rebuilding the output contract company by company.",
      ],
      artifact: {
        type: "workflow",
        label: "Defined delivery path",
        steps: [
          { title: "Source inventory", copy: "Map CIKs, filings, metric aliases, investor PDFs, transcripts, and priority rules." },
          { title: "Batch proof", copy: "Run a client-specific sample through SEC, exhibits, and selected PDF recovery." },
          { title: "Review policy", copy: "Agree conflict thresholds, validation checks, and escalation rules." },
          { title: "Scale", copy: "Generate client-ready output across the full company universe." },
        ],
      },
    },
  ],
};
