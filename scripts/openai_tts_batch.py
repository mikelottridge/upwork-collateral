#!/usr/bin/env python3
"""
Batch-generate narration audio from slide note text files using OpenAI's audio/speech API.

Examples:
  python3 /home/mike/collateral/scripts/openai_tts_batch.py \
    --project /home/mike/collateral/medical-project

  python3 /home/mike/collateral/scripts/openai_tts_batch.py \
    --project /home/mike/collateral/psychologist-project \
    --voice verse --instructions "Calm, clear, technical, understated."
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
from pathlib import Path

import requests


DEFAULT_MODEL = "gpt-4o-mini-tts"
DEFAULT_VOICE = "alloy"
DEFAULT_FORMAT = "mp3"
SPEECH_ENDPOINT = "https://api.openai.com/v1/audio/speech"
DEFAULT_ENV_PATH = Path("/home/mike/.env")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate slide narration audio with OpenAI TTS.")
    parser.add_argument(
        "--project",
        type=Path,
        required=True,
        help="Project directory containing audio/slide-*.txt files.",
    )
    parser.add_argument("--model", default=DEFAULT_MODEL)
    parser.add_argument("--voice", default=DEFAULT_VOICE)
    parser.add_argument("--format", default=DEFAULT_FORMAT, choices=["mp3", "wav", "opus", "aac", "flac", "pcm"])
    parser.add_argument(
        "--instructions",
        default="Calm, clear, technical, understated.",
        help="Voice style instructions to send with the request.",
    )
    parser.add_argument("--api-key", help="Optional API key. Defaults to OPENAI_API_KEY.")
    parser.add_argument(
        "--env-file",
        type=Path,
        default=DEFAULT_ENV_PATH,
        help="Optional .env file to load before reading OPENAI_API_KEY.",
    )
    parser.add_argument("--overwrite", action="store_true", help="Replace existing audio files.")
    parser.add_argument("--dry-run", action="store_true", help="Print planned work without calling the API.")
    parser.add_argument("--sleep-seconds", type=float, default=0.4, help="Pause between requests.")
    parser.add_argument(
        "--wire-data",
        action="store_true",
        help="Also inject matching audio paths into site/case-study-data.js when possible.",
    )
    return parser.parse_args()


def find_slide_texts(project_dir: Path) -> list[Path]:
    audio_dir = project_dir / "audio"
    if not audio_dir.exists():
        raise SystemExit(f"audio directory not found: {audio_dir}")
    files = sorted(audio_dir.glob("slide-*.txt"))
    if not files:
        raise SystemExit(f"no slide-*.txt files found in {audio_dir}")
    return files


def read_text(path: Path) -> str:
    return path.read_text().strip()


def output_path_for(text_path: Path, fmt: str) -> Path:
    return text_path.with_suffix(f".{fmt}")


def build_request_payload(args: argparse.Namespace, text: str) -> dict:
    payload = {
        "model": args.model,
        "voice": args.voice,
        "input": text,
        "response_format": args.format,
    }
    if args.instructions:
        payload["instructions"] = args.instructions
    return payload


def load_env_file(path: Path | None) -> None:
    if not path or not path.exists():
        return
    for raw_line in path.read_text().splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip().strip("'").strip('"')
        if key and key not in os.environ:
            os.environ[key] = value


def synthesize(api_key: str, payload: dict) -> bytes:
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }
    response = requests.post(
        SPEECH_ENDPOINT,
        headers=headers,
        data=json.dumps(payload),
        timeout=180,
    )
    if response.status_code >= 400:
        raise RuntimeError(f"OpenAI API error {response.status_code}: {response.text[:1000]}")
    return response.content


def wire_audio_paths(project_dir: Path, fmt: str) -> None:
    data_path = project_dir / "site" / "case-study-data.js"
    if not data_path.exists():
        raise SystemExit(f"case-study data file not found: {data_path}")

    text = data_path.read_text()
    slides_marker = "slides: ["
    marker_index = text.find(slides_marker)
    if marker_index == -1:
        raise SystemExit(f"slides array not found in {data_path}")

    array_start = text.find("[", marker_index)
    if array_start == -1:
        raise SystemExit(f"slides array start not found in {data_path}")

    depth = 0
    array_end = None
    for index in range(array_start, len(text)):
        char = text[index]
        if char == "[":
            depth += 1
        elif char == "]":
            depth -= 1
            if depth == 0:
                array_end = index
                break
    if array_end is None:
        raise SystemExit(f"slides array end not found in {data_path}")

    prefix = text[:array_start + 1]
    slides_body = text[array_start + 1:array_end]
    suffix = text[array_end:]

    audio_line_re = re.compile(r'^\s*audio:\s*"\.\./audio/slide-\d+\.[^"]+",\s*$\n?', re.M)
    prefix = audio_line_re.sub("", prefix)
    slides_body = audio_line_re.sub("", slides_body)

    slide_num = 0

    def inject_audio(match: re.Match[str]) -> str:
        nonlocal slide_num
        slide_num += 1
        audio_line = f'      audio: "../audio/slide-{slide_num:02d}.{fmt}",\n'
        return f"{match.group(1)}{audio_line}"

    slides_body = re.sub(r'(\n\s{6}lead:\n\s{8}".*?",\n)', inject_audio, slides_body)
    candidate = f"{prefix}{slides_body}{suffix}"
    data_path.write_text(candidate)


def main() -> int:
    args = parse_args()
    project_dir = args.project.resolve()
    load_env_file(args.env_file)
    api_key = args.api_key or os.getenv("OPENAI_API_KEY")
    texts = find_slide_texts(project_dir)

    plan = []
    for text_path in texts:
        text = read_text(text_path)
        if not text:
            raise SystemExit(f"empty narration file: {text_path}")
        out_path = output_path_for(text_path, args.format)
        plan.append((text_path, out_path, text))

    print(f"Project: {project_dir}")
    print(f"Slides found: {len(plan)}")
    print(f"Model: {args.model}")
    print(f"Voice: {args.voice}")
    print(f"Format: {args.format}")
    for text_path, out_path, _ in plan:
        status = "overwrite" if out_path.exists() and args.overwrite else ("skip" if out_path.exists() else "generate")
        print(f"- {text_path.name} -> {out_path.name} [{status}]")

    if args.wire_data:
        print("- will wire audio paths into site/case-study-data.js")

    if args.dry_run:
        return 0

    if not api_key:
        raise SystemExit("OPENAI_API_KEY is not set. Export it or pass --api-key.")

    for text_path, out_path, text in plan:
        if out_path.exists() and not args.overwrite:
            print(f"Skipping existing {out_path.name}")
            continue
        payload = build_request_payload(args, text)
        audio_bytes = synthesize(api_key, payload)
        out_path.write_bytes(audio_bytes)
        print(f"Wrote {out_path}")
        time.sleep(args.sleep_seconds)

    if args.wire_data:
        wire_audio_paths(project_dir, args.format)
        print(f"Updated {project_dir / 'site' / 'case-study-data.js'}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
