# Fahrschulring Stuttgart — Website Redesign

Next.js 16 (App Router) + TypeScript + Tailwind CSS rebuild of fahrschulring.de,
focused on modernizing the design and increasing sign-ups.

## Before launch — verify these

The old site had a few internal inconsistencies. Confirm the correct values
with the owner (Frank Eibl) before going live — they're centralized in
`src/content/site.ts`:

- **Phone number**: resolved. Marketing pages showed `0711/294100`, the
  Impressum showed `0711-295928`; the live Google Business Profile
  (4.9★, 315 reviews) agrees with the Impressum, so `295928` is used
  site-wide now.
- **Office hours**: Impressum and Anfahrt agreed on 15:00–18:30; the old
  Kontakt page alone said 18:00. Currently using 18:30 — still just a
  2-vs-1 page guess, no independent source like the phone number had.
- **GMX email delivery**: the client reads mail via GMX, so `CONTACT_TO_EMAIL`
  and the `SMTP_*` vars need real GMX credentials — see "GMX email delivery"
  below, this is not optional.
- **Google reviews**: the homepage shows a dated snapshot (4.9★/315,
  2026-08-06) until `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` are set for
  live data — see `knowledge/content-editing.md`.
- **Testimonials** (`src/content/testimonials.ts`): intentionally empty, no
  fake reviews were invented. Add real ones and the homepage section appears
  automatically.
- **Pricing**: not published anywhere on the old site, so none is invented
  here. The whole site funnels to "request a quote" instead of listing prices.

## Stack

- Next.js 16 App Router, `output: "standalone"` for a small Docker image
- Tailwind CSS v4 (theme tokens in `src/app/globals.css`)
- Nodemailer-backed API route for the contact form (`src/app/api/contact`)
- No database — all business content lives in `src/content/*.ts`

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and fill in SMTP credentials to test real
email delivery; without them the contact form fails gracefully with a
"call us instead" message and logs the submission to the server console.

## GMX email delivery

The client's mailbox is GMX. Point the contact form at it via env vars:

```
SMTP_HOST=mail.gmx.net
SMTP_PORT=587
SMTP_USER=<the full GMX address>
SMTP_PASS=<its password, or an app password if 2FA is on>
CONTACT_TO_EMAIL=<usually the same GMX address>
```

GMX also requires enabling POP3/IMAP access under gmx.net → Einstellungen →
POP3/IMAP before it will accept SMTP auth from this app — do that first if
sending fails with an auth error even though the credentials are correct.

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
| `fleet.ts` | Vehicles + photos shown on `/fahrzeuge` |
| `testimonials.ts` | Hand-picked reviews — empty by design, see above |
| `faq.ts` | FAQ accordion on the homepage |

## Deploying to DigitalOcean

**Option A — App Platform (recommended, least ops):**

1. Push this repo to GitHub.
2. In the DO dashboard: Create App → pick the repo → it will detect
   `.do/app.yaml` and the `Dockerfile` automatically.
3. Fill in `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` as encrypted env vars in the
   dashboard (never commit real secrets into `app.yaml`).
4. Point your domain at the app and update `NEXT_PUBLIC_SITE_URL`.

**Option B — Droplet with Docker:**

```bash
docker build -t fahrschulring .
docker run -p 3000:3000 --env-file .env.production fahrschulring
```

Put a reverse proxy (Caddy/Nginx) in front for TLS.

## Project scaffold for future Claude Code sessions

See `CLAUDE.md` for the entry point, `knowledge/` for durable architecture
and content-editing docs, and `.claude/skills/` for repo-specific workflows.
