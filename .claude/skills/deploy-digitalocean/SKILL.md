---
name: deploy-digitalocean
description: Use when asked to deploy this site, update the DigitalOcean App Platform spec, or troubleshoot a failed build/deploy on DO. Covers the Docker path, env vars, and the pre-launch checklist.
---

# Deploying Fahrschulring Stuttgart to DigitalOcean

Read `knowledge/deployment.md` first — it has the full picture (why
`output: "standalone"`, the two deploy paths, contact-form env vars). This
skill is the quick-action version.

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
