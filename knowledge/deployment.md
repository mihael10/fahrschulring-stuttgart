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
(the contact form now posts to a PHP script on Alfahosting instead — see
"The contact form posts to a PHP script on Alfahosting" below) and nothing else
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

## `robots.txt` / `sitemap.xml` are the one exception to basePath

`src/app/robots.ts` and `src/app/sitemap.ts` (both `export const dynamic =
"force-static"`, required under `output: "export"` or the build fails) emit
to `out/robots.txt` and `out/sitemap.xml` at the **domain root**, not under
`out/<basePath>/` like every other route — confirmed by building locally
with `GITHUB_REPOSITORY` set and inspecting `out/`. That's actually correct
here: robots.txt only has effect at the origin root per spec, and it's the
only sane place for it on a domain shared with other GitHub Pages project
sites under the same account. `sitemap.ts` builds its `<loc>` URLs from
`NEXT_PUBLIC_SITE_URL` by hand (same fallback/production pattern as
`layout.tsx`'s `siteUrl`), which already includes the basePath — so the
listed page URLs are correct even though the sitemap file itself sits
outside it. Sitemap entries use trailing slashes (`/klassen/`, not
`/klassen`) to match `trailingSlash: true` below and avoid listing a
redirect source as canonical. Noindex pages (Impressum, Datenschutz) are
deliberately left out of the sitemap.

## `trailingSlash: true` — required, not cosmetic

Without it, static export emits both `team.html` (the real page) and a
same-named `team/` directory (RSC payload `.txt` files, no `index.html`)
for every route. A plain static file server resolves `/team/` against the
directory first, finds no `index.html`, and 404s — confirmed locally with
Python's `http.server` before this was set. `trailingSlash: true` makes
every route emit an unambiguous `team/index.html` instead, and `<Link>`
hrefs get the trailing slash to match. Don't remove this.

## The contact form posts to a PHP script on Alfahosting

`/kontakt` has a contact form again (`src/components/ContactForm.tsx`,
added 2026-10-02), but GitHub Pages still runs no server code, so the form
doesn't send anything itself. It POSTs (`FormData`, CORS) to
`alfahosting/kontakt.php`, a small PHP script that lives on the business's
existing **Alfahosting** webspace (the same host that runs the
fahrschulring.de mail server/MX and the old `.php` site). The script
validates the fields, drops bot submissions (the hidden `company` honeypot),
and sends a plain-text email to `info@fahrschulring.de` via PHP `mail()`
with `Reply-To` set to the visitor. The site itself stays on GitHub Pages.

To switch it on:

1. Upload `alfahosting/kontakt.php` to the Alfahosting webspace, e.g. as
   `https://www.fahrschulring.de/kontakt.php`.
2. If the site moves to a custom domain, add that origin to
   `ALLOWED_ORIGINS` in the script (it only answers
   `mihael10.github.io` and `fahrschulring.de`/`www.` requests).
3. In GitHub → repo Settings → Secrets and variables → Actions →
   **Variables**, set `CONTACT_ENDPOINT` to that URL and re-run the deploy.
   `deploy.yml` passes it in as `NEXT_PUBLIC_CONTACT_ENDPOINT`.
4. Send a test message from the live site.

Until `CONTACT_ENDPOINT` is set, the form falls back to opening the
visitor's mail app with a pre-filled `mailto:` (subject + all fields), so
it's never a dead end. `alfahosting/` is outside `src/` and isn't part of
the Next.js build.

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

`Dockerfile` and `.do/app.yaml` were **deleted**, not kept around — they're
incompatible with `next.config.ts` (`output: "export"` vs. the
`"standalone"` output Docker needs — a build config can only be one or the
other), so they were removed rather than left to silently rot. To go back:
recover both from git history (`git log --all --diff-filter=D -- Dockerfile
.do/app.yaml` finds the deleting commits), revert `output` to `"standalone"`,
drop `basePath`/`assetPrefix`/`images.unoptimized`, and restore
`ContactForm.tsx` + `api/contact/route.ts` + `nodemailer` from git history
(search the log for `api/contact`) if the form should work again. `sharp`
was deliberately left in `package.json` for exactly this scenario — it's
unused by the current static export but required again the moment
`output: "standalone"` comes back.

## Pre-launch checklist

- [x] Deploy pipeline live: GitHub Actions → GitHub Pages (private repo,
      GitHub Pro)
- [x] `robots.txt` + `sitemap.xml` + per-page canonical URLs (see "robots.txt
      / sitemap.xml are the one exception to basePath" above) — mind that
      `robots.txt` governs the whole `mihael10.github.io` domain, not just
      this repo's subpath, if another project Pages site is ever added under
      the same account
- [x] Office hours confirmed with the owner 2026-09-22: 15:00–18:30 is
      correct (matches the Impressum + Anfahrt page, not the lone Kontakt
      page's 18:00)
- [ ] Optionally set `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` as repo
      secrets for live Google reviews instead of the dated static snapshot
      (see `knowledge/content-editing.md`) — baked in at each deploy, not
      truly live (see above)
- [ ] Upload `alfahosting/kontakt.php` and set the `CONTACT_ENDPOINT`
      repo variable (see "The contact form posts to a PHP script on
      Alfahosting") — until then the form falls back to `mailto:`
- [x] Google Analytics (GA4) added, consent-gated behind a cookie banner
      (`CookieConsent.tsx`) — `datenschutz` section 5 describes it. The
      hardcoded measurement ID (`GA_MEASUREMENT_ID` in `CookieConsent.tsx`)
      is confirmed as the owner's real GA4 property (2026-09-22).
- [ ] If a custom domain (e.g. `www.fahrschulring.de`) ever points here,
      update `NEXT_PUBLIC_SITE_URL` in the workflow and add a `CNAME` file
