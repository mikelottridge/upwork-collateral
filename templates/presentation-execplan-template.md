# Presentation Execplan Template

Copy this template into the target project's `docs/` folder before starting work.

Required destination pattern:

- `/home/mike/collateral/<project-slug>/docs/<project-slug>-presentation-execplan.md`

Examples:

- `/home/mike/collateral/psychologist-project/docs/psychologist-project-presentation-execplan.md`
- `/home/mike/collateral/medical-project/docs/medical-project-presentation-execplan.md`

---

## Project Metadata

- Project slug:
- Project folder:
- Deck path:
- Related site path:
- Related narration folder:
- Related screenshots folder:
- Git repo root:
- Execplan created on:
- Primary path:
  - `Path A: New presentation`
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

Explain what a prospective client or future reviewer gains after this deck exists or after this revision lands. State the user-visible behavior, hiring value, or presentation-quality improvement this execplan is meant to enable.

## Progress

Use timestamped checkboxes to summarize granular progress. Every stopping point must be reflected here, even if it requires splitting a partially completed task into `done` and `remaining`.

- [ ] (`YYYY-MM-DD HH:MMZ`) Example incomplete step.
- [ ] (`YYYY-MM-DD HH:MMZ`) Example partially completed step. Completed: X. Remaining: Y.

This section must always reflect the actual current state of the work.

## Surprises & Discoveries

Record unexpected behaviors, layout issues, browser quirks, tool problems, or design findings with short evidence.

- Observation:
  - Evidence:

## Decision Log

Record meaningful decisions made during the run.

- Decision:
  - Rationale:
  - Date/Author:

## Outcomes & Retrospective

Summarize what was achieved, what remains, and any lessons learned at major milestones or on completion.

## Context and Orientation

Describe the current state as if the reader knows nothing. Name the key files by full path. Define any non-obvious term you will use. Do not assume prior plan context.

## Plan of Work

Describe, in prose, the expected sequence of edits, reviews, and validations. For each significant change, name the file and the kind of change being made. Keep it concrete and minimal.

## Concrete Steps

State the exact commands to run and where to run them. When a command should produce an observable result, note what success looks like. Update this section as work proceeds.

## Validation and Acceptance

Describe how to verify the result beyond static inspection. Include the exact commands, previews, or browser checks to run and what success looks like.

For collateral work, validation normally includes:

- local preview
- actual Chrome review
- mobile-sized review
- narration sync review when audio is present
- final Claude verification for the current checklist item

## Idempotence and Recovery

State which steps are safe to repeat and what to do if a step fails halfway. If modifying an existing deck, record the rollback point and the checkpoint commit here.

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
  - `Path A: New presentation`
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

- [ ] Write the deck's client-facing narrative:
  - hero value
  - client problem
  - workflow/approach
  - output/report shape
  - trust/hiring signal
  - contract-fit close
- [ ] Confirm the story follows the style guide's communication-first standard
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

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

- [ ] Make the first visible copy client-facing and value-first
- [ ] Avoid leading with stack labels
- [ ] Make sure the hero answers why the work matters
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 1.2 Apply tense and voice rules

- [ ] Default to present tense for repeatable capability
- [ ] Use past tense only for historical proof
- [ ] Ensure narration follows the same tense logic
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 1.3 Tighten the slide sequence

- [ ] Confirm each slide has a clear job
- [ ] Remove filler or duplicate content
- [ ] Keep the deck buyer-oriented rather than internally technical
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 1.4 Strengthen the close

- [ ] End with clear client-fit language
- [ ] Avoid vague slogans or weak generic wrap-up text
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

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

- Voice:
- Audio rate:

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
