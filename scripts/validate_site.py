#!/usr/bin/env python3
"""Deterministic checks for the no-build aSaaSinators GitHub Pages site."""
from __future__ import annotations

from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"

REQUIRED_FILES = [
    SITE / "index.html",
    SITE / "styles.css",
    SITE / "app.js",
    SITE / "assets" / "agent-conduit.png",
    SITE / "assets" / "integration-collapse.png",
    SITE / ".nojekyll",
    ROOT / ".github" / "workflows" / "pages.yml",
    ROOT / "README.md",
]

REQUIRED_HTML = [
    "aSaaSinators",
    "Choked by SaaS",
    "Stop paying legacy rent",
    "API / export / browser",
    "Stop wiring every SaaS app",
    "Annual legacy SaaS rent today",
    "One seat is added",
    "Human UI visits",
    "Browser operation",
]

REQUIRED_CSS = [
    "@media (max-width: 1020px)",
    "@media (max-width: 720px)",
    "prefers-reduced-motion",
    "--lime",
    "--pink",
]

REQUIRED_JS = [
    "const phases",
    "updateCalculator",
    "IntersectionObserver",
    "seat compression",
]

PROHIBITED_BUILD_FILES = [
    ROOT / "package.json",
    ROOT / "vite.config.js",
    ROOT / "webpack.config.js",
    ROOT / "dist",
    ROOT / "node_modules",
]


def fail(message: str) -> None:
    print(f"[validate_site] FAIL: {message}", file=sys.stderr)
    raise SystemExit(1)


def require_contains(path: Path, needles: list[str]) -> None:
    text = path.read_text(encoding="utf-8")
    for needle in needles:
        if needle not in text:
            fail(f"{path.relative_to(ROOT)} is missing required text: {needle!r}")


def main() -> None:
    for path in REQUIRED_FILES:
        if not path.exists():
            fail(f"missing required file: {path.relative_to(ROOT)}")

    for path in PROHIBITED_BUILD_FILES:
        if path.exists():
            fail(f"no-build site should not include {path.relative_to(ROOT)}")

    require_contains(SITE / "index.html", REQUIRED_HTML)
    require_contains(SITE / "styles.css", REQUIRED_CSS)
    require_contains(SITE / "app.js", REQUIRED_JS)

    workflow = (ROOT / ".github" / "workflows" / "pages.yml").read_text(encoding="utf-8")
    for needle in ["actions/upload-pages-artifact", "actions/deploy-pages", "path: site", "python3 scripts/validate_site.py"]:
        if needle not in workflow:
            fail(f"Pages workflow missing {needle!r}")
    if re.search(r"\b(npm|pnpm|yarn|vite|webpack|parcel)\b", workflow, re.I):
        fail("Pages workflow contains a build-tool command; this site must stay no-build")

    print("[validate_site] OK: no-build static GitHub Pages site is self-contained and responsive checks are present")


if __name__ == "__main__":
    main()
