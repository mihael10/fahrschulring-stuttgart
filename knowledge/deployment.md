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
unset — override only if leads should route somewhere else.

## Pre-launch checklist

- [ ] Confirm phone number and office hours (see
      `knowledge/content-editing.md` — two facts are flagged, not fixed)
- [ ] Set real SMTP credentials and confirm a test lead arrives
- [ ] Add real team photos and an OG cover image (see
      `knowledge/content-editing.md`)
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real production domain
- [ ] Decide whether Google Analytics or similar gets added — if so, update
      `src/app/datenschutz/page.tsx` section 5 (it currently states no
      tracking is in use, which must stay true or become false together)
