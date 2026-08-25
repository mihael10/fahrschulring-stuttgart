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

- Hosting → server logfiles section (currently describes GitHub Pages'
  static hosting, not a self-managed server — update this section if the
  deploy target changes again, see `knowledge/deployment.md`)
- Contact (phone/email) → what's collected, why, retention — section 3
  describes phone/email only; there is no contact form (see below)
- The Google Maps embed on `/anfahrt` → this is a real third-party call the
  old policy never disclosed for this iteration; keep this section if the
  map embed stays
- No cookies/analytics currently → explicitly stated as such

**If you add anything that changes data flows — analytics, a contact form,
a cookie banner, retargeting pixels — update this page in the same
change.** A Datenschutzerklärung that doesn't match actual behavior is
worse than none; don't let it drift.

## There is no contact form

`ContactForm.tsx` and `src/app/api/contact/route.ts` were deleted (not just
hidden) when the deploy target moved to GitHub Pages — a static export
can't run a server-side POST handler at all, so keeping the form wasn't an
option (see `knowledge/deployment.md`). `/kontakt` shows `tel:`/`mailto:`
buttons instead, and `/datenschutz` section 3 was rewritten to match. If a
working contact form matters enough to bring back, that's a hosting change
(a third-party form backend, or moving off GitHub Pages) — see
`knowledge/deployment.md`'s "Reviving the Docker/DigitalOcean path" — and
section 3 needs rewriting again alongside it to describe form data
collection (name, email, phone, Wunschklasse, message) once real.
