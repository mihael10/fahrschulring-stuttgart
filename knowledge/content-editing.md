---
title: Content editing and the no-fabrication policy
area: content, copy, testimonials, pricing, team, classes, fleet, social links
keywords: [testimonials, pricing, preise, team, klassen, fahrzeuge, content, social, facebook, instagram]
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

## Topic pages, FAQs and sources (added 2026-10-09)

The per-topic FAQs (`faqAuto`, `faqMotorrad`, … in `faq.ts`) and the
official sources (`src/content/sources.ts`) feed the topic pages under
`/klassen/*` and `/fuehrerschein-*`. Every legal fact there needs a source
entry; every business fact must already exist in a content file. Rules and
the page skeleton: `seo-strategy.md`. New indexable pages are registered in
`src/content/routes.ts` (sitemap + footer + breadcrumbs).

Carousel photos get their alt text from `photoAlt` in `fleet.ts` — add an
entry for every new photo, written from what the picture shows.

## Adding a team member / vehicle / class

Straightforward — append to the relevant array in `team.ts` / `fleet.ts` /
`classes.ts`. For `classes.ts`, keep the `group` field one of the four
values in `classGroups` — the homepage `ClassesOverview` and
`src/app/klassen/page.tsx` both render every class grouped by it (via the
shared `ClassCard.tsx`) and derive their `id="<slug>"` anchors from those
exact group names in a `groupSlugs` map. Adding a fifth group requires
updating that map in **both** files.

## Social links

Only Facebook (`site.social.facebook`, URL supplied by the owner) — the
owner explicitly asked for no other socials, so don't add Instagram etc.
unprompted. It's rendered as a footer link (`Footer.tsx`, Kontakt column,
`FacebookIcon` in `icons.tsx`) and in the JSON-LD `sameAs` in `layout.tsx`.
It's a plain outbound `<a href>`, not an embed/plugin: unlike the Google Maps
embed (which got `/datenschutz` section 4 because it calls Google on page
load), nothing is sent to Facebook until the visitor clicks and has already
left the site. So no consent gating and no `/datenschutz` change — that page
only has to describe what *this site* does (see `legal-compliance.md`). If
this ever becomes an embed (Facebook feed, Like button, Pixel), that changes
and the policy needs a section in the same change.

## Images

`public/images/` holds the business's own photos, pulled from the old
fahrschulring.de (logo, team headshots, fleet/gallery shots, the simulator
photo) — these are the business's own marketing assets, reused for its own
redesign, organized into `logo/`, `team/`, `hero/`, `fleet/`. Every file
except `og-cover.jpg` is `.webp` (converted from the original `.jpg`/`.png`
scrape for an SEO/performance pass — see "Image format is `.webp`" below);
mentally substitute `.webp` for whatever extension a filename below implies.

- `logo/template-logo.webp` is the actual brand mark (green circle +
  "Fahrschul Ring" wordmark) — used in `Header.tsx` / `Footer.tsx`.
  `logo/vb-fs-logo.webp` is the "gut betreut" Verbands-Fahrschule
  certification seal, from the old site — now shown as a corner badge on
  the homepage `Hero` (`src/components/Hero.tsx`), top-right of the
  section.
- `team.ts` maps each of the 5 instructors to their real photo (`photo`
  field) — order was cross-checked against the old team page's HTML
  (name/image pairs), not assumed from array position.
- `fleet.ts` maps a vehicle's `image` field only where the old site's own
  filename made the match confident (e.g. `golf.webp` → VW Golf). Vehicles
  without a confident source photo (X1, X2, Tesla, Sprinter, Actros, Setra,
  most motorcycles) intentionally stay text-only rather than guessing
  wrong. `galleryPhotos` in the same file holds the remaining unmapped
  shots, including `gallery-03.webp` (the branded VW Polo,
  "Fahrschulring.de" livery, plate S-E 3030) — not reassigned onto the
  Polo's `fleet.ts` entry since nothing renders per-vehicle images anymore
  (see below).
- The `Hero` background photo (`src/components/Hero.tsx`) is
  `images/hero/storefront.webp` — the Hegelstraße 48 storefront itself
  (yellow "Fahrschulring" signage, matching the current phone number) with
  the branded Touareg and Polo parked out front, chosen over the
  single-car `gallery-03.webp` for showing the real premises and both
  vehicles at once. Dark overlay is `bg-green-950/60` plus the existing
  radial gradient so text stays legible; `object-bottom` keeps the
  cars/signage (not the sky) in frame under `object-cover`.
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
  section: text block on top, then two owner-supplied photos as separate
  uncropped 3:4 cards with captions (added 2026-10-02 — the owner wanted
  each photo clearly visible, not squeezed into one card):
  `/images/hero/simulator.webp` (the empty simulator, replacing the tiny
  203×270 scrape) and `/images/hero/simulator-training.webp` (an
  instructor coaching a student at the simulator; the student is only seen
  from behind) — the B196/BF17 cards that used to
  sit next to it were removed; that content still lives on `/klassen`. The
  simulator card's CTA links to `/#fuhrpark` (an anchor into the carousel
  section), not a page — nav (`site.ts`) and that link are the only two
  places `/fahrzeuge` needs to stay gone from if it's ever tempting to add
  a route back.
- `public/images/og-cover.jpg` is the OG/social share image, referenced by
  `layout.tsx`'s `openGraph.images` and JSON-LD `image` fields — not part of
  the original scrape (the old site had no dedicated share image), added
  separately.
- **Image format is `.webp`, except `og-cover.jpg`.** `images.unoptimized:
  true` (required for static export, see `knowledge/deployment.md`) means
  `next/image` serves whatever file is on disk with no format/size
  conversion at request time — so the source files themselves were
  converted once, offline, with `sharp` (`.webp`, quality 82; the three
  fleet photos that were 2000×1500 source scans — `mg4`, `kia-niro`,
  `gallery-misc-2` — were also downsized to max-width 960, since they only
  ever render in a 320px carousel slot). **Add any new photo as `.webp`
  too** (`npx sharp -i input.jpg -o output.webp` or equivalent), not
  `.jpg`/`.png` — an unconverted new image will still work but undoes the
  page-weight win this pass made. `og-cover.jpg` was deliberately left as
  JPEG: some social-platform link-preview crawlers still handle `.webp`
  og:image inconsistently.
- `sharp` is a dependency — required for `next/image` optimization in the
  standalone Docker build (and used ad hoc for the `.webp` conversion
  above); don't remove it.

## Google reviews (`GoogleReviews.tsx`)

Same no-fabrication pattern as testimonials, but with a twist: rather than
render nothing until configured, the section shows a **dated static
snapshot** (4.9★, 325 reviews as of 2026-10-02, from the live Google Business
Profile — see `site.googleReviews`) plus a real link to the listing,
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

Layout (redesigned 2026-10-02 at the owner's request): a single rating card
(Google "G", the rating in German format `4,9`, stars, review count, and a
"Bewertungen lesen" button linking to `site.googleReviews.reviewsUrl`, the
owner's own share link). The snapshot date is deliberately **not** shown
(owner's request) — it stays in `site.ts` only, so update the rating/count
there every few months by hand (or set up the API key). Below it: three real reviews
(Jasmin, Hatem Ali, Nic) from `src/content/google-review-quotes.ts`, copied
verbatim from the owner's screenshots of the expanded reviews on 2026-10-02.
A review by Mihael Josifovski (who built this site) is deliberately left
out, as is Mika Renger's (only seen truncated mid-criticism: "allerdings
kann…"). Long text clamps to 9 lines with a "Weiterlesen" toggle
(`ReviewText.tsx`, shown only when the text actually overflows). Live
reviews, when configured, replace these quotes as up to 6
cards (only reviews with text, clamped to 6 lines, initial-letter avatar —
no remote author photos, so no extra third-party image requests).
