# Financial presentation release readiness

As of 2026-07-28, the approved Reveal.js migration and narration are deployed and live-verified with documented non-blocking warnings.

## Approved source contract

- Frozen outline: `revision-outline-calculation-expanded.md`
- Outline SHA-256: `150dbc0662c14772be870c5d9a435a131b1017e15d7b7cac96b427d1982d8411`
- Bound brief SHA-256: `61b842d666b485abc67531ccb7eea0a533c6facfa713b085276b331e0b5c70d4`
- Approved controlled scopes: `canonical-spec`, `assets`, `audio`, `html`, `pdf`, `deploy`
- Claude Opus consensus: `CONSENSUS VERDICT: PROCEED`

## Canonical calculation evidence

- Native Google Sheet title: `Trustworthy Financial Calculations — Example Model`
- Spreadsheet ID: `17iLgTFtRTJGNlXX2I28mwz8THpAsdQl23Jeo4F2nE04`
- Calculation status: `PASS`
- Source attestation status: `REVIEW`
- The local XLSX is import source only and is absent from buyer-facing HTML and presentation content.

## Reveal.js comparison build

- Nine approved narrated stages plus the untimed hero are implemented.
- Built comparison files:
  - `comparison-site/index.html`: `4d023b286d62b4716c0fbd73058a42cd65b6b727fbf0eedb9050074f21aabc01`
  - `comparison-site/assets/index-CPiJeW-Z.css`: `926e0d4dc21b9aa1556688849ec83c1e9ac1f191b56bdedd734eb9b9eef498dd`
  - `comparison-site/assets/index-qByEoTvt.js`: `d6a19c968522f220467667b6e38a90e814b8f8daadc5b434ff170a657aae8db9`
- Focused runtime/content tests: 21 passed.
- Desktop and phone visual review completed.
- Mobile height defect reproduced at 980px, traced to fixed stage height, corrected to 1080px, and rechecked across all nine slides with zero internal overflow.
- Phone document width: 390px client width and 390px scroll width; the horizontal slide index remains contained.
- Browser console: zero errors and zero warnings.
- Base/Upwork parity: story text identical; only contact copy/link changes.
- `utm_source=upwork` does not activate Upwork contact mode.
- The native Google Sheet URL does not receive the `upwork` query parameter.

## PDF

- Output: `output/pdf/trustworthy-financial-calculations.pdf`
- SHA-256: `afb954578420d18ede6d26bcac0ce7d3657fad0f8aa7c382c3756ae36581d858`
- Nine searchable 16:9 pages.
- All nine pages rendered to PNG and visually inspected.
- The exporter now waits for `document.fonts.ready`; this eliminated the initial font-metric capture shift.
- Upwork PDF contains the Upwork CTA and no off-platform email address.

## Rollback

- Legacy `site/index.html` remains byte-identical:
  `97edde56b6bdb397176f89b82901f0d753d538d95967ec10976aa68a17752dae`
- Legacy `site/case-study-data.js` remains byte-identical:
  `60be2372fca5973d4a47ef116e0e47b688c46f0669bcecf9f16e3a96ae637480`
- Rollback archive: `migration/rollback/legacy-site-76dfa99-20260728.zip`
- Rollback SHA-256: `fd59f595eb3e389cd2646b0efecf4245f2900e523c6239e5e728c44c777b8035`
- Archive contents verified: legacy `index.html` and `case-study-data.js`.

## Narration certification

- Nine Cedar MP3 clips were generated through the OpenAI Audio API using `gpt-4o-mini-tts-2025-12-15`, MP3 output, and 1.05 generation speed.
- Total measured audio duration: 125.832 seconds.
- Total source timing with 0.8-second per-stage fallback buffers: 133.032 seconds, within the approved 115-135 second range.
- Every clip has a matching script, transcript, measured duration, SHA-256, source reference, model, voice, format, and generation provenance in `specs/slides.yaml`.
- Real-browser local playback loaded the recorded MP3, showed the playing state, and advanced on the audio `ended` event.

## Pre-deployment certification

- Complete project Node suite: 27 passed.
- Shared repository Node suite: 16 passed.
- Python regression suite: 2 passed.
- SWI-Prolog certifying QA: 0 errors; accessibility, narration, policy, structure, and style rule groups passed.
- Certifying report: `qa/certifying-working/qa-report.json` (`e9a1519a85bb5cd698f3253cb8e51a695bc2df0f77fb9e2314b7527716c53417`).
- Eight non-blocking warnings are retained: four renderer false positives on deliberately overflow-hidden metadata or the Reveal ARIA live region, plus four copy-length observations. Prior all-slide desktop/phone inspection found no stage or document overflow; the copy observations do not change meaning or usability.
- Local channel verification confirmed: `?upwork=1` selects the Upwork CTA, `utm_source=upwork` alone retains the base email CTA, story content remains unchanged, and the console has zero errors or warnings.

## Controlled cutover and live verification

- The legacy two-file runtime was replaced by the approved Reveal.js production bundle under `site/` and deployed from `main` in commit `2826cea`.
- Live URL: `https://mikelottridge.github.io/upwork-collateral/financial-metrics-pipeline/site/index.html`.
- Clean-browser verification returned HTTP 200, loaded the current title and bundle, started in narration-idle state, played the recorded narration, and advanced from slide 1 to slide 2 on the audio-ended event.
- Base mode and `utm_source=upwork` retained the email CTA; `upwork=1` switched only the CTA to Mike's Upwork profile.
- The first versioned narration asset returned HTTP 200 as `audio/mp3`, matched the local 218,880-byte artifact, and the browser reported no console, page, or request failures.
- Rollback archive and hash remain unchanged.
