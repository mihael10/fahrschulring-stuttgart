---
title: Site & URL architecture (Phase 11)
area: seo, information architecture, urls
keywords: [urls, architecture, hostname, pages, internal links, schema]
---

# Information architecture (implemented 2026-10-09)

## Hostname decision

**`https://www.fahrschulring.de/` is the single canonical production
host.** Evidence: every indexed old-site URL is on `www.` (no apex URL in
any index snapshot); the code already used `www` as its fallback; the
Alfahosting form endpoint allows both. Apex and `http://` must 301 to it
(`alfahosting/.htaccess`). The GitHub Pages preview stays `noindex`.
Changing this later means editing `PRODUCTION_URL` in `src/lib/site-url.ts`
and the `.htaccess` host rule — nothing else.

## URL tree

```
/                              Fahrschule in Stuttgart-Mitte (entity + overview)
/klassen/                      hub: all 18 classes, links to the 4 group pages
/klassen/auto/                 Klasse B, BF17, B197/78, Automatik, E-Autos
/klassen/motorrad/             AM, A1, A2, A, B196
/klassen/anhaenger/            BE, B96
/klassen/lkw-bus/              C1, C1E, C, CE, D1, D1E, D, DE, T, L
/fuehrerschein-ablauf/         process, documents, Führerscheinstelle, TÜV, reform
/fuehrerschein-kosten/         cost components, official fees, why no fixed price
/fuehrerschein-umschreiben/    foreign licence conversion (DE + EN summary)
/team/                         instructors (E-E-A-T)
/anfahrt/                      address, transit, parking, map
/kontakt/                      form + phone
/impressum/ /datenschutz/      noindex
```

Why not one page per single class (18 URLs): the research showed class
queries cluster by vehicle group (people compare A1/A2/A or B96/BE on the
same page), and 18 thin pages would dilute the content and compete with
each other. Groups keep each page substantial (650–1,200 words) with a fact
table per class. Single-class URLs can be added later if Search Console
shows demand (e.g. `/klassen/b196/`).

Planned (not built, need owner input): `/preise/`, `/intensivkurs/`,
`/auffrischung/`, `/fahrsimulator/`, `/en/`.

## Page specification

| URL | Title (≤ 65) | H1 | Purpose / intent | Primary topic | Secondary | Links in | Links out | CTA | FAQ | Schema |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Fahrschule in Stuttgart-Mitte – alle Führerscheinklassen \| Fahrschulring | Deine Fahrschule in Stuttgart-Mitte. Sicher ans Ziel. | brand + local discovery | Fahrschule Stuttgart | classes, team, reviews, location | all pages (header/footer) | class pages (group links), Anhänger button, footer to every page | phone, form | 9 general | WebPage, FAQPage (+ org/website graph) |
| `/klassen/` | Führerscheinklassen in Stuttgart: Auto, Motorrad, Anhänger, LKW & Bus | Alle Führerscheinklassen in Stuttgart – an einem Ort | hub | Führerscheinklassen | 18 classes | home, footer, breadcrumbs | 4 group pages, Ablauf, Kontakt | Angebot anfordern | – | WebPage, BreadcrumbList |
| `/klassen/auto/` | Autoführerschein Klasse B in Stuttgart – BF17, Automatik (B197) & E-Autos | Autoführerschein in Stuttgart: Klasse B, BF17 und Automatik | transactional | Klasse B Stuttgart | BF17, B197, B78, E-Auto, Simulator | home group link, hub, footer, Kosten | Kosten, Ablauf, Team | ContactCta + phone | 6 | WebPage, Breadcrumb, Service, FAQPage |
| `/klassen/motorrad/` | Motorradführerschein Stuttgart: Klasse A, A2, A1, AM & B196 | Motorradführerschein in Stuttgart: AM, A1, A2, A und B196 | transactional | Motorradführerschein Stuttgart | B196, Stufenaufstieg, bikes | home, hub, footer | Ablauf | ContactCta | 5 | same |
| `/klassen/anhaenger/` | Anhängerführerschein Stuttgart: Klasse BE und B96 | Anhängerführerschein in Stuttgart: BE und B96 | transactional | BE/B96 | weights, 7-h course | home button, hub, footer | Ablauf, Kosten | ContactCta | 4 | same |
| `/klassen/lkw-bus/` | LKW- und Busführerschein Stuttgart: C1, C, CE, D1, D | LKW- und Busführerschein in Stuttgart: Klassen C1 bis DE | transactional/B2B | LKW Führerschein Stuttgart | Bus, T/L, Voraussetzungen, funding | home, hub, footer | Ablauf | phone + ContactCta | 4 | same |
| `/fuehrerschein-ablauf/` | Führerschein machen in Stuttgart: Ablauf, Voraussetzungen, Führerscheinstelle & Prüfung | Führerschein machen in Stuttgart: So läuft es ab | informational→transactional | Führerschein Stuttgart Ablauf | Führerscheinstelle Löwentorbogen 11, TÜV Feuerbach, documents, reform | all class pages, hub, footer | Klassen, Kosten | ContactCta | 6 | WebPage, Breadcrumb, FAQPage |
| `/fuehrerschein-kosten/` | Führerschein-Kosten in Stuttgart: Was kostet der Führerschein wirklich? | Was kostet der Führerschein in Stuttgart? | commercial investigation | Führerschein Kosten Stuttgart | TÜV fees, averages, reform | Auto, Anhänger, footer | Auto, Ablauf, Kontakt | phone + form | 5 | same |
| `/fuehrerschein-umschreiben/` | Ausländischen Führerschein umschreiben in Stuttgart – Prüfung & Vorbereitung | Ausländischen Führerschein in Stuttgart umschreiben | informational→transactional (DE/EN) | Führerschein umschreiben Stuttgart | 185 days, Anlage 11, languages, EN summary | footer | Kontakt, Google profile | phone + form | 5 | WebPage, Breadcrumb, Service, FAQPage |
| `/team/` | Fahrlehrer-Team der Fahrschule Fahrschulring in Stuttgart | Unser Fahrlehrer-Team in Stuttgart | trust | Fahrlehrer Stuttgart | classes per instructor | Auto page, footer | ContactCta | form | – | WebPage, Breadcrumb |
| `/anfahrt/` | Anfahrt: Fahrschule Fahrschulring, Hegelstraße 48, 70174 Stuttgart-Mitte | Anfahrt zur Fahrschule in Stuttgart-Mitte | local/navigational | Hegelstraße 48 | transit, parking, hours | footer, home | Google Maps | phone | – | WebPage, Breadcrumb |
| `/kontakt/` | Kontakt & Anmeldung – Fahrschulring, Fahrschule in Stuttgart-Mitte | Kontakt zur Fahrschule Fahrschulring in Stuttgart | conversion | Kontakt | hours, address | everywhere | – | form, phone | – | WebPage, Breadcrumb |

## Internal linking model

- Header: anchors on the homepage (owner's single-page decision) + logo.
- Footer: **every indexable route** from `src/content/routes.ts` (crawl
  depth 1 for all pages).
- Homepage class groups → group pages with descriptive anchors.
- Hub `/klassen/` → group pages (cards + headings).
- Topic pages cross-link (Auto ↔ Kosten ↔ Ablauf; Motorrad/Anhänger/LKW →
  Ablauf; Kosten → Kontakt).
- Breadcrumbs (visible + schema) on every subpage.

## Entity graph (JSON-LD)

Root layout: `DrivingSchool`+`LocalBusiness` `#organization` and `WebSite`
`#website`. Each page: `WebPage` (`isPartOf #website`, `about
#organization`, `dateModified` from the registry), `BreadcrumbList`,
`Service` (class pages: `provider #organization`), `FAQPage` mirroring the
visible FAQ. No ratings, no geo, no founding date until verified.

## Adding a page (for future work)

1. Add the route to `src/content/routes.ts` (sitemap, footer, breadcrumbs
   update automatically).
2. Create `src/app/<path>/page.tsx` using `TopicPage` + `pageMetadata`.
3. FAQ items go to `src/content/faq.ts`; sources to `src/content/sources.ts`.
4. Build; run the QA script (`seo-final-qa.md`).
