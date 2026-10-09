---
title: Search research — Stuttgart driving-school queries (Phase 2)
area: seo, keywords, serp
keywords: [keywords, serp, intent, competitors, local pack]
---

# Search research (2026-10-09)

**Limitation (FACT):** Google itself was not reachable from the research
environment. ~55 queries were run through a US-based web-search API that
returns ranked links + summaries. **Local Pack, People Also Ask, featured
snippets, AI Overviews, related searches and search volumes could not be
observed.** Positions below are the API's order, not Google rankings.
Raw per-query tables: `research/raw-keyword-serp.md`. Re-run the full list
in Google from a Stuttgart IP (incognito, German locale) and in Search
Console once the domain is live — template in `seo-kpi-dashboard.md`.

## Findings by query family

| Family | Dominant result types | Intent | Conversion | Fahrschulring present? |
| --- | --- | --- | --- | --- |
| Brand ("Fahrschulring", "… Stuttgart", "… Bewertungen") | directories (unternehmen24, fahrschulenmap, drivolino, 11880 ×2, oeffnungszeitenbuch); **name collision with Fahrschulring Regensburg**; own site only as `/pages/impressum.php` at #8 | navigational | high | weak (#8, Impressum only); "Bewertungen" → own site absent, portals show 0 / 2 / 185 / 281 / 536 reviews |
| Core ("Fahrschule Stuttgart", "gute…", "… Mitte", "… Zentrum", "Führerschein Stuttgart") | aggregators (clickclickdrive, gelbeseiten Top 10, infahrschulen, dasoertliche Top, golocal, listando), then competitor homepages; "Führerschein Stuttgart" → stuttgart.de (authority) | commercial / local transactional | high | only "Zentrum" (#8) |
| Class B (B, Klasse B, Autoführerschein, B197, B78, Automatik, BF17) | one dedicated landing page per class (Fun S Drive, Sieber, Kesmez, VIP), clickclickdrive filter pages, bmv.de/123fahrschule for BF17; **B78 SERP is thin** (out-of-town pages rank) | transactional | high | absent |
| Motorcycle (A, A1, A2, AM, B196, Motorradführerschein) | drivolino "Stuttgart-Mitte Motorrad" list, fahrschulekosten Klasse A, competitor class pages (Fun S Drive, Kohler, Horlacher), service-bw | transactional | high | absent |
| Trailer (BE, B96, Anhängerführerschein) | clickclickdrive "12 Fahrschulen mit B96", Sieber `/b96`, Fun S Drive, Horlacher, 123fahrschule | transactional | high | absent |
| Intensivkurs / Schnellkurs | Fun S Drive holds 5 of 9 results; Maier, Campos, Sieber, Schille | transactional | very high | absent (directories say Fahrschulring offers Intensivkurse) |
| Auffrischung / Fahrangst | **thin, no Stuttgart school owns them**; forum/coach pages | transactional / support | high | **present #8** ("Auffrischungsstunden") |
| Umschreiben / ausländischer Führerschein | stuttgart.de, press, generic info sites; confusion with *Umtausch* | informational → transactional | medium | absent |
| Prüfung (praktisch / Theorie) | Peters "5 Schritte", Maier `/prüfungen`, press (TÜV Feuerbach, cheating stories) | informational | medium | absent |
| Kosten / Preise / Fahrstunden | **t-online 2026 price comparison**, StZ, Volksbank guide, fahrschulekosten.de, then schools that publish prices (Fun S Drive, Sieber, Aslan, Peters) | commercial investigation | high | absent |
| Fahrsimulator / Elektroauto | drivolino Mitte simulator list, Academy Drive (Tesla), press | niche | medium | absent |
| LKW / Bus | Academy Truck & Bus, Ates, Campos, Lutz, funding angle (Bildungsgutschein) | transactional, B2B | high | absent |
| Not run (budget) | Busführerschein Stuttgart, Fahrschule Stuttgart West, Fahrschule Stuttgart englisch | | | |

## Recurring entities

Führerscheinstelle Stuttgart (**Löwentorbogen 11**, moved March 2026; old
Krailenshaldenstr. 32 still cited), TÜV SÜD Stuttgart-Feuerbach (practical
exams), service-bw.de, bmv.de reform, t-online/StZ price coverage.

## Recurring questions (proxy for People Also Ask)

1. What does it cost in Stuttgart / why no final price (25–30 lessons; TÜV 24,99 € / 129,83 €)?
2. How long (10 days / 14 days / 6–12 weeks / ~3 months)?
3. B78 vs B197 — does an automatic exam restrict me?
4. BF17 — start at 16½? Who may accompany?
5. Motorcycle ages; A1→A2→A step-up; B196 conditions.
6. B96 vs BE weights; B96 without exam.
7. Where/how to apply (Löwentorbogen 11, documents, online, processing time).
8. Where is the exam (TÜV Feuerbach), how long, what to bring, retake wait.
9. Foreign licence: EU vs third country, 185-day rule, Anlage 11.
10. How to recognise a good school (instructors, transparent prices, reviews).

→ All ten are answered on the new pages (`site-architecture.md`).

## Competitors recurring across queries (count of queries where their own domain appeared)

Fun S Drive ~24 · Peter's Fahrschule ~24 (Rotebühlstr. 127b, West — direct
neighbour) · ACADEMY Lutz ~17 (Sophienstr. 40, Mitte) · Campos ~17 · Schille
~14 · Sieber ~14 · Kesmez ~9 · Horlacher ~8 · PS Fahrschule ~7 (Neue Brücke 6,
Mitte) · Academy Drive ~6 · **Fahrschulring 3–4**.

## Conclusions (INFERENCE)

- The business is invisible for every non-brand query; the indexed site is
  the old PHP site, there are no class URLs, and NAP is fragmented.
- Class queries are won by **one page per class group** — now built.
- Price queries are won by press/aggregators; without published prices the
  realistic play is an honest cost-explainer page (built) and, if the owner
  agrees, a real price list later (`content-roadmap.md`).
- Auffrischung/Fahrangst and foreign-licence (DE+EN) are the two
  low-competition openings; Umschreiben is built, Auffrischung/Fahrangst
  needs owner confirmation of the offer first.
- Directory/aggregator hygiene (clickclickdrive, fahrschulen.de, drivolino,
  11880 duplicates, werkenntdenbesten mix-up) is as important as on-site
  work for head terms.
