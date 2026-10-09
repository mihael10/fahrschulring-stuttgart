---
title: Local SEO / Google Maps audit (Phase 4)
area: local seo, google business profile, nap
keywords: [gbp, maps, nap, citations, reviews]
---

# Local SEO audit (2026-10-09)

**Access (FACT):** the Google Business Profile (GBP) itself, Google Maps,
Bing Places and Apple Maps could not be opened from the research environment.
GBP facts below come from the owner's screenshots recorded in `site.ts`
(2026-10-02) and from directory snippets. Everything marked "not
determinable" must be checked by the owner inside the GBP dashboard
(checklist in `google-business-profile-plan.md`).

## Google Business Profile — what is known

| Field | Known value | Source | Status |
| --- | --- | --- | --- |
| Name | "Fahrschulring" | owner screenshot (site.ts) | ✔ consistent with brand; legal names differ (see entity doc) |
| Primary category | "Fahrschule" / Driving school | owner screenshot | ✔ |
| Secondary categories | — | not determinable | check |
| Address | Hegelstraße 48, 70174 Stuttgart | owner screenshot | ✔ |
| Phone | +49 711 295928 | owner screenshot | ✔ (matches Impressum, now site-wide) |
| Website | ? | not determinable | must be `https://www.fahrschulring.de/` after launch; today the old site |
| Hours | ? | not determinable | must be Mo–Do 15:00–18:30 (owner-confirmed 2026-09-22) |
| Rating / count | 4.9 ★ / 325 | owner screenshot 2026-10-02 | aggregators lag: werkenntdenbesten 4.90/281 (+30 in 12 months), fahrschulentop 4.9/185 |
| Review recency/velocity | "+30 good reviews in the last 12 months" | werkenntdenbesten snippet | OBS: ~2.5/month — healthy, below Schille |
| Owner responses | — | not determinable | check; respond to every review |
| Services / attributes / Q&A / photos / posts | — | not determinable | fill (plan doc) |
| Map prominence | 4.9/325 would rank #2 by review count among Stuttgart schools (AI engine's own list: Schille 563, Peters 300, Sieber 265) | research/raw-ai-visibility.md | strong asset, under-leveraged |
| Place ID | `ChIJR0zjFTzbmUcRAbC_uztld74` (.env.example) / CID 15448751995835036082 | repo | used for `hasMap`/`sameAs` |

## Proximity / catchment (OBS)

Hegelstraße 48 is in Stadtbezirk Stuttgart-Mitte at the border to
Stuttgart-West (onlinestreet: "West, Bezirk Stuttgart-Mitte"). Direct local
rivals: Peter's (Rotebühlstr. 127b, West), Thomas' (Rosenbergstr. 24, same
postcode), ACADEMY Lutz (Sophienstr. 40), PS (Neue Brücke 6), Ates Azad
(Neue Brücke 8). Use **both** "Stuttgart-Mitte" and "Stuttgart-West" in
listings and copy — done on the site.

## NAP inconsistencies found across the web (FACT unless noted)

| Issue | Where | Fix |
| --- | --- | --- |
| Old phone **0711 294100** | old site marketing pages, fahrschulen.de, fahrschule-fahrlehrer.de, fahrschulenmap, Yelp, branchen-info, finde-offen, gewerbeverzeichnis, 11880 "Mitte" | update to 0711 295928 everywhere, or (better) ask the owner whether 294100 still rings — if it does, keep it as a secondary line on the site only, never as the primary |
| Phone typo 0711 295**8**28 | old Datenschutz page | dies with the old site |
| Unknown mobile 0177 7796291 | top10place | owner to identify; remove if not theirs |
| Branch phone 0711 1200505 | Bebelstraße listings | mark branch closed (if closed) |
| Old address **Bebelstraße 25, 70193** (Zweigstelle) | FLVBW Fahrschulsuche, Das Örtliche, Das Telefonbuch (both under "Eibl Frank Fahrschulring Stgt."), Cylex duplicate, fahrschulenmap branch, oeffnungszeitenbuch | owner: confirm status; request closure/merge |
| Old address **Kienestraße 33** | Yelp ("CLOSED"), 11880 "Eibl Mitte", gewerbeverzeichnis | request removal/merge into Hegelstraße listing |
| Wrong district "Degerloch" | branchen-info.net | correct |
| Email `.com` | old site | dies with old site; make sure no directory carries `.com` |
| Hours 15:00–18:00 / 15:30–18:30 / Mo+Mi to 20:00 | 11880, fahrschul-lotse, Drivolino, oeffnungszeitenbuch, fahrschulenmap | set 15:00–18:30 office; theory Mo+Mi 18:30–20:00 as separate note |
| "über 10 Jahre" experience | Drivolino, Cylex text | correct to "über 50 Jahre" |
| Name variants | Fahrschulring GmbH / Fahrschulring Stuttgart GmbH Eibl / Eibl Frank Fahrschulring Stgt. / Beratungsstelle … | GBP name stays "Fahrschulring"; directories: "Fahrschulring" + legal name field |
| **werkenntdenbesten lists "Fahrschule Sieber GmbH" at Hegelstr. 48 with 4.90/327** | werkenntdenbesten.de | INF: merged data; claim/correct — this is probably Fahrschulring's own rating shown under a rival's name |
| fahrschulentop "536 reviews on 5 portals" attached to Hans-Scharoun-Platz 1 | fahrschulentop.de | wrong address; correct |
| Two 11880 listings (West + Eibl Mitte) | 11880.com | merge |
| Two oeffnungszeitenbuch entries (Unterricht / Anmeldung) | oeffnungszeitenbuch.de | harmless; align hours |
| Not listed at all | clickclickdrive (ranks for class filters), Gelbe Seiten (Stuttgart), golocal, infahrschulen, reviewhero, genaumeinkurs, Bing Places?, Apple Maps? | create (see `offsite-authority-plan.md`) |

## Competitor review counts / categories (as quoted by aggregators)

Schille ~426–589 · Lutz 142–531 · PS 488 (combined) · Campos 412 (combined)
· Twentyfive 341 (combined) · Peter's ~300 · Sieber ~293–304 · Fun S Drive
210 · Kesmez 146 (ProvenExpert) · Thomas' West 76. Categories not
determinable (profiles not opened); INF: all use "Fahrschule".

## Legitimate review growth (REC — no incentives, no wording control)

1. After every passed exam: instructor hands the student a card with the
   short review link (`site.googleReviews.reviewsUrl`) — ask once, in person.
2. Same link in the confirmation email after the contact form / registration.
3. Reply to every review (positive: thank + name the instructor; negative:
   factual, offer a call) — owner responses are a ranking/trust signal.
4. Never ask for specific wording, never offer discounts for reviews, never
   gate (only asking happy students) — all violate Google policy.
5. Ask students who mention Umschreibung/English/Automatik to say so in their
   own words only if they want — that is what AI engines later retrieve.
