window.CASE_STUDY = {
  "presentationId": "google-sheets",
  "eyebrow": "Working product proof: Google Sheets project reporting",
  "title": "Google Sheets reporting that turns live task data into decisions",
  "lead": "This working proof turns a structured Google Sheet into three project-management workflows: a daily action review, workload planning by worker or project, and a private stakeholder draft routed to Gemini, Claude, or OpenAI.",
  "about": "A private, end-to-end proof built from a frozen copy of a public Google Sheets project tracker.",
  "approach": "Keep deterministic counts and task references authoritative, use Apps Script for workflows that exceed cell formulas, and treat AI as a selected, validated drafting layer rather than an autonomous decision-maker.",
  "quote": {
    "text": "The useful product is not an AI formula by itself. It is one controlled Google Sheets workflow that lets a project manager choose the view, provider, and output.",
    "attribution": "Design principle demonstrated in this proof"
  },
  "tags": [
    "Google Sheets",
    "Google Apps Script",
    "Project reporting",
    "Gemini + Claude + OpenAI",
    "Secret Manager"
  ],
  "signals": [
    "Bound Apps Script dialog",
    "Deterministic PM metrics",
    "Owner-private AI drafts"
  ],
  "metrics": [
    {
      "value": "3 PM workflows",
      "label": "Daily action review, workload planning, and stakeholder updates"
    },
    {
      "value": "3 AI choices",
      "label": "Gemini, Claude, or OpenAI selected explicitly"
    },
    {
      "value": "2 core report tabs",
      "label": "Daily Actions and Workload refresh in place; Gemini AI() stays separate"
    },
    {
      "value": "Named provider",
      "label": "Every draft records the selected model; failures remain explicit"
    }
  ],
  "footerNote": "Built by Mike Lottridge as public-safe Upwork collateral. The public source Sheet remains unchanged; private IDs, keys, emails, and configuration are excluded.",
  "defaultDurationMs": 16500,
  "audioRate": 1,
  "startMode": "idle",
  "slides": [
    {
      "eyebrow": "The client outcome",
      "title": "One governed workflow produces priorities, workload views, and stakeholder drafts.",
      "lead": "A project manager can move from the shared task table to a focused action view or stakeholder draft without rebuilding filters, counts, and summaries by hand.",
      "durationMs": 18300,
      "bullets": [
        "Keep Google Sheets as the familiar operating surface.",
        "Use Apps Script for repeatable reporting logic and document creation.",
        "Choose Gemini, Claude, or OpenAI without changing the PM workflow."
      ],
      "artifact": {
        "type": "pipeline",
        "label": "One source, three project-management outcomes",
        "steps": [
          {
            "icon": "1",
            "title": "Prioritize",
            "copy": "Filter open work into a daily action review."
          },
          {
            "icon": "2",
            "title": "Plan",
            "copy": "Group workload by worker or project."
          },
          {
            "icon": "3",
            "title": "Report",
            "copy": "Generate a review-ready stakeholder draft."
          }
        ]
      },
      "audio": "../audio/slide-01.mp3?v=cedar-20260725",
      "narration": {
        "script": "This proof uses Google Sheets and Apps Script to turn one project tracker into daily priorities, workload planning, and AI-assisted stakeholder updates. The project manager chooses the report and, when AI is useful, explicitly chooses Gemini, Claude, or OpenAI.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/slide-01.mp3?v=cedar-20260725"
      }
    },
    {
      "eyebrow": "The reporting problem",
      "title": "The task table may be current while the management view is already stale.",
      "lead": "Project managers often repeat the same filtering, regrouping, and status-writing work because a flexible Sheet does not automatically create every decision view.",
      "durationMs": 17200,
      "bullets": [
        "Daily review needs the right project, worker, priority, status, and due horizon.",
        "Workload planning needs consistent open, overdue, blocked, and due-soon counts.",
        "Stakeholder updates need concise language without detaching claims from source tasks."
      ],
      "artifact": {
        "type": "compare",
        "label": "What changes when reporting becomes a workflow",
        "panels": [
          {
            "tone": "bad",
            "title": "Manual reporting loop",
            "stat": "Filter → copy → count → rewrite",
            "lines": [
              "Every view is rebuilt from scratch.",
              "Counts and narrative can drift apart.",
              "The result depends on who prepared it."
            ]
          },
          {
            "tone": "good",
            "title": "Controlled report workflow",
            "stat": "Select → preview → generate",
            "lines": [
              "Filters are explicit and reusable.",
              "Deterministic metrics remain attached.",
              "AI drafts are reviewable, not authoritative."
            ]
          }
        ]
      },
      "audio": "../audio/slide-02.mp3?v=cedar-20260725",
      "narration": {
        "script": "A task tracker can be current while the management view is stale. Daily review, workload planning, and stakeholder writing each require different filters and summaries. Rebuilding those views manually creates repeated effort and makes it easier for counts and narrative to diverge.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/slide-02.mp3?v=cedar-20260725"
      }
    },
    {
      "eyebrow": "The structured foundation",
      "title": "The Google Sheet supplies controlled task facts, calculated timing, and stable task IDs.",
      "lead": "Apps Script reads a frozen owner-only copy of the public tracker. It does not depend on screenshots, free-form notes, or a second database.",
      "durationMs": 19860,
      "bullets": [
        "Project, worker, priority, status, and dates remain normal Sheet fields.",
        "Timing categories and recommended actions stay deterministic.",
        "Notes and email addresses are excluded from every AI request in version one."
      ],
      "artifact": {
        "type": "media",
        "kind": "image",
        "label": "Google Sheets source table",
        "src": "../screenshots/task-tracker-focused-v2.png?v=3",
        "alt": "Focused Google Sheets task tracker showing task IDs, projects, workers, priorities, statuses, and calculated timing.",
        "objectPosition": "left top",
        "caption": "Focused proof view: task facts and calculated timing remain legible at presentation size.",
        "pills": [
          "Stable task IDs",
          "Validated fields",
          "Calculated timing"
        ]
      },
      "audio": "../audio/slide-03.mp3?v=cedar-20260725",
      "narration": {
        "script": "The foundation is still a normal Google Sheet. Projects, workers, priorities, statuses, and dates are controlled fields, while timing categories remain deterministic. Stable task IDs let every report trace back to the source. Notes and email addresses are excluded from AI requests.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/slide-03.mp3?v=cedar-20260725"
      }
    },
    {
      "eyebrow": "The automation flow",
      "title": "One Apps Script menu turns report choices into validated, repeatable outputs.",
      "lead": "The bound script reads the Sheet, validates the request, calculates metrics, refreshes report tabs, and creates a private Google Doc only when the user asks.",
      "durationMs": 21950,
      "bullets": [
        "A document lock prevents overlapping report writes.",
        "Daily Actions and Workload tabs refresh in place instead of multiplying copies.",
        "Every stakeholder output records its source timestamp, provider, model, and task IDs."
      ],
      "artifact": {
        "type": "pipeline",
        "label": "Bound Apps Script execution path",
        "steps": [
          {
            "icon": "1",
            "title": "Select",
            "copy": "Choose report, filters, grouping, project, and provider."
          },
          {
            "icon": "2",
            "title": "Validate",
            "copy": "Normalize fields, cap inputs, and compute authoritative KPIs."
          },
          {
            "icon": "3",
            "title": "Write",
            "copy": "Refresh a stable tab or create an owner-private Doc."
          },
          {
            "icon": "4",
            "title": "Review",
            "copy": "Keep the draft labeled and traceable before sharing."
          }
        ]
      },
      "audio": "../audio/slide-04.mp3?v=cedar-20260725",
      "narration": {
        "script": "The PM Reports menu launches one Apps Script workflow. It validates the request, computes authoritative metrics, and then refreshes a stable report tab or creates an owner-private Google Doc. A document lock prevents overlapping writes, and every AI output records its source timestamp, provider, model, and source task IDs.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/slide-04.mp3?v=cedar-20260725"
      }
    },
    {
      "eyebrow": "Daily priorities",
      "title": "Daily review reduces the tracker to the work that needs attention now.",
      "lead": "The same dialog can combine project, worker, status, priority, and due-horizon filters, then sort the result into an action-ready Sheet tab.",
      "durationMs": 19460,
      "bullets": [
        "Overdue and blocked work remains visible instead of being averaged into a dashboard.",
        "Task IDs, due dates, timing categories, and recommended actions stay together.",
        "The output is deterministic and usable even when every AI provider is unavailable."
      ],
      "artifact": {
        "type": "table",
        "label": "Daily Actions report pattern",
        "toolbar": "Selected project | Open work | Due within five days",
        "toolbarChip": "deterministic",
        "columns": [
          "Task",
          "Timing",
          "Next action"
        ],
        "rows": [
          [
            "TSK-1002 · Repair navigation",
            {
              "type": "status",
              "value": "Overdue"
            },
            "Escalate now"
          ],
          [
            "TSK-1006 · Resolve rules",
            {
              "type": "status",
              "value": "Blocked"
            },
            "Resolve blocker"
          ],
          [
            "TSK-1007 · Draft kickoff",
            {
              "type": "status",
              "value": "Due soon"
            },
            "Prepare next step"
          ]
        ]
      },
      "audio": "../audio/slide-05.mp3?v=cedar-20260725",
      "narration": {
        "script": "The Daily Actions report reduces the tracker to work that needs attention now. The project manager can combine project, worker, status, priority, and due horizon. Task ID, timing, due date, and recommended action remain together, and the report works even if no AI provider is configured.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/slide-05.mp3?v=cedar-20260725"
      }
    },
    {
      "eyebrow": "Workload planning",
      "title": "Workload can be grouped by worker or project without inventing utilization percentages.",
      "lead": "The report uses counts the Sheet can support: open, overdue, blocked, and due soon. It avoids false precision when hours or capacity data do not exist.",
      "durationMs": 17750,
      "bullets": [
        "Switch grouping between worker and project in the same dialog.",
        "Compare real task counts and timing risk instead of guessed capacity.",
        "Refresh the stable Workload tab whenever the source Sheet changes."
      ],
      "artifact": {
        "type": "media",
        "kind": "image",
        "compact": true,
        "label": "Workload evidence in Google Sheets",
        "src": "../screenshots/workload-focused-v3.png?v=1",
        "alt": "Focused Google Sheets dashboard showing open workload counts by owner.",
        "objectPosition": "center top",
        "objectFit": "contain",
        "caption": "The proof uses supported counts—open, overdue, blocked, and due soon—without claiming unsupported utilization.",
        "pills": [
          "By worker",
          "By project",
          "No invented capacity"
        ]
      },
      "audio": "../audio/slide-06.mp3?v=cedar-20260725",
      "narration": {
        "script": "For workload planning, the user switches between grouping by worker and grouping by project. The report uses facts the Sheet actually contains: open, overdue, blocked, and due-soon counts. It deliberately avoids utilization percentages because this tracker does not contain hours or capacity.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/slide-06.mp3?v=cedar-20260725"
      }
    },
    {
      "eyebrow": "Custom Apps Script dialog",
      "title": "The dialog makes complex reporting choices usable without exposing implementation details.",
      "lead": "One interface supports daily review, workload planning, and stakeholder updates while showing only the controls relevant to the selected report.",
      "durationMs": 21860,
      "bullets": [
        "Show only the controls relevant to the selected report type.",
        "Require one project and an explicit provider before a stakeholder update can run.",
        "Keep one interface across daily review, workload, and stakeholder work."
      ],
      "artifact": {
        "type": "media",
        "kind": "image",
        "label": "Live bound Apps Script dialog",
        "src": "../screenshots/dialog-stakeholder-v1.png?v=1",
        "alt": "Live Apps Script PM Report Builder with Stakeholder update, Project Aurora, and Claude selected.",
        "objectPosition": "center center",
        "objectFit": "contain",
        "caption": "Actual browser proof: report, project, and provider are explicit before the owner-private draft is generated.",
        "pills": [
          "One interface",
          "Explicit provider",
          "No key entry"
        ]
      },
      "audio": "../audio/slide-07.mp3?v=cedar-20260725",
      "narration": {
        "script": "The custom Apps Script dialog makes the reporting logic approachable. It reveals only the controls needed for the selected workflow, supports a preview before writes, and requires one project plus an explicit provider for stakeholder updates. Configuration checks stay server-side, so keys and OAuth tokens never return to the dialog.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/slide-07.mp3?v=cedar-20260725"
      }
    },
    {
      "eyebrow": "Secure AI-assisted reporting",
      "title": "Gemini, Claude, and OpenAI share one validated output contract—not one shared secret path.",
      "lead": "The provider is chosen explicitly. Gemini runs on Vertex AI under the owner’s Google authorization; Claude and OpenAI each use their own Secret Manager secret.",
      "durationMs": 26700,
      "bullets": [
        "Only selected-project task facts and deterministic aggregates are sent; Notes and email addresses are excluded.",
        "The draft is checked against source task IDs and supported figures before it becomes Google Doc text.",
        "A refusal, malformed response, invented reference, or figure mismatch produces a deterministic Doc marked “AI narrative unavailable.”"
      ],
      "artifact": {
        "type": "media",
        "kind": "video",
        "label": "Browser-verified security and reporting flow",
        "src": "../video/workflow-report-proof.webm?v=1",
        "poster": "../screenshots/security-architecture-redacted-v1.png?v=1",
        "mobileSrc": "../screenshots/security-architecture-mobile-v1.svg?v=1",
        "mobileAlt": "Portrait security architecture showing selected Sheet facts, bound Apps Script, explicit Gemini or Claude or OpenAI selection, and an owner-private Google Doc.",
        "alt": "Muted workflow recording showing the redacted security architecture, Apps Script provider selection, generation, validated Google Doc, and Secret Manager accessor role.",
        "autoplay": true,
        "loop": true,
        "controls": false,
        "objectFit": "contain",
        "caption": "Actual browser captures: explicit provider selection → private Doc → validated task-linked narrative → redacted IAM proof.",
        "pills": [
          "No secret values shown",
          "shared=false verified",
          "Accessor role shown"
        ]
      },
      "tags": [
        "Selected provider recorded",
        "Failures stay explicit",
        "Gemini AI() shown separately"
      ],
      "audio": "../audio/slide-08.mp3?v=cedar-20260725",
      "narration": {
        "script": "Gemini uses the owner’s Google authorization; Claude and OpenAI use separate Secret Manager secrets. Only selected-project facts and aggregates are sent—never Notes or emails. Responses must match source task IDs and supported figures. If validation fails, the private Doc keeps verified metrics and marks the AI narrative unavailable. Gemini’s built-in Sheets AI remains a separate playground; this dialog is the governed reporting path.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/slide-08.mp3?v=cedar-20260725"
      }
    },
    {
      "eyebrow": "Client delivery",
      "title": "Bring the Google Sheet your team still turns into reports by hand.",
      "lead": "The next step is a bounded pilot around one real reporting decision, the Sheet fields that support it, and the review rules required before anything is shared.",
      "durationMs": 6520,
      "bullets": [
        "Choose one daily review, workload, or stakeholder-reporting workflow.",
        "Confirm the fields, filters, permissions, provider policy, and acceptance checks.",
        "Use the contact option shown to tell me which Sheet process you want simplified."
      ],
      "artifact": {
        "type": "workflow",
        "label": "Smallest useful pilot",
        "steps": [
          {
            "title": "Map",
            "copy": "Identify the source Sheet and management decision."
          },
          {
            "title": "Build",
            "copy": "Implement the dialog, reports, and safeguards."
          },
          {
            "title": "Verify",
            "copy": "Test real data, permissions, and failure behavior."
          },
          {
            "title": "Hand off",
            "copy": "Document operation, keys, and future BYOK options."
          }
        ]
      },
      "audio": "../audio/slide-09.mp3?v=cedar-20260725-neutral-cta",
      "narration": {
        "script": "Use the contact option shown to tell me which Sheet process you want simplified.",
        "sourceType": "recorded-mp3",
        "asset": "../audio/slide-09.mp3?v=cedar-20260725-neutral-cta",
        "durationSeconds": 5.52
      }
    }
  ]
};
