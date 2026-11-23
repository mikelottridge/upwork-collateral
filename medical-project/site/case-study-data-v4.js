window.CASE_STUDY = {
  "presentationId": "medical-guideline-demo-v2",
  "eyebrow": "Client project · physician-controlled lab review",
  "title": "From abnormal labs to a physician-guided treatment plan",
  "lead": "I built a custom lab-review application for a physician. See how a cluster of abnormal results leads to a differential, how published evidence informs the review, and how editing one treatment rule changes the recommendation.",
  "heroVisual": {
    "src": "../screenshots/hero-image.png",
    "alt": "Physician reviewing lab results at a monitor."
  },
  "quote": {
    "text": "“Michael is very skilled and easy to work with.”",
    "attribution": "Verified Upwork review for the private lab-analysis project"
  },
  "contact": {
    "heading": "Start with one treatment decision",
    "description": "Describe one branch you would want to edit in your practice. A fictional example is enough."
  },
  "startMode": "idle",
  "audioRate": 1,
  "footerNote": "The client’s application is private. The demo uses synthetic lab data and independently written rules based on public guidance.",
  "slides": [
    {
      "eyebrow": "The physician’s question",
      "title": "Which abnormal results belong together?",
      "lead": "I built an application that flags abnormal labs, compares possible diagnoses with published evidence, and drafts treatment using rules the physician can edit.",
      "artifact": {
        "type": "report",
        "label": "Two decisions in one review",
        "blocks": [
          {
            "title": "What fits the panel?",
            "copy": "AI groups related findings and proposes explanations for the physician to check."
          },
          {
            "title": "What should the report recommend?",
            "copy": "The physician’s decision tree sets the treatment branch. The physician reviews the draft."
          }
        ]
      },
      "transcript": "A physician gets a panel back with several flags. Which ones belong together? I built an application to help answer that question. It checks possible explanations against published research, then uses the physician's own decision tree to draft a treatment recommendation.",
      "audio": "../audio-v4/slide-01.mp3?v=iron-1"
    },
    {
      "eyebrow": "The full panel",
      "title": "Three of six results fall below the lab’s range.",
      "lead": "Synthetic case IRON-01: a nonpregnant adult woman. Every result is shown against this fictional lab’s reference interval. Low hemoglobin, small red cells and low ferritin form the cluster.",
      "artifact": {
        "type": "table",
        "label": "IRON-01 · illustrative reference intervals",
        "toolbar": "Lab panel",
        "toolbarChip": "Synthetic",
        "columns": [
          "Test",
          "Result",
          "Lab range"
        ],
        "rows": [
          [
            "Hemoglobin",
            "10.6 g/dL · Low",
            "12–16"
          ],
          [
            "MCV",
            "74 fL · Low",
            "80–100"
          ],
          [
            "Ferritin",
            "8 ng/mL · Low",
            "15–150"
          ],
          [
            "WBC",
            "6.2 × 10⁹/L",
            "4–11"
          ],
          [
            "Platelets",
            "280 × 10⁹/L",
            "150–400"
          ],
          [
            "CRP",
            "2 mg/L",
            "0–5"
          ]
        ]
      },
      "transcript": "Here are all six results in this fictional panel. Three are low: hemoglobin, average red cell size, and ferritin. The other three stay in view so the physician can check the whole panel.",
      "audio": "../audio-v4/slide-02.mp3?v=iron-1"
    },
    {
      "eyebrow": "Differential diagnosis",
      "title": "Low iron stores help explain the anemia.",
      "lead": "Small red cells alone have several explanations. Ferritin of 8 ng/mL shifts the differential toward iron deficiency.",
      "artifact": {
        "type": "report",
        "label": "AI draft for physician review",
        "blocks": [
          {
            "title": "Iron deficiency · leading explanation",
            "copy": "Low ferritin supports depleted iron stores. Low hemoglobin and MCV fit that pattern."
          },
          {
            "title": "Inflammation · possible contributor",
            "copy": "Inflammation alone is a weaker explanation for depleted stores. A mixed anemia remains possible."
          },
          {
            "title": "Cause still open",
            "copy": "Ask about blood loss, dietary intake and impaired absorption. The panel cannot distinguish among them."
          }
        ]
      },
      "transcript": "Taken together, the small red cells and low iron stores point toward iron deficiency. Inflammation can also contribute to anemia. The panel tells us little about why iron is low, so the physician still asks about bleeding, intake, and absorption.",
      "audio": "../audio-v4/slide-03.mp3?v=iron-1"
    },
    {
      "eyebrow": "Evidence check",
      "title": "Does published evidence support the leading explanation?",
      "lead": "The American Gastroenterological Association uses a ferritin cutoff of 45 ng/mL to identify iron deficiency in patients with anemia. This patient’s ferritin is 8 ng/mL.",
      "artifact": {
        "type": "report",
        "label": "What the source supports",
        "blocks": [
          {
            "title": "Supported",
            "copy": "Iron deficiency is a plausible explanation for this pattern."
          },
          {
            "title": "Unresolved",
            "copy": "The ferritin result cannot identify the source of iron loss. The physician reviews the history and decides what evaluation is needed."
          }
        ]
      },
      "links": [
        {
          "label": "Read the AGA diagnostic guideline",
          "href": "https://gastro.org/clinical-guidance/gastrointestinal-evaluation-of-iron-deficiency-anemia/"
        }
      ],
      "transcript": "What supports that interpretation? The gastroenterology guideline uses a ferritin threshold of forty-five in patients with anemia. This example has a ferritin of eight. That supports iron deficiency. It still doesn't identify the cause.",
      "audio": "../audio-v4/slide-04.mp3?v=iron-1"
    },
    {
      "eyebrow": "Physician-editable tree",
      "title": "Change one treatment branch and the draft changes.",
      "lead": "Assume the physician confirms iron deficiency and selects oral iron. Keep the patient, lab values and route fixed. Edit the schedule in the treatment tree.",
      "artifact": {
        "type": "branch-preview",
        "label": "Illustrative decision tree · IRON-01",
        "condition": "IF iron deficiency is confirmed AND oral iron is appropriate",
        "field": "THEN propose oral iron",
        "choices": [
          {
            "label": "Once daily",
            "draft": "Consider oral iron once daily. Evaluate the cause of iron deficiency."
          },
          {
            "label": "Every other day",
            "draft": "Consider oral iron every other day. Evaluate the cause of iron deficiency."
          }
        ],
        "note": "AGA guidance allows alternate-day dosing for tolerability. A randomized trial in iron-depleted women found fewer gastrointestinal side effects with alternate-day use at equal total iron doses. Individual tolerance still needs review."
      },
      "links": [
        {
          "label": "Treatment guidance",
          "href": "https://gastro.org/clinical-guidance/management-of-iron-deficiency-anemia/"
        },
        {
          "label": "Read the randomized trial",
          "href": "https://pubmed.ncbi.nlm.nih.gov/38021373/"
        }
      ],
      "transcript": "Now keep the panel and the patient history fixed. The physician has confirmed that oral iron is appropriate. Change one branch from daily to alternate days, and the draft recommendation changes with it. You can compare both versions on this slide.",
      "audio": "../audio-v4/slide-05.mp3?v=iron-1"
    },
    {
      "eyebrow": "Physician review",
      "title": "Which treatment branch would you want to control?",
      "lead": "Read the report for the alternate-day version. It keeps the lab findings, differential, sources and proposed treatment together for physician review.",
      "artifact": {
        "type": "report",
        "label": "Illustrative report · edited branch",
        "blocks": [
          {
            "title": "Finding",
            "copy": "Three low results support iron deficiency. The cause remains open."
          },
          {
            "title": "Draft recommendation",
            "copy": "Consider oral iron every other day. Evaluate the cause of iron deficiency."
          },
          {
            "title": "Review status",
            "copy": "Awaiting physician review. The sample contains no patient record or physician signature."
          }
        ]
      },
      "links": [
        {
          "label": "Read the alternate-day sample report (PDF)",
          "href": "./sample-lab-review.pdf"
        }
      ],
      "transcript": "The sample report brings the findings, the evidence, and the selected recommendation together for physician review. Which branch of your own treatment protocol would you want to edit yourself? A fictional example is enough to start.",
      "audio": "../audio-v4/slide-06.mp3?v=iron-1"
    }
  ]
};
