---
title: Architecture
area: app-structure, components, styling, rendering
keywords: [next.js, app router, tailwind, layout, components, standalone]
---

# Architecture

Next.js 16 App Router, TypeScript, Tailwind CSS v4. `output: "standalone"` in
`next.config.ts` — required for the Docker image to stay small (see
`knowledge/deployment.md`). This also means the contact form **must** stay a
server-rendered route (`/api/contact`), not a static export — don't switch
`output` to `"export"` without removing that route first.

## Structure

```
src/
  app/            route segments (page.tsx per route, layout.tsx = global chrome)
    api/contact/  the one server route — nodemailer-backed form handler
  components/     presentational components, one per file, no barrel exports
  content/        *.ts data files — the only place business facts live
```

Pages are server components by default. Only components with local
interactive state are `"use client"` (`Header`, `Faq`, `ContactForm`) — keep
new interactive pieces client-only and leave everything else server-rendered;
this is a marketing site, not an app, so client JS should stay minimal.

## Styling

Tailwind v4's CSS-based theme, not a `tailwind.config.js` — tokens are
defined in `src/app/globals.css` under `@theme inline` (the `navy-*` and
`amber-*` scales). Add new design tokens there, not as arbitrary Tailwind
values scattered through components.

`Button.tsx` has fixed `variant`s (`primary`, `secondary`, `ghost`, `dark`).
**Don't override a variant's classes via the `className` prop for background
or text color** — Tailwind's generated CSS order isn't guaranteed to match
className string order, so two conflicting utility classes (e.g. a variant's
`bg-white` and an override's `bg-navy-950`) can silently pick the wrong one.
This actually happened once (dead button, ContactCta.tsx) — the fix was
adding a real `dark` variant instead of overriding. Add a variant when you
need a new look, don't fight the existing ones.

## Content data flow

Every page imports from `src/content/*.ts` rather than hardcoding copy. See
`knowledge/content-editing.md` before adding classes, team members, vehicles,
or testimonials — there's a no-fabrication policy that affects how those
files are structured (e.g. `testimonials.ts` renders nothing when empty,
by design, not by omission).
