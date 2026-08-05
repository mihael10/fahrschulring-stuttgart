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
- No fabricated content: `testimonials.ts` stays empty until real reviews
  exist, no prices are invented anywhere (see `knowledge/content-editing.md`).
- Deployment target is DigitalOcean via Docker (`Dockerfile`, `.do/app.yaml`)
  with the repo on GitHub.

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build (also run before considering work done)
npm run lint     # eslint
docker build -t fahrschulring .   # verify the deploy image still builds
```
