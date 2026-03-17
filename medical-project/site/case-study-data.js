window.CASE_STUDY = {
  eyebrow: "Client project: healthcare document workflow",
  theme: {
    accent: "#93412f",
    "accent-soft": "rgba(147, 65, 47, 0.12)",
    "accent-2": "#246a73",
    "accent-2-soft": "rgba(36, 106, 115, 0.12)",
  },
  title: "Turning Lab Report PDFs Into Structured, Reviewable Data",
  lead:
    "A code-first healthcare workflow for turning dense lab-report PDFs into structured findings, staged AI analysis, and review-ready outputs inside a usable application shell.",
  about:
    "Mike is an Expert-Vetted Upwork freelancer with 1,900+ hours, a 100% Job Success Score, and an MSEE from Georgia Tech. His strongest fit is document-heavy, high-trust workflow work where technical implementation and practical delivery both matter.",
  approach:
    "Clients usually bring Mike in when a workflow is partly working but too brittle to trust. He scopes tightly, makes intermediate states visible, improves reliability, and delivers something a team can actually operate.",
  quote: {
    text: "\"Mike provided a solution that worked with our constraints.\"",
    attribution: "Upwork client review",
  },
  tags: [
    "Python",
    "Flask",
    "Healthcare workflows",
    "PDF extraction",
    "AI orchestration",
  ],
  signals: ["Deployable app", "Review-oriented outputs", "Synthetic visuals"],
  metrics: [
    { value: "60 hrs", label: "Upwork engagement" },
    { value: "4.9 / 5", label: "Client rating" },
    { value: "4 stages", label: "Processing flow" },
    { value: "Structured", label: "Review-ready output" },
  ],
  footerNote:
    "Built with synthetic data for public use. The emphasis is workflow design, application structure, and review-ready output.",
  defaultDurationMs: 7000,
  audioRate: 1.1,
  slides: [
    {
      eyebrow: "Overview",
      title: "A contract-ready workflow for medical PDFs.",
      lead:
        "This engagement produced a Python and Flask system that moved beyond prompt experiments into a usable, staged document-processing workflow.",
      audio: "../audio/slide-01.mp3",
      bullets: [
        "The client needed a dependable workflow for high-trust, document-heavy processing.",
        "The result combined extraction, orchestration, and review-oriented output packaging inside a real application.",
      ],
      artifact: {
        type: "metrics",
        label: "What this project delivered",
        items: [
          { label: "Typical fit", value: "Document-heavy client workflows" },
          { label: "Delivery mode", value: "Python + Flask application" },
          { label: "Approach", value: "Staged AI processing" },
          { label: "Use case", value: "Healthcare PDF handling" },
        ],
      },
    },
    {
      eyebrow: "Problem",
      title: "Messy PDFs become structured, reviewable data.",
      lead:
        "The hard part was not generating text. It was turning inconsistent source documents into something structured enough to inspect, debug, and use downstream.",
      audio: "../audio/slide-02.mp3",
      bullets: [
        "Manual review consumed time before useful reasoning could even start.",
        "A single-prompt pass would have hidden too much of the intermediate logic.",
      ],
      artifact: {
        type: "document",
        label: "From source document to structured target",
        pages: [
          {
            label: "Source PDF",
            title: "Redacted lab report",
            sections: [
              { title: "Mixed layout", copy: "Sections, ranges, notes, and flags appear in formats that work for manual reading but not for direct automation.", lines: ["", "mid"] },
              { title: "Values + notes", copy: "Important findings are mixed with layout noise and document-specific formatting.", lines: ["", "short"] },
              { title: "Unstructured narrative", copy: "Narrative commentary still needs to be preserved for downstream review.", lines: ["mid"] },
            ],
          },
          {
            label: "Target state",
            title: "Structured review output",
            sections: [
              { title: "Normalized findings", copy: "Section names, values, and notes land in stable slots instead of raw page layout.", lines: ["", "short"] },
              { title: "Flags and ranges", copy: "Outliers and context stay visible to the reviewer.", lines: ["mid"] },
              { title: "Review summary", copy: "The output is shaped for the next workflow step instead of a one-off read.", lines: ["short"] },
            ],
          },
        ],
      },
    },
    {
      eyebrow: "Workflow",
      title: "Every processing step is inspectable and debuggable.",
      lead:
        "Each stage had a narrow job: ingest the document, extract structure, reason over the normalized content, and package the result for review.",
      audio: "../audio/slide-03.mp3",
      bullets: [
        "Intermediate states made the workflow easier to validate.",
        "Separating stages reduced the chance of losing context too early.",
      ],
      artifact: {
        type: "pipeline",
        label: "Processing flow",
        steps: [
          { icon: "1", title: "Intake", copy: "Accept and stage a PDF for processing." },
          { icon: "2", title: "Extract", copy: "Pull sections, rows, and notes into a normalized shape." },
          { icon: "3", title: "Reason", copy: "Apply staged AI logic to the structured data." },
          { icon: "4", title: "Package", copy: "Deliver a review-ready output instead of a raw response." },
        ],
      },
    },
    {
      eyebrow: "Extraction",
      title: "Structured extraction makes the analysis usable.",
      lead:
        "The key intermediate asset was a structured view of the document. That made downstream analysis more inspectable and less fragile.",
      audio: "../audio/slide-04.mp3",
      bullets: [
        "Useful extraction preserves section context, value meaning, and review status.",
        "This is the layer that turns an opaque document into a tractable workflow input.",
      ],
      artifact: {
        type: "table",
        label: "Synthetic extraction grid",
        toolbar: "Normalized extraction output",
        columns: ["Section", "Extracted value", "Status"],
        rows: [
          ["CBC Panel", "WNL marker preserved", { type: "status", value: "verified" }],
          ["Lipid Summary", "Flagged range captured", { type: "status", value: "review" }],
          ["Clinician Notes", "Narrative attached", { type: "status", value: "linked" }],
          ["Follow-up", "Suggested context retained", { type: "status", value: "queued" }],
        ],
      },
    },
    {
      eyebrow: "Application",
      title: "A deployable application, not a notebook experiment.",
      lead:
        "The system needed a usable surface around the AI workflow: file intake, workflow state, review checkpoints, and deployable app structure.",
      audio: "../audio/slide-05.mp3",
      bullets: [
        "The app design matters because real users need progression, not just output text.",
        "Deployment and review state were part of the deliverable, not afterthoughts.",
      ],
      artifact: {
        type: "wireframe",
        label: "Synthetic app flow",
        panels: [
          {
            label: "Upload",
            title: "Document intake",
            blocks: [
              { title: "Upload zone", copy: "Accept a new PDF and attach lightweight workflow metadata before processing begins.", lines: [0.86, 0.74], pill: 48 },
              { title: "Job metadata", copy: "Give the workflow a visible starting state instead of treating it like a one-shot prompt.", lines: [0.92, 0.61], pill: 48 },
            ],
          },
          {
            label: "Process",
            title: "Workflow status",
            blocks: [
              { title: "Stage tracker", copy: "Track intake, extraction, reasoning, and packaging as separate visible stages.", lines: [0.84, 0.67], pill: 40 },
              { title: "Extraction preview", copy: "Let a reviewer inspect structured intermediate output before it becomes the final package.", lines: [0.92, 0.56] },
            ],
          },
          {
            label: "Review",
            title: "Output packaging",
            blocks: [
              { title: "Summary panel", copy: "Package findings into a review-ready summary instead of returning a raw block of generated text.", lines: [0.9, 0.72], pill: 34 },
              { title: "Download + handoff", copy: "Create a cleaner handoff into the next clinical or operational step.", lines: [0.76, 0.63] },
            ],
          },
        ],
      },
    },
    {
      eyebrow: "Transformation",
      title: "Manual document triage becomes a staged workflow.",
      lead:
        "The value is easiest to see as a workflow change: less manual document parsing, more structured review, and a much cleaner handoff into the next step.",
      audio: "../audio/slide-06.mp3",
      bullets: [
        "This is the shift from brittle manual reading to repeatable workflow execution.",
        "The bigger win is operational clarity, not just faster output.",
      ],
      artifact: {
        type: "compare",
        label: "Manual vs. structured workflow",
        panels: [
          {
            tone: "bad",
            title: "Before",
            stat: "manual triage",
            lines: [
              "Read every PDF by hand and interpret layout inconsistencies on the fly.",
              "Rewrite findings into ad hoc notes before anyone can review them.",
              "Little visibility into where errors or omissions entered the process.",
            ],
          },
          {
            tone: "good",
            title: "After",
            stat: "staged pipeline",
            lines: [
              "Normalize structure first, then run separated AI stages against cleaner inputs.",
              "Preserve intermediate states so outputs are easier to check and trust.",
              "Hand off a review-ready result instead of a single opaque text block.",
            ],
          },
        ],
      },
    },
    {
      eyebrow: "Outputs",
      title: "Review-ready outputs replace raw generated text.",
      lead:
        "The deliverable is shaped for review: structured findings, visible workflow context, and a summary that can move cleanly into the next step.",
      audio: "../audio/slide-07.mp3",
      bullets: [
        "Review-oriented output is more useful than a generic model response in a high-trust workflow.",
        "The output is easier for a team to inspect, trust, and use in the next step.",
      ],
      artifact: {
        type: "document",
        label: "Synthetic output mockups",
        pages: [
          {
            label: "Findings page",
            title: "Extracted findings",
            sections: [
              { title: "Key values", copy: "Core findings appear in stable sections rather than being buried in free-form text.", lines: ["", "short"] },
              { title: "Flags and ranges", copy: "A reviewer can see what needs attention without re-reading the entire source document.", lines: ["", "mid"] },
              { title: "Linked notes", copy: "Document context is still available when the summary is consumed downstream.", lines: ["mid"] },
            ],
          },
          {
            label: "Summary page",
            title: "Review package",
            sections: [
              { title: "Workflow notes", copy: "Intermediate reasoning state is preserved where it helps with auditability and trust.", lines: ["", "short"] },
              { title: "Decision-support summary", copy: "The result is concise enough to review and structured enough to maintain.", lines: ["", "mid"] },
              { title: "Next-step handoff", copy: "The output is ready to move into the next human or system workflow.", lines: ["mid"] },
            ],
          },
        ],
      },
    },
    {
      eyebrow: "Value",
      title: "The kind of project this work is built for.",
      lead:
        "If your team is drowning in manual document review or relying on brittle AI output, this is the kind of engagement where Mike is a strong fit: document-heavy inputs, a real application surface, and outputs a team can trust enough to use.",
      audio: "../audio/slide-08.mp3",
      bullets: [
        "The domain is healthcare, but the broader pattern is document-heavy workflow automation.",
        "The deliverable is designed to be operated by a team, not admired as a demo.",
      ],
      tags: ["Code-first", "Deployable", "Review-oriented", "Document-heavy"],
      artifact: {
        type: "metrics",
        label: "Why a client hires for this kind of work",
        items: [
          { label: "Best fit", value: "Document-heavy workflows" },
          { label: "Implementation", value: "Python / Flask application" },
          { label: "Operating model", value: "Inspectable AI stages" },
          { label: "Outcome", value: "Structured review output" },
        ],
      },
    },
  ],
};
