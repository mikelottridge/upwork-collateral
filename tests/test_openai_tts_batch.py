import subprocess
import sys
from pathlib import Path


def test_dry_run_selects_only_requested_slide(tmp_path):
    project = tmp_path / "project"
    audio = project / "audio"
    audio.mkdir(parents=True)
    (audio / "slide-08.txt").write_text("Existing narration", encoding="utf-8")
    (audio / "slide-09.txt").write_text("Neutral contact narration", encoding="utf-8")
    script = Path(__file__).parents[1] / "scripts" / "openai_tts_batch.py"

    result = subprocess.run(
        [
            sys.executable,
            str(script),
            "--project",
            str(project),
            "--slides",
            "09",
            "--dry-run",
        ],
        check=True,
        capture_output=True,
        text=True,
    )

    assert "Slides found: 1" in result.stdout
