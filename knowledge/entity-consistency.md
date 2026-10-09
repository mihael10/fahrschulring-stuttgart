---
title: Entity consistency table (Phase 5)
area: entity, knowledge graph, nap
keywords: [entity, sameAs, legal name, handelsregister, consistency]
---

# Entity consistency — "Fahrschulring" as a knowledge-graph entity (2026-10-09)

Sources: own site (old, via index), repo `site.ts` (owner-verified items),
directories via search snippets (`research/raw-oldsite-entity.md`), register
data via unternehmen24 snippet. GBP/Bing/Apple not accessible → "n/d".
**⚠ = conflicting values, do not resolve by guessing — owner decision.**

| Field | Website (new, `site.ts`) | Old website | GBP (owner screenshot) | Register (HRB 14308) | Directories | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Name | Fahrschulring Stuttgart (brand "Fahrschulring") | Fahrschulring Stuttgart | Fahrschulring | Fahrschulring Stuttgart GmbH Eibl (per unternehmen24) | Fahrschulring Stuttgart GmbH Eibl / Fahrschulring GmbH / Eibl Frank Fahrschulring Stgt. / Beratungsstelle … | ⚠ brand consistent; legal name see next row |
| Legal name | Fahrschulring GmbH | Fahrschulring GmbH (Impressum) | — | "Fahrschulring Stuttgart GmbH Eibl" (snippet, unverified) | both | ⚠ **owner must confirm the exact registered name** (Handelsregister extract); if it is "Fahrschulring Stuttgart GmbH Eibl", the Impressum must say so |
| Address | Hegelstraße 48, 70174 Stuttgart | same | same | Hegelstraße 48 | same + old Bebelstraße 25 (70193) + old Kienestraße 33 | ⚠ old branches still listed |
| District | Stuttgart-Mitte (border to West) | "mitten in Stuttgart" | — | — | West / Mitte / Degerloch(!) | fixed on site; directories to correct |
| Phone | 0711 295928 (+49 711 295928) | 294100 (4 pages) / 295928 (Impressum) / 295828 (typo) | +49 711 295928 | — | both numbers; +1200505 (branch); +0177… (unknown) | ⚠ owner: does 294100 still exist? |
| Email | info@fahrschulring.de | .com (marketing) / .de (Impressum) | n/d | — | mostly none | ✔ (.de); kill .com everywhere |
| Website | https://www.fahrschulring.de/ (canonical, decided) | www.fahrschulring.de | n/d | — | fahrschulring.de (various) | ✔ once live |
| Business type | DrivingSchool / LocalBusiness | Fahrschule | Driving school | "Betrieb von Fahrschulen für alle Fahrzeugklassen" | Fahrschule | ✔ |
| Opening hours | Mo–Do 15:00–18:30 (owner-confirmed) | 18:00 / 18:30 | n/d | — | 18:00 / 18:30 / 15:30 / to 20:00 | ⚠ directories |
| Theory hours | Mo+Mi 18:30–20:00 | same | n/d | — | same (Tue/Thu at old Bebelstr.) | ✔ |
| Services | all classes, simulator, EV/automatic; Intensivkurs (FAQ, from old site) | + Auffrischung, ASF, FES-Vermittlung | n/d | — | Intensiv, ASF, FES, Finanzierung (fahrschulenmap) | ⚠ owner: are Auffrischung/ASF/FES/Finanzierung still offered? |
| Licence classes | AM, A1, A2, A, B196, B/BF17, B96, BE, C1, C1E, C, CE, D1, D1E, D, DE, T, L (classes.ts from old klassen.php) | same | n/d | "alle Fahrzeugklassen" | subsets | ✔ |
| Owner | Frank Eibl | Frank Eibl | n/d | Geschäftsführer n/d | Frank Eibl | ✔ |
| Years / history | "seit über 50 Jahren" | same | — | GmbH registered 22.11.1990 | "über 10 Jahre" (Drivolino/Cylex) | ⚠ **no source gives a founding year**; keep "über 50 Jahre" only as the owner's claim (it is on the old site); do not state a year |
| Social profiles | Facebook (owner-supplied) | — | n/d | — | unternehmen24 lists FB/XING/Instagram/X without URLs | ✔ Facebook; others not confirmed → not in sameAs |
| Logo | template-logo.webp | same mark | n/d | — | — | ✔ (JSON-LD `logo`) |
| Map entity | CID 15448751995835036082 / place ID ChIJR0zjFTzbmUcRAbC_uztld74 | — | — | — | — | ✔ (`hasMap`, `sameAs`) |
| Association | "Gut betreut – Verbands-Fahrschule" seal shown (from old site) | seal | — | — | FLVBW Fahrschulsuche lists the old Bebelstr. branch | ⚠ membership not confirmed in writing; owner to confirm, then list in FLVBW with Hegelstr. |
| Rating | 4.9 / 325 (snapshot 2026-10-02) | — | 4.9 / 325 | — | 4.90/281, 4.9/185, 0, 2, 536 (wrong address) | aggregator lag/mix-ups |

## What the site now asserts (and what it deliberately does not)

Asserted in JSON-LD (`src/lib/schema.ts`): name, alternateName, legalName
(Fahrschulring GmbH — change if register says otherwise), address incl.
region, E.164 phone, email, hours spec, hasMap, sameAs (Facebook + Maps),
areaServed Stuttgart, logo/image, VAT ID, slogan. **Not asserted:** geo
coordinates (no verified source), foundingDate (unknown), aggregateRating
(self-serving ratings are ignored by Google and the value drifts), founder/
employee nodes (only "Frank Eibl, Inhaber" is a verified fact; add a
`founder` Person once the owner confirms he founded the GmbH), ASF/FES/
Auffrischung services (unconfirmed).

## Owner decisions needed (blockers for off-site cleanup)

1. Exact registered company name (Handelsregister extract).
2. Status of 0711 294100 and of the Bebelstraße 25 / Kienestraße 33 locations.
3. Which of Intensivkurs / Auffrischung / ASF / FES / Finanzierung are still offered.
4. Written confirmation of the Fahrlehrerverband membership behind the seal.
5. Founding year of the school (for "seit 19xx" claims) — or keep "über 50 Jahre".
