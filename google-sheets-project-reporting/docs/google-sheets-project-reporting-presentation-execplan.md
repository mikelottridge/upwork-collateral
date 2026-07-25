# Google Sheets Project Reporting Presentation Execplan

Copy this template into the target project's `docs/` folder before starting work.

Required destination pattern:

- `/home/mike/collateral/<project-slug>/docs/<project-slug>-presentation-execplan.md`

Examples:

- `/home/mike/collateral/psychologist-project/docs/psychologist-project-presentation-execplan.md`
- `/home/mike/collateral/medical-project/docs/medical-project-presentation-execplan.md`

---

## Project Metadata

- Project slug: google-sheets-project-reporting
- Project folder: `google-sheets-project-reporting/`
- Deck path: `google-sheets-project-reporting/site/case-study-data.js`
- Related site path: `google-sheets-project-reporting/site/index.html`
- Related narration folder: `google-sheets-project-reporting/audio/`
- Related screenshots folder: `google-sheets-project-reporting/screenshots/`
- Git repo root: `C:\Users\mikel\OneDrive\Documents\Consulting Collateral\worktrees\upwork-collateral`
- Execplan created on: 2026-07-25
- Primary path:
  - `Path A: New presentation` (selected)
  - `Path B: Modify existing presentation`

## Rules

1. Do not start deck work without creating a project-specific copy of this execplan.
2. Every checklist item must have two explicit subchecks:
   - `Codex implemented`
   - `Claude verified`
3. Work item by item. Do not advance to the next checklist item until:
   - Codex has completed the current item
   - Claude has verified the current item
   - the execplan checkboxes for that item have been updated immediately
4. Do not batch multiple unchecked items and verify them later as a group unless the execplan explicitly marks them as one combined item.
5. If Claude finds a problem, keep the current item open, fix it, and re-run Claude verification before moving on.
6. Every project must have a unique folder under `/home/mike/collateral/`.
7. Before modifying an existing presentation, run a git status check and create a checkpoint commit in `/home/mike/collateral/`.
8. Use these as the style and implementation sources of truth:
   - `/home/mike/collateral/style-guide.md`
   - `/home/mike/collateral/shared/case-study.css`
   - `/home/mike/collateral/shared/case-study.js`
   - `/home/mike/collateral/psychologist-project/site/index.html`
   - `/home/mike/collateral/psychologist-project/site/case-study-data.js`
9. Do not regenerate narration until slide copy is content-locked.
10. Do not publish until the deck has been previewed in Chrome and checked against the style guide.

## Verification Loop

Use this exact cadence for every checklist item unless the execplan explicitly groups several substeps into one item:

1. Codex implements the current item.
2. Claude verifies the current item.
3. Update the two subchecks in the execplan immediately.
4. Only then move to the next item.

If the current item fails Claude verification:

1. Leave the item open.
2. Fix only that item.
3. Re-run Claude verification on that same item.
4. Update the execplan immediately.
5. Only then continue.

---

## Purpose / Big Picture

Publish a public-safe, self-running Upwork proof showing how a structured Google Sheet and bound Apps Script turn project data into daily priorities, workload planning, and owner-private AI stakeholder updates using Gemini, Claude, or OpenAI.

## Progress

Use timestamped checkboxes to summarize granular progress. Every stopping point must be reflected here, even if it requires splitting a partially completed task into `done` and `remaining`.

- [x] (`2026-07-25 16:20Z`) Private proof and three-provider live verification completed; all verified Docs are owner-only and unshared.
- [x] (`2026-07-25 16:35Z`) Nine-stage story and keyword-led headline drafted in the shared case-study runtime.
- [x] (`2026-07-25 23:35Z`) Redacted proof assets, browser desktop/mobile QA, Claude layout review, Cedar narration, certifying QA, and searchable PDF export completed.
- [x] (`2026-07-25 23:35Z`) Nine Cedar tracks measure 173.736 seconds; the silent fallback totals 178.23 seconds, both within the approved 180-second ceiling.
- [x] (`2026-07-25 23:35Z`) Engineering suite passed 62/62 tests; presentation QA is certifying with zero errors and advisory warnings only.
- [x] (`2026-07-25 23:58Z`) Final Claude pre-publication review passed; new-scope credential/private-ID scan is clean.
- [ ] (`2026-07-25 23:58Z`) Remaining: commit/push and published Chrome click-through.
- [x] (2026-07-25 16:45Z) Claude architecture/copy checkpoint passed after fixing tab scoping, slide-role overlap, provider-auth wording, and the spoken Gemini AI() caveat.

This section must always reflect the actual current state of the work.

## Surprises & Discoveries

Record unexpected behaviors, layout issues, browser quirks, tool problems, or design findings with short evidence.

- Observation: DocumentApp-created Docs were not addressable through the narrow `drive.file` permission check.
  - Evidence: Live privacy verification failed until the Doc was created through Drive API, then opened through DocumentApp.
- Observation: Gemini can produce a draft that is rejected by numeric/task-reference validation.
- Observation: Full-sheet captures made project data illegible at presentation scale.
  - Evidence: Focused Sheet and report crops plus a portrait security diagram passed desktop and mobile Chrome review.
  - Evidence: First Gemini run created the deterministic fallback; the next run produced a validated normalized narrative.

## Decision Log

Record meaningful decisions made during the run.

- Decision: Preserve the financial-metrics deck's recorded Cedar narration and interaction contract.
  - Rationale: The user requested the latest public deck's style and tools; narration UX is locked.
  - Date/Author: 2026-07-25 / Codex
- Decision: Use the approved extended runtime with a hard ceiling of 180 seconds.
  - Rationale: The user explicitly approved natural narration up to three minutes.
  - Date/Author: 2026-07-25 / Codex

## Outcomes & Retrospective

The nine-stage presentation now uses focused public-safe proof, a muted workflow recording, and Cedar narration synchronized through the shared runtime. Desktop and mobile browser checks passed after widening the hero, tightening the workload crop, improving proof-chip contrast, and adding a mobile-specific security diagram. A searchable nine-page PDF and certifying deterministic/Prolog QA report are included.

## Context and Orientation

The deck is an untracked new project in the public `upwork-collateral` worktree. `site/case-study-data.js` contains the nine-stage story. `site/index.html` uses `shared/case-study.css` and `shared/case-study.js`. The private Google Sheet, keys, OAuth tokens, emails, and private IDs must never enter this repository. Public assets may show only redacted screenshots, architecture, and validated public-safe facts.

## Plan of Work

First lock the nine-stage copy and proof against the live private implementation, then obtain Claude review. Next create focused public-safe screenshots and a muted workflow recording, update the shared runtime only where backward-compatible, and browser-test desktop/mobile layout. After copy lock, generate one Cedar MP3 per stage through the OpenAI Audio API, measure timings, and keep the total at or below 180 seconds. Finally run deterministic and human QA, obtain final Claude review, commit, push, open the GitHub Pages URL, and complete a final click-through.

## Concrete Steps

- `node --test ...` in the engineering worktree: all report/security tests pass.
- `python scripts/openai_tts_batch.py google-sheets-project-reporting ...`: nine Cedar MP3 files created and wired.
- Local HTTP preview plus Chrome desktop/mobile checks: no clipping, illegible proof, or narrow-column headline defects.
- `python <presentation-skill>/scripts/run_presentation_qa.py ... --prolog required`: certifying report has zero errors.
- `git push origin agent/google-sheets-ai-reporting`: public collateral branch published for review, then GitHub Pages verified after merge/publish path is confirmed.

## Validation and Acceptance

Verify nine stages, headline visibility, focused screenshots, keyboard navigation, manual controls, idle start, audible Cedar playback, audio-ended first transition, timed silent fallback, mobile layout, PDF readability, owner-private/security claims, absence of secrets/private IDs/contact details, and a total measured runtime of no more than 180 seconds. Claude must review the architecture/copy checkpoint, first browser-rendered deck, and final pre-publication package.

For collateral work, validation normally includes:

- local preview
- actual Chrome review
- mobile-sized review
- narration sync review when audio is present
- final Claude verification for the current checklist item

## Idempotence and Recovery

The provider tests, deterministic reports, narration generation, asset rendering, and browser checks are safe to repeat. Generated stakeholder Docs are timestamped and private. If a provider narrative fails validation, keep the deterministic fallback and retry without switching providers automatically. The collateral is new Path A work; no prior published Google Sheets deck is being replaced.

## Artifacts and Notes

Keep the most important snippets, short diffs, screenshots, command outputs, or links to generated artifacts here.

## Interfaces and Dependencies

Name the files, scripts, services, libraries, and external systems this execplan depends on. Be explicit about paths and expected interfaces.

For HTML collateral work, commonly relevant dependencies include:

- `/home/mike/collateral/shared/case-study.css`
- `/home/mike/collateral/shared/case-study.js`
- `/home/mike/collateral/scripts/openai_tts_batch.py`
- local Chrome or Windows Chrome path
- GitHub Pages repo and publish path when applicable

---

## Phase 0: Preflight and Project Setup

### 0.1 Confirm or create the project folder

- [ ] Confirm the project has a unique folder under `/home/mike/collateral/`
- [ ] Confirm or create expected subfolders:
  - `site/`
  - `audio/`
  - `screenshots/`
  - `docs/`
  - `drafts/`
  - `slides/` when needed
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 0.2 Instantiate this execplan for the project

- [ ] Copy this template into the project's `docs/` folder
- [ ] Fill in project metadata
- [ ] Select the correct path:
  - `Path A: New presentation` (selected)
  - `Path B: Modify existing presentation`
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 0.3 Check repository state

- [ ] Run `git status` in `/home/mike/collateral/`
- [ ] Record whether work is starting from a clean or dirty tree
- [ ] If existing uncommitted changes are present, note whether they are in-scope or unrelated
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 0.4 Create a git checkpoint before modifying an existing presentation

This item is required for `Path B` and optional for `Path A`.

- [ ] Review current files that will be modified
- [ ] Create a git checkpoint commit before making presentation changes
- [ ] Record the checkpoint commit hash in this execplan
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

Checkpoint commit:

- Commit hash:
- Commit message:

---

## Path A: New Presentation

Use this path when the project does not yet have a finished HTML deck.

### A.1 Collect source material and proof

- [ ] Gather project facts, outcomes, quote candidates, and safe-to-publicize details
- [ ] Identify whether there is an existing PPT, draft deck, notes, or portfolio copy
- [ ] Identify which claims are verified and which are still provisional
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### A.2 Define the story before layout

- [x] Write the deck's client-facing narrative:
  - hero value
  - client problem
  - workflow/approach
  - output/report shape
  - trust/hiring signal
  - contract-fit close
- [x] Confirm the story follows the style guide's communication-first standard
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

### A.3 Create the initial project deck

- [ ] Create `site/index.html` if needed
- [ ] Create `site/case-study-data.js`
- [ ] Create initial `audio/slide-*.txt`
- [ ] Add any initial screenshots or synthetic visuals under `screenshots/`
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### A.4 Align to the shared presentation system

- [ ] Use the shared HTML engine rather than inventing a separate layout system unless there is a strong reason
- [ ] Confirm the deck is consistent with:
  - `/home/mike/collateral/shared/case-study.css`
  - `/home/mike/collateral/shared/case-study.js`
- [ ] Confirm the deck follows the psychologist deck's reference pattern unless a documented exception is needed
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

---

## Path B: Modify Existing Presentation

Use this path when the project already has a deck and you are revising it.

### B.1 Audit the current deck

- [ ] Review current HTML, slide data, narration, visuals, and supporting docs
- [ ] Identify what is already working and should not be broken
- [ ] Identify what must change
- [ ] Record specific issues with file references
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### B.2 Convert requested changes into concrete work items

- [ ] Turn feedback into a project-specific improvement list
- [ ] Split the work into copy, layout, visuals, narration, and publish impacts
- [ ] Add project-specific items below if needed
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

Project-specific modification items:

- [ ]
- [ ]
- [ ]

### B.3 Lock what should remain unchanged

- [ ] Record titles, visuals, interactions, or proof elements that must be preserved
- [ ] Identify any live links or published assets that must continue working
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

---

## Phase 1: Copy and Narrative

### 1.1 Establish the hero

- [x] Make the first visible copy client-facing and value-first
- [x] Avoid leading with stack labels
- [x] Make sure the hero answers why the work matters
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

### 1.2 Apply tense and voice rules

- [x] Default to present tense for repeatable capability
- [x] Use past tense only for historical proof
- [x] Ensure narration follows the same tense logic
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

### 1.3 Tighten the slide sequence

- [x] Confirm each slide has a clear job
- [x] Remove filler or duplicate content
- [x] Keep the deck buyer-oriented rather than internally technical
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

### 1.4 Strengthen the close

- [x] End with clear client-fit language
- [x] Avoid vague slogans or weak generic wrap-up text
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

---

## Phase 2: Metadata, Proof, and Visual Structure

### 2.1 Review metadata and tag behavior

- [ ] Ensure tags read as labels, not buttons
- [ ] Remove stack trivia presented as proof
- [ ] Keep metadata secondary to the story
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 2.2 Validate proof signals

- [ ] Confirm hours, ratings, quotes, and duration claims are real
- [ ] Tie quotes to the correct project whenever possible
- [ ] Remove unsupported proof statements
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 2.3 Improve artifacts and graphics

- [ ] Confirm each artifact helps a prospective client understand value
- [ ] Add or revise diagrams, charts, screenshots, or document mocks as needed
- [ ] Prefer one clear visual message per slide over crowded synthetic detail
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 2.4 Validate footer and context notes

- [ ] Keep transparency about synthetic data or reconstructed visuals
- [ ] Ensure the note reads like context, not a detached disclaimer
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

---

## Phase 3: Narration

### 3.1 Content lock before TTS

- [ ] Confirm slide copy is locked before regenerating narration
- [ ] Confirm narration and slides tell the same story
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 3.2 Update narration text

- [ ] Rewrite `audio/slide-*.txt` to match current slide copy
- [ ] Keep narration buyer-oriented and natural aloud
- [ ] Avoid reading UI labels or decorative text
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 3.3 Regenerate audio

- [ ] Regenerate MP3s only after narration text is finalized
- [ ] Rewire audio paths in `site/case-study-data.js` if needed
- [ ] Record the voice used
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

Voice used:

- Voice: Cedar
- Audio rate: default

### 3.4 Validate timing and pacing

- [ ] Confirm narration length fits the slide pacing
- [ ] Confirm autoplay and manual next/previous both behave correctly
- [ ] Confirm no stale audio remains from an older slide version
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

---

## Phase 4: Browser Verification

### 4.1 Desktop Chrome verification

- [ ] Preview in actual Chrome
- [ ] Confirm navigation works
- [ ] Confirm layout is readable at standard desktop zoom
- [ ] Confirm no unexpected overlap, clipping, or broken states
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 4.2 Mobile verification

- [ ] Confirm the page remains readable on a phone-sized viewport
- [ ] Confirm vertical scrolling works where needed
- [ ] Confirm hero, slides, and controls remain usable
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 4.3 Contrast and accessibility pass

- [ ] Check text/background contrast after styling changes
- [ ] Check that controls remain visually distinct from labels
- [ ] Check that the page still makes sense without narration autoplay
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

---

## Phase 5: Publish and Record

### 5.1 Local readiness

- [ ] Confirm local preview is stable
- [ ] Confirm final asset paths are correct
- [ ] Confirm any external links are Upwork-safe if the deck is for Upwork use
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 5.2 Publish

- [ ] Commit the finished deck changes in `/home/mike/collateral/`
- [ ] Publish to GitHub Pages if appropriate
- [ ] Record the publish commit hash
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

Publish commit:

- Commit hash:
- Commit message:

### 5.3 Update project records

- [ ] Update the project's supporting docs if the workflow changed
- [ ] Update `/home/mike/collateral/README.md` or `/home/mike/collateral/style-guide.md` if the change affects cross-project standards
- [ ] Leave enough context for the next run to resume cleanly
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

---

## Final Verification Summary

- [ ] All required implementation items completed
- [ ] All required Claude verification items completed
- [ ] Git checkpoint recorded when modifying an existing deck
- [ ] Final publish recorded when applicable
- [ ] Remaining open risks documented below

Open risks / notes:

-
-
-

## Revision Note

When revising this execplan, add a short note describing what changed and why so the plan remains restartable from the file alone.
