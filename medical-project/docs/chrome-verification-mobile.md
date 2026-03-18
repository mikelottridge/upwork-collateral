# Mobile Chrome Verification

Date:

- `2026-03-18`

Environment:

- Browser: Windows Chrome headless
- Local URL: `http://127.0.0.1:8765/medical-project/site/index.html`
- Viewports used:
  - `390x1200`
  - `390x2200`

Evidence images:

- `/mnt/c/Users/mike/AppData/Local/Temp/medical-mobile.png`
- `/mnt/c/Users/mike/AppData/Local/Temp/medical-mobile-full.png`

Observed results:

- The hero stacks cleanly on a phone-sized viewport.
- The title, lead, hero image, and hero tags remain readable.
- The hero tags wrap instead of overflowing horizontally.
- The project signals, metric cards, and client quote stack vertically without visible collision.
- The slide index remains readable in the mobile stack.
- No horizontal overflow or clipped side content is visible in the captured mobile render.
- Mobile presentation uses normal vertical scrolling to move from the hero/meta stack into the presentation shell.

Contrast and control notes:

- Controls remain visually distinct from tags and metadata in the shared design system.
- The mobile capture preserves strong contrast between the dark hero and light content cards.
- No label/control confusion is visible in the captured mobile state.

Notes:

- The mobile evidence confirms stacked layout, readability, and vertical-scroll behavior.
- The mobile screenshots are focused on layout integrity rather than step-by-step interaction.
