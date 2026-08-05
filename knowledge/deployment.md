---
title: Deployment (DigitalOcean, Docker, GitHub)
area: deployment, docker, digitalocean, ci, env vars, contact form email
keywords: [deploy, docker, digitalocean, app platform, droplet, smtp, env]
---

# Deployment

Target: DigitalOcean, code hosted on GitHub. Two supported paths, both use
the same `Dockerfile`:

1. **App Platform** (recommended) — reads `.do/app.yaml` automatically when
   you create the app from the GitHub repo. Fill in the repo owner/name in
   that file before first deploy; set `SMTP_HOST` / `SMTP_USER` / `SMTP_PASS`
   as encrypted env vars in the DO dashboard, not in the yaml file.
2. **Droplet** — `docker build` + `docker run`, reverse-proxied by
   Caddy/Nginx for TLS. See README for the exact commands.

## Why `output: "standalone"`

Set in `next.config.ts`. Without it, the Docker image would need the full
`node_modules` tree copied into the runtime stage. With it, `next build`
traces the actual runtime dependencies into `.next/standalone`, and the
`Dockerfile`'s runner stage copies only that plus `.next/static` and
`public/`. Verified working: `docker build` + `docker run` was smoke-tested
against `/`, `/kontakt`, `/impressum` during the initial build (all 200s).

## Contact form email delivery

`/api/contact` (`src/app/api/contact/route.ts`) needs four env vars to
actually send mail: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`. Any
missing → the route returns HTTP 503 with a "please call us instead"
message and logs the submission via `console.warn` rather than silently
dropping it. This is intentional graceful degradation, not a bug — verify
it's not still in that state after deploy (check `CONTACT_TO_EMAIL` lands on
a real inbox before pointing ads at `/kontakt`).

`CONTACT_TO_EMAIL` defaults to `site.email` (`info@fahrschulring.de`) if
unset — **the client's real inbox is a GMX address, not that domain
address**, so `CONTACT_TO_EMAIL` must be set explicitly or leads go
nowhere real. See the GMX section below.

## Delivering contact-form leads to the client's GMX inbox

The client reads mail via GMX, not via `info@fahrschulring.de` directly (or
that address forwards into GMX — either way, GMX is the mailbox that
matters). Nodemailer just needs GMX's real SMTP settings:

- `SMTP_HOST=mail.gmx.net`
- `SMTP_PORT=587` (STARTTLS — Nodemailer's `secure: false` path, which
  `route.ts` already selects correctly for any port other than 465)
- `SMTP_USER` = the full GMX address (e.g. `name@gmx.de` / `name@gmx.net`)
- `SMTP_PASS` = that account's password, or an app-specific password if the
  account has two-factor auth enabled
- `CONTACT_TO_EMAIL` = wherever the lead should land — usually the same GMX
  address as `SMTP_USER`, but doesn't have to be

**Before this works, GMX's own account settings must allow it**: log into
gmx.net → Einstellungen → POP3/IMAP, and enable external mail access
("E-Mail-Programm Zugriff" / POP3-Abruf). GMX blocks SMTP auth from
third-party senders by default until this is switched on — if credentials
are correct but sending still fails, this setting is the first thing to
check.

## Pre-launch checklist

- [ ] Get the client's actual GMX address and password (or app password),
      set `SMTP_USER`/`SMTP_PASS`/`CONTACT_TO_EMAIL`, enable POP3/IMAP
      access in GMX settings, then send a real test lead through `/kontakt`
      and confirm it arrives
- [ ] Confirm office hours with the owner (see `knowledge/content-editing.md`
      — phone number is resolved, hours are still a 2-vs-1 page guess)
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real production domain
- [ ] Optionally set `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` for live
      Google reviews instead of the dated static snapshot (see
      `knowledge/content-editing.md`)
- [ ] Add an OG cover image at `public/images/og-cover.jpg` (see
      `knowledge/content-editing.md`)
- [ ] Decide whether Google Analytics or similar gets added — if so, update
      `src/app/datenschutz/page.tsx` section 5 (it currently states no
      tracking is in use, which must stay true or become false together)
