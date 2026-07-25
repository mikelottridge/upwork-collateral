import subprocess
import sys
from pathlib import Path


def test_financial_bundle_patch_is_idempotent(tmp_path):
    source = tmp_path / "index.html"
    source.write_text(
        "<html><head><title>Bundled Page</title></head><body><main>Reply on Upwork with the companies and metrics you need covered, and I will propose the smallest useful pilot scope.</main></body></html>",
        encoding="utf-8",
    )
    script = Path(__file__).parents[1] / "scripts" / "update_financial_bundle.py"

    first = subprocess.run(
        [sys.executable, str(script), str(source)],
        check=True,
        capture_output=True,
        text=True,
    )
    once = source.read_text(encoding="utf-8")
    second = subprocess.run(
        [sys.executable, str(script), str(source)],
        check=True,
        capture_output=True,
        text=True,
    )
    twice = source.read_text(encoding="utf-8")

    assert first.stdout.strip() == "updated"
    assert second.stdout.strip() == "unchanged"
    assert once == twice
    assert once.count('data-pmr-presentation-adapter="financial"') == 1
    assert "../../shared/presentation-context.js?v=1" in once
    assert "../../shared/presentation-analytics.js?v=1" in once
    assert "../../shared/financial-presentation-adapter.js?v=1" in once
    assert "Use the contact option shown to share the companies and metrics you need covered." in once
    assert "<title>SEC Financial Metrics Pipeline Client Presentation</title>" in once
    assert once.count('property="og:title"') == 1
    assert 'content="SEC Financial Metrics Pipeline Client Presentation"' in once
