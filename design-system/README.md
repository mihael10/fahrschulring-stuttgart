A green-and-white system for a Stuttgart driving school's marketing site. One green hue does all the work — deep green-950 for structure, bright green-500 for the call to action — and every page funnels to a phone call or an email. Build with it as if each screen's only job is to get someone to tap **Anrufen**.

## Content fundamentals

- **Language is German, and the reader is "du".** Headlines and CTAs speak to the learner directly and warmly: "Deine Fahrschule in Stuttgart.", "Bereit für deinen Führerschein?", "Schreib uns kurz, was du vorhast". The one exception is the school's own claim, kept in its original "Ihr": "Ihr Erfolg ist unser Ziel!".
- **Short, concrete, confident.** Headlines are a statement plus a promise ("Deine Fahrschule in Stuttgart. / Sicher ans Ziel."). Body copy names real things — the fleet with E-Autos, the simulator, 50+ years, Stuttgart-Mitte.
- **CTAs are verbs about contact:** "Jetzt Kontakt aufnehmen", "Individuelles Angebot anfordern", "Anrufen", "oder direkt anrufen: 0711 295928". Text links end with "→" ("Details ansehen →").
- **Typography of text:** en dash with spaces for asides and ranges ("15:00 – 18:30 Uhr"), middle dot to separate license classes ("AM · A1 · A2 · A · B196"), gender-inclusive colon where the site uses it ("Fahrschüler:innen"). Sentence case everywhere except eyebrows and class codes, which are UPPERCASE.
- **No emoji. No invented content.** Never write prices, fake testimonials or made-up review quotes — the site requests quotes instead of listing prices, and shows only real, dated Google rating data.
- **Business facts come from one place.** Name, phone (0711 295928), email (info@fahrschulring.de), address (Hegelstraße 48, 70174 Stuttgart) and hours must match the source of truth; never retype variants.

## Colour

- **Green + white only.** Use the single `color-green-*` ramp (alias of `color-brand-green-*`) for everything. Do not introduce a second accent hue. The only exception is `rating-star` (amber) for filled Google stars.
- **Three section grounds, alternating:** `background` (white) for most content, `color-green-50` for light feature bands (class overview), `color-green-950` for dark bands (hero, highlights, footer). The closing ContactCta band is solid `color-green-500`.
- **Text on white:** headings `color-green-950`, body and descriptions `color-green-700`, nav `color-green-800`. Eyebrows and class codes use `color-green-600` — bold and small in the source, which only reaches 3.3:1; prefer `color-green-700` for new small text.
- **Text on green-950:** headings white, accent line and eyebrows `color-green-400`, body `color-green-100` at 70–80% opacity, badge text `color-green-300`.
- **On green-500:** text and icons `color-green-950` (6.5:1), never white.
- **Borders:** hairlines are `color-green-100` on white (cards, FAQ dividers, header), white at 10% on green-950.

## Type

- **Manrope for everything** (`sans`, loaded from Google Fonts, weights 400–800). No second family.
- Headlines are **extrabold (800)**: `hero-title`, `page-title`, `section-title`, `stat-value`. Card and feature titles are bold (700) in `card-title` / `feature-title`. Buttons and the phone link are semibold (600) in `button`.
- Headlines scale down on mobile: hero 60 → 48 → 36px, section titles 36 → 30px.
- Every section opens with a `SectionHeading`: an UPPERCASE `eyebrow`, a `section-title`, and optionally a `body` description, centred, max width 42rem.

## Layout & spacing

- Content sits in `.container-page`: max `container-max` (80rem), gutters `container-gutter` (1.25rem) on mobile and `container-gutter-sm` (2rem) from 640px.
- Sections are `space-20` top and bottom on mobile, `space-28` from sm. Heading to content is `space-14` (grids) or `space-12` (lists).
- Inside cards: `space-6` padding (`space-8`–`space-10` for feature cards), `space-3` between title and text, `space-6` grid gaps.

## Shape & depth

- **Pills are the signature:** every button, the hero badge, the sticky bar and the FAQ toggle use `radius-full`. Cards use `radius-2xl`; small utility controls `radius-lg`.
- **Flat by default, lift on hover.** Cards have a `color-green-100` border and no shadow; on hover they rise 4px and gain `shadow-card-hover`. Shadows are always green-tinted (`shadow-button`, `shadow-header`, `shadow-floating`) except `shadow-feature-hover` on dark grounds.
- The hero layers the storefront photo at 60% under a green-950 60% wash and two soft radial glows (green-400 at 25%, green-700 at 50%). That is the only gradient; don't add others.

## Motion

- Above the fold, content enters with `fade-up` (20px, 0.7s, cubic-bezier(0.16, 1, 0.3, 1)), staggered ~80ms. Below the fold, `.reveal` uses scroll-driven animation (28px rise) where supported.
- The handful of primary conversion buttons pulse (`shadow-cta-pulse`, 2.6s ring expanding to 14px); the dark variant on green-500 bands. Phone icons next to `tel:` links "ring" every 4s.
- **Always honour `prefers-reduced-motion`**: every animation switches off and revealed content shows at full opacity.

## Iconography

- A tiny set of **solid, single-ink SVG icons** — phone, mail, Facebook — drawn inline with `fill="currentColor"` at 16px (`h-4 w-4`), always next to a text label (the mail-only sticky button carries an `aria-label`). The Icons group holds copies inked in `color-green-950`; recolour by inlining the path.
- Rating stars are the same style in `rating-star` / `rating-star-empty`.
- Arrows and separators are typed characters ("→", "·"), not icons. No emoji, no icon font.

## Logos

- **Fahrschulring wordmark** (`template-logo.webp`, green ring disc + "FAHRSCHUL RING" in light green on white): header (36px tall, 44px from sm) and footer (on a white `radius-sm` plate over green-950). The light green is the mark's own ink, not a UI colour — never sample it for interface elements.
- **"gut betreut – Verbands-Fahrschule" badge** (`vb-fs-logo.webp`, red diamond): association membership mark, top-right of the home hero only, 64–80px tall with a drop shadow. Its red is the association's, not the brand's.
- Both are raster files; never redraw or recolour them.

## Not synced

From mihael10/fahrschulring-stuttgart @ 1f0f9bd (main):
- **Fonts:** Manrope is loaded through `next/font/google`, so there are no font files in the repository; it is referenced as a hosted Google font.
- **Spacing, radius and shadow** values are Tailwind v4 defaults the site's classes use (the repository declares only colours and the container in CSS); shadows have the site's colour modifiers resolved.
- **Animations** (`fade-up`, `reveal`, `cta-pulse`, `ring-wiggle`, `vehicle-scroll`, `bar-slide-up`, `dropdown-in`) are described above, not stored as tokens.
- **Components were hand-ported, not built:** the repo's components are Next.js page sections. Button, SectionHeading, Badge, StatTile, ClassCard, FaqItem and StickyContactBar were rewritten as plain React from their source files. Header, Hero, ContactCta and Footer are static renditions (markup + `bundle.css`, desktop layout, no behaviour) under Sections. Not ported: PageHero, Highlights, WhyUs, Process, TeamPreview, VehicleCarousel, GoogleReviews, Testimonials, CookieConsent, CookieSettingsButton, Counter.
- **Not imported:** favicon.ico and the photography in `public/images/` other than the storefront (fleet, team, simulator, OG cover).
