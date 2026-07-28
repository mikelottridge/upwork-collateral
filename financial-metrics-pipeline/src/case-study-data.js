window.CASE_STUDY = {
  "presentationId": "financial-calculations",
  "eyebrow": "Trustworthy calculations, models, and automation",
  "title": "Calculations you can explain, check, and reuse",
  "lead": "Financial data is one concrete example of a broader capability: turning source facts and business definitions into reproducible calculations, explicit assumptions, visible checks, and maintainable automation.",
  "about": "The linked native Google Sheet is a self-built demonstration using public SEC data. It is not client work, investment advice, a Netflix forecast, or a packaged financial product.",
  "approach": "Start with the decision and its calculation contract: source inputs → definitions → formulas → assumptions → checks → reviewed result. Automate only after that chain is inspectable.",
  "quote": {
    "text": "The spreadsheet is the proof surface. The transferable deliverable is a calculation contract people can inspect, challenge, and reuse.",
    "attribution": "Service principle demonstrated by the working example"
  },
  "tags": [
    "Financial models",
    "Google Sheets",
    "Calculation design",
    "Validation controls",
    "Workflow automation"
  ],
  "signals": [
    "Explicit inputs",
    "Formula-driven outputs",
    "Human review stays visible"
  ],
  "metrics": [
    {
      "value": "16.19%",
      "label": "Formula-driven revenue growth from public Q1 inputs"
    },
    {
      "value": "+55.6 bps",
      "label": "Operating-margin expansion with two-decimal source margins"
    },
    {
      "value": "0 closure gap",
      "label": "Revenue change minus expense change reconciles exactly"
    },
    {
      "value": "PASS / REVIEW",
      "label": "Model checks pass; independent source attestation remains visible"
    }
  ],
  "footerNote": "Self-built native Google Sheet using public SEC data. AI-generated Cedar narration is disclosed. Illustrative mechanics are not investment advice or a Netflix forecast.",
  "defaultDurationMs": 14000,
  "audioRate": 1,
  "startMode": "idle",
  "slides": [
    {
      "eyebrow": "The trust problem",
      "title": "The arithmetic is usually easy. Trusting the inputs and definitions is harder.",
      "lead": "A correct formula can still produce the wrong decision when periods, units, definitions, assumptions, or source values are unclear.",
      "durationMs": 14480,
      "bullets": [
        "Separate typed source values from calculated outputs.",
        "State units, periods, definitions, and assumptions beside the model.",
        "Make failures and unresolved review steps visible."
      ],
      "artifact": {
        "type": "compare",
        "label": "Illustrative calculation risk",
        "panels": [
          {
            "tone": "bad",
            "title": "Fragile calculation",
            "stat": "Number first",
            "lines": [
              "Inputs copied into formulas",
              "Definitions stay implicit",
              "No closure or source review"
            ]
          },
          {
            "tone": "good",
            "title": "Controlled calculation",
            "stat": "Contract first",
            "lines": [
              "Inputs stored once",
              "Rules and assumptions explicit",
              "Checks and review status visible"
            ]
          }
        ]
      },
      "audio": "../audio/calculation-example/slide-01.mp3?v=cedar-20260728-r1",
      "narration": {
        "script": "Arithmetic is usually easy. Trust fails when periods, units, definitions, assumptions, or sources are unclear. A controlled model stores inputs once, states rules, and keeps checks and unresolved review visible.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/calculation-example/slide-01.mp3?v=cedar-20260728-r1",
        "durationSeconds": 13.68,
        "sha256": "f274222fe778078fed4b54660265e29782435d5a70de7d0e81aa931bb102d665",
        "generationProvider": "openai_api",
        "generationEndpoint": "/v1/audio/speech",
        "generationModel": "gpt-4o-mini-tts-2025-12-15",
        "voiceProfile": "cedar",
        "responseFormat": "mp3",
        "speed": 1.05
      }
    },
    {
      "eyebrow": "Working example",
      "title": "One native Google Sheet makes the whole calculation chain inspectable.",
      "lead": "The example separates sources, historical formulas, scenario assumptions, checks, and citations so a reviewer can trace every important output.",
      "durationMs": 15632,
      "bullets": [
        "Self-built with public SEC data; not client work.",
        "Historical values are typed once on Source_Data.",
        "All other calculations and statuses are formula-driven."
      ],
      "artifact": {
        "type": "table",
        "label": "Native Google Sheet structure",
        "toolbar": "Trustworthy Financial Calculations — Example Model",
        "columns": [
          "Sheet",
          "Role",
          "Control"
        ],
        "rows": [
          [
            "Source_Data",
            "Historical inputs",
            "Typed once with period, unit, and source ID"
          ],
          [
            "Calculation_Lab",
            "Growth, margins, bridge",
            "Formula-driven outputs"
          ],
          [
            "Scenario_Sensitivity",
            "Illustrative Q1 2027 mechanics",
            "Assumptions isolated from history"
          ],
          [
            "Checks + Sources",
            "Closure and evidence",
            "PASS plus separate human attestation"
          ]
        ]
      },
      "audio": "../audio/calculation-example/slide-02.mp3?v=cedar-20260728-r1",
      "narration": {
        "script": "This native Google Sheet is a self-built example using public SEC data, not client work. Values are entered once; formulas calculate growth, margins, bridges, scenarios, and model status. Source attestation remains human review.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/calculation-example/slide-02.mp3?v=cedar-20260728-r1",
        "durationSeconds": 14.832,
        "sha256": "fcbfac40a285fcbdad4338e7ddd1565a90e4b38d3cd33fdcfca022af366b88dd",
        "generationProvider": "openai_api",
        "generationEndpoint": "/v1/audio/speech",
        "generationModel": "gpt-4o-mini-tts-2025-12-15",
        "voiceProfile": "cedar",
        "responseFormat": "mp3",
        "speed": 1.05
      }
    },
    {
      "eyebrow": "Calculation contract",
      "title": "Define the calculation before automating it.",
      "lead": "A calculation contract identifies the decision, source fields, business definitions, formulas, assumptions, checks, and owner of final review.",
      "durationMs": 15056,
      "bullets": [
        "Agree what the result is meant to decide.",
        "Distinguish source facts from business rules and assumptions.",
        "Name the checks and the human approval boundary."
      ],
      "artifact": {
        "type": "table",
        "label": "Transferable calculation contract",
        "toolbar": "Useful for pricing, KPI, reconciliation, and planning work",
        "columns": [
          "Element",
          "Example rule",
          "Why it matters"
        ],
        "rows": [
          [
            "Inputs",
            "Q1 2026 vs Q1 2025; USD thousands",
            "Prevents period and unit mismatch"
          ],
          [
            "Formula",
            "Operating income ÷ revenue",
            "Makes the definition reproducible"
          ],
          [
            "Assumption",
            "Illustrative growth rate",
            "Keeps scenarios out of history"
          ],
          [
            "Acceptance",
            "Closure gap = 0; source review named",
            "Defines what trusted means"
          ]
        ]
      },
      "audio": "../audio/calculation-example/slide-03.mp3?v=cedar-20260728-r1",
      "narration": {
        "script": "Before automating, define the calculation contract: decision, sources, units, definitions, formulas, assumptions, checks, and reviewer. This pattern transfers to pricing, KPIs, reconciliations, and planning.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/calculation-example/slide-03.mp3?v=cedar-20260728-r1",
        "durationSeconds": 14.256,
        "sha256": "f579e656ccca92e64759dba0a23f48313e11592c9a583b18126d61ff396e0bc5",
        "generationProvider": "openai_api",
        "generationEndpoint": "/v1/audio/speech",
        "generationModel": "gpt-4o-mini-tts-2025-12-15",
        "voiceProfile": "cedar",
        "responseFormat": "mp3",
        "speed": 1.05
      }
    },
    {
      "eyebrow": "Historical analysis",
      "title": "One source block supports growth, margin, and basis-point analysis.",
      "lead": "Because the source block is normalized once, multiple outputs remain consistent and update together.",
      "durationMs": 16208,
      "bullets": [
        "Revenue grew 16.19%; operating income grew 18.23%.",
        "Operating margin moved from 31.75% to 32.30%.",
        "The 55.6-basis-point expansion is formula-derived."
      ],
      "artifact": {
        "type": "table",
        "label": "Q1 2026 versus Q1 2025",
        "toolbar": "USD thousands unless noted",
        "columns": [
          "Metric",
          "Q1 2026",
          "Change"
        ],
        "rows": [
          [
            "Revenue",
            "$12,249,757",
            "+16.19%"
          ],
          [
            "Operating income",
            "$3,956,997",
            "+18.23%"
          ],
          [
            "Operating margin",
            "32.30%",
            "+55.6 bps"
          ],
          [
            "Incremental margin",
            "35.74%",
            "One historical observation"
          ]
        ]
      },
      "audio": "../audio/calculation-example/slide-04.mp3?v=cedar-20260728-r1",
      "narration": {
        "script": "One source block supports consistent views. Revenue grew 16.19 percent, operating income 18.23 percent, and operating margin rose from 31.75 to 32.30 percent—a 55.6-basis-point expansion.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/calculation-example/slide-04.mp3?v=cedar-20260728-r1",
        "durationSeconds": 15.408,
        "sha256": "acb394f069e0b2e8ea0485f9ef5c32db894be235435f559a859abcdb192bb274",
        "generationProvider": "openai_api",
        "generationEndpoint": "/v1/audio/speech",
        "generationModel": "gpt-4o-mini-tts-2025-12-15",
        "voiceProfile": "cedar",
        "responseFormat": "mp3",
        "speed": 1.05
      }
    },
    {
      "eyebrow": "Decomposed bridge",
      "title": "Revenue change minus expense change reconciles exactly to operating-income change.",
      "lead": "The bridge explains movement instead of merely reporting endpoints, while a closure check proves the pieces reconcile.",
      "durationMs": 13760,
      "bullets": [
        "Revenue change: +$1,706,956 thousand.",
        "Total expense change: +$1,096,958 thousand.",
        "Operating-income change: +$609,998 thousand; closure gap: zero."
      ],
      "artifact": {
        "type": "table",
        "label": "Operating-income bridge",
        "toolbar": "Q1 2026 minus Q1 2025; USD thousands",
        "columns": [
          "Bridge component",
          "Change",
          "Role"
        ],
        "rows": [
          [
            "Revenue",
            "+1,706,956",
            "Starting change"
          ],
          [
            "Cost of revenues",
            "+625,091",
            "Largest expense increase"
          ],
          [
            "S&M + T&D + G&A",
            "+471,867",
            "Other expense increases"
          ],
          [
            "Operating income",
            "+609,998",
            "Revenue change − expense change"
          ],
          [
            "Closure gap",
            "0",
            "PASS"
          ]
        ]
      },
      "audio": "../audio/calculation-example/slide-05.mp3?v=cedar-20260728-r1",
      "narration": {
        "script": "The bridge explains the change. Revenue rose about 1.7 billion dollars; expenses about 1.1 billion. The roughly 610 million difference equals the operating-income increase, and the bridge closes to zero.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/calculation-example/slide-05.mp3?v=cedar-20260728-r1",
        "durationSeconds": 12.96,
        "sha256": "24d3d5826b88e567f4ca9b1a142312036e6c6e8c3176ec1a28499a947c71af30",
        "generationProvider": "openai_api",
        "generationEndpoint": "/v1/audio/speech",
        "generationModel": "gpt-4o-mini-tts-2025-12-15",
        "voiceProfile": "cedar",
        "responseFormat": "mp3",
        "speed": 1.05
      }
    },
    {
      "eyebrow": "Scenario mechanics",
      "title": "Assumptions change the mechanics—not pasted outputs.",
      "lead": "Illustrative Q1 2027 inputs are isolated from historical facts so sensitivity can be explored without disguising a scenario as a forecast.",
      "durationMs": 16328,
      "bullets": [
        "Base mechanics use an explicit revenue-growth assumption.",
        "Expense ratios remain visible and editable.",
        "Outputs recalculate to about $14.23B revenue and 32.78% margin."
      ],
      "artifact": {
        "type": "table",
        "label": "Illustrative Q1 2027 mechanics",
        "toolbar": "Not Netflix guidance or a forecast",
        "columns": [
          "Assumption or output",
          "Base case",
          "Boundary"
        ],
        "rows": [
          [
            "Revenue growth",
            "16.19%",
            "Illustrative input"
          ],
          [
            "Revenue",
            "$14,232,993",
            "Formula output; USD thousands"
          ],
          [
            "Operating income",
            "$4,665,805",
            "Formula output; USD thousands"
          ],
          [
            "Operating margin",
            "32.78%",
            "Changes with assumptions"
          ]
        ]
      },
      "audio": "../audio/calculation-example/slide-06.mp3?v=cedar-20260728-r1",
      "narration": {
        "script": "Scenarios change assumptions, not pasted outputs. These illustrative Q1 2027 mechanics isolate growth and expense ratios, then recalculate revenue, operating income, and margin. This is sensitivity analysis, not Netflix guidance or a forecast.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/calculation-example/slide-06.mp3?v=cedar-20260728-r1",
        "durationSeconds": 15.528,
        "sha256": "1d517abe5f5d7c9cf67065014015fcc3ca2e7eaebee462523f82d7f56b730650",
        "generationProvider": "openai_api",
        "generationEndpoint": "/v1/audio/speech",
        "generationModel": "gpt-4o-mini-tts-2025-12-15",
        "voiceProfile": "cedar",
        "responseFormat": "mp3",
        "speed": 1.05
      }
    },
    {
      "eyebrow": "Validation boundary",
      "title": "A result is not verified until checks and source attestation pass.",
      "lead": "Internal formulas can prove arithmetic consistency, but they cannot independently prove that a human transcribed every source value correctly.",
      "durationMs": 13664,
      "bullets": [
        "Formula-driven model checks currently pass.",
        "Independent source transcription attestation remains REVIEW.",
        "The combined status refuses to hide the unresolved step."
      ],
      "artifact": {
        "type": "compare",
        "label": "Two different kinds of assurance",
        "panels": [
          {
            "tone": "good",
            "title": "Calculation status",
            "stat": "PASS",
            "lines": [
              "Bridge closes to zero",
              "Margins and basis points reconcile",
              "Scenario outputs remain formula-driven"
            ]
          },
          {
            "tone": "bad",
            "title": "Source attestation",
            "stat": "REVIEW",
            "lines": [
              "Verifier and date still required",
              "Official filing references are recorded",
              "Human evidence check stays separate"
            ]
          }
        ]
      },
      "audio": "../audio/calculation-example/slide-07.mp3?v=cedar-20260728-r1",
      "narration": {
        "script": "Formula checks prove internal consistency, not source transcription. The model shows calculation status as pass and source attestation as review, keeping the unresolved human step visible.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/calculation-example/slide-07.mp3?v=cedar-20260728-r1",
        "durationSeconds": 12.864,
        "sha256": "0de8437aa5288ae4a60fb4c601b18527ec4fc7922a96b0be7fe7ee27d8b9d294",
        "generationProvider": "openai_api",
        "generationEndpoint": "/v1/audio/speech",
        "generationModel": "gpt-4o-mini-tts-2025-12-15",
        "voiceProfile": "cedar",
        "responseFormat": "mp3",
        "speed": 1.05
      }
    },
    {
      "eyebrow": "Governed AI boundary",
      "title": "AI can recover structure. It should not own the math.",
      "lead": "AI is useful at bounded input exceptions; deterministic formulas and explicit validation should remain authoritative.",
      "durationMs": 13712,
      "bullets": [
        "A difficult official PDF page produced zero deterministic tables.",
        "One bounded recovery returned 13 reviewable rows at an estimated $0.0095.",
        "Recovered structure still requires validation before formulas use it."
      ],
      "artifact": {
        "type": "compare",
        "label": "Secondary proof: bounded PDF exception",
        "panels": [
          {
            "tone": "bad",
            "title": "Deterministic baseline",
            "stat": "0 tables found",
            "lines": [
              "Failure recorded",
              "No invented cells",
              "Rest of workflow continues"
            ]
          },
          {
            "tone": "good",
            "title": "Bounded AI recovery",
            "stat": "13 reviewable rows",
            "lines": [
              "One official page only",
              "Source and cost retained",
              "Deterministic math remains downstream"
            ]
          }
        ]
      },
      "audio": "../audio/calculation-example/slide-08.mp3?v=cedar-20260728-r1",
      "narration": {
        "script": "AI can recover structure, but should not own the math. In this bounded PDF exception, parsing found zero tables; one-page recovery returned 13 reviewable rows with source, cost, and review attached.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/calculation-example/slide-08.mp3?v=cedar-20260728-r1",
        "durationSeconds": 12.912,
        "sha256": "ef47e1315930bfc4d8e31afdcc9b92e417fe04a1c7e837b66e4b470358bb3ea0",
        "generationProvider": "openai_api",
        "generationEndpoint": "/v1/audio/speech",
        "generationModel": "gpt-4o-mini-tts-2025-12-15",
        "voiceProfile": "cedar",
        "responseFormat": "mp3",
        "speed": 1.05
      }
    },
    {
      "eyebrow": "The transferable offer",
      "title": "The contract transfers; the financial example does not have to.",
      "lead": "The same discipline can support pricing, forecasts, reconciliations, KPI models, capacity plans, and spreadsheet-backed workflows.",
      "durationMs": 14192,
      "bullets": [
        "Start with one bounded decision and calculation contract.",
        "Build the formulas and checks in a reviewable operating surface.",
        "Automate only the accepted workflow."
      ],
      "artifact": {
        "type": "steps",
        "label": "A small, trustworthy engagement",
        "steps": [
          {
            "icon": "1",
            "title": "Scope",
            "copy": "Name one decision, its inputs, and definitions."
          },
          {
            "icon": "2",
            "title": "Model",
            "copy": "Build explicit formulas and assumptions."
          },
          {
            "icon": "3",
            "title": "Verify",
            "copy": "Exercise checks, evidence, and failure paths."
          },
          {
            "icon": "4",
            "title": "Automate",
            "copy": "Scale only the reviewed calculation contract."
          }
        ]
      },
      "audio": "../audio/calculation-example/slide-09.mp3?v=cedar-20260728-r1",
      "narration": {
        "script": "The financial model is one example. The contract transfers to pricing, forecasts, reconciliations, KPIs, and capacity plans. Start with one decision, verify it, then automate only accepted logic.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/calculation-example/slide-09.mp3?v=cedar-20260728-r1",
        "durationSeconds": 13.392,
        "sha256": "95a22f3974f3fe218ca0981816ba4470ca4ae3c341070dba289c79a7c0e228f2",
        "generationProvider": "openai_api",
        "generationEndpoint": "/v1/audio/speech",
        "generationModel": "gpt-4o-mini-tts-2025-12-15",
        "voiceProfile": "cedar",
        "responseFormat": "mp3",
        "speed": 1.05
      }
    }
  ]
};
