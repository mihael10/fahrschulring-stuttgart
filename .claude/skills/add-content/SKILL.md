---
name: add-content
description: Use when asked to add/edit a testimonial, team member, vehicle, license class, FAQ entry, or price on the Fahrschulring site. Enforces the no-fabrication policy before writing content.
---

# Adding content to the Fahrschulring site

All copy lives in `src/content/*.ts`. Read `knowledge/content-editing.md`
for the full reasoning; this skill is the checklist to run through before
editing.

## Before adding a testimonial

Stop and confirm: is this a real quote from a real person, with their
permission to publish it? If not — including "just a placeholder for now"
— don't add it. `src/components/Testimonials.tsx` renders nothing while
`testimonials.ts` is empty; that's the intended state until real reviews
exist, not a gap to fill with invented ones.

## Before adding a price

Stop and confirm: is this a current, owner-confirmed price? Advertised
pricing for driving lessons is regulated — a stale or invented number is a
real liability, not just bad UX. If unsure, don't add a `€` figure anywhere;
route the user to `/kontakt` instead, same as every other CTA on the site.

## Adding a team member / vehicle / class — mechanical steps

1. Add the entry to `team.ts` / `fleet.ts` / `classes.ts` (each is a typed
   array — follow the existing shape).
2. For a new license class, `group` must be one of the four values in
   `classGroups` (`classes.ts`). Adding a genuinely new group also requires
   adding it to `groupSlugs` in `src/app/klassen/page.tsx`, or the homepage's
   anchor link to it will 404-scroll to nothing.
3. Run `npm run build` — these pages are statically generated, so a typo in
   content data still gets caught at build time.
