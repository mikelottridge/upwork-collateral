# Medical Project Presentation Execplan

## Project Metadata

- Project slug: `medical-project`
- Project folder: `/home/mike/collateral/medical-project`
- Deck path: `/home/mike/collateral/medical-project/site/case-study-data.js`
- Related site path: `/home/mike/collateral/medical-project/site/index.html`
- Related narration folder: `/home/mike/collateral/medical-project/audio`
- Related screenshots folder: `/home/mike/collateral/medical-project/screenshots`
- Git repo root: `/home/mike/collateral`
- Execplan created on: `2026-03-18`
- Primary path: `Path B: Modify existing presentation`

## Rules

1. This execplan is the working checklist for bringing the medical deck back into sync with `/home/mike/collateral/style-guide.md`.
2. Every checklist item must have two explicit subchecks:
   - `Codex implemented`
   - `Claude verified`
3. This is an existing presentation, so a git checkpoint commit is required before content or layout changes.
4. The canonical implementation references are:
   - `/home/mike/collateral/style-guide.md`
   - `/home/mike/collateral/shared/case-study.css`
   - `/home/mike/collateral/shared/case-study.js`
   - `/home/mike/collateral/psychologist-project/site/index.html`
   - `/home/mike/collateral/psychologist-project/site/case-study-data.js`
5. Narration must not be regenerated until slide copy is content-locked.
6. Publish only after Chrome review and Claude verification are complete.

## Phase 0: Preflight and Checkpoint

### 0.1 Confirm project structure

- [x] Confirm the project has a unique folder under `/home/mike/collateral/`
- [x] Confirm expected subfolders exist:
  - `site/`
  - `audio/`
  - `screenshots/`
  - `docs/`
  - `drafts/`
  - `slides/`
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [ ] Claude verified

### 0.2 Instantiate the project execplan

- [x] Create this project-specific execplan in `docs/`
- [x] Fill in project metadata
- [x] Select `Path B: Modify existing presentation`
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [ ] Claude verified

### 0.3 Check repository state

- [x] Run `git status` in `/home/mike/collateral/`
- [x] Confirm work started from a clean tree
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [ ] Claude verified

### 0.4 Create git checkpoint before presentation changes

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

## Phase 1: Audit and Style-Guide Sync Plan

### 1.1 Audit the current deck against the style guide

- [ ] Review current HTML, slide data, narration, visuals, and docs
- [ ] Identify what already matches the style guide and should not be broken
- [ ] Identify concrete style-guide drifts with file references
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 1.2 Convert audit findings into project-specific work items

- [ ] Turn the audit into a concrete improvement list
- [ ] Split the work into copy, metadata, visuals, narration, and verification
- [ ] Record any items that are intentionally left unchanged
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

Project-specific modification items:

- [ ] Replace stack-first hero tags with buyer-facing labels if needed
- [ ] Tighten any slide or narration copy that reads more like implementation notes than client-facing collateral
- [ ] Confirm the close uses contract-fit language rather than generic AI language
- [ ] Confirm footer/context note matches style-guide tone
- [ ] Regenerate narration only if copy changes

### 1.3 Lock the elements that should remain unchanged

- [ ] Preserve the physician-controlled decision-tree framing
- [ ] Preserve the project-specific client quote
- [ ] Preserve the stronger cluster-map and decision-tree graphics unless audit finds a real problem
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

## Phase 2: Implement Required Deck Updates

### 2.1 Hero and metadata alignment

- [ ] Make the hero fully client-facing and value-first
- [ ] Remove or soften any stack-first metadata that conflicts with the style guide
- [ ] Keep metrics as proof signals rather than implementation trivia
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 2.2 Slide narrative alignment

- [ ] Keep the slide sequence buyer-oriented
- [ ] Tighten any slide that over-explains implementation instead of client value
- [ ] Keep present tense for repeatable capability, with past tense only for historical proof
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 2.3 Footer and context-note alignment

- [ ] Keep the transparency note
- [ ] Make sure it reads like context, not disclaimer copy
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

## Phase 3: Narration

### 3.1 Lock slide copy before TTS

- [ ] Confirm slide copy is final before regenerating audio
- [ ] Confirm narration and slides tell the same story
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 3.2 Update narration and audio if needed

- [ ] Update `audio/slide-*.txt` only where deck copy changed
- [ ] Regenerate MP3s only after narration text is finalized
- [ ] Record the voice and rate if regeneration occurs
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

Voice used:

- Voice:
- Audio rate:

## Phase 4: Browser Verification and Publish

### 4.1 Chrome verification

- [ ] Check desktop layout in actual Chrome
- [ ] Check slide navigation, guided mode, and progress UI
- [ ] Confirm no overlap, clipping, or broken states
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 4.2 Mobile and contrast verification

- [ ] Check phone-sized layout
- [ ] Confirm vertical scrolling works where needed
- [ ] Confirm controls remain distinct from labels
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

### 4.3 Publish and record

- [ ] Commit final deck changes in `/home/mike/collateral/`
- [ ] Publish to GitHub Pages if deck changed
- [ ] Record the publish commit hash
- Implement check:
  - [ ] Codex implemented
- Verified check:
  - [ ] Claude verified

Publish commit:

- Commit hash:
- Commit message:

## Final Verification Summary

- [ ] All required implementation items completed
- [ ] All required Claude verification items completed
- [ ] Checkpoint commit recorded
- [ ] Final publish recorded when applicable
- [ ] Remaining open risks documented below

Open risks / notes:

- 
- 
- 
