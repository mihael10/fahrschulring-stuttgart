# Fahrschulring Stuttgart: old site crawl, NAP consistency, history

Research date: 2026-10-09. Method: WebSearch only (extended mode). WebFetch was tried on
www.fahrschulring.de, drivolino.de and web2.cylex.de, and all three returned EGRESS_BLOCKED.
The shared web-search budget (200/turn) ran out after about 35 queries, so a few planned queries were never run (see Limitations).

**Evidence labels**
- **FACT**: the WebSearch result summary attributes the claim to that source, often with a quoted snippet. We could not open any page to check it, so "FACT" here means "stated by the source according to the search index snapshot".
- **OBSERVATION**: what the result set itself shows, such as which URLs or hostnames appear.
- **INFERENCE**: our own reasoning.

Caveat: the WebSearch summaries are machine-written and sometimes contradicted each other across queries. The email domain (.com vs .de) is one example. Where that happened, both readings are recorded.

---

## A. Old site (fahrschulring.de) as indexed

### A.1 Hostname
- OBSERVATION: every indexed URL uses **`https://www.fahrschulring.de/...`**. No non-www URL showed up in any result set.
- FACT: directories link to the site as `fahrschulring.de` or `http://fahrschulring.de` (Yelp, Cylex). These are listing links, not indexed pages.
- INFERENCE: the canonical/indexed host is `www.` over https. Redirects from old URLs should cover both `www.` and the bare host.

### A.2 Indexed URLs (from `site:fahrschulring.de` and follow-up queries)

| # | URL | Title shown | Content per snippets |
|---|-----|-------------|----------------------|
| 1 | https://www.fahrschulring.de/ | Fahrschulring Stuttgart - Startseite | FACT: "Seit über 50 Jahren sind wir kompetenter Ansprechpartner rund um den Führerschein. Ihr Fahrschulteam". Services: "Ausbildung in allen Klassen - Auffrischungsstunden - Intensivkurse in allen Klassen - Nachschulung ASF - Punkteabbau FES Vermittlung". Address "Frank Eibl, Hegelstraße 48, 70174 Stuttgart, Tel./Fax.: 0711 / 294100, E-Mail: info(at)fahrschulring(dot)com". Office "Mo.–Do. ab 15:00 – 18:00 Uhr". Theory "Montag und Mittwoch 18.30 Uhr - 20.00 Uhr" ("in der Hegelstraße 2 mal die Woche"; "Theorie auch vormittags nach Absprache möglich"). Vehicle list "Folgende Fahrzeuge haben wir für euch im Einsatz": VW ID.3, VW Polo (manual), VW Golf Automatik, VW T-Roc, BMW X1, BMW X2. Classes A, A2, A1, AM, B/BF17, B96, BE, C1. Nav per snippet: Startseite, Team, Fahrzeuge, Klassen, Anfahrt, Kontakt. |
| 2 | https://www.fahrschulring.de/pages/klassen.php | Fahrschulring Stuttgart - Klassen | FACT: training "in allen Klassen". Describes AM, A1, A2, A, B with minimum ages (snippet mentions age 21 for one class, presumably A direct). |
| 3 | https://www.fahrschulring.de/pages/team.php | Fahrschulring Stuttgart - Team | FACT: Frank Eibl (all classes), Heiko Schaible (A, B, BE), Karol Szymanowski (B, BE, A), Florije Iseni, Leyla Heptunali (classes not captured). |
| 4 | https://www.fahrschulring.de/pages/fahrzeuge.php | Fahrschulring Stuttgart - Fahrzeuge | FACT: "Wir schulen derzeit auf folgenden Fahrzeugen": VW ID.3, BMW X1, Tesla (Model) S, Kia Niro (Automatik), 2x MG4 Electric, BMW X2, plus motorcycles/scooters and (per one summary) a bus. FACT: "Bei uns können Sie Ihre Fahrstunden und die praktische Prüfung auch auf einem Pkw mit Automatik-Getriebe machen." An older cached menu variant listed "VW Tiguan - VW Polo - AM Suzuki Roller". |
| 5 | https://www.fahrschulring.de/pages/kontakt.php | Fahrschulring Stuttgart - Kontakt | FACT: Hegelstraße 48, 70174 Stuttgart, Tel./Fax 0711 / 294100. Office Mon–Thu 15:00–18:00. Sign-up "jederzeit während der Bürozeiten ... oder über das Anmeldeformular". The contact form has an arithmetic captcha. |
| 6 | https://www.fahrschulring.de/pages/impressum.php | Fahrschulring Stuttgart - Impressum | FACT: "Impressum Fahrschulring GmbH Hegelstr.48 70174 Stuttgart Vertreten durch: Frank Eibl", "Telefon: 0711 - 295928" (phone+fax), "Registergericht: Stuttgart Registernummer: 14308", USt-ID 9906306056, Aufsichtsbehörde Führerscheinstelle Stuttgart. Summaries disagree on whether the Impressum email is .de or .com, and one says the Impressum also contains "Tel./Fax.: 0711 / 294100" (it may be in the footer). |
| 7 | https://www.fahrschulring.de/pages/datenschutz.php | Fahrschulring Stuttgart - Datenschutz | FACT: names the company as data controller. Phone/fax given as "+49 711 - 295828" (sic: 295**8**28, a one-digit difference from the Impressum's 295928). |

### A.3 Paths searched for but NOT found in the index
- `/kontakt.php` (root, from repo history): not seen. Only `/pages/kontakt.php` is indexed. INFERENCE: either it moved to `/pages/` or the repo note is imprecise. Redirect both.
- `/pages/anfahrt.php`: not indexed. An exact-URL query returned nothing, but the homepage nav includes "Anfahrt" per one snippet, and repo notes (`src/content/site.ts`) say an Anfahrt page existed with hours 15:00–18:30. Its URL is not determinable. Likely `/pages/anfahrt.php` (INFERENCE).
- anmeldung, aktuelles, preise, theorie, leistungen, intensivkurs, ASF/FES pages: **no indexed URLs found**. ASF/FES/intensive content appears only on the homepage.
- A query for the exact title "Fahrschulring Stuttgart - Anfahrt" returned no fahrschulring.de result.

### A.4 Old-site internal inconsistencies (FACT, per snippets)
- Phone: 0711/294100 (Startseite, Kontakt) vs 0711-295928 (Impressum) vs +49 711-295828 (Datenschutz).
- Email: info(at)fahrschulring(dot)**com** (Startseite/Kontakt) vs info@fahrschulring.**de** (per some summaries, Impressum).
- Office close: 18:00 (Kontakt/Startseite, current index) vs 18:30 ("ab 15:00 - 18:30 Uhr" in an older version; repo notes say Impressum+Anfahrt said 18:30).
- Fleet: homepage list (Polo/Golf Automatik/T-Roc/ID.3/X1/X2) ≠ fahrzeuge.php (ID.3/X1/Tesla S/Kia Niro/MG4 x2/X2) ≠ older cached (Tiguan/Polo/Suzuki Roller).

---

## B. Third-party listings (entity / NAP)

| Source | URL | Name as written | Address | Phone(s) | Hours | Rating | Notes |
|---|---|---|---|---|---|---|---|
| Drivolino | https://www.drivolino.de/fahrschulring-stuttgart-gmbh-eibl | Fahrschulring Stuttgart GmbH Eibl | Hegelstraße 48, 70174 | (not captured) | Office Mon–Thu **15:30**–18:30; theory Mon & Wed 18:30–20:00 | none shown | FACT: profile "75% complete". One summary says the text claims "über **10** Jahre" experience. |
| Cylex (main) | https://web2.cylex.de/firma-home/fahrschulring-stuttgart-gmbh-eibl-6835174.html | Fahrschulring Stuttgart GmbH Eibl | Hegelstr. 48, 70174 | 0711 294100 (one summary says 295928) | Theory Mon & Wed 18:30–20:00; office 15:00–18:30; Tue/Thu shown closed per one summary; updated 23.02.2026 | "noch keine Bewertungen" | Text variants say "über 10 Jahre" and "über 50 Jahre". Has a "Nachricht auf Facebook senden" link. |
| Cylex (Bebelstr.) | https://web2.cylex.de/firma-home/fahrschulring-stuttgart-gmbh-eibl-2023839.html | Fahrschulring Stuttgart GmbH Eibl | **Bebelstr. 25, 70193** Stuttgart-West | (not captured) | – | – | Website fahrschulring.de. **Duplicate/old listing.** |
| fahrschulen.de | https://www.fahrschulen.de/Fahrschule-42663/Stuttgart/Fahrschulring%20GmbH (also …/Fahrschulring+Stuttgart+GmbH+Eibl.html) | Fahrschulring GmbH | Hegelstraße 48, 70174 | (0711) 294100 | – | – | Classes A, A1, A2, AM, B, B96, BE, C, CE, C1, C1E, D, DE (FACT per summary, which looks overstated). Intensive theory/practice courses; automatic B78/B197. |
| fahrschul-lotse.de | https://fahrschul-lotse.de/fahrschulen/10513 | Fahrschulring | Hegelstraße 48, 70174 | **0711 295928** | Mon–Thu 15:00–18:00 | – | Classes B, A, A1, A2, AM, Mofa. Has a Facebook embed placeholder. |
| fahrschule-fahrlehrer.de | https://www.fahrschule-fahrlehrer.de/stuttgart/fahrschulring-stuttgart-gmbh-eibl-1195490.html | Fahrschulring Stuttgart GmbH Eibl | Hegelstraße 48 | 0711 294100 | – | 0.0 (0 reviews) | |
| fahrschulenmap (main) | https://fahrschulenmap.de/fahrschule-Fahrschulring-Stuttgart-GmbH-Eibl/12786-Fahrschule.html | Fahrschulring Stuttgart GmbH Eibl | Hegelstraße 48, 70174 | 0711 / 29 41 00 | Mon 15–20, Tue 15–18:30, Wed 15–20, Thu 15–18:30 | – | Classes A, AM, A1, A2, Mofa, B, BE, B96, C, CE. Financing (Raten/Kredit), Automatik, ASF, FES, Ferienfahrschule/Intensiv. Mentions the Bebelstr. branch. |
| fahrschulenmap (branch) | https://fahrschulenmap.de/fahrschule-Fahrschulring-Stuttgart-GmbH/18132-Fahrschule.html | Fahrschulring Stuttgart GmbH (Zweigstelle) | **Bebelstrasse 25, 70193** | **0711 / 12 00 50 5** | Mon/Wed/Fri afternoon+evening, shorter Tue/Thu | – | Lists Hegelstr. 48 as Hauptsitz. |
| oeffnungszeitenbuch (Unterricht) | https://www.oeffnungszeitenbuch.de/filiale/Stuttgart-Fahrschulring%2520Stuttgart%2520%2528Unterricht%2529-1065466N.html | Fahrschulring Stuttgart (Unterricht) | Hegelstraße 48 | 0711 295928 | Mon & Wed 18:30–20:00 | – | |
| oeffnungszeitenbuch (Unterricht 2) | https://oeffnungszeitenbuch.de/filiale/Stuttgart-Fahrschulring%20Stuttgart%20(Unterricht)-1065467L.html | Fahrschulring Stuttgart (Unterricht) | Bebelstraße 25 (one summary says PLZ 70174, which is wrong for Bebelstr.) | – | Tue & Thu 18:30–20:00 | – | INFERENCE: this was the second classroom site. |
| oeffnungszeitenbuch (Anmeldung) | https://www.oeffnungszeitenbuch.de/filiale/Stuttgart-Fahrschulring%2520Stuttgart%2520%2528Anmeldung%2529-1065463S.html | Fahrschulring Stuttgart (Anmeldung) | Hegelstraße 48 | 0711 295928 | Mon–Thu 15:30–18:30 (per one summary) | 0 Bewertungen | One summary mentions an update dated 11.05.2026 (source unclear). |
| 11880 (West) | https://www.11880.com/branchenbuch/stuttgart/112740662B53404112/fahrschulring-stuttgart-gmbh.html (also …/040461469B53404112/…) | Fahrschulring Stuttgart GmbH ("Beratungsstelle Fahrschulring Stuttgart GmbH") | Hegelstr. 48, 70174 (West) | **(0711) 295928** | Mon–Thu 15:00–18:00 | "noch keine Bewertungen", but shows a werkenntdenBESTEN "Sehr gut" seal | Last updated 03.10.2026 per one summary. |
| 11880 (Mitte) | https://www.11880.com/branchenbuch/stuttgart/040461469B26323816/fahrschulring-stuttgart-gmbh-eibl.html | Fahrschulring Stuttgart GmbH Eibl ("Fahrschulring Stuttgart Eibl Mitte") | **Kienestraße 33, 70174** | 0711 294100 | – | – | **Old address.** |
| Yelp | https://www.yelp.com/biz/fahrschulring-stuttgart-eibl-stuttgart | Fahrschulring Stuttgart Eibl | **Kienestr. 33, 70174** | 0711 294100 | – | – | **Marked CLOSED**, "Updated September 2025". Website fahrschulring.de. |
| Das Örtliche | https://www.dasoertliche.de/Themen/Eibl-Frank-Fahrschulring-Stgt-Stuttgart-West-Bebelstr | Eibl Frank Fahrschulring Stgt. | **Bebelstr. (25), Stuttgart-West** | **0711 1 20 05 05** | – | – | Listed under the owner's personal name. No Hegelstr. entry found. |
| Das Telefonbuch | https://kontakt-1.dastelefonbuch.de/Stuttgart/Frank-Fahrschulring-Stgt-Eibl-Stuttgart-Bebelstr.html ; https://www.dastelefonbuch.de/Personen/Frank%20Fahrschulring%20Stgt.--Eibl/Stuttgart | Eibl Frank Fahrschulring Stgt. | Bebelstr. 25, 70193 | 0711 1 20 05 05 | – | – | Same data as Das Örtliche (both from the DTM/Telekom data pool). |
| FLVBW Fahrschulsuche | https://www.flvbw.de/fahrschulsuche.html?s=&page_n=3 | Fahrschulring (Zweigstelle) | Bebelstr. 25, 70193 | 0711/1200505 | – | – | FACT: the Fahrlehrerverband BW directory lists the Bebelstr. **Zweigstelle**. INFERENCE: this suggests a membership/listing with the association. The main Hegelstr. entry was not surfaced, and membership is not otherwise confirmed. |
| branchen-info.net | https://stuttgart.branchen-info.net/fp_266428.php | Eibl Frank Fahrschulring Stgt. | title says "Stuttgart (**Degerloch**)" | 0711-294100 | has hours | – | The district label is wrong (Hegelstr. is in Stuttgart-West). |
| finde-offen.de | https://finde-offen.de/stuttgart/fahrschulring-stuttgart-gmbh-eibl-1428759 | Fahrschulring Stuttgart GmbH Eibl | HEGELSTR. 48, 70174, West | 0711 294100 (?) | has hours | – | |
| gewerbeverzeichnis-deutschland | https://www.gewerbeverzeichnis-deutschland.de/fahrschulring-stuttgart-gmbh-eibl/259434.html | Fahrschulring Stuttgart GmbH Eibl | Kienestraße 33 (per summary) | 0711-294100 | – | – | |
| top10place | https://de.top10place.com/fahrschulring-1824185360.html | Fahrschulring | – | **01777796291** (mobile) | – | – | Odd number of unknown origin. |
| Groupon biz | https://www.groupon.de/biz/stuttgart/fahrschulring-stuttgart | Fahrschulring Stuttgart GmbH Eibl | Hegelstraße 48 | – | – | – | |
| meinestadt | (seen as "ähnlicher Anbieter" on https://branchenbuch.meinestadt.de/stuttgart/company/7683081) | Fahrschulring Stuttgart GmbH Eibl | Hegelstr. 48, 70174 | – | – | – | Own listing URL not found. |
| unternehmen24.info | https://www.unternehmen24.info/Firmeninformationen/Deutschland/Firma/211790 | Fahrschulring Stuttgart GmbH Eibl | Hegelstraße 48 | – | – | 2 reviews, 5/5 | FACT: Amtsgericht Stuttgart HRB 14308. "Gründung: 22.11.1990 (Neueintragung)". Kapital 25.564,59 EUR. Purpose: operating driving schools for all vehicle classes. Annual accounts 2015–2024, last published 19.11.2024. Lists social links (Facebook, XING, Instagram, X, WhatsApp) without URLs. One source spells the name "Fahrschulring Stuttgart Eibl GmbH". |
| werkenntdenBESTEN | https://www.werkenntdenbesten.de/fahrschule/stuttgart | Fahrschulring Stuttgart GmbH | – | – | – | **4.90, 281 reviews "auf einem Portal"**, "+30 gute Bew. in den letzten 12 Monaten". Ranked #9 of the Stuttgart top 10. | INFERENCE: the single portal is very likely Google. 281 is a lagged snapshot vs the repo's 325 (2026-10-02). |
| fahrschulentop.de | https://fahrschulentop.de/de-de/z/fahrschulen/29004-stuttgart/ | Fahrschulring | Hegelstraße 48 | – | – | **4.9 (185 Meinungen)** | INFERENCE: an older Google-derived snapshot. |
| ClickClickDrive | – | – | – | – | – | – | Not found (only other Stuttgart schools). |
| golocal | – | – | – | – | – | – | Not found. |
| Gelbe Seiten | – | – | – | – | – | – | Not found for Stuttgart. Only an unrelated "Fahrschulring Regensburg" appeared. |
| Facebook | facebook.com/fahrschulring.stuttgart (repo) | – | – | – | – | – | Not surfaced by search. Existence not confirmed here (the repo says the owner supplied it). |
| Instagram | – | – | – | – | – | – | Not found. |
| Google Business Profile | – | – | – | – | – | – | Not surfaced by WebSearch. 4.9/325 and the "Driving school" category **not determinable** from public search. werkenntdenbesten 4.90/281 is consistent with it. |
| Bing Places / Apple Maps | – | – | – | – | – | – | Not searched (budget exhausted). Not determinable. |
| Northdata | – | – | – | – | – | – | No Northdata page surfaced. Register data came from unternehmen24 instead. |

Unrelated and not to be confused: a separate **Fahrschulring Regensburg** (Landshuter Str. 64–66) and **ring-fahrschule.de**. One summary claimed "Fahrschule Sieber GmbH" at Hegelstraße 48, but a follow-up showed Sieber is at Wagenburgstraße 138 (HRB 752700). That was a summarizer mix-up.

### B.1 NAP conflict summary
- **Name variants**: Fahrschulring GmbH (Impressum) · Fahrschulring Stuttgart GmbH Eibl (register/most directories) · Fahrschulring Stuttgart GmbH · Fahrschulring Stuttgart Eibl · Eibl Frank Fahrschulring Stgt. (telephone books) · Fahrschulring Stuttgart (Unterricht)/(Anmeldung) · "Beratungsstelle Fahrschulring Stuttgart GmbH" (11880). INFERENCE: the registered name is probably "Fahrschulring Stuttgart GmbH Eibl", which would make the Impressum's "Fahrschulring GmbH" a shortened form. This needs a Handelsregister check.
- **Addresses**: Hegelstraße 48, 70174 (current) · **Bebelstraße 25, 70193** (former branch: FLVBW, Das Örtliche, Das Telefonbuch, Cylex, fahrschulenmap, oeffnungszeitenbuch) · **Kienestraße 33, 70174** (older address: Yelp "closed", 11880 "Mitte", gewerbeverzeichnis) · "Degerloch" mislabel (branchen-info).
- **Phones**: 0711 294100 (old site marketing pages, many directories) · 0711 295928 (Impressum, 11880, fahrschul-lotse, oeffnungszeitenbuch; repo says GBP too) · 0711 295828 (Datenschutz typo) · 0711 1200505 (Bebelstr. branch) · 0177 7796291 (top10place, unknown).
- **Email**: info@fahrschulring.com (old site) vs info@fahrschulring.de (Impressum per some summaries; repo uses .de).
- **Hours**: office Mon–Thu 15:00–18:00 (Kontakt, 11880, fahrschul-lotse) / 15:00–18:30 (older site, Cylex) / 15:30–18:30 (Drivolino, oeffnungszeitenbuch Anmeldung) / fahrschulenmap Mon & Wed to 20:00 (merges office and theory). Theory is consistently Mon & Wed 18:30–20:00 at Hegelstr. Tue & Thu 18:30–20:00 appears at Bebelstr. (old).
- **Experience claim**: "über 50 Jahre" (old site) vs "über 10 Jahre" (Drivolino/Cylex text).

---

## C. History / press / affiliations
- FACT (old homepage): "Seit über 50 Jahren sind wir kompetenter Ansprechpartner rund um den Führerschein."
- FACT (unternehmen24): GmbH registered (Neueintragung) **22.11.1990**, HRB 14308, Amtsgericht Stuttgart. Capital 25.564,59 EUR.
- INFERENCE: 25.564,59 EUR = exactly DM 50,000 at 1.95583, so the capital was set in DM. The 1990 date is the GmbH registration, not necessarily when the school was founded. The "50+ years" claim would put the business's origins before about 1975, but **no source found states a founding year** ("seit 1970" is not determinable).
- Press (Stuttgarter Zeitung / Stuttgarter Nachrichten): **none found**.
- Awards: **none found**. The only quality marker is the werkenntdenBESTEN "Sehr gut" seal shown on 11880 (an aggregator badge, not an award).
- Fahrlehrerverband BW: the FLVBW Fahrschulsuche lists the Bebelstr. 25 Zweigstelle (FACT). Explicit membership statement: not determinable.

---

## Queries run (all WebSearch, extended)
1. site:fahrschulring.de
2. Fahrschulring Stuttgart Hegelstraße 48
3. "fahrschulring.de" kontakt.php Hegelstraße Telefon
4. Fahrschulring Stuttgart Impressum Fahrschulring GmbH HRB Amtsgericht Stuttgart Frank Eibl
5. Fahrschulring Stuttgart Intensivkurs ASF FES Automatik
6. Fahrschulring Stuttgart drivolino Bewertungen Öffnungszeiten
7. Fahrschulring Stuttgart Bebelstraße 25 Zweigstelle
8. "Fahrschulring" Stuttgart Das Örtliche Gelbe Seiten 0711 294100
9. Fahrschulring flvbw.de Fahrschulsuche Hegelstr. 48 Stuttgart
10. "Fahrschulring Stuttgart" Kienestraße 33
11. Fahrschulring Stuttgart Google Bewertungen 4,9 Sterne Fahrschule Hegelstraße
12. "Fahrschule Sieber" Stuttgart Hegelstraße
13. werkenntdenbesten Fahrschulring Stuttgart GmbH Bewertungen
14. Fahrschulring Stuttgart facebook
15. "facebook.com/fahrschulring.stuttgart" OR "Fahrschulring Stuttgart" instagram
16. northdata Fahrschulring Stuttgart GmbH Eibl HRB 14308
17. fahrschulring.com Stuttgart Fahrschule
18. "Fahrschulring Stuttgart - Anfahrt"
19. fahrschulring.de pages anmeldung.php OR aktuelles.php OR preise.php OR theorie.php OR leistungen.php
20. Das Örtliche Fahrschulring Stuttgart Hegelstr. 48 Eibl
21. gelbeseiten Fahrschulring Stuttgart GmbH Eibl
22. dastelefonbuch Fahrschulring Stuttgart Eibl Telefon
23. Fahrschulring Stuttgart Eibl Stuttgarter Zeitung OR "Stuttgarter Nachrichten" Fahrschule
24. Fahrschulring Stuttgart Team Frank Eibl Heiko Schaible Karol Szymanowski
25. oeffnungszeitenbuch Fahrschulring Stuttgart Anmeldung Unterricht Hegelstraße
26. fahrschul-lotse Fahrschulring 10513 Stuttgart
27. fahrschulen.de Fahrschulring GmbH Stuttgart 42663 Klassen
28. Fahrschulring Stuttgart "seit über 50 Jahren" Führerschein
29. Fahrlehrerverband Baden-Württemberg Mitglied Fahrschulring Stuttgart Hegelstr
30. "Fahrschulring Stuttgart - Fahrzeuge" VW ID.3 BMW X1 Tesla
31. 11880 Fahrschulring Stuttgart GmbH West Hegelstr 48 Öffnungszeiten
32. clickclickdrive Fahrschulring Stuttgart
33. golocal OR meinestadt Fahrschulring Stuttgart Eibl
34. "Fahrschulring" Stuttgart Fahrschule Google Maps Rezensionen Hegelstraße 48 "Driving school"
35. unternehmen24 Fahrschulring Stuttgart GmbH Eibl 211790 Gründung Stammkapital
36. fahrschulenmap Fahrschulring Stuttgart GmbH Eibl 12786 Öffnungszeiten Klassen
37. flvbw.de fahrschulsuche "Fahrschulring" Stuttgart Hegelstr. 48 Telefon
38. yelp Fahrschulring Stuttgart Eibl Kienestr 33 closed
39. "fahrschulring.de" -www Fahrschule Stuttgart Startseite Klassen Team Fahrzeuge Kontakt
40. "fahrschulring.de/pages/anfahrt.php"
41. (not executed, budget exhausted) Fahrschulring Stuttgart Fahrschule Eibl Geschichte gegründet 1970 OR 1968 OR 1972
42. (not executed, budget exhausted) fahrschule-fahrlehrer.de Fahrschulring Stuttgart GmbH Eibl 1195490

WebFetch attempts (all EGRESS_BLOCKED): www.fahrschulring.de/, www.drivolino.de/…, web2.cylex.de/….

## Limitations
- No page could be opened. Everything comes from search-engine snippets plus machine-written summaries, which contradicted each other in places (email domain, whether Cylex shows 294100 or 295928).
- The search index is a snapshot. Its age per page is unknown, so the old-site content may differ from what is live now.
- The search budget (200/turn, shared across agents) ran out. Not searched: Bing Places, Apple Maps, Gelbe Seiten direct, Instagram direct, the Handelsregister portal, founding year/history, Google Business Profile category.
- Google rating 4.9/325 and the "Driving school" category could not be confirmed. Only the aggregators werkenntdenBESTEN (4.90/281, one portal) and fahrschulentop (4.9/185) surfaced.
- The full old-site URL list may be incomplete: the index may omit pages such as /pages/anfahrt.php that exist but aren't indexed.
