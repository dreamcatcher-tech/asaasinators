# aSaaSinators

**A-S-A-A-S-I-N-A-T-O-R-S** — a static GitHub Pages site for the service that helps companies retire SaaS dependency with agents.

## What this repo contains

- `site/index.html` — polished no-build landing page.
- `site/styles.css` — responsive modern visual system.
- `site/app.js` — small progressive enhancement layer for the phase explorer, animations, and illustrative seat-compression calculator.
- `scripts/validate_site.py` — deterministic checks that keep the page self-contained and no-build.
- `.github/workflows/pages.yml` — GitHub Pages deploy workflow that uploads `site/` directly; it does **not** run a bundler or build step.

## Local preview

```bash
python3 scripts/validate_site.py
python3 -m http.server 8008 --directory site
# open http://127.0.0.1:8008/
```

## Positioning

The page describes a graceful SaaS off-ramp:

1. Bring up an agent alongside a SaaS app.
2. Route user jobs and questions through the agent first.
3. Reduce human seats while one controlled browser/API/export conduit keeps the old app alive.
4. Mirror the data structures and rebuild useful UI components as owned agent workflows.
5. Turn the SaaS app off once human UI visits and critical data calls reach zero.
