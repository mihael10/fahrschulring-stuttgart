# Fahrschulring Stuttgart — Website Redesign

Next.js 16 (App Router) + TypeScript + Tailwind CSS rebuild of fahrschulring.de,
focused on modernizing the design and increasing sign-ups. Deploys as a
static export to GitHub Pages — see `knowledge/deployment.md` for the full
picture.

## Before launch — verify these

The old site had a few internal inconsistencies. Confirm the correct values
with the owner (Frank Eibl) before going live — they're centralized in
`src/content/site.ts`:

- **Phone number**: resolved. Marketing pages showed `0711/294100`, the
  Impressum showed `0711-295928`; the live Google Business Profile
  (4.9★, 315 reviews) agrees with the Impressum, so `295928` is used
  site-wide now.
- **Office hours**: confirmed by the owner (2026-09-22) as 15:00–18:30,
  matching the Impressum + Anfahrt page over the old Kontakt page's 18:00.
- **Google Analytics**: GA4 is wired up (`CookieConsent.tsx`, consent-gated
  behind the cookie banner). The hardcoded measurement ID is confirmed as
  the owner's real GA4 property.
- **Google reviews**: the homepage shows a dated snapshot (4.9★/315,
  2026-08-06) until `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` are set for
  live data — see `knowledge/content-editing.md`.
- **Testimonials** (`src/content/testimonials.ts`): intentionally empty, no
  fake reviews were invented. Add real ones and the homepage section appears
  automatically.
- **Pricing**: not published anywhere on the old site, so none is invented
  here. The whole site funnels to "request a quote" instead of listing prices.

## Stack

- Next.js 16 App Router, `output: "export"` (static export — see
  `knowledge/deployment.md` for the basePath/trailingSlash gotchas this
  implies)
- Tailwind CSS v4 (theme tokens in `src/app/globals.css`)
- No server-side code at all — no contact form, no API routes, no database.
  All business content lives in `src/content/*.ts`

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` if you want to test live Google reviews
locally (`GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID`); without them the
homepage falls back to the dated static snapshot.

## Google reviews

The homepage's review section shows a dated static snapshot (rating + count
only, sourced from the live Google Business Profile on 2026-08-06) until you
set `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID`, at which point it switches
to live ratings and real review snippets fetched via the Places API. See
`knowledge/content-editing.md` for how to find the real place ID.

## Editing content

Everything a non-developer might need to change lives in `src/content/`:

| File | What it controls |
| --- | --- |
| `site.ts` | Business name, address, phone, email, hours, legal/VAT info, Google review snapshot |
| `classes.ts` | Führerscheinklassen shown on the homepage and `/klassen` |
| `team.ts` | Instructor names/roles/photos on the homepage and `/team` |
| `fleet.ts` | Vehicles + photos shown in the homepage vehicle carousel (no standalone `/fahrzeuge` page) |
| `testimonials.ts` | Hand-picked reviews — empty by design, see above |
| `faq.ts` | FAQ accordion on the homepage |

## Deploying

The live site deploys to **GitHub Pages** automatically via GitHub Actions
(`.github/workflows/deploy.yml`) on every push to `main` — nothing to run by
hand. See `knowledge/deployment.md` for the pre-launch checklist, basePath
details, and the (retired) DigitalOcean/Docker path if that's ever revived.

## Project scaffold for future Claude Code sessions

See `CLAUDE.md` for the entry point, `knowledge/` for durable architecture
and content-editing docs, and `.claude/skills/` for repo-specific workflows.
