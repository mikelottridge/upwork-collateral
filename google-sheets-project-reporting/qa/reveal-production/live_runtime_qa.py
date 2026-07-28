import asyncio
import hashlib
import json
from pathlib import Path

from playwright.async_api import async_playwright


ROOT = "https://mikelottridge.github.io/upwork-collateral/google-sheets-project-reporting"
REVISION = "6f4504a"
OUTPUT = Path("qa/reveal-production/live-browser-qa.json")

ASSETS = {
    "site/index.html": "site/index.html",
    "site/assets/index-BeeD5pJL.js": "site/assets/index-BeeD5pJL.js",
    "site/assets/index-8inmnRYR.css": "site/assets/index-8inmnRYR.css",
    **{
        f"audio/service-reframe/slide-{index:02d}.mp3":
        f"audio/service-reframe/slide-{index:02d}.mp3"
        for index in range(1, 8)
    },
    "audio/slide-09.mp3": "audio/slide-09.mp3",
    "screenshots/dialog-stakeholder-v1.png": "screenshots/dialog-stakeholder-v1.png",
    "screenshots/task-tracker-focused-v2.png": "screenshots/task-tracker-focused-v2.png",
    "screenshots/workload-focused-v3.png": "screenshots/workload-focused-v3.png",
    "screenshots/security-architecture-redacted-v1.png":
        "screenshots/security-architecture-redacted-v1.png",
    "video/workflow-report-proof.webm": "video/workflow-report-proof.webm",
    "exports/google-sheets-project-reporting.pdf":
        "exports/google-sheets-project-reporting.pdf",
}


def sha256(data):
    return hashlib.sha256(data).hexdigest()


async def inspect_profile(browser, query, viewport):
    context = await browser.new_context(viewport=viewport)
    page = await context.new_page()
    console_errors = []
    page_errors = []
    failed_responses = []

    page.on(
        "console",
        lambda message: (
            console_errors.append(message.text)
            if message.type == "error"
            else None
        ),
    )
    page.on("pageerror", lambda error: page_errors.append(str(error)))
    page.on(
        "response",
        lambda response: (
            failed_responses.append(
                {"url": response.url, "status": response.status}
            )
            if response.status >= 400
            else None
        ),
    )

    await page.goto(
        f"{ROOT}/site/index.html?{query}&qa={REVISION}#/7",
        wait_until="domcontentloaded",
    )
    await page.wait_for_selector(".reveal.ready")
    await page.wait_for_timeout(800)

    result = {
        "url": page.url,
        "hero": (await page.locator("h1").first.text_content() or "").strip(),
        "stage_count": await page.locator(".slides > section").count(),
        "hash": await page.evaluate("location.hash"),
        "progression_mode": (
            await page.locator("[data-progression-mode]").text_content() or ""
        ).strip(),
        "mailto_links": await page.locator('a[href^="mailto:"]').count(),
        "email_text_count": await page.get_by_text(
            "Email Mike Lottridge", exact=True
        ).count(),
        "upwork_text_count": await page.get_by_text(
            "View Mike Lottridge on Upwork", exact=True
        ).count(),
        "console_errors": console_errors,
        "page_errors": page_errors,
        "failed_responses": failed_responses,
    }
    if result["email_text_count"]:
        result["cta_href"] = await page.get_by_text(
            "Email Mike Lottridge", exact=True
        ).get_attribute("href")
    elif result["upwork_text_count"]:
        result["cta_href"] = await page.get_by_text(
            "View Mike Lottridge on Upwork", exact=True
        ).get_attribute("href")
    else:
        result["cta_href"] = None

    await context.close()
    return result


async def inspect_assets(request):
    records = []
    for remote_path, local_path in ASSETS.items():
        response = await request.get(
            f"{ROOT}/{remote_path}?qa={REVISION}",
            fail_on_status_code=False,
        )
        body = await response.body()
        local = Path(local_path).read_bytes()
        records.append(
            {
                "path": remote_path,
                "status": response.status,
                "bytes": len(body),
                "remote_sha256": sha256(body),
                "local_sha256": sha256(local),
                "hash_match": body == local,
            }
        )
    return records


async def main():
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        base = await inspect_profile(
            browser, "channel=base", {"width": 1366, "height": 768}
        )
        upwork = await inspect_profile(
            browser, "upwork=1", {"width": 390, "height": 844}
        )
        assets = await inspect_assets(browser.contexts[0].request if browser.contexts else await pw.request.new_context())
        await browser.close()

    checks = {
        "current_story": (
            base["hero"]
            == "Custom Google Sheets systems for work your team still does by hand"
            and base["stage_count"] == 8
        ),
        "base_contact": (
            base["email_text_count"] == 1
            and base["cta_href"]
            == "mailto:mikelottridge@productmanagementresources.pro"
        ),
        "upwork_contact_only": (
            upwork["upwork_text_count"] == 1
            and upwork["mailto_links"] == 0
            and upwork["email_text_count"] == 0
            and upwork["cta_href"]
            == "https://www.upwork.com/freelancers/mikelottridge"
        ),
        "phone_manual_mode": (
            upwork["progression_mode"] == "Manual progression on this screen"
        ),
        "no_runtime_errors": not any(
            profile["console_errors"]
            or profile["page_errors"]
            or profile["failed_responses"]
            for profile in (base, upwork)
        ),
        "all_assets_current": all(
            item["status"] in {200, 206} and item["hash_match"]
            for item in assets
        ),
    }
    report = {"revision": REVISION, "base": base, "upwork": upwork, "assets": assets, "checks": checks}
    OUTPUT.write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(json.dumps(report, indent=2))
    if not all(checks.values()):
        raise SystemExit(1)


if __name__ == "__main__":
    asyncio.run(main())
