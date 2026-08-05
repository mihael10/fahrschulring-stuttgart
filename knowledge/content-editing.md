---
title: Content editing and the no-fabrication policy
area: content, copy, testimonials, pricing, team, classes, fleet
keywords: [testimonials, pricing, preise, team, klassen, fahrzeuge, content]
---

# Content editing

All business content lives in `src/content/*.ts`, typed, one file per
domain (`site.ts`, `classes.ts`, `team.ts`, `fleet.ts`, `testimonials.ts`,
`faq.ts`). Pages import from these; don't hardcode business facts into JSX.

## Why there's no pricing anywhere

The original fahrschulring.de published no prices. Rather than invent
figures (which for a driving school is a real legal exposure — advertised
price claims are regulated), every CTA on this site is a lead-gen ask
("Angebot anfordern") instead of a price list. If real pricing becomes
available, it still shouldn't go into static marketing copy verbatim unless
the owner confirms it's current — driving lesson costs change often enough
that a stale number on the homepage is worse than no number.

## Why `testimonials.ts` is empty

Same reasoning, different failure mode: fabricated review quotes attributed
to a real business are dishonest and, if ever traced, damaging. The array is
empty on purpose. `src/components/Testimonials.tsx` returns `null` when the
array is empty — the section structurally cannot appear with placeholder
content, so there's no "temporary" fake copy that quietly ships. To turn it
on, add real entries:

```ts
export const testimonials: Testimonial[] = [
  { quote: "...", author: "Vorname N.", class: "B" },
];
```

## Known source discrepancies (from the old site)

The old fahrschulring.de was internally inconsistent. Two facts in
`site.ts` carry a resolved-but-unverified flag in their comments:

- **Phone**: 4 of 5 old pages said `0711 / 294100`; the Impressum alone said
  `0711 - 295928`. Currently using `294100` site-wide except the Impressum
  page, which mirrors the legally-filed number verbatim. Confirm with the
  owner (Frank Eibl) which is actually live before launch.
- **Office hours**: Impressum + Anfahrt agreed on 15:00–18:30; the old
  Kontakt page alone said 18:00. Using 18:30.

Don't "fix" these by picking a number without checking — they're flagged
because the two sources disagree, not because one is obviously right.

## Adding a team member / vehicle / class

Straightforward — append to the relevant array in `team.ts` / `fleet.ts` /
`classes.ts`. For `classes.ts`, keep the `group` field one of the four
values in `classGroups` — the homepage `ClassesOverview` links to
`/klassen#<slug>` anchors that are derived from those exact group names in
`src/app/klassen/page.tsx`'s `groupSlugs` map. Adding a fifth group requires
updating that map too.

## Images

There's no imagery from the old site vendored into this repo (its
photos aren't ours to redistribute). `public/images/` is empty. The design
currently uses initials/color-block placeholders for the team grid instead
of photos. Before launch, drop in:

- Real headshots for the 5 team members (referenced nowhere yet — wire them
  into `team.ts` as an optional `photo` field, already typed, once files
  exist)
- An OG/social share image at `public/images/og-cover.jpg` (referenced by
  `src/app/layout.tsx`'s JSON-LD `image` field — currently points at a path
  that doesn't exist yet)
