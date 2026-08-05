# Fahrschulring Stuttgart — Website Redesign

Next.js 16 (App Router) + TypeScript + Tailwind CSS rebuild of fahrschulring.de,
focused on modernizing the design and increasing sign-ups.

## Before launch — verify these

The old site had a few internal inconsistencies. Confirm the correct values
with the owner (Frank Eibl) before going live — they're centralized in
`src/content/site.ts`:

- **Phone number**: marketing pages showed `0711 / 294100`, the Impressum
  showed `0711 - 295928`. The site currently uses `294100` everywhere except
  the Impressum, which uses the legally-filed number.
- **Office hours**: Impressum and Anfahrt agreed on 15:00–18:30; the old
  Kontakt page alone said 18:00. Currently using 18:30.
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

## Editing content

Everything a non-developer might need to change lives in `src/content/`:

| File | What it controls |
| --- | --- |
| `site.ts` | Business name, address, phone, email, hours, legal/VAT info |
| `classes.ts` | Führerscheinklassen shown on the homepage and `/klassen` |
| `team.ts` | Instructor names/roles on the homepage and `/team` |
| `fleet.ts` | Vehicles shown on `/fahrzeuge` |
| `testimonials.ts` | Reviews — empty by design, see above |
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
