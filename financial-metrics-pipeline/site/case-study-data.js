window.CASE_STUDY = {
  eyebrow: "Proposal demo: SEC financial metrics pipeline",
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
  title: "A Working SEC Pipeline for Audit-Ready Financial Metrics",
  lead:
    "Mike Lottridge built this proposal demo against the client request: real SEC companyfacts data, official filing exhibits, source precedence, confidence flags, and a clear path to PDFs, transcripts, and 40 to 50 companies.",
  heroVisual: {
    src: "../screenshots/demo-ui.png",
    alt: "Financial metrics pipeline demo showing source refresh, normalized rows, and confidence flags.",
    caption:
      "The web UI is a proof wrapper for a batch pipeline. It shows refreshed SEC evidence, source manifest details, normalized output, and confidence flags.",
  },
  about:
    "The deck is built for a client evaluating whether the project can reliably gather 40 to 50 company metrics across SEC data, filing exhibits, PDFs, document text, and transcripts.",
  approach:
    "The implementation starts with live SEC endpoints and a small two-company proof, then keeps the expansion path visible: broader company configs, PDF table strategy, transcript provider selection, and validation exports.",
  quote: {
    text: "I built a working proof first so the client can judge the source strategy, output shape, and delivery plan before committing to the full build.",
    attribution: "Mike Lottridge, proposal demo",
  },
  tags: [
    "SEC EDGAR",
    "XBRL companyfacts",
    "Filing exhibits",
    "Transcript schema",
    "Audit-ready output",
  ],
  signals: ["Built for this job", "Live SEC refresh", "Phased production path"],
  metrics: [
    { value: "2 proof companies", label: "Netflix and Disney with real SEC facts" },
    { value: "8 selected rows", label: "Normalized output from the demo run" },
    { value: "4 conflicts", label: "Detected instead of hidden" },
    { value: "40 to 50", label: "Target company expansion path" },
  ],
  footerNote:
    "Built by Mike Lottridge. Narration is AI-generated. Source data comes from public SEC endpoints and checked-in demo fixtures.",
  defaultDurationMs: 7600,
  audioRate: 1.08,
  slides: [
    {
      eyebrow: "Overview",
      title: "The demo proves the hard part: reliable financial metrics need source discipline.",
      lead:
        "The client needs a pipeline that can collect the same metric from different source types without losing traceability or overstating confidence.",
      audio: "../audio/slide-01.mp3",
      bullets: [
        "The proof collects public-company metrics from SEC XBRL data, official SEC exhibits, document text, and transcript-shaped inputs.",
        "Every output row keeps the metric, period, value, source type, source document, confidence flag, and supporting excerpt.",
      ],
      artifact: {
        type: "metrics",
        label: "What the proof demonstrates",
        items: [
          { label: "Primary source", value: "SEC companyfacts" },
          { label: "Document path", value: "Official EX-99 HTML exhibits" },
          { label: "Unstructured path", value: "Transcript-ready schema" },
          { label: "Output standard", value: "Audit-ready rows" },
        ],
      },
    },
    {
      eyebrow: "Client problem",
      title: "The same metric may move between structured data, exhibits, releases, and transcripts.",
      lead:
        "A scrape can collect text. A useful pipeline has to decide which source wins, preserve evidence, and flag uncertainty instead of filling gaps with guesses.",
      audio: "../audio/slide-02.mp3",
      bullets: [
        "Structured XBRL can be complete for one company and incomplete for another.",
        "Earnings exhibits and PDFs can carry the exact metric the client cares about, but the value needs a document trail.",
        "Transcript statements can help, but they should sit behind higher-confidence sources.",
      ],
      artifact: {
        type: "compare",
        label: "Scrape vs. reliability system",
        panels: [
          {
            tone: "bad",
            title: "Basic scrape",
            stat: "Fast but fragile",
            lines: [
              "Collects values without a durable source hierarchy.",
              "Treats every extracted value as equally reliable.",
              "Makes review harder when documents disagree.",
            ],
          },
          {
            tone: "good",
            title: "Reliability pipeline",
            stat: "Review-ready",
            lines: [
              "Uses explicit source precedence before accepting a value.",
              "Keeps the document, excerpt, and confidence flag on each row.",
              "Surfaces missing values and conflicts for human review.",
            ],
          },
        ],
      },
    },
    {
      eyebrow: "Why Mike is a fit",
      title: "I did not just describe the approach. I built a working proof for this job.",
      lead:
        "The demo is designed to show how I work: start with real sources, keep the evidence visible, separate deterministic pipeline logic from AI extraction, and leave a practical production path.",
      audio: "../audio/slide-03.mp3",
      bullets: [
        "Built against live SEC companyfacts data and official SEC filing exhibits rather than a mock-only dataset.",
        "Added tests, a source manifest, checksums, confidence flags, and conflict handling so the output is reviewable.",
        "Scoped the messy parts honestly: HTML exhibits work now; PDF table parsing and transcript providers are next production hardening steps.",
      ],
      artifact: {
        type: "metrics",
        label: "Qualification signals in the repo",
        items: [
          { label: "Practical proof", value: "Working app, not a slide-only claim" },
          { label: "Source discipline", value: "URLs, excerpts, checksums, flags" },
          { label: "AI judgment", value: "Schema-grounded, not page-load magic" },
          { label: "Delivery shape", value: "Tests plus phased rollout" },
        ],
      },
    },
    {
      eyebrow: "Working evidence",
      title: "The proof refreshes real SEC sources before the walkthrough.",
      lead:
        "The current cache was generated from live SEC endpoints and saved with URLs and SHA-256 checksums so the customer demo remains stable during a call.",
      audio: "../audio/slide-04.mp3",
      tone: "dark",
      bullets: [
        "Companyfacts calls refresh Netflix and Disney XBRL-style data from data.sec.gov.",
        "Recent 8-K indexes are scanned for official SEC-hosted EX-99 earnings exhibits.",
        "The manifest records source URL, local path, timestamp, and checksum.",
      ],
      artifact: {
        type: "stack",
        label: "Refresh evidence",
        items: [
          { label: "Endpoint", value: "data.sec.gov/api/xbrl/companyfacts" },
          { label: "Filings", value: "8-K archive index scan" },
          { label: "Cache", value: "Raw JSON and exhibit text" },
          { label: "Audit trail", value: "URL plus SHA-256 checksum" },
        ],
      },
    },
    {
      eyebrow: "Requirement coverage",
      title: "The demo is precise about what works now and what production hardening adds.",
      lead:
        "The coverage map separates working proof from planned hardening so the client can trust the demo instead of finding hidden overclaims later.",
      audio: "../audio/slide-05.mp3",
      bullets: [
        "SEC EDGAR XBRL API refresh is implemented for the two-company proof set.",
        "Official SEC-hosted HTML exhibits are downloaded, converted to text, and parsed.",
        "PDF table parsing and transcript provider integration are explicit production-hardening steps, not hidden assumptions.",
      ],
      artifact: {
        type: "table",
        label: "Coverage map",
        toolbar: "Client requirements to demo proof",
        columns: ["Requirement", "Demo proof", "Status"],
        rows: [
          ["SEC XBRL API", "Companyfacts refresh for Netflix and Disney", { type: "status", value: "working" }],
          ["Tag aliases", "Config-driven standard and alternate tag names", { type: "status", value: "working" }],
          ["HTML exhibits", "Official SEC EX-99 exhibits converted to text", { type: "status", value: "working" }],
          ["PDF tables", "Parser strategy and validation in phase 2", { type: "status", value: "planned" }],
          ["Transcripts", "Schema and source quote retained; provider TBD", { type: "status", value: "prototype" }],
          ["Conflicts", "Precedence and confidence flags exposed", { type: "status", value: "working" }],
        ],
      },
    },
    {
      eyebrow: "Pipeline design",
      title: "Source precedence is explicit and testable.",
      lead:
        "The demo does not hide ranking logic inside a prompt. It separates ingestion, extraction, normalization, and resolution so each step can be tested and expanded.",
      audio: "../audio/slide-06.mp3",
      bullets: [
        "XBRL is preferred when a structured reported value exists.",
        "SEC-hosted HTML exhibits fill gaps with retained evidence today; PDFs use the same document slot once table parsing is hardened.",
        "Press release and transcript evidence remain useful but lower in the source order.",
      ],
      artifact: {
        type: "pipeline",
        label: "Processing flow",
        steps: [
          { icon: "1", title: "Ingest", copy: "Companyfacts, filings, exhibits, PDFs, and transcript-shaped sources." },
          { icon: "2", title: "Extract", copy: "Tag aliases, document patterns, PDF tables, and LLM-ready schema." },
          { icon: "3", title: "Normalize", copy: "One long-format row shape for every metric." },
          { icon: "4", title: "Resolve", copy: "Precedence, confidence, missing values, and conflicts." },
        ],
      },
    },
    {
      eyebrow: "Actual output",
      title: "The demo already produces populated metric rows, not just a schema.",
      lead:
        "A local run selected eight rows across Netflix and Disney and surfaced four conflicts instead of hiding disagreements.",
      audio: "../audio/slide-07.mp3",
      bullets: [
        "Revenue and operating income are selected from live SEC companyfacts with reported-exact confidence.",
        "Subscriber and ARPU examples come from the transcript fixture to demonstrate the lower-precedence unstructured layer.",
        "The same row shape can feed CSV, Excel, a database table, or a warehouse export.",
      ],
      artifact: {
        type: "table",
        label: "Selected rows from the demo run",
        toolbar: "Real normalized output examples",
        columns: ["Company / metric", "Selected value", "Source + confidence"],
        rows: [
          ["Netflix revenue", "$12,250M", "XBRL / reported_exact"],
          ["Netflix operating income", "$3,957M", "XBRL / reported_exact"],
          ["Disney revenue", "$25,168M", "XBRL / reported_exact"],
          ["Disney operating income", "$4,603M", "XBRL / reported_exact"],
          ["Netflix paid subscribers", "301.6M", "Transcript fixture / quoted_statement"],
          ["Disney ARPU", "$7.19", "Transcript fixture / quoted_statement"],
        ],
      },
    },
    {
      eyebrow: "Confidence discipline",
      title: "The system is designed to say uncertain instead of making up precision.",
      lead:
        "The confidence model is intentionally plain-language so reviewers can understand why a value was accepted, flagged, or left missing.",
      audio: "../audio/slide-08.mp3",
      bullets: [
        "Reported exact means a structured fact or directly stated value was found.",
        "Extracted table means the value came from a document table or labeled callout.",
        "Ambiguous chart and missing values are flagged for review rather than silently accepted.",
      ],
      artifact: {
        type: "metrics",
        label: "Confidence flags",
        items: [
          { label: "Highest confidence", value: "reported exact" },
          { label: "Document evidence", value: "extracted table" },
          { label: "Review needed", value: "ambiguous chart" },
          { label: "No reliable source", value: "missing" },
        ],
      },
    },
    {
      eyebrow: "LLM-assisted extraction",
      title: "Unstructured text is handled with schema and source grounding.",
      lead:
        "The model-assisted path is constrained to return a metric, unit, excerpt, and confidence flag so unstructured extraction remains reviewable.",
      audio: "../audio/slide-09.mp3",
      tone: "dark",
      bullets: [
        "The application does not call the model on page load or use it to decide source precedence.",
        "The preserved excerpt keeps model output tied to reviewable evidence.",
        "The production version can plug in the client-approved transcript provider and PDF table parser without changing the normalized row contract.",
      ],
      artifact: {
        type: "stack",
        label: "Guardrails",
        items: [
          { label: "Prompt scope", value: "One metric, unit, excerpt, and flag" },
          { label: "Review hook", value: "Source quote retained" },
          { label: "Runtime", value: "No model call on page load" },
          { label: "Role", value: "Extraction aid, not source authority" },
        ],
      },
    },
    {
      eyebrow: "Scale path",
      title: "The two-company proof is shaped for the requested 40 to 50 company scope.",
      lead:
        "The proof set is intentionally small, but the configuration and output contract are the same pieces needed for a larger batch pipeline.",
      audio: "../audio/slide-10.mp3",
      bullets: [
        "Each company adds CIK, ticker, target metrics, aliases, and source rules before extraction runs.",
        "The hardening work is in source coverage and validation, not changing the row contract for every company.",
        "Period, unit, source age, and conflicting reported values can be validated before export.",
      ],
      artifact: {
        type: "workflow",
        label: "Production hardening path",
        steps: [
          { title: "Expand config", copy: "Add the client company universe, CIKs, metric aliases, and source rules." },
          { title: "Harden ingestion", copy: "Finalize PDF table parsing, transcript source strategy, and retry behavior." },
          { title: "Add validation", copy: "Compare periods, units, source freshness, and conflicts before export." },
          { title: "Export cleanly", copy: "Write CSV, Excel, database, or warehouse output from the normalized table." },
        ],
      },
    },
    {
      eyebrow: "Engagement plan",
      title: "Start with the source inventory, then ship the production pipeline in phases.",
      lead:
        "The recommended first paid milestone turns the demo into the client-specific source map and a small production batch before expanding to the full company set.",
      audio: "../audio/slide-11.mp3",
      bullets: [
        "Milestone 1: confirm metrics, company universe, source hierarchy, and export format.",
        "Milestone 2: ship SEC XBRL plus SEC exhibit ingestion for a pilot batch with QA exports.",
        "Milestone 3: add PDF table parsing, transcript provider integration, conflict reports, and the full 40 to 50 company run.",
      ],
      artifact: {
        type: "workflow",
        label: "First deliverables",
        steps: [
          { title: "Source inventory", copy: "Map CIKs, filings, metric aliases, PDF sources, transcripts, and priority rules." },
          { title: "Pilot batch", copy: "Run a small company set through XBRL and exhibit extraction with evidence exports." },
          { title: "Hardening", copy: "Add PDF tables, transcript provider logic, validation, and conflict reporting." },
          { title: "Full run", copy: "Generate client-ready CSV, Excel, database, or warehouse output for all target companies." },
        ],
      },
    },
  ],
};

