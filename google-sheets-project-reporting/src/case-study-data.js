window.CASE_STUDY = {
  "presentationId": "google-sheets",
  "eyebrow": "Google Sheets + Apps Script systems",
  "title": "Custom Google Sheets systems for work your team still does by hand",
  "lead": "I turn one recurring manual workflow around an existing Sheet into a controlled system—using Apps Script for repeatable logic and AI only where language adds value.",
  "about": "The project-reporting system in this walkthrough is a self-built demonstration using sample data. It is not client work or a standalone product.",
  "approach": "Start with one recurring decision, map the fields that support it, agree the acceptance checks, and build the smallest maintainable workflow inside the Google Workspace tools the team already uses.",
  "quote": {
    "text": "The useful pattern is not a new platform. It is a controlled workflow built around the Sheet people already trust.",
    "attribution": "Service principle demonstrated by the working example"
  },
  "tags": ["Google Sheets", "Google Apps Script", "Workflow automation", "Governed AI", "Google Workspace"],
  "signals": ["One decision at a time", "Deterministic core", "AI only where useful"],
  "metrics": [
    {"value": "1 bounded workflow", "label": "Start with the recurring decision that costs manual time"},
    {"value": "3 system layers", "label": "Structured fields, Apps Script logic, and governed AI"},
    {"value": "Explicit checks", "label": "Agree validation rules before anything is trusted"},
    {"value": "Client-owned", "label": "Keep the system inside the existing Google Workspace"}
  ],
  "footerNote": "Working example built by Mike Lottridge with sample data. AI-generated Cedar narration is disclosed; private IDs, keys, emails, and configuration are excluded.",
  "defaultDurationMs": 14000,
  "audioRate": 1,
  "startMode": "idle",
  "slides": [
    {
      "eyebrow": "The recurring-work gap",
      "title": "When the spreadsheet works—but the workflow around it does not",
      "lead": "The Sheet may hold the right facts while recurring decisions still depend on manual filtering, counting, and rewriting.",
      "durationMs": 14000,
      "bullets": ["The source data can already be current.", "Each decision rebuilds filters, counts, and wording.", "Numbers and narrative gain room to drift."],
      "artifact": {
        "type": "compare",
        "label": "Illustrative structure: repeated work versus a controlled workflow",
        "panels": [
          {"tone": "bad", "title": "Recurring manual loop", "stat": "Filter → count → rewrite", "lines": ["Rebuilt for every cycle", "Logic stays undocumented", "Narrative can drift from numbers"]},
          {"tone": "good", "title": "Controlled Sheet workflow", "stat": "Select → validate → produce", "lines": ["Rules are explicit", "Supported facts stay attached", "Failure remains visible"]}
        ]
      },
      "audio": "../audio/service-reframe/slide-01.mp3?v=cedar-20260728",
      "narration": {"script": "Your Google Sheet may already hold the right facts. The manual work around it is the bottleneck: rebuilding filters, counts, and explanations for each recurring decision, with more opportunity for the numbers and narrative to drift.", "sourceType": "recorded-mp3", "asset": "../audio/service-reframe/slide-01.mp3?v=cedar-20260728"}
    },
    {
      "eyebrow": "Self-built sample proof",
      "title": "A working example I built: one Sheet, three controlled workflows",
      "lead": "This self-built sample shows the pattern running. It is evidence of the method—not client work or a standalone product.",
      "durationMs": 18000,
      "bullets": ["Built by me on a sample tracker.", "One dialog drives three reporting jobs.", "Every run requires explicit choices before writing."],
      "artifact": {
        "type": "media", "kind": "image", "label": "Working Apps Script demonstration",
        "src": "../screenshots/dialog-stakeholder-v1.png?v=2",
        "alt": "Self-built Apps Script report dialog using sample project data, with explicit report, project, and provider selections.",
        "objectPosition": "center center", "objectFit": "contain",
        "caption": "Self-built demonstration using sample data. The dialog requires explicit choices before creating an owner-private draft.",
        "pills": ["Sample data", "Explicit choices", "Not client work"]
      },
      "audio": "../audio/service-reframe/slide-02.mp3?v=cedar-20260728",
      "narration": {"script": "This is a self-built demonstration using sample data, not client work. One bound Apps Script dialog turns a project tracker into daily review, workload, and stakeholder-reporting workflows. The point is not this product. It is the controlled pattern: explicit choices before the system writes.", "sourceType": "recorded-mp3", "asset": "../audio/service-reframe/slide-02.mp3?v=cedar-20260728"}
    },
    {
      "eyebrow": "The transferable pattern",
      "title": "The pattern transfers: structured fields, Apps Script logic, governed AI",
      "lead": "The example works because three layers have separate jobs—and the same architecture can support other Sheet-based decisions.",
      "durationMs": 16000,
      "bullets": ["Controlled fields keep source facts trustworthy.", "Apps Script owns calculations and writes.", "AI helps with language, never arithmetic."],
      "artifact": {
        "type": "media", "kind": "image", "label": "Structured source fields in the example",
        "src": "../screenshots/task-tracker-focused-v2.png?v=4",
        "alt": "Sample task tracker illustrating controlled fields beneath a transferable three-layer workflow.",
        "objectPosition": "left top",
        "caption": "The screenshot is one example; the transferable pattern is controlled data, deterministic logic, and governed language generation.",
        "pills": ["Structured fields", "Apps Script logic", "Governed AI"]
      },
      "audio": "../audio/service-reframe/slide-03.mp3?v=cedar-20260728",
      "narration": {"script": "That pattern transfers to other Sheet-based work. Controlled fields keep the source facts trustworthy. Apps Script owns calculations and writes. AI appears only where language helps. Together, those layers turn a spreadsheet into a maintainable operational system.", "sourceType": "recorded-mp3", "asset": "../audio/service-reframe/slide-03.mp3?v=cedar-20260728"}
    },
    {
      "eyebrow": "How work is scoped",
      "title": "Start with one decision, then map data and acceptance checks",
      "lead": "A bounded build begins with the recurring decision, the fields that support it, and the conditions required for trust.",
      "durationMs": 14000,
      "bullets": ["Pick one recurring, high-friction decision.", "Map supporting fields and missing data.", "Agree acceptance checks before any build."],
      "artifact": {
        "type": "pipeline", "label": "A bounded engagement starts before code",
        "steps": [
          {"icon": "1", "title": "Choose", "copy": "Name one recurring decision worth simplifying."},
          {"icon": "2", "title": "Map", "copy": "Connect that decision to real fields and gaps."},
          {"icon": "3", "title": "Check", "copy": "Define what must be true before output is trusted."}
        ]
      },
      "audio": "../audio/service-reframe/slide-04.mp3?v=cedar-20260728",
      "narration": {"script": "A useful build starts with one recurring decision, not a feature list. We map the fields that support it, identify what the data cannot answer, and agree the acceptance checks before any output is trusted.", "sourceType": "recorded-mp3", "asset": "../audio/service-reframe/slide-04.mp3?v=cedar-20260728"}
    },
    {
      "eyebrow": "Example under scrutiny",
      "title": "Back to the example: useful output without invented precision",
      "lead": "The workload report uses only counts the sample Sheet supports and remains useful with AI completely switched off.",
      "durationMs": 19000,
      "bullets": ["Use open, overdue, blocked, and due-soon counts.", "Do not invent utilization without hours.", "Keep deterministic output independent of AI."],
      "artifact": {
        "type": "media", "kind": "image", "compact": true, "label": "Workload evidence from the sample build",
        "src": "../screenshots/workload-focused-v3.png?v=2",
        "alt": "Self-built workload report using supported task counts without an unsupported utilization percentage.",
        "objectPosition": "center top", "objectFit": "contain",
        "caption": "The example reports open, overdue, blocked, and due-soon counts. It does not claim capacity or utilization the source data cannot support.",
        "pills": ["Supported counts", "No false precision", "AI optional"]
      },
      "audio": "../audio/service-reframe/slide-05.mp3?v=cedar-20260728",
      "narration": {"script": "Back in the example, the workload report uses counts the Sheet can actually support: open, overdue, blocked, and due soon. It does not invent utilization because the data contains no hours or capacity. The same output still works with every AI provider switched off.", "sourceType": "recorded-mp3", "asset": "../audio/service-reframe/slide-05.mp3?v=cedar-20260728"}
    },
    {
      "eyebrow": "Governed AI boundary",
      "title": "AI drafts language. Deterministic logic owns the numbers.",
      "lead": "The boundary is enforced in code: scoped facts go out, supported figures come back, and validation failure stays visible.",
      "durationMs": 19000,
      "bullets": ["Send selected facts, never notes or emails.", "Check drafts against source IDs and figures.", "Preserve verified metrics when narrative validation fails."],
      "artifact": {
        "type": "media", "kind": "video", "label": "Governed AI architecture in the sample build",
        "src": "../video/workflow-report-proof.webm?v=2",
        "poster": "../screenshots/security-architecture-redacted-v1.png?v=2",
        "mobileSrc": "../screenshots/security-architecture-mobile-v1.svg?v=2",
        "mobileAlt": "Portrait architecture showing selected Sheet facts, deterministic Apps Script logic, governed AI drafting, and owner-private output.",
        "alt": "Muted working demonstration showing scoped provider selection, validated output, and redacted permission evidence.",
        "autoplay": true, "loop": true, "controls": false, "objectFit": "contain",
        "caption": "The still carries the argument immediately; the muted recording provides secondary execution proof.",
        "pills": ["Scoped facts only", "Figures validated", "Failure stays visible"]
      },
      "audio": "../audio/service-reframe/slide-06.mp3?v=cedar-20260728",
      "narration": {"script": "When AI is used, it drafts language; deterministic logic still owns every number. Only selected task facts and computed aggregates are sent, never notes or emails. Drafts are checked against source IDs and supported figures. If validation fails, verified metrics remain and the narrative is marked unavailable.", "sourceType": "recorded-mp3", "asset": "../audio/service-reframe/slide-06.mp3?v=cedar-20260728"}
    },
    {
      "eyebrow": "The bounded offer",
      "title": "Build the smallest useful system inside tools you already use",
      "lead": "The offer is one bounded workflow inside Google Workspace, with agreed checks, documentation, and a maintainable handover.",
      "durationMs": 13000,
      "bullets": ["One workflow with bounded scope and checks.", "No migration away from Google Workspace.", "Keep a system your team can change."],
      "artifact": {
        "type": "workflow", "label": "Small enough to verify and hand over",
        "steps": [
          {"icon": "1", "title": "Scope", "copy": "Choose one decision and its supporting fields."},
          {"icon": "2", "title": "Build", "copy": "Implement only the workflow and checks it needs."},
          {"icon": "3", "title": "Verify", "copy": "Exercise real inputs, failures, and permissions."},
          {"icon": "4", "title": "Hand over", "copy": "Document operation and future changes."}
        ]
      },
      "audio": "../audio/service-reframe/slide-07.mp3?v=cedar-20260728",
      "narration": {"script": "The offer is deliberately small: one workflow, inside the Google Workspace tools you already use, with agreed checks and documentation. Nothing needs to migrate, and your team keeps a system it can understand, operate, and change.", "sourceType": "recorded-mp3", "asset": "../audio/service-reframe/slide-07.mp3?v=cedar-20260728"}
    },
    {
      "eyebrow": "Next step",
      "title": "Show me the Sheet process you still run by hand",
      "lead": "The next useful step is naming one recurring process—not scoping an entire platform or project.",
      "durationMs": 6520,
      "bullets": ["Name one process you would stop doing manually.", "Bring the Sheet as it is today.", "Use the contact option shown."],
      "artifact": {
        "type": "workflow", "label": "One low-risk next step",
        "steps": [
          {"icon": "1", "title": "Name it", "copy": "Identify the recurring manual process."},
          {"icon": "2", "title": "Bring it", "copy": "Use the Sheet as it exists today."},
          {"icon": "3", "title": "Check fit", "copy": "Confirm the data, decision, and smallest useful scope."}
        ]
      },
      "audio": "../audio/slide-09.mp3?v=cedar-20260725-neutral-cta",
      "narration": {"script": "Use the contact option shown to tell me which Sheet process you want simplified.", "sourceType": "recorded-mp3", "asset": "../audio/slide-09.mp3?v=cedar-20260725-neutral-cta", "durationSeconds": 5.52}
    }
  ]
};