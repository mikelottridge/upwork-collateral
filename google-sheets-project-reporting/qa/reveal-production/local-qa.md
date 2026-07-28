# Google Sheets Reveal production QA

Date: 2026-07-27
Approved outline SHA-256: `9ffe44bb10429e9ebc2e40740d3c1d93a4ed4fdcede71da98fba9272550553b5`

## Certifying results

- Required SWI-Prolog engine: `SWI-Prolog 10.0.2`.
- Deterministic certification: certifying, zero errors.
- Passed rule groups: accessibility, narration, policy, structure, and `technical-editorial-v1` style.
- Browser matrix: all 9 stages at 1440x900, 1366x768, 1024x768, 768x1024, and 390x844; zero console errors and zero horizontal stage overflow.
- Phone behavior: `Manual progression on this screen`; audio completion and fallback are unit-tested not to advance on a tall phone stage.
- Interaction checks: focused ArrowRight, Previous, final-slide bounds, and hash reload passed.
- Reduced motion: media query matched and transition duration reduced to 0.01 ms.
- Channel routing: base exposes only `mailto:mikelottridge@productmanagementresources.pro`; `?upwork=1` exposes only `https://www.upwork.com/freelancers/mikelottridge`; UTM-only Upwork attribution remains base mode.
- Analytics: intercepted exactly `view`, `final_slide`, and `cta_click`; every payload used only the approved fields.

## Narration

All nine MP3 SHA-256 values match the approved canonical spec and the pre-migration byte inventory. No audio was generated or modified. Automated media-state and timing checks pass. Audible quality remains unverified because no human listening confirmation was performed in this run.

## Static PDF

The existing 9-page PDF was preserved byte-for-byte.

- Path: `exports/google-sheets-project-reporting.pdf`
- SHA-256: `a233e9c016b422c89537d8945167bf8735aad7ec4ce0c2e4d164e88c01a08913`
- Visual review: all pages render in order without clipping, overlap, broken glyphs, or missing proof.
- Story parity: problem, workflow, proof, provider/security model, and bounded-pilot close match the migrated deck.
- Accepted difference: the PDF retains the longer pre-migration opening headline while the approved URL presentation uses the tightened production headline.
- Channel note: the preserved PDF uses the Upwork-safe close, `Reply on Upwork`, and contains no off-platform contact action.

## Reviewed warnings and unavailable advisory layers

- Copy-density warnings are inherited from the approved canonical story. They are non-blocking and the five-viewport render confirms legibility.
- `RENDER_004` warnings point only to Reveal's intentionally clipped `.aria-status` screen-reader node.
- The optional installed OpenAI semantic layer could not run because the plugin package is missing `prompts/semantic-review-system.md`.
- Claude Opus advisory review could not run because the Claude OAuth access token returned 401 expired after a proxy-cleared health check. This advisory layer is optional and does not alter deterministic certification.