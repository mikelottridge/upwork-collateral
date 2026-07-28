import asyncio
import shutil
from pathlib import Path

from playwright.async_api import async_playwright
from pypdf import PdfReader, PdfWriter


BASE = "http://127.0.0.1:4178/?upwork=1"
OUTPUT = Path("output/pdf/trustworthy-financial-calculations.pdf")
TEMP = Path("tmp/pdfs/trustworthy-financial-calculations")
SLIDE_COUNT = 9

PRINT_CSS = """
@page { size: 13.333in 7.5in; margin: 0; }
html, body {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  overflow: hidden !important;
  background: #f5f2ec !important;
}
.skip-link, .hero, .context-band, .section-heading, .slide-nav,
.stage-controls, .footer-panel, .fatal-state {
  display: none !important;
}
.app-shell, .walkthrough, .presentation-layout, .stage-card {
  display: block !important;
  width: 100% !important;
  height: 100% !important;
  min-height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  box-shadow: none !important;
}
.presentation-deck {
  position: fixed !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  margin: 0 !important;
}
.presentation-deck .slides > section {
  print-color-adjust: exact !important;
  -webkit-print-color-adjust: exact !important;
}
"""


async def export_pages() -> list[Path]:
    TEMP.mkdir(parents=True, exist_ok=True)
    pages = []
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1440, "height": 810})
        await page.emulate_media(media="screen")
        for index in range(SLIDE_COUNT):
            await page.goto(f"{BASE}#/{index}", wait_until="domcontentloaded")
            await page.wait_for_selector(".reveal.ready")
            await page.evaluate("document.fonts.ready")
            await page.add_style_tag(content=PRINT_CSS)
            await page.wait_for_timeout(250)
            page_path = TEMP / f"slide-{index + 1:02d}.pdf"
            await page.pdf(
                path=str(page_path),
                width="13.333in",
                height="7.5in",
                print_background=True,
                prefer_css_page_size=True,
                margin={"top": "0", "right": "0", "bottom": "0", "left": "0"},
            )
            pages.append(page_path)
        await browser.close()
    return pages


def merge_pages(pages: list[Path]) -> None:
    writer = PdfWriter()
    for page_path in pages:
        reader = PdfReader(str(page_path))
        writer.add_page(reader.pages[0])
    writer.add_metadata(
        {
            "/Title": "Calculations you can explain, check, and reuse",
            "/Author": "Mike Lottridge",
            "/Subject": "Trustworthy calculation and modeling workflow example",
        }
    )
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT.open("wb") as handle:
        writer.write(handle)


async def main() -> None:
    pages = await export_pages()
    merge_pages(pages)
    reader = PdfReader(str(OUTPUT))
    text = "\n".join(page.extract_text() or "" for page in reader.pages)
    normalized_text = " ".join(text.split())
    if len(reader.pages) != SLIDE_COUNT:
        raise RuntimeError(f"expected {SLIDE_COUNT} pages, found {len(reader.pages)}")
    if "The contract transfers; the financial example does not have to." not in normalized_text:
        raise RuntimeError("final transferability title missing from PDF text")
    if "View Mike Lottridge on Upwork" not in normalized_text:
        raise RuntimeError("Upwork CTA missing from PDF text")
    if "mikelottridge@productmanagementresources.pro" in text:
        raise RuntimeError("Upwork PDF exposed an off-platform email address")
    if ".xlsx" in normalized_text.lower():
        raise RuntimeError("PDF exposed the non-canonical XLSX import source")
    print(f"wrote {OUTPUT} with {len(reader.pages)} searchable pages")
    shutil.rmtree(TEMP, ignore_errors=True)


if __name__ == "__main__":
    asyncio.run(main())
