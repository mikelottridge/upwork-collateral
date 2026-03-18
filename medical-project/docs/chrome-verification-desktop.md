# Desktop Chrome Verification

Date:

- `2026-03-18`

Environment:

- Browser: Windows Chrome headless
- Local URL: `http://127.0.0.1:8765/medical-project/site/index.html`

Evidence images:

- `/mnt/c/Users/mike/AppData/Local/Temp/medical-desktop-v2.png`
- `/mnt/c/Users/mike/AppData/Local/Temp/medical-desktop-full.png`

Observed results:

- The hero renders cleanly with no overlap or clipping.
- The right rail renders project signals, metric cards, and client quote without collision.
- The presentation shell renders below the hero.
- The slide index is visible.
- The controls are visible:
  - `Start Guided Mode`
  - `Previous`
  - `Next`
- The progress rail and slide counter are visible.
- The first active slide renders without broken layout.
- No broken states, hidden panels, or overlapping blocks are visible in the captured desktop render.

Notes:

- This evidence is for desktop layout and visible control presence.
- It does not prove button-click interaction step-by-step; it records the rendered desktop state in actual Chrome.
