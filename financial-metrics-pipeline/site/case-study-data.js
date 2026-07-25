window.CASE_STUDY = {
  "presentationId": "financial",
  "eyebrow": "Working product proof: SEC financial metrics pipeline",
  "theme": {
    "accent": "#176b5f",
    "accent-soft": "rgba(23, 107, 95, 0.12)",
    "accent-2": "#b3832f",
    "accent-2-soft": "rgba(179, 131, 47, 0.14)",
    "hero-bg": "#14201e",
    "hero-bg-2": "#213834",
    "hero-bg-3": "#0d1715",
    "nav-bg": "#14201e"
  },
  "title": "Turn fragmented financial disclosures into reviewable, source-linked metrics.",
  "lead": "This working pipeline ingests SEC facts, filing exhibits, investor PDFs, and transcript-shaped sources; normalizes them into one data contract; applies source precedence; and exposes conflicts before export.",
  "heroVisual": {
    "src": "../screenshots/demo-ui.png?v=2",
    "alt": "Financial metrics pipeline demo showing SEC source refresh, normalized rows, confidence states, and conflict flags.",
    "caption": "The application combines official evidence, normalized financial rows, declared source precedence, conflict review, and bounded recovery for difficult PDF pages."
  },
  "about": "A working proof for financial-data automation where values from multiple public sources must remain traceable, comparable, and reviewable at scale.",
  "approach": "Use official structured sources first, preserve evidence with every normalized row, make source-selection rules explicit, and route ambiguity to human review instead of hiding it in the export.",
  "quote": {
    "text": "The core deliverable is not PDF extraction. It is a dependable financial-metrics pipeline with source lineage, conflict visibility, and a clear path from pilot to scaled batch.",
    "attribution": "Mike Lottridge, proposal demo"
  },
  "tags": [
    "Live SEC evidence",
    "Normalized metric rows",
    "Declared source precedence",
    "4 conflicts surfaced",
    "Human-review handoff"
  ],
  "signals": [
    "End-to-end pipeline",
    "Evidence-preserving output",
    "Scale-ready delivery"
  ],
  "metrics": [
    {
      "value": "4 source types",
      "label": "SEC facts, filing exhibits, investor PDFs, and transcript-shaped evidence"
    },
    {
      "value": "1 row contract",
      "label": "Metric, period, value, source, confidence, and supporting excerpt"
    },
    {
      "value": "4 conflicts",
      "label": "Surfaced for review instead of silently overwritten"
    },
    {
      "value": "40–50 firms",
      "label": "Target scale supported by a staged pilot-to-batch delivery path"
    }
  ],
  "footerNote": "Built by Mike Lottridge. Narration uses the recorded MP3 voiceover assets in this repository. Source data comes from public SEC endpoints, official filing documents, and checked-in demonstration artifacts.",
  "defaultDurationMs": 7200,
  "audioRate": 1,
  "slides": [
    {
      "eyebrow": "The client outcome",
      "title": "A reviewable financial-metrics pipeline, not a pile of disconnected extracts.",
      "lead": "The product turns fragmented disclosures into a consistent output that analysts can trace, compare, validate, and export without losing the underlying evidence.",
      "durationMs": 11000,
      "bullets": [
        "Ingest official structured facts, filing exhibits, investor decks, and transcript-shaped sources.",
        "Normalize every result into one evidence-backed row format across companies and periods.",
        "Apply declared source precedence and surface disagreements before they become bad downstream data."
      ],
      "artifact": {
        "type": "pipeline",
        "label": "End-to-end value flow",
        "steps": [
          {
            "icon": "1",
            "title": "Ingest",
            "copy": "Collect official facts and supporting disclosures."
          },
          {
            "icon": "2",
            "title": "Normalize",
            "copy": "Create one comparable metric-row contract."
          },
          {
            "icon": "3",
            "title": "Resolve",
            "copy": "Apply precedence and expose conflicts."
          },
          {
            "icon": "4",
            "title": "Deliver",
            "copy": "Export review-ready data with lineage intact."
          }
        ]
      },
      "audio": "../audio/slide-01.mp3?v=cedar-20260711",
      "narration": {
        "script": "This is a financial metrics pipeline, not a PDF demo. It turns official disclosures into source-linked rows with precedence, confidence, conflicts, and export-ready structure.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/slide-01.mp3?v=cedar-20260711",
        "durationSeconds": 10.79
      }
    },
    {
      "eyebrow": "The business problem",
      "title": "Financial values disagree because the sources, periods, units, and definitions disagree.",
      "lead": "A reliable batch cannot simply scrape a number and move on. It must preserve enough context to explain why a value was selected and what competing evidence existed.",
      "durationMs": 10600,
      "bullets": [
        "The same metric may appear in XBRL, an exhibit, an investor deck, and a transcript with different values or labels.",
        "Quarter, year-to-date, currency, scale, and non-GAAP definitions can make superficially similar values non-comparable.",
        "Silent overwrites create false confidence and make later audit or correction expensive."
      ],
      "artifact": {
        "type": "compare",
        "label": "What the pipeline prevents",
        "panels": [
          {
            "tone": "bad",
            "title": "Naive extraction",
            "stat": "One number, no explanation",
            "lines": [
              "Source context is discarded.",
              "Conflicts disappear into the final file.",
              "Reviewers cannot reconstruct the decision."
            ]
          },
          {
            "tone": "good",
            "title": "Evidence-aware pipeline",
            "stat": "Selected value + visible alternatives",
            "lines": [
              "Period, unit, source, and excerpt remain attached.",
              "Selection rules are explicit.",
              "Ambiguity is queued for review."
            ]
          }
        ]
      },
      "audio": "../audio/slide-02.mp3?v=cedar-20260711",
      "narration": {
        "script": "Financial numbers disagree when sources, periods, units, or definitions differ. The pipeline preserves context so reviewers see the selected value and competing evidence.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/slide-02.mp3?v=cedar-20260711",
        "durationSeconds": 10.5
      }
    },
    {
      "eyebrow": "The data contract",
      "title": "Every metric becomes a source-linked row that can survive review and reuse.",
      "lead": "The normalized row shape is the core product. It supports comparison across sources while retaining the evidence needed for QA, escalation, and downstream loading.",
      "durationMs": 12600,
      "bullets": [
        "Each row carries company, metric, period, value, unit, source type, document, confidence, and excerpt.",
        "The same contract can feed CSV, Excel, a database table, or a warehouse without rebuilding logic per company.",
        "Confidence and conflict states remain machine-readable instead of being buried in analyst notes."
      ],
      "artifact": {
        "type": "table",
        "label": "Normalized financial row",
        "toolbar": "Evidence-backed output contract",
        "columns": [
          "Field",
          "Example",
          "Why it matters"
        ],
        "rows": [
          [
            "Metric + period",
            "Operating income | CY2026Q1",
            "Prevents period mismatch"
          ],
          [
            "Value + unit",
            "$3,957M",
            "Keeps scale explicit"
          ],
          [
            "Source + confidence",
            "SEC companyfacts | reported exact",
            "Explains trust level"
          ],
          [
            "Evidence trail",
            "URL, document, excerpt",
            "Supports human verification"
          ]
        ]
      },
      "audio": "../audio/slide-03.mp3?v=cedar-20260711",
      "narration": {
        "script": "Every metric becomes one row with company, period, value, unit, source, confidence, and excerpt. That contract supports CSV, Excel, database, or warehouse delivery.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/slide-03.mp3?v=cedar-20260711",
        "durationSeconds": 11.96
      }
    },
    {
      "eyebrow": "Working output",
      "title": "The demo already produces real SEC-backed rows across multiple companies and metrics.",
      "lead": "This is not a schema-only mockup. The application refreshes public SEC data, normalizes selected metrics, and displays the evidence and confidence state used for each result.",
      "durationMs": 11600,
      "bullets": [
        "Revenue and operating income are selected from live SEC companyfacts with reported-exact confidence.",
        "Operating and subscriber metrics can share the same row contract even when their source types differ.",
        "The output remains ready for analyst review before it moves into a client export or warehouse."
      ],
      "artifact": {
        "type": "table",
        "label": "Selected rows from the demo run",
        "toolbar": "Real normalized output examples",
        "columns": [
          "Company / metric",
          "Selected value",
          "Source + confidence"
        ],
        "rows": [
          [
            "Netflix revenue",
            "$12,250M",
            "XBRL / reported exact"
          ],
          [
            "Netflix operating income",
            "$3,957M",
            "XBRL / reported exact"
          ],
          [
            "Disney revenue",
            "$25,168M",
            "XBRL / reported exact"
          ],
          [
            "Disney operating income",
            "$4,603M",
            "XBRL / reported exact"
          ],
          [
            "Netflix paid subscribers",
            "301.6M",
            "Transcript fixture / quoted statement"
          ],
          [
            "Disney ARPU",
            "$7.19",
            "Transcript fixture / quoted statement"
          ]
        ]
      },
      "audio": "../audio/slide-04.mp3?v=cedar-20260711",
      "narration": {
        "script": "The demo already produces real SEC-backed rows for Netflix and Disney, including revenue and operating income with reported-exact confidence and reviewable source lineage.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/slide-04.mp3?v=cedar-20260711",
        "durationSeconds": 9.82
      }
    },
    {
      "eyebrow": "Conflict control",
      "title": "Four disagreements are exposed before export instead of being silently resolved.",
      "lead": "When sources disagree, the pipeline records the candidates, applies declared precedence, and preserves the reason for the selected value so a reviewer can inspect the decision.",
      "durationMs": 10000,
      "bullets": [
        "Example: Netflix revenue for CY2026Q1 selects $12,250M from SEC companyfacts with reported-exact confidence.",
        "Lower-precedence alternatives remain visible with the conflict reason and supporting source trail.",
        "The design supports policy changes because source-selection logic is explicit rather than hard-coded into opaque cleanup steps."
      ],
      "artifact": {
        "type": "table",
        "label": "Actual conflict-review pattern",
        "toolbar": "Netflix revenue | CY2026Q1",
        "columns": [
          "Candidate",
          "Evidence",
          "Decision"
        ],
        "rows": [
          [
            "$12,250M",
            "SEC companyfacts / reported exact",
            "Selected by declared precedence"
          ],
          [
            "Different source value",
            "Lower-precedence evidence",
            "Conflict remains visible"
          ],
          [
            "Source trail",
            "URLs and excerpts retained",
            "Reviewer can inspect"
          ]
        ]
      },
      "audio": "../audio/slide-05.mp3?v=cedar-20260711",
      "narration": {
        "script": "When sources disagree, the pipeline records candidates, applies declared precedence, and leaves the conflict visible before the value reaches a downstream export.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/slide-05.mp3?v=cedar-20260711",
        "durationSeconds": 9.3
      }
    },
    {
      "eyebrow": "Exception handling proof",
      "title": "When a difficult investor-PDF page breaks deterministic parsing, the batch does not have to stop.",
      "lead": "The PDF bakeoff demonstrates one bounded fallback inside the larger pipeline: a single failed page can be recovered with its source, cost, and review record intact.",
      "durationMs": 9200,
      "bullets": [
        "On Disney Q2 FY24 page 22, pdfplumber detected zero tables.",
        "A one-page recovery returned 13 reviewable rows from that same official document.",
        "The call remained bounded to one page and recorded its URL, checksum, excerpt, token usage, confidence, and estimated cost of $0.0095."
      ],
      "artifact": {
        "type": "compare",
        "label": "Bounded exception path",
        "panels": [
          {
            "tone": "bad",
            "title": "Deterministic baseline",
            "stat": "0 tables found",
            "lines": [
              "The selected page had no detectable table grid.",
              "The failure was recorded instead of fabricating cells.",
              "The rest of the pipeline remained intact."
            ]
          },
          {
            "tone": "good",
            "title": "One-page recovery",
            "stat": "13 reviewable rows",
            "lines": [
              "Recovery was limited to the failed page.",
              "Evidence and confidence remained attached.",
              "Recorded estimated cost: $0.0095."
            ]
          }
        ]
      },
      "audio": "../audio/slide-06.mp3?v=cedar-20260711",
      "narration": {
        "script": "The Disney PDF recovery is supporting proof. One difficult page produced thirteen reviewable rows after deterministic parsing found zero tables.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/slide-06.mp3?v=cedar-20260711",
        "durationSeconds": 8.49
      }
    },
    {
      "eyebrow": "Client delivery",
      "title": "Start with a client-specific pilot, then scale the same evidence contract across the company universe.",
      "lead": "The next step is not a generic demo call. It is a bounded pilot using the client’s companies, metrics, source hierarchy, review rules, and target export.",
      "durationMs": 10800,
      "bullets": [
        "Define the company universe, metric dictionary, period rules, source precedence, and required output format.",
        "Run a representative pilot batch with QA exports, source links, conflict flags, and exception-cost reporting.",
        "Use the contact option shown to share the companies and metrics you need covered."
      ],
      "artifact": {
        "type": "workflow",
        "label": "Pilot-to-scale delivery path",
        "steps": [
          {
            "title": "Scope",
            "copy": "Confirm companies, metrics, sources, and review policy."
          },
          {
            "title": "Pilot",
            "copy": "Run a representative batch with evidence and QA output."
          },
          {
            "title": "Calibrate",
            "copy": "Adjust precedence, thresholds, and exception rules."
          },
          {
            "title": "Scale",
            "copy": "Expand to the full 40–50 company universe."
          }
        ]
      },
      "audio": "../audio/slide-07.mp3?v=cedar-20260711",
      "narration": {
        "script": "The next step is a bounded pilot: target companies, metrics, source hierarchy, PDF rules, export format, then a sample batch with lineage and conflict review.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/slide-07.mp3?v=cedar-20260711",
        "durationSeconds": 10.45
      }
    }
  ]
};
