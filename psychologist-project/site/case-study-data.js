window.CASE_STUDY = {
  eyebrow: "Client project: clinical reporting system",
  theme: {
    bg: "#f5f4f1",
    panel: "#ffffff",
    "panel-subtle": "#f7f8fb",
    ink: "#2d3142",
    muted: "#6b7280",
    line: "#ddd9d1",
    accent: "#4a9b8e",
    "accent-soft": "rgba(74, 155, 142, 0.12)",
    "accent-2": "#c9973a",
    "accent-2-soft": "rgba(201, 151, 58, 0.12)",
    "hero-bg": "#1b2a4a",
    "hero-bg-2": "#243660",
    "hero-bg-3": "#0d1c33",
    "hero-muted": "#aabbd4",
    "nav-bg": "#11233e",
    "font-display": "\"Trebuchet MS\", \"Avenir Next\", \"Segoe UI\", sans-serif",
    "font-body": "\"Calibri\", \"Segoe UI\", sans-serif",
    "font-ui": "\"Trebuchet MS\", \"Segoe UI\", sans-serif",
  },
  title: "From Assessment Data to Patient-Ready Reports",
  lead:
    "A long-running Python and Flask system for longitudinal analysis, automated chart generation, multilingual patient summaries, and delivery-ready clinical reporting.",
  heroVisual: {
    src: "../screenshots/upwork-thumbnail-final.png",
    alt: "Psychologist explaining a report to a patient at a table.",
    caption:
      "The value of the system was not just analysis. It was making results clear enough that a practitioner could explain them and a patient could understand them.",
  },
  quote: {
    text: "\"I can highly recommend Michael for your software development needs. Michael has been consistent in delivering quality work.\"",
    attribution: "Verified Upwork client review",
  },
  tags: [
    "Python / Flask",
    "Longitudinal analysis",
    "Report generation",
    "Multilingual output",
  ],
  signals: ["Expert-Vetted", "100% Job Success", "1,900+ Upwork hours"],
  metrics: [
    { value: "470 hrs", label: "Long-running engagement" },
    { value: "5.0 / 5.0", label: "Client rating" },
    { value: "Python / Flask", label: "Application stack" },
    { value: "Report-ready", label: "Final output" },
  ],
  footerNote:
    "Built with synthetic data for public use. The emphasis is workflow value, reporting shape, and application structure rather than confidential client content.",
  defaultDurationMs: 7200,
  audioRate: 1.1,
  slides: [
    {
      eyebrow: "The challenge",
      title: "Raw assessment data does not explain itself.",
      lead:
        "The core problem was not capturing assessment data. It was carrying that data forward into something a practitioner and patient could actually use: trend views, readable summaries, and finished reports.",
      audio: "../audio/slide-01.mp3",
      bullets: [
        "Large volumes of repeated assessments were hard to interpret when they stayed in raw tables.",
        "The value came from turning analysis into communication, not from analysis alone.",
      ],
      artifact: {
        type: "table",
        label: "Synthetic assessment dataset snapshot",
        toolbar: "Assessment dataset snapshot",
        columns: ["Client batch", "Period", "Status"],
        rows: [
          ["Batch A", "T1", { type: "status", value: "captured" }],
          ["Batch A", "T2", { type: "status", value: "compared" }],
          ["Batch B", "T1", { type: "status", value: "queued" }],
          ["Batch B", "T3", { type: "status", value: "translated" }],
        ],
      },
    },
    {
      eyebrow: "Workflow",
      title: "One path from intake to delivery.",
      lead:
        "The system linked intake, longitudinal analysis, chart generation, and report assembly into one repeatable workflow. That reduced manual handoffs and made the reporting process usable in practice.",
      audio: "../audio/slide-02.mp3",
      bullets: [
        "The workflow mattered as much as the calculations inside it.",
        "Each stage existed to move the client closer to a finished deliverable.",
      ],
      artifact: {
        type: "pipeline",
        label: "Reporting workflow",
        steps: [
          { icon: "1", title: "Intake", copy: "Load assessment datasets and repeated-measure records." },
          { icon: "2", title: "Analyze", copy: "Compute longitudinal views, comparisons, and trend signals." },
          { icon: "3", title: "Chart", copy: "Render visual outputs suitable for clinical interpretation." },
          { icon: "4", title: "Report", copy: "Assemble patient-facing summaries and final deliverables." },
        ],
      },
    },
    {
      eyebrow: "Analysis",
      title: "Longitudinal trends become easier to explain.",
      lead:
        "One of the biggest gains came from making change over time visible. The workflow turned repeated measurements into chartable trajectories that were easier to interpret and easier to communicate.",
      audio: "../audio/slide-03.mp3",
      bullets: [
        "The system emphasized trajectory and comparison instead of isolated scores.",
        "That made the output more useful in real clinical conversations.",
      ],
      artifact: {
        type: "line-chart",
        label: "Synthetic longitudinal trend",
        axis: { x: "assessment period", y: "composite score" },
        labels: ["T1", "T2", "T3", "T4", "T5", "T6"],
        values: [42, 55, 68, 74, 93, 108],
        caption: "Illustrative trend shape only. The point is the workflow pattern: repeated inputs turned into a clear trajectory.",
      },
    },
    {
      eyebrow: "Report output",
      title: "Analysis lived inside the report.",
      lead:
        "The system did not stop at charts. It carried those outputs into structured, patient-facing reports that could be used directly in communication.",
      audio: "../audio/slide-04.mp3",
      bullets: [
        "Charts, interpretation, and report structure stayed together in one output path.",
      ],
      artifact: {
        type: "document",
        label: "Synthetic report output",
        pages: [
          {
            label: "Report page",
            title: "Clinician-ready review",
            sections: [
              { title: "Trend graphic", copy: "Visual trajectory embedded directly in the report instead of exported as a separate artifact.", lines: ["", "short"] },
              { title: "Interpretation notes", copy: "Readable context beside the chart so the output can be used immediately.", lines: ["", "mid"] },
            ],
          },
        ],
      },
    },
    {
      eyebrow: "Project results",
      tone: "dark",
      title: "A long-running engagement with durable trust.",
      lead:
        "The strongest proof here is not a flashy demo. It is that the work was useful enough to sustain a long-running client relationship around a high-trust, document-heavy workflow.",
      audio: "../audio/slide-05.mp3",
      bullets: [
        "This project combined analytics, reporting, and workflow design in one operational system.",
        "The engagement itself is evidence that the work held up in real use.",
      ],
      artifact: {
        type: "metrics",
        label: "Signals that matter to a prospective client",
        items: [
          { label: "Logged on engagement", value: "470 hrs" },
          { label: "Client rating", value: "5.0 / 5.0" },
          { label: "Workflow pattern", value: "Data to report" },
          { label: "Environment", value: "High-trust reporting" },
        ],
      },
    },
    {
      eyebrow: "Client fit",
      tone: "dark",
      title: "Built for data-to-report workflows.",
      lead:
        "If your project involves data that has to become something a client, patient, or stakeholder can actually read and use, this is the kind of work Mike is built for.",
      audio: "../audio/slide-06.mp3",
      bullets: [
        "Strongest where document output matters as much as the underlying logic.",
      ],
      tags: ["High-trust", "Data to report", "Client-facing output", "Code-first"],
      artifact: {
        type: "quote",
        label: "Client signal",
        text: "I can highly recommend Michael for your software development needs. Michael has been consistent in delivering quality work.",
        attribution: "Verified Upwork client review",
        pills: ["Python / Flask", "Report generation", "Longitudinal analysis"],
      },
    },
  ],
};
