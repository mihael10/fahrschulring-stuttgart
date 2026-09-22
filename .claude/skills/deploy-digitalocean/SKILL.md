---
name: deploy-digitalocean
description: RETIRED path — only use if explicitly asked to revive the DigitalOcean/Docker deploy or update `.do/app.yaml`. The live site deploys via GitHub Pages/GitHub Actions instead (see `knowledge/deployment.md`); for an ordinary "deploy this site" or "is it ready to launch" request, use that path, not this one.
---

# Reviving the DigitalOcean deploy path (currently retired)

**This path is not how the site deploys today.** The live deploy is GitHub
Pages via `.github/workflows/deploy.yml` on push to `main` — see
`knowledge/deployment.md`. `Dockerfile` and `.do/app.yaml` were deleted when
the deploy target moved to GitHub Pages (`output: "export"` and
`output: "standalone"` are mutually exclusive in `next.config.ts`), along
with the contact form (`ContactForm.tsx`, `api/contact/route.ts`,
`nodemailer`) that needed a real server to run. Everything below only
applies if someone deliberately decides to move off GitHub Pages back onto
DigitalOcean — don't follow it for a routine deploy or launch check.

Read `knowledge/deployment.md`'s "Reviving the Docker/DigitalOcean path"
section first — it has the full picture (why `output: "standalone"`, what
needs restoring from git history). This skill is the quick-action version
once that decision is made.

## Before touching deploy config

1. Run `npm run build` locally — it must succeed with zero errors.
2. Run `docker build -t fahrschulring .` — confirms the image actually
   builds, not just the Next.js build. This has caught issues the plain
   build didn't (file tracing misses, standalone copy paths).
3. If both pass, `docker run -p 3000:3000 fahrschulring` and hit `/`,
   `/kontakt`, `/impressum` with curl to confirm 200s before pushing.

## App Platform spec (`.do/app.yaml`)

- `github.repo` must be the real `owner/repo` — it's a placeholder until
  the GitHub repo exists.
- Never put real SMTP credentials in this file. They're marked
  `type: SECRET`, meaning DO prompts for the value in the dashboard and
  encrypts it — committing a plaintext secret here defeats that.
- `region: fra` (Frankfurt) — keep it in the EU given this is a German
  business handling German user data.

## After deploy

Walk the pre-launch checklist in `knowledge/deployment.md` — most failure
modes at this stage are silent (contact form 503s quietly, wrong phone
number nobody notices) rather than loud errors.
