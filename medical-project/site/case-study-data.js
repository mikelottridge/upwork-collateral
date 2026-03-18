window.CASE_STUDY = {
  eyebrow: "Client project: healthcare document workflow",
  theme: {
    accent: "#93412f",
    "accent-soft": "rgba(147, 65, 47, 0.12)",
    "accent-2": "#246a73",
    "accent-2-soft": "rgba(36, 106, 115, 0.12)",
  },
  title: "From PDF Lab Reports to a Physician-Controlled Treatment Plan",
  lead:
    "A physician working across multiple PDF lab reports needs more than extraction. The workflow must surface what matters, support differential diagnosis research, and let the physician revise the treatment logic before a patient-ready report is delivered.",
  heroVisual: {
    src: "../screenshots/hero-image.png",
    alt: "Clinician reviewing structured findings from PDF lab reports beside a monitor showing charts and organized results.",
    caption:
      "The system turns scattered lab reports into a patient-level view, a physician heads-up, an editable decision tree, and a revisable treatment plan inside one application.",
  },
  about:
    "This case study shows Mike’s fit for high-trust, document-heavy healthcare workflows where AI output must stay reviewable and physician-controlled before it reaches a patient.",
  approach:
    "The workflow keeps extraction, differential research, treatment logic, and final drafting visible instead of hiding everything inside one opaque prompt.",
  quote: {
    text: "\"Michael is very skilled and easy to work with.\"",
    attribution: "Verified Upwork client review for the lab PDF analysis project",
  },
  tags: [
    "Physician-in-the-loop",
    "Document workflow",
    "PDF lab reports",
    "Differential diagnosis support",
    "Decision-tree UI",
  ],
  signals: ["Patient-level view", "Physician heads-up", "Editable decision tree"],
  metrics: [
    { value: "Patient-level view", label: "Across many reports" },
    { value: "Differential research", label: "Before final drafting" },
    { value: "Editable treatment logic", label: "Physician controlled" },
    { value: "Dual output", label: "Physician + patient" },
  ],
  footerNote:
    "Built with synthetic data for public use. The emphasis is workflow design, application structure, and review-ready output.",
  defaultDurationMs: 7000,
  audioRate: 1.1,
  slides: [
    {
      eyebrow: "Overview",
      title: "One patient story from many lab reports.",
      lead:
        "A physician working across many lab reports for one patient needs a patient-level view, targeted differential research, an editable treatment plan, and a patient-ready report before the workflow is truly useful.",
      audio: "../audio/slide-01.mp3",
      bullets: [
        "The physician needs to see what looks clinically important before spending more time on manual review.",
        "The workflow combines extraction, differential research, physician chat, and treatment-plan revision inside one application.",
      ],
      artifact: {
        type: "metrics",
        label: "What changed for the physician",
        items: [
          { label: "Starting point", value: "Scattered reports across providers" },
          { label: "New view", value: "One patient-level picture" },
          { label: "Clinical support", value: "Heads-up + differential research" },
          { label: "Final delivery", value: "Treatment plan + patient report" },
        ],
      },
    },
    {
      eyebrow: "Problem",
      title: "The physician needed the patient-level picture, not one report at a time.",
      lead:
        "The challenge is combining multiple lab reports for one patient, normalizing different provider layouts, and spotting clinically meaningful clusters fast enough to guide physician attention.",
      audio: "../audio/slide-02.mp3",
      bullets: [
        "Manual review consumes physician time before useful reasoning can even start.",
        "When abnormal patterns span more than one report, a one-shot prompt hides too much of the logic to trust.",
      ],
      artifact: {
        type: "document",
        label: "From source document to structured target",
        pages: [
          {
            label: "Source PDFs",
            title: "Separate PDF lab reports",
            sections: [
              { title: "Provider variation", copy: "PDF lab reports from major providers such as Labcorp are readable to a human but still need normalization before useful automation can happen.", lines: ["", "mid"] },
              { title: "Cross-report context", copy: "Meaningful abnormalities may only become obvious when results are viewed together across reports.", lines: ["", "short"] },
              { title: "Clinical narrative", copy: "Notes and context still need to survive the workflow for downstream physician review.", lines: ["mid"] },
            ],
          },
          {
            label: "Target state",
            title: "Unified patient review output",
            sections: [
              { title: "Normalized findings", copy: "Values from multiple PDF lab reports land in stable slots instead of staying trapped in page layout.", lines: ["", "short"] },
              { title: "Abnormal clusters", copy: "Outliers and related findings stay visible as patterns instead of isolated numbers.", lines: ["mid"] },
              { title: "Heads-up summary", copy: "The output is shaped to direct physician attention before the final report is prepared.", lines: ["short"] },
            ],
          },
        ],
      },
    },
    {
      eyebrow: "Workflow",
      title: "Five narrow stages keep the clinical reasoning visible at every step.",
      lead:
        "The workflow separates ingestion, patient-level aggregation, differential research, physician review, and final drafting so the reasoning stays reviewable instead of disappearing into one opaque pass.",
      audio: "../audio/slide-03.mp3",
      bullets: [
        "Each stage answers a specific question and preserves the context needed for the next one.",
        "That makes it easier for the physician to trust the workflow and redirect it when needed.",
      ],
      artifact: {
        type: "pipeline",
        label: "Processing flow",
        steps: [
          { icon: "1", title: "Ingest", copy: "Load multiple PDF lab reports for one patient." },
          { icon: "2", title: "Aggregate", copy: "Normalize and combine results into one patient-level view." },
          { icon: "3", title: "Investigate", copy: "Research abnormal clusters and likely differentials." },
          { icon: "4", title: "Review", copy: "Give the physician a heads-up plus chat-based follow-up." },
          { icon: "5", title: "Prepare", copy: "Generate and revise the final patient-ready report and treatment plan." },
        ],
      },
    },
    {
      eyebrow: "Extraction",
      title: "Result clusters can be linked to targeted differential research.",
      lead:
        "The key intermediate asset is a patient-level view that groups related findings together. Once those clusters are visible, the workflow can attach targeted differential research and produce a useful physician heads-up.",
      audio: "../audio/slide-04.mp3",
      bullets: [
        "The point is not raw extraction alone. It is making abnormal clusters legible enough to support differential diagnosis research.",
        "That gives the physician a better starting point for review than disconnected report pages.",
      ],
      artifact: {
        type: "cluster-map",
        label: "From lab-result clusters to physician heads-up",
        leftLabel: "Abnormal clusters",
        middleTitle: "Pattern review",
        middleCopy: "Grouped findings are compared across reports, then routed into targeted research instead of treated as isolated values.",
        rightLabel: "Differential research",
        clusters: [
          { title: "Inflammation cluster", items: ["Neutrophil shift preserved", "CBC context retained", "Repeat abnormality visible"] },
          { title: "Metabolic / liver cluster", items: ["CMP outlier retained", "Cross-report comparison", "Medication-review cue"] },
          { title: "Follow-up cluster", items: ["Prior trend comparison", "Risk signal stays linked", "Research question queued"] },
        ],
        differentials: [
          { title: "Targeted differential review", copy: "Research the most plausible concerns rather than searching from scratch." },
          { title: "Physician heads-up", copy: "Surface what deserves attention before the physician drafts the final response." },
          { title: "Documented support", copy: "Keep the supporting findings attached to each concern for later review." },
        ],
        summary: {
          title: "Why this matters",
          copy: "The physician gets a reasoned starting point: which clusters matter, what they may point to, and what deserves follow-up before treatment planning begins.",
        },
      },
    },
    {
      eyebrow: "Application",
      title: "A physician-editable decision tree drives the treatment plan and can be revised at any time.",
      lead:
        "The strongest differentiator is not extraction. It is a physician-controlled decision tree that shapes the treatment plan, plus a flexible interface for revising that logic and regenerating the output when needed.",
      audio: "../audio/slide-05.mp3",
      bullets: [
        "Mike and the physician defined the decision tree together so the treatment logic matched real clinical judgment.",
        "The physician can adjust the tree, request more research through chat, and regenerate the treatment plan without rebuilding the workflow.",
      ],
      artifact: {
        type: "decision-tree",
        label: "Physician-editable treatment logic",
        root: {
          title: "Patient case review",
          copy: "Structured findings, cluster-based research, and physician questions feed one visible treatment-planning path.",
        },
        branches: [
          {
            label: "Clarify",
            title: "Need more research?",
            copy: "The physician can ask follow-up questions before committing to treatment logic.",
            children: [
              { title: "Request deeper research", copy: "Use chat to investigate an abnormal cluster or differential in more detail." },
              { title: "Refine interpretation", copy: "Clarify what the current findings do and do not support." },
            ],
          },
          {
            label: "Decide",
            title: "Adjust decision-tree logic",
            copy: "The treatment plan follows physician-defined branches instead of an opaque one-shot answer.",
            children: [
              { title: "Edit branch conditions", copy: "Mike and the physician shaped the logic together and updated it as needed." },
              { title: "Regenerate plan", copy: "The plan updates when the physician revises the decision tree." },
            ],
          },
          {
            label: "Deliver",
            title: "Prepare final report",
            copy: "Once the physician is satisfied, the workflow produces a patient-ready explanation.",
            children: [
              { title: "Revise patient language", copy: "Adjust the final report through the same interface before delivery." },
              { title: "Preserve auditability", copy: "Keep the visible path from findings to treatment recommendation." },
            ],
          },
        ],
        footer: {
          title: "Clinical governance value",
          copy: "The physician stays in control of the treatment logic. AI supports the decision path, but the clinician can inspect it, change it, and approve the final result.",
        },
      },
    },
    {
      eyebrow: "Transformation",
      title: "Manual lab review becomes an adaptive clinical workflow.",
      lead:
        "The outcome is not just faster processing. It is a more usable workflow: less manual cross-report triage, more structured differential research, and a cleaner physician-controlled path into the treatment plan and final report.",
      audio: "../audio/slide-06.mp3",
      bullets: [
        "This is the shift from manual cross-report review to a structured workflow with physician sign-off.",
        "The bigger win is clinical clarity and control, not just faster output.",
      ],
      artifact: {
        type: "compare",
        label: "Manual vs. structured workflow",
        panels: [
          {
            tone: "bad",
            title: "Before",
            stat: "Manual cross-report review",
            lines: [
              "Read separate lab reports one by one and mentally combine the patient story.",
              "Do ad hoc follow-up research before a useful differential begins to form.",
              "Rewrite findings and treatment thinking manually with little process visibility.",
            ],
          },
          {
            tone: "good",
            title: "After",
            stat: "Structured workflow with physician sign-off",
            lines: [
              "Normalize many reports into one patient-level view before reasoning starts.",
              "Surface an immediate physician heads-up plus chat-driven research and clarification.",
              "Let the physician revise the decision tree, treatment plan, and final patient report in one interface.",
            ],
          },
        ],
      },
    },
    {
      eyebrow: "Outputs",
      title: "The system produces both a physician heads-up and a final patient report.",
      lead:
        "The deliverable is shaped for two audiences: an immediate physician-facing heads-up on what looks important, and a final patient-facing report that can be revised before delivery.",
      audio: "../audio/slide-07.mp3",
      bullets: [
        "The physician can request additional research or clarification before the final report is generated.",
        "The treatment plan and patient report stay editable through the same application workflow.",
      ],
      artifact: {
        type: "document",
        label: "Synthetic output mockups",
        pages: [
          {
            label: "Physician page",
            title: "Clinical heads-up summary",
            sections: [
              { title: "Abnormal clusters", copy: "Key patterns are summarized first so the physician gets an immediate heads-up on what may require attention.", lines: ["", "short"] },
              { title: "Differential research", copy: "Candidate concerns and supporting research are attached to the case before treatment planning begins.", lines: ["", "mid"] },
              { title: "Decision tree inputs", copy: "The physician can see what logic will shape the treatment plan and adjust it if needed.", lines: ["mid"] },
            ],
          },
          {
            label: "Patient page",
            title: "Final patient-ready report",
            sections: [
              { title: "Treatment plan", copy: "The final treatment plan is generated from the adjustable decision tree rather than locked into one opaque pass.", lines: ["", "short"] },
              { title: "Patient explanation", copy: "The report is shaped for customer delivery, not just internal clinician review.", lines: ["", "mid"] },
              { title: "Revision loop", copy: "The physician can revise the report through chat before final delivery.", lines: ["mid"] },
            ],
          },
        ],
      },
    },
    {
      eyebrow: "Value",
      title: "Built for physician-in-the-loop healthcare workflows that cannot rely on one-shot AI.",
      lead:
        "If your workflow involves structured documents, staged AI reasoning, physician review, and a treatment plan that must remain editable before delivery, this is the kind of contract work Mike is a strong fit for.",
      audio: "../audio/slide-08.mp3",
      bullets: [
        "The domain here is healthcare, but the broader pattern is document-heavy, human-in-the-loop workflow automation.",
        "If you found this case study through Upwork or LinkedIn and your workflow looks similar, reach out there directly.",
      ],
      tags: ["Auditability", "Physician-in-the-loop", "Decision tree", "Treatment plan"],
      artifact: {
        type: "metrics",
        label: "Why this pattern matters",
        items: [
          { label: "Document load", value: "Many reports, one patient view" },
          { label: "AI role", value: "Support research, not replace judgment" },
          { label: "Control model", value: "Physician-guided decision tree" },
          { label: "Final output", value: "Treatment plan + patient report" },
        ],
      },
    },
  ],
};
