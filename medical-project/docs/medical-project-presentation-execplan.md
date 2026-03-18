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
  - [x] Claude verified

### 0.2 Instantiate the project execplan

- [x] Create this project-specific execplan in `docs/`
- [x] Fill in project metadata
- [x] Select `Path B: Modify existing presentation`
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

### 0.3 Check repository state

- [x] Run `git status` in `/home/mike/collateral/`
- [x] Confirm work started from a clean tree
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

### 0.4 Create git checkpoint before presentation changes

- [x] Review current files that will be modified
- [x] Create a git checkpoint commit before making presentation changes
- [x] Record the checkpoint commit hash in this execplan
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

Checkpoint commit:

- Commit hash: `2838508`
- Commit message: `Checkpoint before medical presentation sync`

## Phase 1: Audit and Style-Guide Sync Plan

### 1.1 Audit the current deck against the style guide

- [x] Review current HTML, slide data, narration, visuals, and docs
- [x] Identify what already matches the style guide and should not be broken
- [x] Identify concrete style-guide drifts with file references
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

### 1.2 Convert audit findings into project-specific work items

- [x] Turn the audit into a concrete improvement list
- [x] Split the work into copy, metadata, visuals, narration, and verification
- [x] Record any items that are intentionally left unchanged
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

Project-specific modification items:

- [x] Replace stack-first hero tags with buyer-facing labels if needed
- [x] Tighten any slide or narration copy that reads more like implementation notes than client-facing collateral
- [x] Confirm the close uses contract-fit language rather than generic AI language
- [x] Confirm footer/context note matches style-guide tone
- [x] Regenerate narration only if copy changes

### 1.3 Lock the elements that should remain unchanged

- [x] Preserve the physician-controlled decision-tree framing
- [x] Preserve the project-specific client quote
- [x] Preserve the stronger cluster-map and decision-tree graphics unless audit finds a real problem
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

## Phase 2: Implement Required Deck Updates

### 2.1 Hero and metadata alignment

- [x] Make the hero fully client-facing and value-first
- [x] Remove or soften any stack-first metadata that conflicts with the style guide
- [x] Keep metrics as proof signals rather than implementation trivia
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

### 2.2 Slide narrative alignment

- [x] Keep the slide sequence buyer-oriented
- [x] Tighten any slide that over-explains implementation instead of client value
- [x] Keep present tense for repeatable capability, with past tense only for historical proof
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

### 2.3 Footer and context-note alignment

- [x] Keep the transparency note
- [x] Make sure it reads like context, not disclaimer copy
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

## Phase 3: Narration

### 3.1 Lock slide copy before TTS

- [x] Confirm slide copy is final before regenerating audio
- [x] Confirm narration and slides tell the same story
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

### 3.2 Update narration and audio if needed

- [x] Update `audio/slide-*.txt` only where deck copy changed
- [x] Regenerate MP3s only after narration text is finalized
- [x] Record the voice and rate if regeneration occurs
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

Voice used:

- Voice: `sage`
- Audio rate: `1.1`

3.2 evidence notes:

- Narration files updated in this final sync cycle:
  - `slide-02.txt`
  - `slide-06.txt`
- Earlier in the same revision sequence, narration updates were also made to:
  - `slide-01.txt`
  - `slide-03.txt`
  - `slide-04.txt`
  - `slide-05.txt`
  - `slide-07.txt`
  - `slide-08.txt`
- Claude passed item `3.1 Lock slide copy before TTS` before the latest full MP3 regeneration run.
- Latest regeneration evidence:
  - `/home/mike/collateral/medical-project/docs/tts-regeneration-log.txt`

## Phase 4: Browser Verification and Publish

### 4.1 Chrome verification

- [x] Check desktop layout in actual Chrome
- [x] Check slide navigation, guided mode, and progress UI
- [x] Confirm no overlap, clipping, or broken states
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

### 4.2 Mobile and contrast verification

- [x] Check phone-sized layout
- [x] Confirm vertical scrolling works where needed
- [x] Confirm controls remain distinct from labels
- Implement check:
  - [x] Codex implemented
- Verified check:
  - [x] Claude verified

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
- [x] Checkpoint commit recorded
- [ ] Final publish recorded when applicable
- [ ] Remaining open risks documented below

Open risks / notes:

- Claude verification is still open for all Phase 4 / Phase 5 items.
- The medical deck copy and narration text are now aligned and locked through item 3.2; remaining work is browser/mobile review, commit, and publish.
- Browser verification has been performed by Codex using Windows Chrome headless against the local server, but not yet marked Claude verified.
