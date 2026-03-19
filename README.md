# Collateral Workspace

This workspace holds public-facing project collateral for Mike's portfolio use, primarily for:

- Upwork portfolio links
- LinkedIn project links
- general hiring collateral for prospective contract clients

The main goal is to help a prospective client decide whether Mike is worth hiring for a contract engagement. These pages are not internal engineering docs and should not drift in that direction.

## Style Guide

The canonical presentation style guide now lives at:

- `style-guide.md`

Read that alongside this README before making cross-project design, copy, narration, or verification changes.

The reusable presentation execplan template lives at:

- `templates/presentation-execplan-template.md`

Instantiate a project-specific copy of that template inside the project's `docs/` folder before starting a new deck or making substantial revisions to an existing one.

## Audience

Primary audience:

- prospective Upwork clients
- prospective LinkedIn viewers who may want to hire Mike

The pages should answer:

1. What kind of client problem was solved?
2. What kind of system was built?
3. Why should this increase confidence in hiring Mike for similar work?

## Constraints

For the Upwork-linked versions:

- no contact info
- no booking links
- no off-platform CTA
- no PHI
- no confidential client details
- use synthetic, redacted, or reconstructed visuals where needed

These pages should stay safe to publish publicly. Any non-Upwork variant with contact info should live separately and should not be linked from the Upwork-safe version.

## Current Active Decks

- `medical-project/site/index.html`
- `psychologist-project/site/index.html`
- `index.html` for a local landing page

Current stronger reference direction:

- the psychologist deck now follows the darker navy / teal / amber visual system derived from Claude's PPT treatment
- the psychologist page uses the hero as the cover and a 6-slide narrated sequence underneath

## Folder Structure

- `shared/`
  - shared deck CSS and JS
- `scripts/`
  - helper scripts, including OpenAI TTS batch generation
- `<project>/site/`
  - public case-study shell and project-specific slide data
- `<project>/audio/`
  - narration text files and generated MP3s
- `<project>/screenshots/`
  - future real or redacted screenshots
- `<project>/docs/`
  - project notes, collateral plans, voiceover notes, portfolio drafts
- `<project>/drafts/`
  - scratch material
- `<project>/slides/`
  - slide planning assets if needed

## Shared Runtime Files

- `shared/case-study.css`
- `shared/case-study.js`

Each deck uses:

- `site/index.html` for the page shell
- `site/case-study-data.js` for the project-specific content

## Current Deck Pattern

The current decks are structured as guided hiring collateral with:

- a compact hero section
- a slide index sidebar
- a slide canvas with synthetic visuals
- guided narration support
- buyer-oriented closing slides

The default direction is:

- cover / immediate context
- client problem
- workflow / approach
- analysis / proof of structure
- delivery-ready output
- trust / hiring signal

## Narration Workflow

Narration source files live in each project's `audio/` folder as:

- `slide-01.txt`
- `slide-02.txt`
- etc.

Generated narration files live alongside them as:

- `slide-01.mp3`
- `slide-02.mp3`
- etc.

Generation script:

- `scripts/openai_tts_batch.py`

The script:

- auto-loads `OPENAI_API_KEY` from `/home/mike/.env`
- generates MP3 narration from `slide-*.txt`
- can overwrite existing audio
- can re-wire matching audio paths into `site/case-study-data.js`

Example:

```bash
python3 /home/mike/collateral/scripts/openai_tts_batch.py \
  --project /home/mike/collateral/medical-project \
  --voice sage \
  --overwrite \
  --wire-data
```

```bash
python3 /home/mike/collateral/scripts/openai_tts_batch.py \
  --project /home/mike/collateral/psychologist-project \
  --voice alloy \
  --overwrite \
  --wire-data
```

## Narration Speed

Playback speed is handled in the browser, not baked into the MP3s.

Current behavior:

- each active deck can set a default `audioRate` in `site/case-study-data.js`
- current decks default to `1.1x`
- you can override in the URL with `?rate=1.0`, `?rate=1.15`, etc.

Example:

- `.../medical-project/site/index.html?rate=1.15`

## Local Preview

From `/home/mike/collateral`:

```bash
python3 -m http.server 8765
```

Then open:

- `http://127.0.0.1:8765/`
- `http://127.0.0.1:8765/medical-project/site/index.html`
- `http://127.0.0.1:8765/psychologist-project/site/index.html`

Useful test URLs:

- guided mode is on by default
- disable guided mode: `?autoplay=0`
- faster narration: `?rate=1.15`

## Resume Checklist

When picking this work up later:

1. Read this README first.
2. Open the project's `site/case-study-data.js`.
3. Check the project's `docs/voiceover-script.md`.
4. Review what is still synthetic vs. what should become a real screenshot.
5. Regenerate narration if slide copy changed.
6. Preview locally before sharing links.

## Editing Order

Best order for revisions:

1. update slide copy in `site/case-study-data.js`
2. improve synthetic artifact definitions or replace with real screenshots
3. update narration text files in `audio/`
4. regenerate MP3s with `openai_tts_batch.py`
5. preview locally with autoplay and rate overrides
6. only then publish/share links

## Open Work

High-value next improvements:

- replace the weakest synthetic visuals with real redacted screenshots
- improve document mockups with more realistic placeholder content
- add more project-specific collateral for:
  - `psychologist-word-macro`
  - `shopify-excel-automation`
  - `allhealth`
- add Open Graph image assets once hosting is finalized
- consider separate public-contact variants only if they remain isolated from Upwork-safe routes

## Do Not Forget

- These pages are hiring collateral, not architecture notes.
- Avoid meta language about "public-safe emphasis" or "collateral constraints" on the visible page.
- Visible copy should speak to the prospective client's hiring decision.
