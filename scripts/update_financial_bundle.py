"""Add the shared dual-contact and analytics adapter to the standalone bundle."""

from __future__ import annotations

import argparse
from pathlib import Path


MARKER = 'data-pmr-presentation-adapter="financial"'
LEGACY_CTA = (
    "Reply on Upwork with the companies and metrics you need covered, and I will propose the smallest useful pilot scope."
)
NEUTRAL_CTA = "Use the contact option shown to share the companies and metrics you need covered."
PAGE_TITLE = "SEC Financial Metrics Pipeline Client Presentation"
PAGE_DESCRIPTION = "A client-ready presentation showing a traceable SEC filing and earnings-data metrics pipeline."
PAGE_META = f'''  <meta name="description" content="{PAGE_DESCRIPTION}">
  <meta property="og:title" content="{PAGE_TITLE}">
  <meta property="og:description" content="{PAGE_DESCRIPTION}">
'''
INJECTION = """  <script data-pmr-presentation-adapter="financial" src="../../shared/presentation-context.js?v=1"></script>
  <script src="../../shared/presentation-analytics.js?v=1"></script>
  <script src="../../shared/financial-presentation-adapter.js?v=1"></script>
"""


def patch(path: Path) -> bool:
    html = path.read_text(encoding="utf-8")
    updated = html.replace(LEGACY_CTA, NEUTRAL_CTA)
    updated = updated.replace("<title>Bundled Page</title>", f"<title>{PAGE_TITLE}</title>")
    if 'property="og:title"' not in updated:
        title_tag = f"<title>{PAGE_TITLE}</title>"
        if title_tag not in updated:
            raise ValueError(f"{path} has no recognized title tag")
        updated = updated.replace(title_tag, f"{title_tag}\n{PAGE_META}", 1)
    if MARKER not in updated:
        if "</body>" not in updated:
            raise ValueError(f"{path} has no closing body tag")
        updated = updated.replace("</body>", f"{INJECTION}</body>", 1)
    if updated == html:
        return False
    path.write_text(updated, encoding="utf-8")
    return True


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "path",
        nargs="?",
        type=Path,
        default=Path(__file__).parents[1] / "financial-metrics-pipeline" / "site" / "index.html",
    )
    args = parser.parse_args()
    print("updated" if patch(args.path) else "unchanged")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
