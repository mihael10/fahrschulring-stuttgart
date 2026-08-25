---
title: Deployment (GitHub Pages via GitHub Actions)
area: deployment, github pages, github actions, ci, static export, basePath
keywords: [deploy, github pages, github actions, static export, basepath, next export]
---

# Deployment

Target: **GitHub Pages**, built by GitHub Actions (`.github/workflows/deploy.yml`)
on every push to `main`. The repo (`mihael10/fahrschulring-stuttgart`) is
**private** — this only works because the account has GitHub Pro, which
supports Pages on private repos. Live URL:
`https://mihael10.github.io/fahrschulring-stuttgart/`.

This replaced an earlier Docker/DigitalOcean plan (`Dockerfile`, `.do/app.yaml`
still exist, see "Reviving the Docker/DigitalOcean path" below) — GitHub Pages
was chosen instead so the deploy needs nothing but a GitHub account.

## Why `output: "export"`

Set in `next.config.ts`. GitHub Pages only serves static files — no Node
server — so the whole app is prerendered at build time into `out/`, which
the workflow uploads as the Pages artifact. This is only possible because
the site has **no server-side behavior left**: `/api/contact` was deleted
(see "The contact form was removed, not disabled" below) and nothing else
in the app uses `cookies()`/`headers()`/dynamic route handlers — check for
those before ever adding server logic back, since any of them breaks a
static export.

## basePath: the two things static export doesn't auto-prefix

Project Pages (as opposed to a `<user>.github.io` user/org page) are served
from `/fahrschulring-stuttgart/`, not `/`. `next.config.ts` computes
`basePath` from the `GITHUB_REPOSITORY` env var (set automatically in every
Actions run; absent locally, so local dev/build still serve from `/`).

Next.js auto-prefixes `basePath` onto `<Link>` hrefs and its own `_next/`
JS/CSS/font asset URLs — no action needed there. It does **not** auto-prefix
it onto:

1. **`<Image src="/...">`** once `images.unoptimized: true` (required for
   export — the built-in optimizer needs a Node server). Every `<Image>` in
   this codebase manually prepends `basePath`, imported from
   `src/lib/base-path.ts` — that file reads `NEXT_PUBLIC_BASE_PATH`, which
   `next.config.ts` sets from its own computed `basePath` so the value is
   inlined into the client bundle at build time. **Any new `<Image>` with a
   hardcoded `/images/...` src must do the same** (`` `${basePath}/images/...` ``)
   or it 404s in production while looking correct in local dev (where
   `basePath` is empty).
2. **Absolute metadata URLs built by hand** — `layout.tsx`'s `openGraph.images`
   and JSON-LD `image` field are built as `` `${siteUrl}/images/og-cover.jpg` ``
   (full URL) rather than a leading-slash path, because `metadataBase`
   resolution treats a leading `/` as domain-root and would silently drop
   the basePath segment. Keep this pattern for any new absolute metadata URL.

## `trailingSlash: true` — required, not cosmetic

Without it, static export emits both `team.html` (the real page) and a
same-named `team/` directory (RSC payload `.txt` files, no `index.html`)
for every route. A plain static file server resolves `/team/` against the
directory first, finds no `index.html`, and 404s — confirmed locally with
Python's `http.server` before this was set. `trailingSlash: true` makes
every route emit an unambiguous `team/index.html` instead, and `<Link>`
hrefs get the trailing slash to match. Don't remove this.

## The contact form was removed, not disabled

`ContactForm.tsx` and `src/app/api/contact/route.ts` are **deleted**, not
hidden — a static export can't run a POST route handler at all, so keeping
it around wasn't an option once GitHub Pages was chosen. `/kontakt` shows
`tel:`/`mailto:` buttons instead, and `/datenschutz` section 3 describes
phone/email contact (see `knowledge/legal-compliance.md`). `nodemailer` /
`@types/nodemailer` were removed from `package.json` since nothing imports
them anymore.

**If a working contact form is wanted again**, it needs either: (a) a
third-party form backend (Formspree, Web3Forms, etc. — a `<form>` posting
to their endpoint works fine from a static page), or (b) moving off GitHub
Pages to a host that runs a server (Vercel, Netlify Functions, or reviving
the Docker/DigitalOcean path below) and rebuilding the route from the old
implementation in git history (search the log for `api/contact`).

## GitHub Actions workflow (`.github/workflows/deploy.yml`)

Standard two-job Pages deploy: `build` runs `npm ci` + `npm run build` (with
`NEXT_PUBLIC_SITE_URL` set to the Pages URL and optional
`GOOGLE_PLACES_API_KEY`/`GOOGLE_PLACE_ID` secrets passed through), uploads
`out/` via `actions/upload-pages-artifact`; `deploy` publishes it via
`actions/deploy-pages`. Triggers on push to `main` and manually via
`workflow_dispatch`. Needs `pages: write` + `id-token: write` permissions,
already set.

**One-time setup already done**: repo Pages source was set to "GitHub
Actions" (`gh api -X PUT repos/mihael10/fahrschulring-stuttgart/pages -f
build_type=workflow`) — if Pages ever gets disabled/reset, that's the
command to re-run before the workflow can deploy.

Google Reviews (`GoogleReviews.tsx`) still works under static export: it's
a build-time `fetch`, not runtime ISR — `revalidate` is simply ignored by
export mode, so reviews are frozen as of the last deploy rather than
refreshing every 24h. Good enough for a marketing site; re-deploy (push to
`main`, or run the workflow manually) to refresh them.

## Reviving the Docker/DigitalOcean path

`Dockerfile` and `.do/app.yaml` are untouched but **currently incompatible**
with `next.config.ts` (`output: "export"` vs. the `"standalone"` output
Docker needs — a build config can only be one or the other). To go back:
revert `output` to `"standalone"`, drop `basePath`/`assetPrefix`/
`images.unoptimized`, and restore `ContactForm.tsx` + `api/contact/route.ts`
+ `nodemailer` from git history if the form should work again. `sharp`
was deliberately left in `package.json` for exactly this scenario — it's
unused by the current static export but required again the moment
`output: "standalone"` comes back.

## Pre-launch checklist

- [x] Deploy pipeline live: GitHub Actions → GitHub Pages (private repo,
      GitHub Pro)
- [ ] Confirm office hours with the owner (see `knowledge/content-editing.md`
      — phone number is resolved, hours are still a 2-vs-1 page guess)
- [ ] Optionally set `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` as repo
      secrets for live Google reviews instead of the dated static snapshot
      (see `knowledge/content-editing.md`) — baked in at each deploy, not
      truly live (see above)
- [ ] Decide whether a working contact form matters enough to move off
      GitHub Pages, or whether phone/email + a third-party form backend is
      good enough long-term
- [ ] Decide whether Google Analytics or similar gets added — if so, update
      `src/app/datenschutz/page.tsx` section 5 (it currently states no
      tracking is in use, which must stay true or become false together)
- [ ] If a custom domain (e.g. `www.fahrschulring.de`) ever points here,
      update `NEXT_PUBLIC_SITE_URL` in the workflow and add a `CNAME` file
