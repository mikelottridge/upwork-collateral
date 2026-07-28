# Google Sheets Reveal live QA

Date: 2026-07-27
Deployed commit: `e69330d745f59d23ace4eb5b547c95361126e3fa`
Rollback tag: `google-sheets-pre-reveal-20260727` at `a13f4853e552d9eb83386b4b30c02b9f0457f6d9`

- GitHub Pages run 30329166836 completed successfully.
- Base URL returned the approved production title and canonical deck manifest.
- Base mode rendered the email CTA and no console errors.
- `?upwork=1` at 390x844 rendered `Manual progression on this screen`, the Upwork-only CTA, and no console errors.
- CSS and JavaScript bundles returned 200.
- All four screenshot proof assets returned 200.
- Workflow video returned 206.
- Slide 1 narration returned 206 and the runtime state became `Recorded narration playing`.
- Presentation analytics returned 204.
- Audible quality was not human-listened during this run and remains the sole non-automated verification item.