---
title: AI search visibility baseline (Phase 6)
area: aeo, geo, ai search
keywords: [chatgpt, gemini, perplexity, claude, ai overviews, citations]
---

# AI visibility baseline (2026-10-09)

**Access (FACT):** ChatGPT, Perplexity and Gemini returned `EGRESS_BLOCKED`
from the research environment; Google AI Overviews need a logged-in German
browser. The only live answer engine available was an Anthropic web-search
API (US index, generated answer + cited links); "Claude (no browsing)" is the
model's honest self-report of prior knowledge. **Every engine in the task
list must be re-run manually from a German IP** — the query set and a
result template are in `seo-kpi-dashboard.md` §AI. Raw log:
`research/raw-ai-visibility.md`.

## Summary table (Engine | Query | Mentioned | Position | Cited sources | Facts correct | Action)

| Engine | Query | Mentioned | Pos. | Cited sources (classes) | Facts correct | Recommended actions |
| --- | --- | --- | --- | --- | --- | --- |
| WebSearch API | 1 empfehlenswerte Fahrschulen Stuttgart | N | – | gelbeseiten, dastelefonbuch ×4, reviewhero ×2, StZ ×2, content farm | n/a | directory + review-aggregator presence |
| WebSearch API | 2 gut für Klasse B | N | – | stepstone ×3, arbeitsagentur, reviewhero, genaumeinkurs, dastelefonbuch ×2 | n/a | genaumeinkurs profile |
| WebSearch API | 3 Motorradführerschein | N | – | content farm ×2, gelbeseiten, gs-forum, reviewhero ×4 | n/a | A-classes in directory text |
| WebSearch API | 4 Fahrschulen Stuttgart Mitte | N (Ates Azad, PS, Lutz named) | – | dasoertliche ×2, dastelefonbuch, 11880, stepstone ×5 | n/a | **biggest gap** — "Mitte" in listings |
| WebSearch API | 5 Wo Klasse B machen | N | – | stepstone, arbeitsagentur, genaumeinkurs ×4 | n/a | genaumeinkurs |
| WebSearch API | 6 gute Bewertungen | N | – | reviewhero ×4, werkenntdenbesten, dastelefonbuch ×4 | n/a | claim reviewhero/werkenntdenbesten |
| WebSearch API | 7 Automatik | N | – | StZ ×3, genaumeinkurs, bussgeldkatalog… | n/a | automatic/EV in listings |
| WebSearch API | 8 B197 | N (Baumann named) | – | press, adac, genaumeinkurs ×2, dasoertliche | n/a | class list verbatim in listings |
| WebSearch API | 9 ausländische Führerscheine | N (no school at all) | – | stuttgart.de, muenchen.de ×8 | n/a | **open slot** → Umschreiben page (built) + expat links |
| WebSearch API | 10 Kosten | N (no school) | – | stuttgart.de ×4, press, statista… | n/a | cost explainer (built); real prices later |
| WebSearch API | 11 viele Google-Bewertungen | N (Schille 563, Peters 300, Sieber 265 …) | – | reviewhero ×3, dastelefonbuch ×6, werkenntdenbesten | n/a | 325 would be **#2** — surface the count on aggregators |
| WebSearch API | EN recommended driving schools | N | – | army.mil, dastelefonbuch, expatexchange | n/a | expat guides |
| WebSearch API | EN English-speaking school | N (Baumann) | – | nochoffen, allaboutberlin… | n/a | state English capability only if true |
| WebSearch API | EN convert foreign licence | N (no school) | – | stuttgart.de, muenchen.de, translayte | n/a | EN section (built) |
| WebSearch API | EN motorcycle licence | N | – | stuttgartcitizen ×4, stuttgart.de | n/a | EN motorcycle summary (roadmap) |
| WebSearch API | EN cost | N | – | stuttgart.de, press | n/a | low priority |
| WebSearch API | Fahrschulring Stuttgart Erfahrungen | **N** ("keine Erfahrungsberichte gefunden") | – | StZ ×5, oeffnungszeitenbuch, dastelefonbuch | n/a | branded review query fails despite 325 reviews |
| WebSearch API | Fahrschulring Stuttgart | Y (directory only) | 1 | oeffnungszeitenbuch (facts), StZ, dastelefonbuch | address ✔; phone/hours/rating/classes/owner **missing**; "keine offizielle Website" | index the real domain |
| WebSearch API | fahrschulring.de Hegelstraße 48 | N ("no page for fahrschulring.de") | – | dasoertliche, cylex | – | domain not in index |
| WebSearch API | "0711 295928" OR "0711 294100" | N | – | – | neither number indexed | NAP in directories |
| Claude (no browsing) | all 11 DE + 5 EN | N | – | none | n/a | typical for a small local business |
| ChatGPT / Gemini / Perplexity / AI Overviews | all | **not testable** | | | | manual re-run required |

## Understanding check (for the one engine that answered)

| Does it understand… | Result |
| --- | --- |
| …Fahrschulring as a Stuttgart driving school? | partly (address only) |
| …the licence classes? | no |
| …the review reputation? | no (no source carries the count) |
| …the exact location? | yes (Hegelstraße 48, "West, Bezirk Mitte") |
| …differentiators (EV, simulator, all classes, 50 years)? | no |
| Inconsistencies | "keine offizielle Website"; no phone |

## Competitors named by the engine (frequency)

Schille 9 · Fun S Drive 5 · Academy Baumann 5 · Pol 5 · Peter's 5 · Campos 3
· Ates 3 · Lutz 2 · Herter 2 · Charly's 2 · others 1. **Pattern (OBS):** a
school is named when a *directory/aggregator page* carries its name,
district, class list or review count in plain text. No answer drew on a
school's own website.

## What this means (INF)

AI answer engines currently cannot describe Fahrschulring because (1) the
official domain is not indexed with structured facts, (2) no aggregator
exposes its 325-review Google rating, (3) listings lack class/service text,
(4) the name collides with Fahrschulring Regensburg. The site changes made
on 2026-10-09 address (1) and (4) (entity graph with @id, alternateName,
explicit facts on every page); (2)–(3) are off-site tasks in
`offsite-authority-plan.md`.
