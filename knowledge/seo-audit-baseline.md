---
title: SEO audit baseline (Phase 0 — redesign repo as found on 2026-10-09)
area: seo, audit, baseline
keywords: [seo, baseline, canonical, sitemap, robots, schema, metadata, headings]
---

# SEO audit baseline — redesign repository

Snapshot of the repository **before** the SEO work of 2026-10-09 (commit
`2a0bb4f`). Everything below was read from source or from a local production
build (`GITHUB_REPOSITORY=mihael10/fahrschulring-stuttgart
NEXT_PUBLIC_SITE_URL=https://mihael10.github.io/fahrschulring-stuttgart npm run build`,
i.e. exactly what `deploy.yml` produces). Labels: **FACT** = read from
code/output, **OBS** = observation, **INF** = inference, **REC** = recommendation.

## 1. Architecture

- FACT: Next.js 16.3.0 App Router, React 19.2.8, Tailwind v4, TypeScript.
- FACT: `output: "export"`, `trailingSlash: true`, `images.unoptimized: true`,
  `basePath` derived from `GITHUB_REPOSITORY` (→ `/fahrschulring-stuttgart`
  on Actions, empty locally).
- FACT: hosted on GitHub Pages (project page) via `.github/workflows/deploy.yml`
  on push to `main`. No server code; contact form POSTs to
  `alfahosting/kontakt.php` when `CONTACT_ENDPOINT` is set, else `mailto:`.
- FACT: client components: `Header`, `Faq`, `Counter`, `ContactForm`,
  `CookieConsent`, `CookieSettingsButton`, `StickyContactBar`, `ReviewText`.
  Everything else is a server component, fully prerendered.

## 2. URLs (built routes)

| Route | Indexable | In sitemap | Linked from nav |
| --- | --- | --- | --- |
| `/` | yes | yes | yes (logo/Start) |
| `/klassen/` | yes | yes | **no** (nav uses `/#klassen`) |
| `/team/` | yes | yes | **no** (nav uses `/#team`) |
| `/anfahrt/` | yes | yes | **no** (nav uses `/#anfahrt`) |
| `/kontakt/` | yes | yes | only from `ContactCta`/`/klassen` button/404 |
| `/impressum/` | noindex | no | footer |
| `/datenschutz/` | noindex | no | footer, cookie banner, form |
| `/404.html` | noindex | no | — |

OBS: `/klassen/`, `/team/`, `/anfahrt/`, `/kontakt/` are near-duplicates of
homepage sections (same components/copy) and are orphan-ish (no nav links).

## 3. Metadata (as built for GitHub Pages)

| Page | `<title>` | description | canonical | og:url |
| --- | --- | --- | --- | --- |
| `/` | Fahrschulring Stuttgart – Führerschein mit 50+ Jahren Erfahrung | "Fahrschulring Stuttgart bildet seit über 50 Jahren …" | `https://mihael10.github.io/fahrschulring-stuttgart/` | same |
| `/klassen/` | Führerscheinklassen \| Fahrschulring Stuttgart | own | github.io/…/klassen/ | **homepage URL** |
| `/team/` | Team \| Fahrschulring Stuttgart | own (short) | github.io/…/team/ | **homepage URL** |
| `/kontakt/` | Kontakt \| Fahrschulring Stuttgart | own | github.io/…/kontakt/ | **homepage URL** |
| `/anfahrt/` | Anfahrt \| Fahrschulring Stuttgart | own (short) | github.io/…/anfahrt/ | **homepage URL** |
| `/impressum/` | Impressum \| … | **inherits homepage description** | none | homepage URL |

FACT: `og:title`/`og:description`/twitter tags are inherited from the root
layout on every page (identical on all pages). No `twitter:` config is set
explicitly; Next derives `summary_large_image` from `openGraph.images`.

## 4. Canonical strategy

- FACT: `metadataBase = NEXT_PUBLIC_SITE_URL`, which `deploy.yml` sets to the
  **GitHub Pages URL**. Fallback in code: `https://www.fahrschulring.de`.
- OBS (**P0 risk**): every page self-canonicalises to
  `mihael10.github.io/fahrschulring-stuttgart/…`. The preview declares
  itself the canonical copy of the business website.
- OBS: production hostname inconsistency inside the repo: code fallbacks use
  `https://www.fahrschulring.de`; CLAUDE.md/task text uses
  `https://fahrschulring.de/`; `alfahosting/kontakt.php` allows both.

## 5. Robots behaviour

- FACT: `robots.ts` → `User-Agent: * / Allow: /` + `Sitemap:` line (github.io URL).
- FACT (corrects `deployment.md`): for a *project* Pages site the build's
  `out/robots.txt` is served at
  `https://mihael10.github.io/fahrschulring-stuttgart/robots.txt`, **not**
  the domain root. Crawlers only read `/robots.txt` at the origin root
  (RFC 9309), so this file has no effect on the preview at all.
- FACT: no `noindex` on any marketing page of the preview → the preview is
  fully indexable (**P0**).
- FACT: Impressum, Datenschutz, 404 carry `noindex`.

## 6. Sitemap

- FACT: 5 URLs (`/`, `/klassen/`, `/team/`, `/anfahrt/`, `/kontakt/`), all on
  the github.io host, `lastmod = build time` for every URL (OBS: an always-
  "now" lastmod is a weak/ignored signal).

## 7. Structured data

FACT: one JSON-LD block in `layout.tsx` on every page:
`DrivingSchool` with `name` "Fahrschulring Stuttgart", `legalName`
"Fahrschulring GmbH", `image` og-cover, `telephone` "0711 295928" (not
E.164), `email`, `address` (no `addressRegion`), `openingHours`
"Mo-Th 15:00-18:30", `url` (github.io), `sameAs` [Facebook].

Missing/weak: no `@id` (entity can't be referenced), no `logo`, no `geo`,
no `hasMap`, no `openingHoursSpecification`, no `WebSite`/`WebPage`/
`BreadcrumbList`, no `Service`/offer catalog, no `aggregateRating` (correct
to omit: Google ignores self-served LocalBusiness review stars), no
`founder`/`employee`.

## 8. Headings

- `/`: H1 "Deine Fahrschule in Stuttgart. Sicher ans Ziel." (one H1, good,
  contains "Fahrschule … Stuttgart"). H2s: "Fahrschule, die zu deinem Leben
  passt", "Für jedes Fahrzeug die passende Ausbildung", "Unsere Fahrzeuge",
  "In vier Schritten zum Führerschein", "Wir sind für dich da", "Das sagen
  unsere Fahrschüler:innen", "Gut zu wissen", "Hier findest du uns", "Lass
  uns starten". OBS: `Highlights` (simulator) starts at **H3 with no parent
  H2**; group headings (H3 "Motorrad") and class cards (H3 "Klasse A1") sit
  at the same level.
- Subpages: H1s are slogan-like ("Lass uns starten", "Hier findest du uns",
  "Wir sind für dich da") — no topic/location words.

## 9. Internal links

- Header/footer nav: `/`, `/#klassen`, `/#team`, `/#anfahrt`, `/#kontakt`
  (fragment links — all resolve to the homepage URL for crawlers).
- Footer: `/impressum`, `/datenschutz`. CTAs mostly `#kontakt`/`tel:`.
- OBS: there are **no crawlable links to topic pages** because none exist;
  the only distinct indexable URLs are effectively unlinked.

## 10. Images

27 files in `public/images/` (all `.webp` except `og-cover.jpg`). Largest:
`hero/storefront.webp` 1600×1202 203 KB (LCP candidate, `priority`),
`og-cover.jpg` 195 KB, `fleet/gallery-misc-2.webp` 188 KB,
`fleet/mg4.webp` 146 KB. Alt text: logo "Fahrschulring Stuttgart"; hero
storefront `alt=""` (decorative); team photos = names; simulator photos have
descriptive alts; **all 30 carousel slides share one alt** ("Fahrzeug aus
unserem Fuhrpark") and the second (looping) copy is not `aria-hidden`.
Full table in `knowledge/redesign-seo-audit.md` §Images.

## 11. Performance architecture

- FACT: fully static HTML, fonts via `next/font` (Manrope, self-hosted,
  6 woff2 files), ~676 KB of JS chunks total on disk (largest 228 KB,
  framework/runtime; not all loaded per page).
- OBS: scroll-driven `.reveal` animations are CSS-only (`animation-timeline`),
  no JS; content is in the DOM regardless. Vehicle carousel is a CSS
  animation of 30 images (all lazy except none are `priority`).
- OBS: Google Maps iframe `loading="lazy"` on `/` and `/anfahrt/`.
- OBS: GA4 only loads after consent.
- Not measured: field CWV (no CrUX data accessible; see seo-final-qa.md).

## 12. Content architecture

Single scrolling landing page carrying all content; content data in
`src/content/*.ts` (site facts, 18 classes, team of 5, fleet of 18 vehicles,
9 FAQs, 3 real Google review quotes). No per-class, cost, foreign-licence,
exam, or process pages. No prices (policy).

## 13. Reviews

`GoogleReviews.tsx`: dated snapshot (4.9★ / 325, 2026-10-02) + 3 verbatim
real reviews; live Places API data only if `GOOGLE_PLACES_API_KEY` +
`GOOGLE_PLACE_ID` are set at build. `testimonials.ts` intentionally empty.
No review schema (correct).

## 14. Deployment

GitHub Actions → Pages artifact `out/`. `NEXT_PUBLIC_SITE_URL` = Pages URL.
No custom domain. No mechanism to separate "where it is served" from
"what is canonical", and none to mark staging non-indexable.

## 15. Known SEO risks (ranked)

1. **P0** Preview self-canonicalises and is indexable → can be indexed as a
   competing duplicate of the business site before/after launch.
2. **P0** No 301 plan for old `.php` URLs (`/pages/klassen.php` etc.) —
   GitHub Pages cannot issue 301s.
3. **P0** Production hostname undecided (www vs apex) across code/docs.
4. **P1** og:url on all subpages points to `/`; Impressum inherits the
   homepage description.
5. **P1** No dedicated pages for high-intent topics (Klasse B, Motorrad,
   Anhänger, LKW/Bus, ausländischer Führerschein, Kosten, Ablauf).
6. **P1** Thin entity graph in JSON-LD (no @id/geo/logo/hours spec).
7. **P2** Duplicate subpages vs homepage sections; slogan H1s.
8. **P2** Identical alt text on 30 carousel images; heading level skips.
9. **P2** `robots.txt` comment/docs misunderstanding (file not at origin root).
