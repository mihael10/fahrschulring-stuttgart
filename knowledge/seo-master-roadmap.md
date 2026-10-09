---
title: SEO master roadmap & final ranking strategy (Phases 23 + 26)
area: seo, roadmap, strategy
keywords: [roadmap, priorities, p0, p1, 30-day, 90-day, strategy]
---

# SEO master roadmap — Fahrschulring Stuttgart (2026-10-09)

Index of the SEO knowledge set:
baseline `seo-audit-baseline.md` · old site `current-site-crawl.md` · search
`google-keyword-research.md` · competitors `competitor-analysis.md` +
`competitors.csv` · local `local-seo-audit.md` · entity
`entity-consistency.md` · AI `ai-visibility-baseline.md`,
`ai-source-opportunity-map.md` · keywords `keyword-map.csv` · gaps
`content-gap-analysis.md` · redesign audit `redesign-seo-audit.md` ·
architecture `site-architecture.md` · content `content-roadmap.md` · GBP
`google-business-profile-plan.md` · off-site `offsite-authority-plan.md` ·
redirects `url-migration-map.csv` · KPIs `seo-kpi-dashboard.md` · QA
`seo-final-qa.md` · conventions `seo-strategy.md` · raw research
`research/`.

**Research limitations (apply to everything):** the environment could not
reach fahrschulring.de, Google, Maps/GBP, ChatGPT/Gemini/Perplexity or any
directory page. Findings come from search-API snippets (~200 queries) and
the repo. No search volumes, no Local Pack/PAA/AI Overview observations, no
CWV field data. Nothing was fabricated to fill those gaps; each doc marks
what is FACT / OBSERVATION / INFERENCE and what must be re-checked.

## A. Current estimated SEO position (INF)

Near zero for non-brand queries: the indexed site is the 2010s PHP site
(7 pages, brand-only titles, no class pages, internal NAP conflicts); the
redesign lives on an indexable github.io preview; `fahrschulring.de` is
absent from 51 of 55 researched queries and from every AI answer. Local
(Maps) is the one strong asset — 4.9★/325 — but aggregators don't surface
it, and the name collides with Fahrschulring Regensburg.

## B. Biggest weaknesses

1. Not live on the production domain; preview self-canonicalising (fixed in
   code, needs deploy decision). 2. No topic pages (fixed). 3. Fragmented NAP
   (two phones, two old addresses, `.com` email, hour variants). 4. Absent
   from every aggregator/"best of" list and from price comparisons. 5. No
   published prices (policy — honest explainer built instead). 6. Thin
   entity signals (fixed on-site; off-site pending).

## C. Unfair advantages already there

4.9★ with 325 reviews (#2 by count in the city per the engine's own list) ·
all classes AM→DE + T/L at one central address · named EV fleet (ID.3, MG4,
Tesla S) · simulator in the centre · 50+ years · owner-led with a stable
team · real review themes (Fahrangst overcome, foreign licence converted,
first-attempt passes) that match the underserved queries.

## D. Most valuable keywords (see `keyword-map.csv`)

Fahrschule Stuttgart (Mitte/West) · Führerschein Klasse B Stuttgart ·
Motorradführerschein Stuttgart / B196 · LKW Führerschein Stuttgart ·
Führerschein Kosten Stuttgart · Intensivkurs Führerschein Stuttgart ·
Führerschein umschreiben Stuttgart (+EN) · Automatik/B197 Stuttgart ·
BE/B96 Stuttgart · Auffrischungsfahrten/Fahrangst Stuttgart · brand.

## E. Highest-value pages to build

Built: `/klassen/auto/`, `/klassen/motorrad/`, `/klassen/anhaenger/`,
`/klassen/lkw-bus/`, `/fuehrerschein-ablauf/`, `/fuehrerschein-kosten/`,
`/fuehrerschein-umschreiben/`, hub `/klassen/`. Next (owner input):
`/preise/`, `/intensivkurs/`, `/auffrischung/`, `/fahrsimulator/`, `/en/`.

## F. Google Maps strategy → `google-business-profile-plan.md`
## G. Entity strategy → `entity-consistency.md` (+ JSON-LD graph in code)
## H. AI visibility strategy → `ai-source-opportunity-map.md`
## I. Off-site authority → `offsite-authority-plan.md`
## J. Content roadmap → `content-roadmap.md`
## K. Technical roadmap → below (P0/P1) + `redesign-seo-audit.md`
## L. Conversion roadmap → below (P1/P2) + GA4 events in place

## Prioritised roadmap

| Prio | Item | Problem / evidence | Change | Effort | Impact | Conf. | Depends on | Risk | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P0 | Staging noindex + production canonical | preview self-canonicalised to github.io, indexable (`seo-audit-baseline.md`) | `SITE_IS_PRODUCTION` switch; noindex/no-canonical on preview; canonical/sitemap/JSON-LD always `www.fahrschulring.de` | S | high | high | — | none | ✅ done |
| P0 | Hostname decision | www vs apex inconsistent | `www` canonical; apex/http 301 | S | high | high | DNS/hosting | low | ✅ decided; .htaccess ready |
| P0 | Go live on fahrschulring.de with 301s | indexed site = old PHP site; AI engines say "no official website" | **Decision needed:** (a) upload `out/` to Alfahosting (real 301s via `.htaccess`, same-origin form) or (b) custom domain on GitHub Pages (no 301s → old URLs 404). Recommendation: **(a)** | M | very high | high | owner, hosting access | migration errors — test on staging first | ⏳ owner |
| P0 | Old URL redirects | 7 indexed `.php` URLs | `alfahosting/.htaccess` + `url-migration-map.csv` | S | high | high | (a) above | low | ✅ prepared |
| P0 | Production build mode in CI | always built with basePath | `deploy.yml` reads `PRODUCTION_DOMAIN`; CNAME | S | high | high | — | none | ✅ done |
| P1 | Dedicated topic pages | absent for all class/cost/process queries | 7 pages + hub, sourced facts, FAQ schema | L | very high | high | content review by owner | factual drift → "Stand" dates + sources | ✅ done |
| P1 | Titles/descriptions/H1 with topic + Stuttgart | brand-only titles, slogan H1s | `pageMetadata()` per page | S | high | high | — | none | ✅ done |
| P1 | Entity graph JSON-LD | single anonymous node | `@graph` with @id, hours spec, hasMap, sameAs, Service, Breadcrumb, FAQPage | M | medium-high | high | — | keep facts verified | ✅ done |
| P1 | Internal links & crawl depth | nav = anchors only | footer from route registry, group links, hub, breadcrumbs | S | high | high | — | none | ✅ done |
| P1 | NAP cleanup across ~25 sources | two phones, old addresses, name variants | master NAP sheet; correct/merge | M (owner) | very high (Maps + AI) | high | owner decisions (phone 294100, branches, legal name) | none | ⏳ owner |
| P1 | GBP completion | services/description/photos unknown | plan doc | S (owner) | high | high | — | none | ⏳ owner |
| P1 | Review workflow | ~2.5 reviews/month vs Schille | ask-after-exam card + email link; respond to all | S (owner) | high | high | — | policy if incentivised — don't | ⏳ owner |
| P1 | Claim aggregators (clickclickdrive, werkenntdenbesten mix-up, reviewhero, golocal, genaumeinkurs) | 325 reviews invisible to AI engines | create/claim/correct | M (owner) | high | medium-high | — | none | ⏳ owner |
| P1 | Conversion tracking | no events | GA4 events (consent-gated) | S | medium | high | GA4 key-event config | consent reduces coverage | ✅ code done; GA4 config ⏳ |
| P1 | Verify quoted numbers on source pages before launch | research saw excerpts only | TÜV fees, Führerscheinstelle, reform, VVS stops | S | medium (trust) | — | network access | — | ⏳ |
| P2 | Prices page (real) | missing from t-online/aggregators | `/preise/` with owner's list | S (+owner) | high | medium | owner | stale prices → date + review cadence | ⏳ owner |
| P2 | Intensivkurs, Auffrischung/Fahrangst pages | thin SERPs / very high intent | per `content-roadmap.md` | M | high | medium | owner confirms offers | none | ⏳ |
| P2 | Image: mobile hero variant; per-vehicle photos; team portraits | 203 KB hero for all viewports; 200 px portraits | `<picture>`/srcset; new photos | M | medium (LCP/trust) | medium | photos | none | ⏳ |
| P2 | Carousel: already per-photo alts ✅; consider pausing animation on load for INP/CPU | | | S | low | medium | — | — | optional |
| P2 | English page | EN queries empty | `/en/` if lessons in English | M | medium | medium | owner | false claim if not true | ⏳ |
| P3 | Team bios, founder node, foundingDate | E-E-A-T | owner facts | S | medium | medium | owner | fabrication risk → owner only | ⏳ |
| P3 | Video series + YouTube channel | no video citations | roadmap | L | medium-high | medium | shoot | privacy section | ⏳ |
| P3 | Press/expert pitch (StZ), FLVBW listing, expat resources | no third-party authority | outreach | M (owner) | medium-high | medium | — | none | ⏳ |
| P4 | Single-class URLs (`/klassen/b196/` …) | only if GSC shows demand | split pages | M | low-medium | low | GSC data | cannibalisation | later |
| P4 | Header nav additions (Ablauf/Kosten) | single-page nav is owner's choice | add two links | S | low-medium | medium | owner | none | ask owner |

## M. 30-day plan

Week 1: decide hosting path (a/b); set `PRODUCTION_DOMAIN`; upload
`.htaccess` + `kontakt.php` + `out/`; DNS; Search Console + Bing; GA4 key
events; owner answers the 5 entity questions. Week 2: GBP completion;
master NAP sheet; DTM/11880/Yelp/Cylex/drivolino/fahrschulen.de fixes.
Week 3: clickclickdrive, golocal, reviewhero, werkenntdenbesten, genaumeinkurs,
Gelbe Seiten; review-ask card in use. Week 4: verify quoted facts on source
pages; price list decision; first KPI snapshot.

## N. 90-day plan

Prices page (if agreed), Intensivkurs + Auffrischung pages, simulator
video, team bios, FLVBW listing, first press pitch, first AI re-test, fix
anything GSC flags, consider header links.

## O. 6-month plan

Exam-day guide, EV/B197 decision guide, LKW funding explainer, English
page, 3–4 videos, second NAP audit, quarterly AI re-test, reform tracker
updated as the law passes; evaluate single-class URLs from GSC.

## P. 12-month plan

Stuttgart driving guide, annual "Stand der Dinge" update, review count
target (+36), organic share ≥ 60 %, presence in ≥ 50 % of DE AI answers,
top-10 for "Fahrschule Stuttgart Mitte" and the class terms, Local Pack for
"Fahrschule Stuttgart" from the city centre.

## Executive summary — 10 highest-impact changes

1. **Launch on `https://www.fahrschulring.de`** with the new build (preview
   is now hard-noindexed; code canonicalises to www) — nothing else matters
   until the real domain carries the real site.
2. **301 the seven old `.php` URLs and apex/http** (`.htaccess` ready) —
   requires hosting on Alfahosting or an equivalent that can redirect.
3. **Seven high-intent topic pages** (Klasse B/BF17/B197, Motorrad, Anhänger,
   LKW/Bus, Ablauf, Kosten, Umschreiben DE+EN) with sourced facts, tables,
   FAQ — built.
4. **Topic-first titles/H1s and an entity graph** (DrivingSchool @id, hours,
   map, services, breadcrumbs, FAQ) — built.
5. **One phone number, one address, one legal name everywhere** — owner
   decisions + ~25 directory corrections (biggest Maps/AI lever).
6. **Surface the 4.9★/325 rating on aggregators** (claim werkenntdenbesten
   — currently showing under "Sieber" —, reviewhero, golocal, clickclickdrive).
7. **GBP completion + review workflow** (services, description, photos,
   responses, ask-after-exam).
8. **Decide on a real price list** — the only way into t-online/aggregator
   comparisons; otherwise the cost explainer carries the query.
9. **Intensivkurs and Auffrischung/Fahrangst pages** once confirmed — the
   two openings competitors leave.
10. **Measure**: Search Console, GA4 key events (code in place), GBP
    exports, quarterly manual AI re-tests from a German IP.
