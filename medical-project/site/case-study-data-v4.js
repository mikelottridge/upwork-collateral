window.CASE_STUDY = {
  "presentationId": "medical-guideline-demo-v2",
  "eyebrow": "Client project · physician-controlled lab review",
  "title": "From a flagged lab value to a report you can sign",
  "lead": "I built a custom application that keeps lab results beside their source, flags missing context, and records the physician’s approval before export. Follow one synthetic case or open the sample report.",
  "heroVisual": {
    "src": "../screenshots/hero-image.png",
    "alt": "Physician reviewing lab results at a monitor."
  },
  "quote": {
    "text": "“Michael is very skilled and easy to work with.”",
    "attribution": "Verified Upwork review for the private lab-analysis project"
  },
  "contact": {
    "heading": "Start with one review task",
    "description": "Describe the result you need to check and what you want beside it. A fictional example is enough."
  },
  "startMode": "idle",
  "audioRate": 1,
  "footerNote": "The client’s application is private. The demo uses synthetic lab data and independently written rules based on public guidance.",
  "slides": [
    {
      "eyebrow": "The physician’s question",
      "title": "Can I trace a flagged result before I sign?",
      "lead": "I built a lab-review application for a physician. This independent demo follows one synthetic record through the same review steps.",
      "artifact": {
        "type": "report",
        "label": "Preventive laboratory panel · DEMO-LAB-0042",
        "blocks": [
          {
            "title": "Available",
            "copy": "One panel with four extracted values."
          },
          {
            "title": "Missing",
            "copy": "Earlier kidney results for comparison."
          }
        ]
      },
      "transcript": "Before I sign a lab report, can I trace a flagged result back to the source? That question shaped the workflow I built for a physician. I'll show you how it works with one synthetic record.",
      "audio": "../audio-v4/slide-01.mp3?v=physician-review-1"
    },
    {
      "eyebrow": "Source check",
      "title": "Both kidney values trace back to the same lab panel.",
      "lead": "On page 1, row 6, the eGFR is 72 mL/min/1.73 m². Row 7 gives a urine albumin-to-creatinine ratio (ACR) of 18 mg/g. Compare both entries with the source before reviewing the flag.",
      "artifact": {
        "type": "media",
        "label": "Source panel · DEMO-LAB-0042",
        "src": "../screenshots/demo-01-source-extraction.png",
        "alt": "Source table showing eGFR 72 mL/min/1.73 m² and urine ACR 18 mg/g."
      },
      "transcript": "Start with the kidney result. The extraction points to page one, row six. You can compare the value and its unit with the lab panel, then check the urine result on the next row.",
      "audio": "../audio-v4/slide-02.mp3?v=physician-review-1"
    },
    {
      "eyebrow": "Clinical review",
      "title": "The panel gives today’s values. What came before?",
      "lead": "The demo classifies the kidney results as G2/A1. With no prior result or other marker of kidney damage supplied, the physician reviews the missing context before deciding what to document.",
      "artifact": {
        "type": "media",
        "label": "The review flag for this record",
        "src": "../screenshots/demo-02-guideline-review.png",
        "alt": "Chronicity check warns against inferring CKD from the single result."
      },
      "transcript": "Both values are here. What's missing is a prior kidney result. The software flags that gap for the physician, who decides what the record supports before the report goes out.",
      "audio": "../audio-v4/slide-03.mp3?v=physician-review-1"
    },
    {
      "eyebrow": "Rule history",
      "title": "The physician can change what gets flagged.",
      "lead": "Version 1.3 added a check for prior kidney results. The rule history lets the reviewer see what changed and return to an earlier version.",
      "artifact": {
        "type": "media",
        "label": "Demo rulebook · version history",
        "src": "../screenshots/demo-03-physician-rulebook.png",
        "alt": "Version 1.3 added the chronicity safeguard. Previous versions remain available."
      },
      "transcript": "The physician can change the review rule without waiting for a software release. In this demo, version one point three added a check for prior results. The review screen shows that check for this record.",
      "audio": "../audio-v4/slide-04.mp3?v=physician-review-1"
    },
    {
      "eyebrow": "Report approval",
      "title": "The report can be exported after physician approval.",
      "lead": "Illustrative report wording: “This panel shows an eGFR of 72 mL/min/1.73 m² and a urine ACR of 18 mg/g. No earlier kidney results were supplied for comparison. This record alone does not establish chronic kidney disease.”",
      "artifact": {
        "type": "media",
        "label": "Actual demo approval record · synthetic case",
        "src": "../screenshots/demo-04-approval-audit.png",
        "alt": "The audit records Dr. Demo Reviewer’s approval and then enables PDF and structured-data export."
      },
      "transcript": "Here's the distinction I want the report to preserve. We have results from this panel. We don't have earlier results to compare. The sample PDF shows that wording. The demo records who approved the case before enabling export.",
      "audio": "../audio-v4/slide-05.mp3?v=physician-review-1",
      "links": [
        {
          "label": "Read the illustrative report (PDF)",
          "href": "./sample-lab-review.pdf"
        }
      ]
    },
    {
      "eyebrow": "Your practice",
      "title": "Which result do you look up again before signing?",
      "lead": "Think of one section that sends you back to the original lab report.",
      "artifact": {
        "type": "report",
        "label": "What the reviewer has in one place",
        "blocks": [
          {
            "title": "Evidence",
            "copy": "The source value and the rule that raised the flag."
          },
          {
            "title": "Sign-off",
            "copy": "The physician’s decision and the rule version used for the report."
          }
        ]
      },
      "transcript": "Which result do you have to look up again before you sign a report? Describe one example, using fictional details. We can use it to discuss what your reviewer needs on screen.",
      "audio": "../audio-v4/slide-06.mp3?v=physician-review-1"
    }
  ]
};
