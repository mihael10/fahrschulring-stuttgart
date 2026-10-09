# AI-Search Visibility Baseline — Fahrschulring Stuttgart

Date: 2026-10-09 · Subject: Fahrschulring, Hegelstraße 48, 70174 Stuttgart (fahrschulring.de)

## 0. Method and access log

| Engine | Access attempt | Result |
|---|---|---|
| ChatGPT | WebFetch `https://chatgpt.com/?q=...` | `EGRESS_BLOCKED`: "Access to chatgpt.com is blocked by the network egress proxy." |
| Perplexity | WebFetch `https://www.perplexity.ai/search?q=...` | `EGRESS_BLOCKED`: "Access to www.perplexity.ai is blocked by the network egress proxy." |
| Gemini | WebFetch `https://gemini.google.com/app` | `EGRESS_BLOCKED`: "Access to gemini.google.com is blocked by the network egress proxy." |
| Google AI Overviews | not attempted separately (google.com egress blocked like the others; needs a logged-in browser anyway) | n/a |
| **WebSearch tool** (Anthropic web search, US-based index) | 20 queries, mode "standard" | Worked. Returns a generated answer plus cited links |
| **Claude (no browsing, model knowledge)** | answered from memory before any search | see §2 |

## 1. WebSearch tool: per-query results

Correct facts for reference: Hegelstraße 48, 70174 Stuttgart · Tel. 0711 295928 (old: 0711 294100) · Büro Mo–Do 15:00–18:30 · Theorie Mo & Mi 18:30–20:00 · ~4.9★ / 325 Google reviews (2026-10-02) · classes AM, A1, A2, A, B196, B, BF17, B96, BE, C1, C1E, C, CE, D1, D1E, D, DE, T, L · owner Frank Eibl · EV fleet · simulator · converts foreign licences.

| Engine | Query | Mentioned | Position | Cited Sources | Facts Correct | Recommended Actions |
|---|---|---|---|---|---|---|
| WebSearch | 1 Welche Fahrschulen in Stuttgart sind empfehlenswert? | N | – | gelbeseiten.de, dastelefonbuch.de (×4), reviewhero.io (×2), stuttgarter-zeitung.de (×2), biketrailspfannenstiel.ch | n/a | Get listed and reviewed on dastelefonbuch/golocal/gelbeseiten and reviewhero. Those portals pull the Google rating, and 325 reviews would beat every competitor shown |
| WebSearch | 2 … gut für Klasse B? | N | – | stepstone.de (×3), arbeitsagentur.de, reviewhero.io, genaumeinkurs.de, dastelefonbuch.de (×2), biketrailspfannenstiel.ch | n/a | Create a genaumeinkurs.de provider profile, which is cited for "Klasse B" answers |
| WebSearch | 3 … Motorradführerschein? | N | – | biketrailspfannenstiel.ch (×2), gelbeseiten.de, gs-forum.eu, reviewhero.io (×4), stepstone.de | n/a | Add A1/A2/A wording to directory entries. reviewhero's "Motorradfahrschule Stuttgart" category lists only one school, so the category is easy to win |
| WebSearch | 4 … Stuttgart Mitte? | N | – | dasoertliche.de (×2), dastelefonbuch.de, 11880.com, stepstone.de (×5) | n/a | **Biggest gap.** Hegelstraße is in Stuttgart-Mitte (Stadtteil West), yet the engine named only Ates Azad, PS Preiswert+Schnell and Academy Lutz. Get the business into Das Örtliche/11880 with the district "Mitte" |
| WebSearch | 5 Wo … Klasse B machen? | N | – | stepstone.de (×3), arbeitsagentur.de, genaumeinkurs.de (×4), biketrailspfannenstiel.ch | n/a | genaumeinkurs.de profile. AZAV certification (if real or planned) is a selling point the engine picks up (Kesmez) |
| WebSearch | 6 … gute Bewertungen? | N | – | reviewhero.io (×4), werkenntdenbesten.de, dastelefonbuch.de (×4) | n/a | Claim profiles on werkenntdenbesten.de and reviewhero.io so the 4.9★/325 is aggregated |
| WebSearch | 7 … Automatik? | N | – | stuttgarter-zeitung.de (×3), genaumeinkurs.de, schwaebische.de, stepstone.de, nochoffen.de, bussgeldkatalog.org, biketrailspfannenstiel.ch | n/a | State automatic/B197 offering and the EV fleet explicitly in directory text, if true |
| WebSearch | 8 … B197? | N | – | nordkurier.de, mobile.de, bussgeldkatalog.org, genaumeinkurs.de (×2), adac.de, insideevs.de, nochoffen.de, dasoertliche.de, stuttgarter-zeitung.de, degener.de + spam domains | n/a | Baumann wins here because its directory listing spells out its class list. Fahrschulring needs the same verbatim class list (do not claim B197 unless it is offered; it is not in the known class list) |
| WebSearch | 9 … ausländische Führerscheine? | N | – | stuttgart.de, stadt.muenchen.de (×8) | n/a | No school named at all, so this is an open slot. Publish a dedicated "Umschreibung ausländischer Führerschein" page and get it cited or linked (expat sites, Integrationsstellen) |
| WebSearch | 10 Wie viel kostet …? | N | – | stuttgart.de (×4), ingenieur.de, stuttgarter-zeitung.de, autobild.de, echo24.de, ace.de, monsterdealz.de, ruv.de (×2), statista.com (×2), studyflix.de, finanzinfo.at, fimportal.de | n/a | Informational query, so schools are not named. Only a transparent (real) price page would earn a citation; no invented prices |
| WebSearch | 11 … viele Google-Bewertungen? | N | – | reviewhero.io (×3), dastelefonbuch.de (×6), werkenntdenbesten.de | n/a | Ranking given: Schille 563, Peters 300, Sieber 265 (4.93), Horlacher 180, Ali's 136, Charly's 94, Pol 61. **Fahrschulring (325, 4.9) would be #2**, but it is invisible because no directory shows its Google count |
| WebSearch | EN Which driving schools in Stuttgart are recommended? | N | – | army.mil (×2), dastelefonbuch.de (×2), dasoertliche.de, azureazure.com, fixando.de, expatexchange.com (×2) | n/a | Expat/US-military content dominates the EN results. Get listed on expat guides (stuttgartcitizen.com, expatexchange) |
| WebSearch | EN English-speaking driving school Stuttgart | N | – | nochoffen.de, allaboutberlin.com (×2), lifeinduesseldorf.com (×2), seriousteachers.com, others | n/a | Only Baumann is named, based on "German or English" in its listing. If Fahrschulring instructors teach in English, say so on the site and in listings |
| WebSearch | EN convert foreign driving licence Stuttgart driving school | N | – | stuttgart.de, stadt.muenchen.de (×3), allaboutberlin.com, translayte.com, msingermany.com, absolutemunich.com, citiesinsider.com | n/a | No Stuttgart school is named. An English conversion page plus expat-guide mentions is a clear opening |
| WebSearch | EN motorcycle licence Stuttgart | N | – | stuttgartcitizen.com (×4), stuttgart.de (×2), biketrailspfannenstiel.ch (×2), bikesbooking.com | n/a | The engine says it found no source on how to get an A/A1/A2 licence in Stuttgart. An English motorcycle page could fill that slot |
| WebSearch | EN how much does a driving licence cost in Stuttgart | N | – | stuttgart.de (×4), ingenieur.de, stuttgarter-zeitung.de, autobild.de, echo24.de, autoviatest.com + many spam wiki/kanban domains | n/a | Informational query. Low priority |
| WebSearch | Fahrschulring Stuttgart Erfahrungen | **N** ("Ich habe keine Erfahrungsberichte zur Fahrschulring Stuttgart gefunden") | – | stuttgarter-zeitung.de (×5), oeffnungszeitenbuch.de, dastelefonbuch.de, dasoertliche.de, biketrailspfannenstiel.ch | n/a | Branded review query fails completely, despite 325 real Google reviews |
| WebSearch | Fahrschulring Stuttgart | **Y** (directory only) | 1 (only entity) | oeffnungszeitenbuch.de (cited source of facts), stuttgarter-zeitung.de, dastelefonbuch.de, dasoertliche.de | Address correct. Phone, hours, rating, classes, owner: all "keine Angaben". States "keine offizielle Website" | fahrschulring.de is not in this index. Fix indexing (GitHub Pages site vs. real domain, sitemap, canonical) |
| WebSearch | (extra) fahrschulring.de Hegelstraße 48 Fahrschule | N ("couldn't find any page for fahrschulring.de") | – | dasoertliche.de, cylex.de, ihk.de, landkreis-heilbronn.de, koeln.de | n/a | Confirms the domain is not indexed |
| WebSearch | (extra) "Hegelstraße 48" 70174 Stuttgart Fahrschule | Y | 1 | oeffnungszeitenbuch.de, onlinestreet.de, stuttgart.de | Address correct, district "West, Bezirk Mitte" correct | Same as above |
| WebSearch | (extra) "0711 295928" OR "0711 294100" | N | – | dasoertliche.de, dastelefonbuch.de, oeffnungszeitenbuch.de | Neither phone number is indexed anywhere | Make NAP (name, address, phone) consistent across directories, with the current number 0711 295928 |
| WebSearch | (extra) Fahrschule Frank Eibl Stuttgart | N | – | sellwerk.de, werkenntdenbesten.de, dasoertliche.de, reviewhero.io | Owner unknown to the engine | Owner name in Impressum and directory profiles |
| Claude (no browsing) | all 11 DE + 5 EN | N | – | none | n/a | see §2 |

**Competitors named (frequency across answers):** Fahrschule Schille (Feuerbach) 9 · Fun S Drive / Academy Funsdrive 5 · Academy Fahrschule Baumann (Vaihingen) 5 · Fahrschule Pol (Weilimdorf) 5 · Peters Fahrschulen / Motorradfahrschule Rotebühlstr. 127B 5 · Campos (Bottroper Str.) 3 · Academy Lutz 2 · E. Ates / Ates Azad / Ates Erol 3 · Roland Herter 2 · Charly's Fahrschule 2 · Sieber, Horlacher, Ali's, Rainer Lange, Kesmez, Kraft & Schlatterer, Mülln, PS Preiswert+Schnell, Henke Schulungen, F-1, Alfa, Freiberger 1 each.

**Pattern:** Competitors are named because a *directory or aggregator page* contains their name, district, class list or review count in plain text. None of the answers relied on a school's own website.

## 2. Claude (no browsing, model knowledge)

Honest self-assessment: I have **no reliable prior knowledge of "Fahrschulring" Stuttgart**. I could not have given its address, phone, owner, rating or classes from memory, and would not have named it in any list. For the generic questions, my unaided answers would be generic: point to ADAC/TÜV guidance, suggest comparing Google reviews, give average Baden-Württemberg costs of roughly €3,000–3,500, and explain the Führerscheinstelle process for conversion. Any specific Stuttgart school names I produced from memory would carry a high hallucination risk. Result: Mentioned = N for all 16 questions. This is typical for small local businesses, because model training data reflects the same sparse directory coverage seen above.

## 3. Phase 7 — Cited-source analysis

Counted as unique citation appearances per answer (20 WebSearch answers).

| Domain | Class | Answers citing |
|---|---|---|
| dastelefonbuch.de | Directory | 9 |
| stuttgarter-zeitung.de | Press | 8 |
| reviewhero.io | Review aggregator | 7 |
| stepstone.de | Job board (aggregator, irrelevant) | 7 |
| stuttgart.de | Official (city authority) | 6 |
| biketrailspfannenstiel.ch | Content farm / SEO aggregator | 8 |
| dasoertliche.de | Directory | 7 |
| genaumeinkurs.de | Educational provider directory | 5 |
| oeffnungszeitenbuch.de | Directory (hours) | 4 |
| stadt.muenchen.de | Official (other city) | 2 |
| gelbeseiten.de | Directory | 2 |
| nochoffen.de | Directory (hours) | 3 |
| werkenntdenbesten.de | Review aggregator | 3 |
| bussgeldkatalog.org | Educational / guide | 2 |
| ingenieur.de, autobild.de, echo24.de | Press | 2 each |
| arbeitsagentur.de | Official (job board) | 2 |
| allaboutberlin.com, lifeinduesseldorf.com, expatexchange.com, stuttgartcitizen.com, absolutemunich.com, msingermany.com, citiesinsider.com | Expat guides / blogs | 1–2 each |
| adac.de, ace.de, ruv.de, statista.com, studyflix.de, mobile.de, insideevs.de | Educational / association / press | 1 each |
| 11880.com, cylex.de, sellwerk.de, onlinestreet.de | Directory | 1 each |
| gs-forum.eu | Forum | 1 |
| army.mil | Official (US military) | 1 |
| bikesbooking.com, fixando.de, autoviatest.com | Aggregator / marketplace | 1 each |
| spam wikis (minesparis, hack.allmende.io, tu-freiberg kanban, ualr.edu, etc.) | Spam | 1 answer |
| **fahrschulring.de / mihael10.github.io** | Official site | **0** |
| Google Business Profile / Maps | Business profile | 0 (not crawlable by this engine; ratings arrive only second-hand via directories) |
| YouTube, Reddit | Video / forum | 0 |

**By class:** Directories ≈ 38% · Press ≈ 15% · Review aggregators ≈ 12% · Official/authority ≈ 12% · Job boards ≈ 10% · Expat/educational guides ≈ 10% · Forum/YouTube ≈ 1% · Official business sites ≈ 0%.

### What legitimate third-party information would make Fahrschulring more retrievable and trustworthy?

Ranked by expected impact:

1. **Complete directory profiles with consistent NAP data** on dastelefonbuch.de, dasoertliche.de, gelbeseiten.de, 11880.com, oeffnungszeitenbuch.de (currently has only the address) and nochoffen.de. Each should carry the name, Hegelstraße 48, 70174 Stuttgart-Mitte/West, 0711 295928, office and theory hours, the full real class list, the website URL and the Google review count. The engine copies these fields almost verbatim.
2. **Review-aggregator presence**: reviewhero.io and werkenntdenbesten.de, so the real 4.9★/325 Google rating surfaces. That would put Fahrschulring at #2 in the "viele Google-Bewertungen" answer and near the top of "gute Bewertungen". golocal.de, which feeds dastelefonbuch ratings, should get real reviews too. Never seed fake ones.
3. **genaumeinkurs.de provider profile** (education provider directory, cited 5×). List classes, and AZAV/Bildungsgutschein only if it is actually held.
4. **A foreign-licence conversion page (DE + EN)** linked from expat resources (stuttgartcitizen.com, Welcome Center Stuttgart, expat forums). Two queries returned *no* school at all, so a single credible source would likely win the slot.
5. **Local press**: Stuttgarter Zeitung runs frequent driving-school pieces (TÜV exam locations, costs, registration slump). Offering the owner, Frank Eibl, as a quoted expert, for example on the EV fleet or the simulator, creates authoritative third-party mentions.
6. **Fix indexing of the official site.** fahrschulring.de is not in the index, and the engine says "keine offizielle Website". Make sure the production domain (not only the GitHub Pages URL) is crawlable, submitted in a sitemap and canonical, with `DrivingSchool` JSON-LD (already in `src/app/layout.tsx`). Add the address, phone, hours, the `aggregateRating` source (only if compliant with Google policy), and `sameAs` links to the directory profiles once they exist.
7. **English-language signals**: if instructors teach in English, say so in the listings. Baumann wins the EN query on that one sentence.

## 4. Inconsistencies observed

- The engine states Fahrschulring has "keine offizielle Website" and no phone or hours, so all facts except the address are missing.
- Neither phone number (current or old) appears in any indexed page. Directories may still carry the old 0711 294100. Verify each listing manually.
- oeffnungszeitenbuch.de splits the business into two entries ("Unterricht" and "Anmeldung") at the same address. Harmless, but it fragments signals.
- Hegelstraße is described as "Stadtteil West, Bezirk Stuttgart-Mitte". Use both terms in listings so "Stuttgart Mitte" and "Stuttgart West" queries both match.

## 5. Limitations

- Only one live engine (Anthropic WebSearch, US-based index). ChatGPT, Perplexity, Gemini and Google AI Overviews were blocked (see §0) and use different indexes. Google AI Overviews in particular draw on Google Business Profile data, where Fahrschulring's 325 reviews are visible, so results there are likely better. **Re-run this query set manually in those engines from a German IP.**
- Each query was run once. Generative answers are non-deterministic, and positions can vary between runs.
- US index plus English locale bias: German local directories are under-represented, and US-military pages over-represented in EN queries.
- Citation counts are approximate (domains counted once per answer, including links that were returned but not used in the text).
- The "Claude no browsing" answers are a self-report of model knowledge, not a measured sample.
- Facts about competitors are reproduced as the engine reported them and were not verified.
