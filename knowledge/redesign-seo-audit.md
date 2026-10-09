---
title: Redesign SEO audit (Phase 10)
area: seo, technical seo, on-page, local, aeo
keywords: [audit, canonical, staging, noindex, schema, headings, alt, performance, conversion]
---

# Redesign SEO audit — state found on 2026-10-09 (pre-fix)

Scope: the Next.js redesign in this repo, as built by `deploy.yml`. Each
finding has a priority (P0–P4, see `seo-master-roadmap.md`) and whether it
was fixed in the 2026-10-09 implementation pass (✅ = fixed, see
`seo-final-qa.md` for verification).

## Technical SEO

| # | Area | Finding | Prio | Status |
| --- | --- | --- | --- | --- |
| T1 | Canonical | All canonicals, og:url, sitemap `<loc>`, JSON-LD `url` use `mihael10.github.io/fahrschulring-stuttgart` (NEXT_PUBLIC_SITE_URL = Pages URL) | P0 | ✅ canonical/sitemap/JSON-LD now always `https://www.fahrschulring.de` |
| T2 | Staging indexing | Preview indexable, no `noindex`; `robots.txt` sits at `/fahrschulring-stuttgart/robots.txt` where crawlers never read it | P0 | ✅ every page emits `noindex, nofollow` unless the build is flagged production (`SITE_IS_PRODUCTION=true`) |
| T3 | Hostname | www vs apex undecided (code: www; docs: apex) | P0 | ✅ decided `https://www.fahrschulring.de` (see `site-architecture.md` §Hostname) |
| T4 | Old URLs | No 301 map for `.php` URLs; GitHub Pages cannot send 301s | P0 | ✅ map in `url-migration-map.csv` + ready `.htaccess` in `alfahosting/`; hosting decision pending owner |
| T5 | basePath | Production on a custom domain needs empty basePath; current config always adds `/fahrschulring-stuttgart` on Actions | P0 | ✅ production flag drops basePath |
| T6 | og:url | Every subpage's `og:url` = homepage; og title/description identical on all pages | P1 | ✅ per-page OG via `pageMetadata()` helper |
| T7 | Description | Impressum/Datenschutz inherit the homepage description | P3 | ✅ own descriptions |
| T8 | Sitemap | lastmod = build time for all URLs; only 5 URLs | P2 | ✅ sitemap generated from one route registry, includes new pages, per-route `lastModified` dates |
| T9 | Static rendering | All routes prerendered (`○ Static`) — excellent crawlability | — | keep |
| T10 | Trailing slash | `trailingSlash: true` consistent; canonical/sitemap use slash form | — | keep |
| T11 | Status codes | GH Pages serves `404.html` with real 404 status; no soft 404s | — | keep |
| T12 | JS dependency | Content in initial HTML; FAQ answers rendered in DOM (client component) | P3 | ✅ FAQ rebuilt on native `<details>` server component (no JS needed) |
| T13 | Language | `<html lang="de">`, `og:locale de_DE` | — | keep |
| T14 | Duplicate pages | `/klassen/`, `/team/`, `/anfahrt/`, `/kontakt/` duplicate homepage sections but are unlinked from nav | P2 | ✅ `/klassen/` became the hub linking to the new class pages; footer links all standalone pages; no page removed |

## On-page

| # | Finding | Prio | Status |
| --- | --- | --- | --- |
| O1 | Homepage title "Fahrschulring Stuttgart – Führerschein mit 50+ Jahren Erfahrung" — brand-first, no "Fahrschule" | P1 | ✅ "Fahrschule in Stuttgart-Mitte – alle Führerscheinklassen \| Fahrschulring" |
| O2 | Subpage H1s are slogans ("Lass uns starten") — no topic | P2 | ✅ topic H1s on the hub/new pages; eyebrow keeps the friendly tone |
| O3 | Highlights section starts at H3 without H2; class cards same level as group headings | P2 | ✅ Highlights → H2; ClassCard heading level configurable (H4 under group H3 on homepage) |
| O4 | No dedicated pages for Klasse B/BF17/Automatik, Motorrad (A/A1/A2/AM/B196), Anhänger (BE/B96), LKW/Bus, foreign licence, cost, process | P1 | ✅ 7 new pages (see `site-architecture.md`) |
| O5 | Anchor text: nav anchors only ("Führerscheinklassen" → `/#klassen`) | P1 | ✅ descriptive links from homepage class groups/footer to the new pages |
| O6 | Carousel: 30 images, one alt text, looping duplicate not hidden from AT | P2 | ✅ per-photo alts in `fleet.ts`; duplicate loop `aria-hidden` |
| O7 | E-E-A-T: owner named, instructors named with classes, 50+ years, Verbands-Fahrschule seal, real reviews — good, but not connected to entity data | P1 | ✅ JSON-LD `founder`/`employee`-free (only verified facts), `@id` graph; Team linked |
| O8 | "Gut betreut – Verbands-Fahrschule" seal: hidden below `sm` breakpoint | P4 | not changed |

## Local

| # | Finding | Prio | Status |
| --- | --- | --- | --- |
| L1 | NAP on site consistent (one source `site.ts`) — good | — | keep |
| L2 | Directory NAP inconsistent (2 phone numbers, name variants, hours) — see `entity-consistency.md` | P1 | off-site, owner action |
| L3 | Location wording: "Stuttgart-Mitte"/"mitten in Stuttgart"; no public-transport directions | P2 | ✅ Anfahrt section adds sourced public-transport info only where verified (see page) |
| L4 | Map: iframe by address string, not by place → may not show the GBP pin | P3 | ✅ `hasMap` uses the CID listing URL; iframe unchanged (legal page describes it) |

## AI / AEO

| # | Finding | Prio | Status |
| --- | --- | --- | --- |
| A1 | Only 9 FAQs, homepage only; no question-shaped headings on topic pages | P1 | ✅ every new page has a visible FAQ + FAQPage JSON-LD mirroring it |
| A2 | Entity statement missing ("Fahrschulring ist eine Fahrschule in …") early on pages | P1 | ✅ each new page opens with a one-paragraph direct answer |
| A3 | No tables of hard facts (min ages, prerequisites) | P2 | ✅ "Auf einen Blick" tables from `classes.ts` |
| A4 | No last-updated dates; no distinction official rule vs school offer | P2 | ✅ "Stand: …" line + "Offizielle Regeln" vs "Bei uns" separation, with links to official sources |
| A5 | JSON-LD single node, no @id | P1 | ✅ `@graph` with `#organization`, `#website`, per-page `WebPage`, `BreadcrumbList`, `Service` |

## Performance (estimated — no field data accessible)

- LCP candidate: `storefront.webp` (203 KB, `priority`, `sizes=100vw`).
  Single 1600 px file for every viewport because `images.unoptimized`. REC
  P2: add a 828 px mobile variant via `<picture>`/`srcset` (not done —
  needs art-direction check).
- CLS: images have fixed boxes (`fill` in sized parents) → low risk.
  Cookie banner is `fixed` → no layout shift.
- INP: tiny client islands; no heavy handlers.
- JS: framework runtime dominates; removing the FAQ client component saves a
  little hydration work.
- Third parties: GA4 (consent-gated), Google Maps iframe (lazy) — both fine.
- Animations: CSS-only, honour `prefers-reduced-motion`.

## Conversion

- Strong: phone in header (desktop), sticky mobile call/email bar, CTA in
  hero, contact form + phone card, real Google rating card.
- Gap: no event tracking for `tel:`/`mailto:`/form/map clicks. ✅ added
  GA4 events (consent-gated) — see `seo-kpi-dashboard.md`.
- Gap: new topic pages each end with the shared `ContactCta` + a page-
  specific "Wunschklasse" hint.

## Images (Phase 16 inventory)

| File | Size | Bytes | Role | Alt (after pass) | Keep |
| --- | --- | --- | --- | --- | --- |
| hero/storefront.webp | 1600×1202 | 203 KB | Hero bg / LCP, priority | decorative `""` | yes — REC mobile variant |
| hero/simulator.webp | 960×1280 | 58 KB | Highlights | descriptive | yes |
| hero/simulator-training.webp | 960×1280 | 111 KB | Highlights | descriptive | yes |
| hero/fz-start-1.webp | 360×220 | 17 KB | unused | — | low value, unused |
| logo/template-logo.webp | 315×136 | 4 KB | header/footer, priority | "Fahrschulring Stuttgart" | yes; also JSON-LD logo |
| logo/vb-fs-logo.webp | 177×187 | 6 KB | Hero badge | "Gut betreut – Verbands-Fahrschule" | yes |
| og-cover.jpg | 1200×630 | 195 KB | OG/JSON-LD image | — | yes |
| team/*.webp (5) | ~200×250 | 4–14 KB | team | names | yes — low-res, REC new photos |
| fleet/*.webp (15) | 360–960 wide | 18–188 KB | carousel, lazy | per-photo (fleet.ts) | yes; `bmw-motorrad` only 360 px |

Filenames like `gallery-02.webp` are not descriptive; renaming would help a
little for image search but breaks nothing to leave — REC P3 when new photos
are added (`fahrschulring-stuttgart-vw-golf-automatik.webp` style).
