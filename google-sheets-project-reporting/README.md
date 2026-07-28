# Google Sheets workflow automation collateral

Public-safe proof of a broader Google Sheets + Apps Script + governed-AI service. The project-reporting Sheet is a self-built example of the kinds of recurring spreadsheet workflows that can be simplified; it is not the product being sold and is not presented as client work.

The presentation follows the shared case-study runtime and the visual language used by `financial-metrics-pipeline`. It is intentionally separate from the private proof Sheet and engineering repository.

## Public-safety rules

- Do not add API keys, OAuth tokens, email addresses, private Sheet or Script IDs, secret values, or unredacted IAM details.
- Screenshots may show public demo task data and redacted security configuration only.
- AI outputs must be labeled as drafts and must not imply autonomous action authority.
- Claims about counts, permissions, and provider behavior must be backed by the tested implementation.

## Folder layout

- `site/` — presentation HTML and data.
- `screenshots/` — focused, public-safe proof images.
- `video/` — muted workflow recording used in the AI-reporting stage.
- `audio/` — Cedar narration, one MP3 per stage; the service reframe is staged under `audio/service-reframe/`.
- `exports/` — static/PDF alternatives.

The shared runtime lives under `../shared/` and should remain backward-compatible with the other public collateral.