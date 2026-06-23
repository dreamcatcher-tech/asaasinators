#!/usr/bin/env python3
"""Deterministic checks for the no-build aSaaSinators GitHub Pages site."""
from __future__ import annotations

from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
DOCS = ROOT / "docs"
NOTES = ROOT / "notes"
FEATURES = ROOT / "features"

REQUIRED_FILES = [
    SITE / "index.html",
    SITE / "styles.css",
    SITE / "app.js",
    SITE / "assets" / "agent-conduit.png",
    SITE / "assets" / "integration-collapse.png",
    SITE / ".nojekyll",
    ROOT / ".github" / "workflows" / "pages.yml",
    ROOT / "README.md",
    DOCS / "positioning.md",
    DOCS / "site-plan.md",
    DOCS / "site-copy.md",
    NOTES / "project-notes.md",
    FEATURES / "landing_page_positioning.feature",
    FEATURES / "static_site_delivery.feature",
]

REQUIRED_HTML = [
    "aSaaSinators",
    "The best SaaS is no SaaS",
    "front door for requests, reports, and data access",
    "One front door",
    "Invisible cutoff",
    "Humans are the integration layer",
    "Stop using people to glue every SaaS app",
    "First the agent looks like a person",
    "Every request becomes an agent-facilitated workflow",
    "Queries move to the agent",
    "Data calls fall to zero",
    "Annual legacy SaaS rent today",
    "Browser operation",
]

REQUIRED_SOURCE_COPY = [
    "The best SaaS is no SaaS",
    "Do not lead with “one extra seat”",
    "humans as the integration layer",
    "all user queries in the organization come into the agent",
    "without data calls to the SaaS platform",
]

REQUIRED_FEATURE_TEXT = [
    "Feature:",
    "front door for work",
    "final cutoff",
    "no-build",
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
    "Seat the agent inside the SaaS app",
    "Make the agent the front door for work",
    "Answer without SaaS data calls",
    "updateCalculator",
    "IntersectionObserver",
]

PROHIBITED_HTML = [
    "<h1>Choked by SaaS",
    "Stop paying legacy rent",
    "<strong>1 agent seat</strong>",
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


def require_not_contains(path: Path, needles: list[str]) -> None:
    text = path.read_text(encoding="utf-8")
    for needle in needles:
        if needle in text:
            fail(f"{path.relative_to(ROOT)} still contains prohibited text: {needle!r}")


def main() -> None:
    for path in REQUIRED_FILES:
        if not path.exists():
            fail(f"missing required file: {path.relative_to(ROOT)}")

    for path in PROHIBITED_BUILD_FILES:
        if path.exists():
            fail(f"no-build site should not include {path.relative_to(ROOT)}")

    require_contains(SITE / "index.html", REQUIRED_HTML)
    require_not_contains(SITE / "index.html", PROHIBITED_HTML)
    require_contains(SITE / "styles.css", REQUIRED_CSS)
    require_contains(SITE / "app.js", REQUIRED_JS)
    require_contains(DOCS / "positioning.md", REQUIRED_SOURCE_COPY)
    require_contains(NOTES / "project-notes.md", REQUIRED_SOURCE_COPY)

    combined_features = "\n".join(path.read_text(encoding="utf-8") for path in FEATURES.glob("*.feature"))
    for needle in REQUIRED_FEATURE_TEXT:
        if needle not in combined_features:
            fail(f"feature specs are missing required text: {needle!r}")

    workflow = (ROOT / ".github" / "workflows" / "pages.yml").read_text(encoding="utf-8")
    for needle in ["actions/upload-pages-artifact", "actions/deploy-pages", "path: site", "python3 scripts/validate_site.py"]:
        if needle not in workflow:
            fail(f"Pages workflow missing {needle!r}")
    if re.search(r"\b(npm|pnpm|yarn|vite|webpack|parcel)\b", workflow, re.I):
        fail("Pages workflow contains a build-tool command; this site must stay no-build")

    print("[validate_site] OK: no-build static GitHub Pages site is self-contained, source-documented, feature-specified, and responsive checks are present")


if __name__ == "__main__":
    main()
