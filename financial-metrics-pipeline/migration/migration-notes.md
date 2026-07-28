# Reveal.js migration notes

## Source contract

- Source root: `financial-metrics-pipeline`
- Baseline commit: `76dfa99dd2a38d26c412ca7851bc2e37c1e3d762`
- Legacy runtime: custom HTML/design-component export in `site/index.html` plus `site/case-study-data.js`
- Legacy source count: 7 visible narrated stages
- Legacy audio inventory: 11 MP3 files and 11 transcript files
- Finding: only `slide-01.mp3` through `slide-07.mp3` were referenced by the seven-stage source deck; clips 08 through 11 were stale/unreferenced.
- Legacy source hashes:
  - `site/index.html`: `97EDDE56B6BDB397176F89B82901F0D753D538D95967EC10976AA68A17752DAE`
  - `site/case-study-data.js`: `60BE2372FCA5973D4A47EF116E0E47B688C46F0669BCECF9F16E3A96AE637480`
  - `screenshots/demo-ui.png`: `A5495447F921D81A9B194BF32843DAB4C80BC02AFB244AB93FD7EEEAA793A2E3`

## Preserved behavior

- Narration remains user-initiated and stops at the final slide.
- If recorded audio fails, source timing supplies the fallback progression.
- Arrow-key navigation applies only when the Reveal stage is focused.
- Touch gestures, previous/next controls, slide index, readable transcripts, reduced-motion behavior, and manual phone progression remain supported.
- URL hash/history behavior remains enabled.
- Analytics remain disabled on local preview unless `?analytics=1` is supplied.
- `?upwork=1` changes contact information only. UTM attribution remains separate from contact mode.

## Intentional changes

- The stale seven-stage financial-pipeline product pitch is replaced by the approved nine-stage calculation-method story.
- The canonical supporting artifact is the native Google Sheet `17iLgTFtRTJGNlXX2I28mwz8THpAsdQl23Jeo4F2nE04`; the local XLSX is import source only.
- All nine narration clips are newly generated and mapped one-to-one to the revised stages.
- The old design-component runtime remains untouched until comparison QA and controlled cutover.
- The original `demo-ui.png` is not reused because it depicts the superseded product-pipeline story.
