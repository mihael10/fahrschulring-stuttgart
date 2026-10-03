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
authority. Phone number: the old Impressum showed `0711-295928` while the
old marketing pages showed `294100`; that's now resolved site-wide to
`295928` (matching both the old Impressum and the live Google Business
Profile — see `knowledge/content-editing.md`), so `site.phone` /
`site.phoneHref` and this page all agree.

## Datenschutzerklärung (`src/app/datenschutz/page.tsx`)

**Not** copied from the old site — it was last updated May 2018 and
referenced Google Analytics/Adwords/social plugins that this rebuild doesn't
use. A privacy policy has to describe what the site *actually* does, so this
one was written fresh against the real stack:

- Hosting → server logfiles section (currently describes GitHub Pages'
  static hosting, not a self-managed server — update this section if the
  deploy target changes again, see `knowledge/deployment.md`)
- Contact (form/phone/email) → what's collected, why, retention, and that
  form submissions go through Alfahosting — section 3 (see "Contact form"
  below)
- The Google Maps embed on `/anfahrt` → this is a real third-party call the
  old policy never disclosed for this iteration; keep this section if the
  map embed stays
- Google Analytics (GA4) → section 5 describes it; it's consent-gated behind
  the cookie banner (`CookieConsent.tsx`) and only loads after the visitor
  clicks "Akzeptieren", so the legal basis is consent (§25 TTDSG / Art. 6(1)(a)
  DSGVO), not legitimate interest like the Maps embed. If GA is ever removed,
  or a differently-gated analytics tool is added, section 5 needs to change
  in the same commit.

**If you add anything that changes data flows — analytics, a contact form,
a cookie banner, retargeting pixels — update this page in the same
change.** A Datenschutzerklärung that doesn't match actual behavior is
worse than none; don't let it drift.

## Contact form

`/kontakt` has a form (`ContactForm.tsx`) that posts to
`alfahosting/kontakt.php` on the business's Alfahosting webspace, which
emails the fields (name, email, phone, Wunschklasse, message) to
`info@fahrschulring.de` and stores nothing — see `knowledge/deployment.md`.
`/datenschutz` section 3 describes this, naming Alfahosting as the
processor (legal basis Art. 6 Abs. 1 lit. b DSGVO, so there's an info line
under the form rather than a consent checkbox). The owner should have a
data processing agreement (AV-Vertrag) with Alfahosting — they offer one in
their customer panel. If the endpoint ever moves to another provider,
update section 3 in the same change.
