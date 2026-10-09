---
title: Measurement system / KPI dashboard (Phase 22)
area: analytics, measurement, search console
keywords: [kpi, ga4, search console, gbp insights, ai tracking]
---

# SEO / conversion measurement

## Setup (once, after launch on www.fahrschulring.de)

1. **Google Search Console**: domain property `fahrschulring.de`; submit
   `https://www.fahrschulring.de/sitemap.xml`; request indexing for the 12
   routes; check "Pages" for old `.php` URLs reporting as redirects.
2. **Bing Webmaster Tools**: import from GSC; enable IndexNow (optional
   later).
3. **GA4** (already consent-gated, `G-2EZF4EWNP8`): mark these events as
   key events — `phone_click`, `email_click`, `form_submit`, `map_click`,
   `cta_click` (emitted by `src/components/AnalyticsEvents.tsx`; only after
   consent, so numbers under-report — note the consent rate).
4. **GBP Performance**: monthly export.
5. One Google Sheet with the tabs below, updated monthly (first week).

## Tabs and KPIs

| Tab | Metric | Source | Target (12 months, INF) |
| --- | --- | --- | --- |
| Search | clicks, impressions, CTR, avg. position — total and per page | GSC | brand queries → position 1 incl. sitelinks; "Fahrschule Stuttgart Mitte" top 10; class pages top 10 for "<Klasse> Stuttgart" |
| Search | query growth (# queries with impressions) | GSC | +200 % vs month 1 |
| Search | indexed pages = 12; no "Duplicate, Google chose different canonical" | GSC Pages | 12/12 |
| Search | rich results: Breadcrumb, FAQ (not shown for businesses), sitelinks searchbox n/a | GSC Enhancements | no errors |
| Search | Core Web Vitals (field) | GSC CWV / CrUX | all "Good" (expected: static site) |
| Traffic | sessions, engaged sessions, landing pages, source/medium (organic, gbp UTM, direct) | GA4 | organic ≥ 60 % of sessions |
| Conversions | phone_click, email_click, form_submit, map_click per landing page; conversion rate | GA4 | ≥ 5 % of organic sessions convert |
| Local | GBP: searches (brand vs discovery), calls, website clicks, direction requests | GBP | discovery searches +50 % |
| Local | review count, average rating, reviews/month, owner response rate | GBP | +3/month, 100 % responded |
| Local | NAP audit pass (checklist of 25 sources, `offsite-authority-plan.md`) | manual, quarterly | 100 % consistent |
| AI | per engine × query: mentioned?, position, description, cited sources, facts correct, competitors named | manual, quarterly | mentioned in ≥ 50 % of DE queries in ChatGPT/Gemini/Perplexity/AI Overviews |

## AI visibility re-test protocol (quarterly)

Engines: ChatGPT (search on), Gemini, Perplexity, Claude, Google AI
Overviews/AI Mode, Bing Copilot — from a German IP, logged-out where
possible, each query once, record screenshot + answer. Query set: the 11
German + 5 English queries in `ai-visibility-baseline.md` + "Fahrschulring
Stuttgart" + "Fahrschulring Stuttgart Erfahrungen". Log columns: date,
engine, query, mentioned (Y/N), position, description, cited domains, facts
(address/phone/hours/classes/rating/owner correct?), competitors named,
missing facts, inconsistencies.

## Rank/SERP spot-check (monthly, manual or rank tracker)

Keyword list = `keyword-map.csv` primary keywords; record organic position,
Local Pack presence, PAA questions, AI Overview presence. Baseline today:
Fahrschulring absent for all non-brand terms (see `google-keyword-research.md`).
