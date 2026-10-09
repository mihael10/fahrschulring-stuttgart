---
title: Live site crawl — fahrschulring.de (Phase 1)
area: seo, migration, old site
keywords: [crawl, old site, php, urls, redirects, nap]
---

# Live website audit — https://www.fahrschulring.de/ (2026-10-09)

**Access limitation (FACT):** the research environment's network policy
blocked direct requests to `fahrschulring.de`, `web.archive.org` and every
directory site (HTTP CONNECT refused by the egress proxy). This audit is
therefore built from **search-engine index snapshots** (titles, snippets,
summaries from ~42 searches — raw log in
`research/raw-oldsite-entity.md`), plus the content the old site's pages had
when they were scraped into this repo in Aug 2026 (see `content-editing.md`).
Status codes, redirects, canonical tags, headings, word counts, image alts,
schema, robots.txt, sitemap.xml, OG tags, favicon, page speed and CWV
**could not be measured** and are marked "not determinable". Re-run the
crawl with Screaming Frog / `curl -I` from an unrestricted network before
launch (checklist in `seo-final-qa.md` §Pre-launch).

## Indexed URLs (FACT — all on the `www.` host, https)

| # | URL | Indexed title | What the page holds (per snippets) |
| --- | --- | --- | --- |
| 1 | `https://www.fahrschulring.de/` | Fahrschulring Stuttgart - Startseite | "Seit über 50 Jahren…", services list (Ausbildung in allen Klassen, Auffrischungsstunden, Intensivkurse in allen Klassen, Nachschulung ASF, Punkteabbau FES Vermittlung), address, **Tel. 0711 / 294100**, **info(at)fahrschulring(dot)com**, Büro Mo–Do 15:00–18:00, Theorie Mo+Mi 18:30–20:00 (+ "vormittags nach Absprache"), vehicle list, classes A/A2/A1/AM/B/BF17/B96/BE/C1 |
| 2 | `/pages/klassen.php` | Fahrschulring Stuttgart - Klassen | class descriptions + min ages |
| 3 | `/pages/team.php` | Fahrschulring Stuttgart - Team | 5 instructors with classes |
| 4 | `/pages/fahrzeuge.php` | Fahrschulring Stuttgart - Fahrzeuge | fleet list (ID.3, X1, Tesla S, Kia Niro, 2× MG4, X2, bikes), automatic-exam note |
| 5 | `/pages/kontakt.php` | Fahrschulring Stuttgart - Kontakt | address, 0711/294100, Büro 15–18, form with arithmetic captcha |
| 6 | `/pages/impressum.php` | Fahrschulring Stuttgart - Impressum | Fahrschulring GmbH, Frank Eibl, **0711 - 295928**, HRB 14308, USt-ID |
| 7 | `/pages/datenschutz.php` | Fahrschulring Stuttgart - Datenschutz | 2018-era policy; phone typo "+49 711 - 295**8**28" |

Not found in the index (OBS): `/kontakt.php` (root, from repo history),
`/pages/anfahrt.php` (nav item "Anfahrt" exists, URL inferred), any
preise/theorie/aktuelles/intensivkurs page. Hostname: no non-www URL indexed
(OBS) → the historical canonical host is **www** (INF).

## Old-site findings

| Check | Result |
| --- | --- |
| Status codes / redirects | not determinable (blocked). Known: `.php` URLs resolve (indexed). |
| Canonical / noindex / robots / sitemap | not determinable; OBS: no sitemap URL surfaced in search; INF: none exists |
| Titles | pattern "Fahrschulring Stuttgart - <Seite>" (FACT), brand-only, no keyword/location intent beyond "Stuttgart" |
| Meta descriptions / H1-H3 / word count / alts / OG / twitter / favicon / mobile / speed | not determinable |
| Language | German (FACT from content) |
| Duplicate / thin content | OBS: 7 short pages; fleet lists differ between Startseite and Fahrzeuge (internal inconsistency) |
| Outdated information | FACT: office hours differ (18:00 vs 18:30 in older version), phone differs across pages, email `.com` vs `.de`, datenschutz phone typo, 2018 privacy policy |
| Broken links | not determinable |
| External links | not determinable |
| Schema | not determinable; INF (2010s-era PHP template): none |

## Internal inconsistencies on the old site (FACT)

- Phone: `0711/294100` (Startseite, Kontakt) vs `0711-295928` (Impressum; the
  number on the Google Business Profile per owner screenshot 2026-10-02) vs
  `+49 711-295828` (Datenschutz, typo).
- Email: `info@fahrschulring.com` (marketing pages) vs `info@fahrschulring.de`
  (Impressum; the one the business uses).
- Office hours: 15:00–18:00 (current Kontakt) vs 15:00–18:30 (older version;
  confirmed by owner 2026-09-22 → used in `site.ts`).
- Fleet lists differ per page.

## Valuable historical URLs / what to preserve

- `/` (brand entity page, directories link here) — keep host `www`.
- `/pages/klassen.php` — the only class-level URL competitors/aggregators
  could have linked; map to `/klassen/`.
- `/pages/team.php`, `/pages/fahrzeuge.php`, `/pages/kontakt.php`,
  `/pages/impressum.php`, `/pages/datenschutz.php` — map 1:1.
- Services named only on the old homepage (Intensivkurse, Auffrischungs-
  stunden, ASF/FES-Vermittlung): **Auffrischung** ranks (#8 for
  "Auffrischungsstunden Fahrschule Stuttgart") — keep this content alive
  (owner to confirm current offer; see `content-roadmap.md`).

Full redirect map: `url-migration-map.csv`; Apache rules:
`alfahosting/.htaccess`.
