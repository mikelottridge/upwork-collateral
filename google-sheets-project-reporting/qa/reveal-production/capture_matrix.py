import asyncio
import io
import json
from pathlib import Path
from urllib.parse import parse_qs

from PIL import Image, ImageDraw
from playwright.async_api import async_playwright

BASE = "http://127.0.0.1:4174/site"
OUT = Path("qa/reveal-production")
VIEWPORTS = [(1440, 900), (1366, 768), (1024, 768), (768, 1024), (390, 844)]

async def render_matrix(browser):
    records = []
    for width, height in VIEWPORTS:
        context = await browser.new_context(viewport={"width": width, "height": height})
        page = await context.new_page()
        console_errors = []
        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
        await page.goto(f"{BASE}/#/0", wait_until="domcontentloaded")
        await page.wait_for_selector(".reveal.ready")
        images = []
        slide_records = []
        for index in range(8):
            await page.evaluate("index => { window.location.hash = '#/' + index; }", index)
            await page.wait_for_timeout(500)
            stage = page.locator(".presentation-deck")
            active = page.locator(".slides > section.present")
            metrics = await active.evaluate("el => ({clientWidth: el.clientWidth, scrollWidth: el.scrollWidth, clientHeight: el.clientHeight, scrollHeight: el.scrollHeight, headline: el.querySelector('h2')?.textContent?.trim() || ''})")
            metrics.update({"slide": index + 1, "hash": await page.evaluate("location.hash")})
            slide_records.append(metrics)
            png = await stage.screenshot(type="png")
            image = Image.open(io.BytesIO(png)).convert("RGB")
            image.thumbnail((260, 285), Image.Resampling.LANCZOS)
            images.append(image.copy())
        sheet = Image.new("RGB", (850, 940), "#d8d5cf")
        draw = ImageDraw.Draw(sheet)
        for index, image in enumerate(images):
            col, row = index % 3, index // 3
            x, y = 15 + col * 280, 25 + row * 305
            draw.text((x, y - 16), f"Slide {index + 1}", fill="#16211d")
            sheet.paste(image, (x, y))
        render_dir = OUT / "renders"
        render_dir.mkdir(parents=True, exist_ok=True)
        sheet.save(render_dir / f"contact-{width}x{height}.png")
        records.append({"viewport": f"{width}x{height}", "slides": slide_records, "console_errors": console_errors})
        await context.close()
    return records

async def runtime_checks(browser):
    context = await browser.new_context(viewport={"width": 1366, "height": 768})
    page = await context.new_page()
    await page.goto(f"{BASE}/#/0", wait_until="domcontentloaded")
    await page.locator(".presentation-deck").focus()
    await page.keyboard.press("ArrowRight")
    await page.wait_for_timeout(500)
    arrow_index = await page.evaluate("location.hash")
    await page.get_by_role("button", name="Previous").click()
    await page.wait_for_timeout(500)
    previous_index = await page.evaluate("location.hash")
    await page.get_by_role("button", name="Next step").click()
    await page.wait_for_timeout(500)
    final_hash = await page.evaluate("location.hash")
    base_href = await page.get_by_role("link", name="Email Mike Lottridge").get_attribute("href")
    await page.reload(wait_until="domcontentloaded")
    reload_hash = await page.evaluate("location.hash")
    await page.goto(f"{BASE}/?upwork=1#/7", wait_until="domcontentloaded")
    upwork_href = await page.get_by_role("link", name="View Mike Lottridge on Upwork").get_attribute("href")
    upwork_email_count = await page.get_by_text("Email Mike Lottridge", exact=True).count()
    await page.goto(f"{BASE}/?utm_source=upwork#/7", wait_until="domcontentloaded")
    utm_base_href = await page.get_by_role("link", name="Email Mike Lottridge").get_attribute("href")
    await context.close()

    phone = await browser.new_context(viewport={"width": 390, "height": 844})
    phone_page = await phone.new_page()
    await phone_page.goto(f"{BASE}/#/0", wait_until="domcontentloaded")
    manual_label = await phone_page.locator("[data-progression-mode]").text_content()
    await phone.close()

    reduced = await browser.new_context(viewport={"width": 1024, "height": 768}, reduced_motion="reduce")
    reduced_page = await reduced.new_page()
    await reduced_page.goto(f"{BASE}/#/0", wait_until="domcontentloaded")
    reduced_matches = await reduced_page.evaluate("matchMedia('(prefers-reduced-motion: reduce)').matches")
    transition_duration = await reduced_page.locator(".presentation-deck .slides > section.present").evaluate("el => getComputedStyle(el).transitionDuration")
    await reduced.close()

    return {
        "focused_arrow_right_hash": arrow_index,
        "previous_button_hash": previous_index,
        "final_slide_hash": final_hash,
        "hash_after_reload": reload_hash,
        "base_contact_href": base_href,
        "upwork_contact_href": upwork_href,
        "upwork_visible_email_actions": upwork_email_count,
        "utm_only_contact_href": utm_base_href,
        "phone_progression_label": (manual_label or "").strip(),
        "reduced_motion_matches": reduced_matches,
        "reduced_motion_transition_duration": transition_duration,
    }

async def analytics_checks(browser):
    context = await browser.new_context(viewport={"width": 1024, "height": 768})
    page = await context.new_page()
    payloads = []
    async def capture(route):
        request = route.request
        if request.method == "POST":
            parsed = parse_qs(request.post_data or "")
            payloads.append({key: values[-1] for key, values in parsed.items()})
        await route.fulfill(status=204, body="")
    await page.route("https://productmanagementresources.pro/api/presentation-events", capture)
    await page.goto(f"{BASE}/?analytics=1&utm_source=qa#/0", wait_until="domcontentloaded")
    await page.wait_for_timeout(2300)
    await page.get_by_role("button", name="Next step").click()
    await page.wait_for_timeout(500)
    await page.evaluate("() => { const a = document.querySelector('.presentation-cta-link'); a.addEventListener('click', e => e.preventDefault(), {capture: true}); a.click(); }")
    await page.wait_for_timeout(300)
    await context.close()
    allowed = {"schema_version", "event", "presentation", "session_id", "source", "medium", "campaign", "content"}
    return {"payloads": payloads, "events": [p.get("event") for p in payloads], "field_sets_valid": all(set(p) <= allowed for p in payloads)}

async def main():
    OUT.mkdir(parents=True, exist_ok=True)
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        report = {
            "render_matrix": await render_matrix(browser),
            "runtime": await runtime_checks(browser),
            "analytics": await analytics_checks(browser),
        }
        await browser.close()
    (OUT / "local-browser-qa.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(json.dumps({"viewports": len(report["render_matrix"]), "runtime": report["runtime"], "analytics": report["analytics"]}, indent=2))

if __name__ == "__main__":
    asyncio.run(main())