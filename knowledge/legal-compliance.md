---
title: Legal pages (Impressum, Datenschutz) — German compliance
area: impressum, datenschutz, dsgvo, ddg, legal, gdpr
keywords: [impressum, datenschutz, dsgvo, gdpr, ddg, legal, consent, cookies]
---

# Legal compliance (Impressum / Datenschutz)

Germany requires a legally sufficient Impressum (§5 DDG) on any commercial
site, and a Datenschutzerklärung describing actual data processing whenever
personal data is collected (here: phone/email contact, plus whatever the
hosting/embeds imply). Both exist at `/impressum` and `/datenschutz`.

## Impressum (`src/app/impressum/page.tsx`)

Sourced verbatim from the old site's own Impressum page — legal name
(Fahrschulring GmbH), Handelsregister court/number, VAT ID, supervisory
authority. This page intentionally mirrors the *old* Impressum's phone
number (`0711 - 295928`) rather than the `294100` used elsewhere on the new
site — the Impressum is the legally-filed contact, don't "fix" it to match
the marketing number without the owner confirming which is current.

## Datenschutzerklärung (`src/app/datenschutz/page.tsx`)

**Not** copied from the old site — it was last updated May 2018 and
referenced Google Analytics/Adwords/social plugins that this rebuild doesn't
use. A privacy policy has to describe what the site *actually* does, so this
one was written fresh against the real stack:

- Hosting on DigitalOcean → server logfiles section
- Contact (phone/email) → what's collected, why, retention — section 3
  currently describes phone/email only; the contact form is disabled (see
  below), so don't describe form data collection while that's true
- The Google Maps embed on `/anfahrt` → this is a real third-party call the
  old policy never disclosed for this iteration; keep this section if the
  map embed stays
- No cookies/analytics currently → explicitly stated as such

**If you add anything that changes data flows — analytics, a CRM webhook
from the contact form, a cookie banner, retargeting pixels — update this
page in the same change.** A Datenschutzerklärung that doesn't match actual
behavior is worse than none; don't let it drift.

## Contact form is currently disabled

`ContactForm.tsx` and `/api/contact/route.ts` still exist on disk but
`src/app/kontakt/page.tsx` doesn't render the form — SMTP/GMX credentials
were never configured (see `knowledge/deployment.md`), so the form would
otherwise fail with a 503 for every real visitor. `/kontakt` shows direct
`tel:`/`mailto:` buttons instead. When GMX credentials are finally set:
reinstate `<ContactForm />` on `/kontakt`, and put section 3 of
`/datenschutz` back to describing form data collection (name, email, phone,
Wunschklasse, message) instead of just phone/email correspondence — the two
must change together. The DSGVO consent checkbox in `ContactForm.tsx` is
still server-validated in `route.ts` (`consent === true`) and ready to go
the moment the form is reinstated — don't make it optional or pre-checked.
