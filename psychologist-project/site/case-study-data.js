window.CASE_STUDY = {
  "presentationId": "psychologist",
  "eyebrow": "A psychologist’s reporting tool",
  "title": "Assessment reports families can use",
  "lead": "I built a custom app that drafts family reports for a psychologist. I estimate her meeting prep fell from 1–2 hours of writing to about 5–10 minutes with a draft to review.",
  "heroVisual": {
    "src": "../screenshots/upwork-thumbnail-final.png",
    "alt": "A psychologist and patient look at a report together."
  },
  "signals": [
    "Expert-Vetted",
    "100% Job Success",
    "1,900+ Upwork hours"
  ],
  "metrics": [
    {
      "value": "470 hrs",
      "label": "Project hours"
    },
    {
      "value": "5.0 / 5.0",
      "label": "Client rating"
    }
  ],
  "footerNote": "The examples use published test results and fictional practice records.",
  "defaultDurationMs": 7200,
  "startMode": "idle",
  "audioRate": 1,
  "slides": [
    {
      "eyebrow": "The family’s question",
      "title": "What changed since the last visit?",
      "lead": "I built a reporting tool for a psychologist who often had to explain the same kinds of scores in different ways.",
      "artifact": {
        "type": "report",
        "label": "From the clinician’s desk",
        "blocks": [
          {
            "title": "Before the visit",
            "copy": "The tool compares results across visits and drafts a chart and explanation."
          },
          {
            "title": "With the family",
            "copy": "The psychologist checks the draft against the scores and decides what to recommend."
          }
        ]
      },
      "transcript": "A parent asks what changed since the last visit. I built a custom app that drafts an explanation from the scores. The psychologist checks it against the original results and decides what to tell the family.",
      "audio": "../audio/slide-01.mp3?v=prep-1"
    },
    {
      "eyebrow": "The public example",
      "title": "One visual test measured two kinds of mistakes",
      "lead": "My client keeps her evaluation system private. I chose a published T.O.V.A. case to illustrate how I compare visits.",
      "artifact": {
        "type": "report",
        "label": "Visual attention task · 2017",
        "blocks": [
          {
            "title": "When a target appeared",
            "copy": "The learner had to press a button. A missed target means she didn’t press."
          },
          {
            "title": "When another shape appeared",
            "copy": "She had to wait. An extra press means she pressed anyway."
          }
        ]
      },
      "transcript": "My client asked me to keep her evaluation system private. I chose a published visual attention test to show how the comparison works. The learner pressed a button for a target and waited when a different shape appeared.",
      "audio": "../audio/slide-02.mp3?v=prep-1"
    },
    {
      "eyebrow": "Two visits",
      "title": "She caught every target in September",
      "lead": "She missed 15 targets in July and none in September. Extra presses fell from eight to six. The September record lists medication before testing. The psychologist checks those conditions before interpreting the change.",
      "artifact": {
        "type": "media",
        "src": "./visual-task-counts.png",
        "label": "Visual test · July 1 and September 1, 2017",
        "alt": "Missed targets fell from 15 to 0. Extra presses fell from 8 to 6. Both charts count mistakes.",
        "caption": "Source: T.O.V.A. publisher example. One retest tells us how she performed that day. It can’t establish why she improved."
      },
      "transcript": "In July, she missed fifteen targets. In September, she missed none. Extra presses fell from eight to six. The September record mentions medication before the test. I'd flag that for the psychologist before she discusses what might explain the change.",
      "audio": "../audio/slide-03.mp3?v=prep-1"
    },
    {
      "eyebrow": "The take-home report",
      "title": "Here’s how I’d explain the September results to her parents",
      "lead": "The app can draft the same findings at different reading levels and in any language its OpenAI model supports. This example includes a Spanish draft for bilingual review.",
      "artifact": {
        "type": "report",
        "label": "From page one of the published-case example",
        "blocks": [
          {
            "title": "What changed",
            "copy": "Every target received a response in September."
          },
          {
            "title": "What still needs attention",
            "copy": "Six extra presses still occurred."
          },
          {
            "title": "At the next conversation",
            "copy": "What, if anything, has the family noticed at home or at school?"
          }
        ]
      },
      "transcript": "Here's how I'd put it for her parents. This time, she caught every target. She still pressed six times when she needed to wait. Have you noticed anything similar at home or at school? The app can draft that explanation at different reading levels and in the languages the OpenAI model supports. Spanish is one example.",
      "audio": "../audio/slide-04.mp3?v=prep-1",
      "links": [
        {
          "label": "Read the family explanation (PDF)",
          "href": "./attention-source-review.pdf"
        },
        {
          "label": "See a fictional three-page practice report (PDF)",
          "href": "./sample-client-report.pdf"
        }
      ]
    },
    {
      "eyebrow": "The client project",
      "title": "Meeting prep fell from hours to minutes",
      "lead": "I estimate this psychologist spent 1–2 hours writing before a family meeting. With the custom app, she spent about 5–10 minutes preparing. She checked the draft and chose what to discuss.",
      "artifact": {
        "type": "metrics",
        "label": "Upwork engagement record",
        "items": [
          {
            "label": "Hours logged on the project",
            "value": "470"
          },
          {
            "label": "Client rating",
            "value": "5.0 / 5.0"
          }
        ]
      },
      "transcript": "My estimate for this practice is that writing before a family meeting used to take one to two hours. With the custom app, prep took about five to ten minutes. The psychologist started with a draft and spent that time checking what the family would take home.",
      "audio": "../audio/slide-05.mp3?v=prep-1"
    },
    {
      "eyebrow": "Working together",
      "title": "Which part of your report takes the most writing?",
      "lead": "Think of one section you explain differently depending on who will read it.",
      "artifact": {
        "type": "quote",
        "label": "Client review",
        "text": "I can highly recommend Michael for your software development needs. Michael has been consistent in delivering quality work.",
        "attribution": "Verified Upwork client review"
      },
      "transcript": "Which part of your report takes the most writing? Describe that section and who reads it. A fictional example is enough for us to discuss what a first draft could look like.",
      "audio": "../audio/slide-06.mp3?v=prep-1"
    }
  ],
  "contact": {
    "heading": "Start with one section",
    "description": "Describe the section that takes the most writing and who reads it. A fictional example is enough."
  }
};
