# Fahrschulring Stuttgart — Website

Modern redesign of fahrschulring.de (Next.js 16 App Router, TypeScript,
Tailwind CSS v4), built for conversion — every path leads to the contact form.

Read `knowledge/index.md` first for anything beyond a trivial fix — it routes
to the doc that actually covers what you're touching, so you don't have to
re-derive architecture, content conventions, or deployment steps from scratch.

For Next.js-specific behavior, note that this project pins **Next.js 16**,
which has breaking changes vs. older training data — see `AGENTS.md` (kept
in sync by `next dev`) and `node_modules/next/dist/docs/` before assuming an
API works the way it used to.

## Quick facts

- Business facts (address, phone, hours, VAT/register) live in
  `src/content/site.ts` — single source of truth, do not hardcode them
  elsewhere.
- Brand colors are green + white — a single green Tailwind scale
  (`green-50`...`green-950` in `src/app/globals.css`) covers both dark
  structural chrome and bright accents/CTAs. Don't reintroduce a second
  accent hue.
- `public/images/` holds the business's real photos (logo, team, fleet)
  pulled from the old site — see `knowledge/content-editing.md` for what's
  mapped where and what's still missing (OG image).
- No fabricated content: `testimonials.ts` stays empty until real reviews
  exist, no prices are invented anywhere. Google reviews
  (`GoogleReviews.tsx`) show a dated real snapshot, with live data once
  `GOOGLE_PLACES_API_KEY`/`GOOGLE_PLACE_ID` are set — see
  `knowledge/content-editing.md`.
- The contact form must deliver to the client's **GMX** mailbox — see
  `knowledge/deployment.md` for the exact SMTP settings and the GMX account
  setting that has to be enabled first.
- Deployment target is DigitalOcean via Docker (`Dockerfile`, `.do/app.yaml`)
  with the repo on GitHub.

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build (also run before considering work done)
npm run lint     # eslint
docker build -t fahrschulring .   # verify the deploy image still builds
```
