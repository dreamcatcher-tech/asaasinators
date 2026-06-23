# aSaaSinators

A static GitHub Pages site for the service that helps companies retire SaaS dependency with agents.

**Core line:** The best SaaS is no SaaS.

## What this repo contains

- `notes/project-notes.md` — distilled concept notes from project direction and voice notes.
- `docs/positioning.md` — top-to-bottom logical argument for the service.
- `docs/site-plan.md` — section plan and implementation constraints for the website.
- `docs/site-copy.md` — source copy the public page should stay aligned to.
- `features/*.feature` — behavior specs for the landing page positioning and no-build delivery.
- `site/index.html` — polished no-build landing page.
- `site/styles.css` — responsive modern visual system.
- `site/app.js` — small progressive enhancement layer for the phase explorer, animations, and illustrative seat-compression calculator.
- `scripts/validate_site.py` — deterministic checks that keep the page self-contained, source-documented, feature-specified, and no-build.
- `.github/workflows/pages.yml` — GitHub Pages deploy workflow that uploads `site/` directly; it does **not** run a bundler or build step.

## Local preview

```bash
python3 scripts/validate_site.py
python3 -m http.server 8008 --directory site
# open http://127.0.0.1:8008/
```

## Positioning

The page describes a graceful SaaS off-ramp:

1. Add the agent as one authorized SaaS user — an under-the-hood tactic, not the headline.
2. Make the agent the front door for requests, reports, data access, and cross-system work.
3. Collapse human glue between email, SaaS tools, exports, APIs, and spreadsheets into one agent-mediated surface.
4. Reduce direct human SaaS visits and compress paid seats to the operational minimum.
5. Mirror data and rebuild useful dashboards, forms, approvals, search, reports, and reminders as owned components.
6. Turn the SaaS app off once user queries route through the agent and critical data calls to the SaaS platform reach zero.
