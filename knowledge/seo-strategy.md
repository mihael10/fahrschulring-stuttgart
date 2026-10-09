---
title: SEO strategy & conventions (how the SEO plumbing in this repo works)
area: seo, canonical, staging, structured data, content rules
keywords: [seo, canonical, noindex, staging, production, json-ld, faq, sources, no fabrication]
---

# SEO strategy & conventions

Read this before touching metadata, routes, JSON-LD, FAQ content or the
deploy workflow. Research and roadmap live in the other `seo-*.md` files
(`seo-master-roadmap.md` is the index).

## Staging vs. production (P0 — never regress this)

- The GitHub Pages preview (`mihael10.github.io/fahrschulring-stuttgart/`)
  is **staging**: every page carries `noindex, nofollow`, there is no
  canonical tag, `robots.txt` disallows all. It must never be indexable.
- The one canonical production host is **`https://www.fahrschulring.de`**
  (`PRODUCTION_URL` in `src/lib/site-url.ts`). Canonicals, `og:url`,
  sitemap `<loc>`s and all JSON-LD `url`/`@id`s use it — in every build.
- The switch is `SITE_IS_PRODUCTION=true`, set by `deploy.yml` only when the
  `PRODUCTION_DOMAIN` repo variable exists. It also drops the `basePath` and
  writes `out/CNAME`. Don't set it by hand for a preview.
- `NEXT_PUBLIC_SITE_URL` is only "where this build is served" (used for the
  og:image file URL); it is *not* the canonical host.

## Per-page metadata

Every indexable page exports `metadata = pageMetadata({ path, title,
description })` (`src/lib/metadata.ts`). It sets `<title>` (absolute, no
template — keep ≤ 65 chars), description, canonical, robots, per-page
`og:url`/`og:title`/`og:description`, twitter card. Legal pages keep
`robots: { index: false }` and are not in the route registry.

## Route registry

`src/content/routes.ts` is the single list of indexable routes with a
hand-maintained `lastModified`. Sitemap, footer navigation and breadcrumbs
derive from it. Bump `lastModified` when a page's content changes
materially; it feeds `WebPage.dateModified` too.

## Structured data

`src/lib/schema.ts` builds an `@graph`: `#organization`
(DrivingSchool+LocalBusiness) and `#website` in the root layout; per page
`WebPage`, `BreadcrumbList` (mirrors the visible `Breadcrumbs`), `Service`
(class pages) and `FAQPage` (generated from the same `FaqItem[]` that
`FaqList` renders). Rules: only visible, verified facts; no `aggregateRating`
(Google ignores self-served LocalBusiness ratings and the number drifts);
no `geo` until coordinates are verified; no `foundingDate` (unknown).
Validate after changes with Google's Rich Results Test / schema.org
validator once the site is on a public URL (the preview is noindex but
fetchable).

## Content rules for topic pages (no fabrication, AI-ready)

Structure (see `TopicPage.tsx`): breadcrumb → H1 with topic + "Stuttgart"
→ **direct answer paragraph** naming the entity ("Fahrschulring ist eine
Fahrschule in Stuttgart-Mitte …") → H2 sections (official rules **separate**
from "bei Fahrschulring") → fact table → FAQ (question-shaped H3s) →
"Stand: <date>" + linked official sources → CTA.

- Legal/statistical facts: only with a source in `src/content/sources.ts`
  (official or reputable, dated). Re-verify numbers on the source page
  before publishing; the 2026-10-09 research saw search excerpts only.
- Business facts: only from `site.ts`, `classes.ts`, `team.ts`, `fleet.ts`,
  or the old fahrschulring.de. Unconfirmed offers (Intensivkurs format,
  Auffrischung, ASF/FES, English-language lessons, prices) stay out until
  the owner confirms (`entity-consistency.md` §Owner decisions).
- No prices of our own. Official third-party fees (TÜV SÜD) are allowed
  with source + date and the explicit note that they are not our prices.
- Reform status: say what is decided vs. proposed, with the date; never
  present proposals as law. Update `/fuehrerschein-ablauf/` when the
  Bundestag/Bundesrat decide.
- Wording: plain, specific, no "beste Fahrschule Stuttgart" claims, no
  keyword repetition for its own sake. One H1, logical H2/H3 outline.

## Old URLs

`knowledge/url-migration-map.csv` + `alfahosting/.htaccess` (Apache 301s
for `/pages/*.php`, host/scheme canonicalisation). GitHub Pages cannot 301;
if the domain points at Pages instead of Alfahosting, the old URLs 404 —
decision in `deployment.md`.

## Conversion tracking

`AnalyticsEvents.tsx` sends GA4 events for tel/mailto/map/CTA clicks and
form success; it only fires if `gtag` exists, i.e. after consent. Add
`data-cta="<name>"` to a link to track it as `cta_click`.
