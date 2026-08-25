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

The old fahrschulring.de was internally inconsistent.

- **Phone** — resolved 2026-08-06: 4 of 5 old pages said `0711/294100`; the
  Impressum alone said `0711-295928`. Checked the live Google Business
  Profile (4.9★, 315 reviews, "Fahrschulring", Hegelstraße 48) — it lists
  `+49 711 295928`, agreeing with the Impressum. `site.ts` now uses
  `295928` everywhere. Two current independent sources beat four stale
  marketing pages, but it's still worth a final nod from the owner (Frank
  Eibl) before launch.
- **Office hours**: Impressum + Anfahrt agreed on 15:00–18:30; the old
  Kontakt page alone said 18:00. Using 18:30 — still unverified beyond the
  2-vs-1 page count, no independent source like the phone number had.

Don't "fix" the hours by picking a number without checking — it's flagged
because the sources disagree, not because one is obviously right.

## Adding a team member / vehicle / class

Straightforward — append to the relevant array in `team.ts` / `fleet.ts` /
`classes.ts`. For `classes.ts`, keep the `group` field one of the four
values in `classGroups` — the homepage `ClassesOverview` links to
`/klassen#<slug>` anchors that are derived from those exact group names in
`src/app/klassen/page.tsx`'s `groupSlugs` map. Adding a fifth group requires
updating that map too.

## Images

`public/images/` holds the business's own photos, pulled from the old
fahrschulring.de (logo, team headshots, fleet/gallery shots, the simulator
photo) — these are the business's own marketing assets, reused for its own
redesign, organized into `logo/`, `team/`, `hero/`, `fleet/`:

- `logo/template-logo.jpg` is the actual brand mark (green circle +
  "Fahrschul Ring" wordmark) — used in `Header.tsx` / `Footer.tsx`.
  `logo/vb-fs-logo.png` is the "gut betreut" Verbands-Fahrschule
  certification seal, from the old site — now shown as a corner badge on
  the homepage `Hero` (`src/components/Hero.tsx`), top-right of the
  section.
- `team.ts` maps each of the 5 instructors to their real photo (`photo`
  field) — order was cross-checked against the old team page's HTML
  (name/image pairs), not assumed from array position.
- `fleet.ts` maps a vehicle's `image` field only where the old site's own
  filename made the match confident (e.g. `Golf.jpg` → VW Golf). Vehicles
  without a confident source photo (X1, X2, Tesla, Sprinter, Actros, Setra,
  most motorcycles) intentionally stay text-only rather than guessing
  wrong. `galleryPhotos` in the same file holds the remaining unmapped
  shots — this **does** include a confident match now identified by
  filename inspection: `gallery-03.jpg` is the branded VW Polo
  ("Fahrschulring.de" livery, plate S-E 3030) — it's used directly as the
  `Hero` background photo (`src/components/Hero.tsx`, dark overlay at
  `bg-green-950/80` plus the existing radial gradient, so text stays
  legible) rather than reassigned onto the Polo's `fleet.ts` entry, since
  nothing renders per-vehicle images anymore (see below) — reassigning it
  wouldn't change anything except the comment.
- There is no standalone `/fahrzeuge` page anymore — it was removed, and
  `fleet` (per-vehicle name + tag) is no longer rendered as a list
  anywhere. The full set of vehicle photos lives only in the auto-scrolling
  `VehicleCarousel` on the homepage (`src/components/VehicleCarousel.tsx`,
  `id="fuhrpark"`), fed by `vehiclePhotos` in `fleet.ts` (assigned
  `fleet[].image` values plus the `/images/fleet/` entries of
  `galleryPhotos`) — add new vehicle shots to those sources, not a
  reintroduced page. The carousel's scroll animation
  (`.animate-vehicle-scroll` in `globals.css`) is disabled under
  `prefers-reduced-motion: reduce`. The homepage `Highlights`
  (`src/components/Highlights.tsx`) is down to a single Fahrsimulator
  card (`/images/hero/simulator.jpg`) — the B196/BF17 cards that used to
  sit next to it were removed; that content still lives on `/klassen`. The
  simulator card's CTA links to `/#fuhrpark` (an anchor into the carousel
  section), not a page — nav (`site.ts`) and that link are the only two
  places `/fahrzeuge` needs to stay gone from if it's ever tempting to add
  a route back.
- `public/images/og-cover.jpg` is the OG/social share image, referenced by
  `layout.tsx`'s `openGraph.images` and JSON-LD `image` fields — not part of
  the original scrape (the old site had no dedicated share image), added
  separately.
- `sharp` is a dependency — required for `next/image` optimization in the
  standalone Docker build; don't remove it.

## Google reviews (`GoogleReviews.tsx`)

Same no-fabrication pattern as testimonials, but with a twist: rather than
render nothing until configured, the section shows a **dated static
snapshot** (4.9★, 315 reviews, fetched from the live Google Business Profile
on 2026-08-06 — see `site.googleReviews`) plus a real link to the listing,
because that's honestly-sourced aggregate data, not an invented quote.
Individual review text only ever appears when `GOOGLE_PLACES_API_KEY` and
`GOOGLE_PLACE_ID` are set (`src/lib/google-reviews.ts`) — fetched live via
the Places API (New), revalidated every 24h, never hardcoded.

`GOOGLE_PLACE_ID` must be the real Places API place ID (`ChIJ...` format),
which is **not** the same as the `cid` embedded in `site.googleReviews.mapsUrl`
(that's a Maps feature ID, fine for a plain outbound link, useless for the
API). To get the real place ID: Google's public "Place ID Finder" tool at
developers.google.com/maps/documentation/places/web-service/place-id — search
"Fahrschulring, Hegelstraße 48, 70174 Stuttgart" and copy the ID it shows.
The API key needs "Places API (New)" enabled in Google Cloud Console and a
billing account attached (it has a free monthly quota, but requires billing
to be enabled regardless).
