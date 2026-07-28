import argparse
import asyncio
import json
from pathlib import Path

from playwright.async_api import async_playwright


DEFAULT_URL = "http://127.0.0.1:4174/site/"
DEFAULT_OUTPUT = Path("qa/reveal-production/local-audio-qa.json")


async def audio_state(page):
    return await page.evaluate(
        """() => {
          const audio = window.__qaAudios?.at(-1) || null;
          return audio
            ? {
                paused: audio.paused,
                currentTime: audio.currentTime,
                duration: audio.duration,
                src: audio.currentSrc,
                hash: location.hash,
              }
            : null;
        }"""
    )


async def main(url, output):
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1366, "height": 768})
        audio_responses = []
        await page.add_init_script(
            """(() => {
              const NativeAudio = window.Audio;
              window.__qaAudios = [];
              window.Audio = function Audio(src) {
                const audio = new NativeAudio(src);
                window.__qaAudios.push(audio);
                return audio;
              };
              window.Audio.prototype = NativeAudio.prototype;
            })();"""
        )

        page.on(
            "response",
            lambda response: (
                audio_responses.append(
                    {"url": response.url, "status": response.status}
                )
                if ".mp3" in response.url
                else None
            ),
        )

        await page.goto(url, wait_until="domcontentloaded")
        await page.wait_for_timeout(500)
        idle = await audio_state(page)

        await page.get_by_role("button", name="Start narrated tour").click()
        await page.wait_for_timeout(1800)
        first_stage = await audio_state(page)

        await page.wait_for_function("location.hash === '#/1'", timeout=20000)
        await page.wait_for_timeout(1200)
        second_stage = await audio_state(page)

        await browser.close()

    result = {
        "url": url,
        "idle": idle,
        "first_stage": first_stage,
        "second_stage": second_stage,
        "audio_responses": audio_responses,
        "checks": {
            "idle_before_gesture": bool(idle is None or idle["paused"]),
            "first_audio_played": bool(
                first_stage
                and not first_stage["paused"]
                and first_stage["currentTime"] > 0
                and "slide-01.mp3" in first_stage["src"]
            ),
            "advanced_on_audio_end": bool(
                second_stage
                and second_stage["hash"] == "#/1"
                and not second_stage["paused"]
                and second_stage["currentTime"] > 0
                and "slide-02.mp3" in second_stage["src"]
            ),
            "audio_requests_succeeded": bool(
                audio_responses
                and all(item["status"] in {200, 206} for item in audio_responses)
            ),
        },
    }
    output.write_text(json.dumps(result, indent=2), encoding="utf-8")
    print(json.dumps(result, indent=2))

    if not all(result["checks"].values()):
        raise SystemExit(1)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", default=DEFAULT_URL)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    args = parser.parse_args()
    asyncio.run(main(args.url, args.output))