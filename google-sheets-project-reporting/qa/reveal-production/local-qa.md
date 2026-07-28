# Google Sheets service-reframe local QA

Date: 2026-07-28
Approved outline SHA-256: `b57a2e085c753521e6f58f1f6583781fb9a2380742482e9de5f34b86236519a2`
Status: local implementation and certification complete; live deployment verified in `live-qa.md`.

## Story and advisory review

- The deck now sells a bounded Google Sheets + Apps Script + governed-AI service.
- The project-reporting Sheet appears in stage 2 as a self-built sample and is explicitly labeled as sample proof, not client work.
- Claude Opus and Codex converged on the eight-stage structure recorded in `claude-consensus.md`.
- Proof appears early, the transferable pattern is explicit, and the engagement method and bounded offer are now part of the story.

## Deterministic and browser checks

- `npm test`: 26 of 26 tests pass, including exact script-to-spec and recorded-byte parity.
- Canonical spec: 8 stages, 122.82 seconds, approved `technical-editorial-v1` style, and no unapproved material changes.
- Copy/style validator: zero errors and zero warnings.
- Required SWI-Prolog certification passed accessibility, narration, policy, structure, and style.
- Four reviewed render warnings identify only Reveal's intentionally clipped one-pixel `.aria-status` accessibility node; the five-viewport deck inspection found no content clipping.
- Browser matrix: all 8 stages at 1440x900, 1366x768, 1024x768, 768x1024, and 390x844.
- Browser results: zero console errors and zero horizontal overflow at every viewport.
- Phone behavior: the three taller stages scroll in manual-progression mode; no content is clipped.
- Interaction checks: focused ArrowRight, Previous, final-slide bounds, and hash reload passed.
- Reduced motion: media query matched and transition duration reduced to 0.01 ms.
- Channel routing: base exposes the email CTA; `?upwork=1` exposes only the Upwork CTA and no visible email action; UTM-only attribution remains base mode.
- Analytics: exactly `view`, `final_slide`, and `cta_click`, with only approved fields.

## Narration

- Stage 8 reuses the existing, story-identical Cedar CTA narration byte-for-byte.
- Stages 1 through 7 use newly generated Cedar MP3s from `gpt-4o-mini-tts-2025-12-15`.
- All eight clips are 24 kHz mono MP3 at 128 kbps; measured durations and SHA-256 hashes match the canonical spec.
- Local runtime QA confirms idle-before-gesture, current first-clip playback, audio-ended advancement, current second-clip playback, and successful MP3 requests.
- Audible subjective quality remains unverified because this environment cannot listen.
- The certified build was deployed after all local gates passed.

## Static PDF

- Path: `exports/google-sheets-project-reporting.pdf`
- SHA-256: `e04f6dffca1743c6930f2e7956c866b9c6a5144091d20dfbf4a83849d50e0266`
- Pages: 8, searchable text.
- Visual review: every page rendered in order without clipping, overlap, broken glyphs, or missing proof.
- Story parity: all eight stages match the local URL presentation.
- Channel: Upwork-safe CTA; no off-platform email appears.