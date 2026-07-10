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
  title: "One real investor PDF. Zero parsed tables. A reviewable 13-row result for $0.0095.",
  lead:
    "If a 40 to 50 company pipeline hits an investor deck that breaks deterministic parsing, this demo shows the bounded fallback, source trail, cost, and human-review handoff.",
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
    text: "The important proof is not that an LLM can read a PDF. It is that a real PDF failure has a bounded, source-grounded recovery path before the full batch is funded.",
    attribution: "Mike Lottridge, proposal demo",
  },
  tags: [
    "Official investor PDF",
    "0-table parser failure",
    "$0.0095 bounded recovery",
    "SEC evidence trail",
    "Human review flags",
  ],
  signals: ["Real PDF bakeoff", "Source-grounded output", "No silent guessing"],
  metrics: [
    { value: "0 tables", label: "Deterministic parser on the selected PDF page" },
    { value: "13 rows", label: "Structured extraction from the same page" },
    { value: "$0.0095", label: "Recorded estimated cost for the bounded call" },
    { value: "4 conflicts", label: "Surfaced for review instead of hidden" },
  ],
  footerNote:
    "Built by Mike Lottridge. Narration is AI-generated. Source data comes from public SEC endpoints, official filing documents, and a checked-in PDF bakeoff artifact.",
  defaultDurationMs: 6800,
  audioRate: 1.06,
  slides: [
    {
      eyebrow: "15-second proof",
      title: "The hard PDF case is already tested on a real investor deck.",
      lead:
        "On Disney's official Q2 FY24 earnings presentation, the deterministic table parser found no grid. A bounded OpenAI extraction returned a structured reconciliation table from that same cached page.",
      audio: "../audio/slide-01.mp3",
      bullets: [
        "The source URL, page number, checksum, model result, token usage, and estimated cost are retained for review.",
        "This is not a claim that every PDF is easy. It is a concrete recovery path for the failure mode that stalls financial-data automation projects.",
      ],
      artifact: {
        type: "compare",
        label: "Same official PDF page, two extraction paths",
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
            title: "Bounded PDF vision",
            stat: "13 structured rows",
            lines: [
              "The same page was sent as one high-detail PDF input.",
              "Rows, cells, source excerpt, and confidence flag were returned.",
              "Actual recorded call cost: $0.0095.",
            ],
          },
        ],
      },
    },
    {
      eyebrow: "Why the client should care",
      title: "The value is not AI reads PDFs. It is a bounded recovery path when ordinary parsing fails.",
      lead:
        "At 40 to 50 companies, one difficult deck can stop a batch. This proof makes the fallback, cost, and review evidence visible before the client funds the full build.",
      audio: "../audio/slide-02.mp3",
      bullets: [
        "The model is used only on the selected difficult page, not as a page-load feature or a replacement for source precedence.",
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
      title: "The PDF fallback sits inside a traceable SEC pipeline, not beside a one-off prompt.",
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
          { icon: "2", title: "Extract", copy: "Use structured tags first; use a bounded PDF path only when needed." },
          { icon: "3", title: "Normalize", copy: "Create one evidence-backed row shape across every source." },
          { icon: "4", title: "Resolve", copy: "Apply precedence, flag conflicts, and queue uncertainty for review." },
        ],
      },
    },
    {
      eyebrow: "Actual output",
      title: "The proof already produces populated financial rows and a conflict queue.",
      lead:
        "The result is not a schema-only mockup. It contains real SEC-backed values for Netflix and Disney, plus lower-precedence transcript-shaped examples that remain visibly qualified.",
      audio: "../audio/slide-04.mp3",
      bullets: [
        "Revenue and operating income are selected from live SEC companyfacts with reported-exact confidence.",
        "The same row shape can feed CSV, Excel, a database table, or a warehouse export.",
        "Conflicts and missing values stay explicit so the client can set the review policy rather than discover gaps after export.",
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
      eyebrow: "Guardrails",
      title: "Model output is an extraction aid, never the source authority.",
      lead:
        "The pipeline does not call the model on page load or use it to decide source precedence. The model returns structured fields that remain tied to a source excerpt and confidence state.",
      audio: "../audio/slide-05.mp3",
      tone: "dark",
      bullets: [
        "One PDF page is selected and processed within a recorded token and cost boundary.",
        "Blank cells stay blank; the extractor does not infer missing values to make a table look complete.",
        "The client can approve the model, page-selection rule, and validation threshold before the full batch runs.",
      ],
      artifact: {
        type: "stack",
        label: "Bounded extraction controls",
        items: [
          { label: "Scope", value: "One difficult PDF page" },
          { label: "Source record", value: "URL, page, checksum, excerpt" },
          { label: "Output", value: "Rows, cells, confidence flag" },
          { label: "Cost record", value: "$0.00949 actual estimate" },
        ],
      },
    },
    {
      eyebrow: "Scale path",
      title: "The 40 to 50 company scope now has a tested strategy for the hard PDF edge case.",
      lead:
        "The proof set is intentionally small. The configuration, row contract, validation hooks, and bounded PDF path are the same components needed for a larger batch pipeline.",
      audio: "../audio/slide-06.mp3",
      bullets: [
        "Each company adds CIK, ticker, target metrics, aliases, and source rules before extraction runs.",
        "The production hardening work is page selection, retry behavior, review thresholds, and transcript coverage - not rebuilding the output contract company by company.",
        "Period, unit, source age, and conflicting reported values can be validated before export.",
      ],
      artifact: {
        type: "workflow",
        label: "Production hardening path",
        steps: [
          { title: "Expand config", copy: "Add the company universe, CIKs, metric aliases, and source rules." },
          { title: "Harden ingestion", copy: "Set PDF page selection, retry behavior, and transcript source strategy." },
          { title: "Add validation", copy: "Compare periods, units, source freshness, and conflicts before export." },
          { title: "Export cleanly", copy: "Write client-ready CSV, Excel, database, or warehouse output." },
        ],
      },
    },
    {
      eyebrow: "Recommended engagement",
      title: "Start with the client source inventory, then prove the production batch before full scale.",
      lead:
        "The first paid milestone turns this generic proof into the client-specific source map and a small audited batch. That removes source and PDF risk before the full 40 to 50 company run.",
      audio: "../audio/slide-07.mp3",
      bullets: [
        "Milestone 1: confirm metrics, company universe, source hierarchy, PDF page rules, and export format.",
        "Milestone 2: ship SEC XBRL plus SEC exhibit ingestion for a pilot batch with QA exports and conflict review.",
        "Milestone 3: expand PDF validation, transcript coverage, and the full company universe using the same evidence-backed row contract.",
      ],
      artifact: {
        type: "workflow",
        label: "First deliverables",
        steps: [
          { title: "Source inventory", copy: "Map CIKs, filings, metric aliases, investor PDFs, transcripts, and priority rules." },
          { title: "Pilot batch", copy: "Run a small company set through XBRL, exhibits, and selected PDF recovery with evidence exports." },
          { title: "Review policy", copy: "Agree conflict thresholds, validation checks, and escalation rules before scale." },
          { title: "Full run", copy: "Generate client-ready output for all target companies with a durable audit trail." },
        ],
      },
    },
  ],
};
