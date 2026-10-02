# Hero

The home page's opening section: storefront photo under a green-950 wash, a Badge, a two-line headline, two CTAs, a call link and four StatTiles.

## Structure
- Ground: `color-green-950`, storefront photo at 60% opacity anchored to the bottom, a green-950 60% wash, and two soft radial glows (green-400 25% top right, green-700 50% bottom left). This is the only gradient in the system.
- "gut betreut" association badge top right, 80px (64px at sm, hidden on mobile).
- Centered copy, max 42rem: `Badge` → `hero-title` in white with the second line in `color-green-400` → `lead` in green-100 at 80% → `primary` Button with `pulse` + `ghost` Button → phone call link in white 80%.
- A `<dl>` of four `StatTile`s (2 columns on mobile).
- Vertical padding `space-20` / `space-28` / `space-32` (mobile / sm / lg). Every element enters with `fade-up`, staggered 80ms; the stat numbers count up.

## The consumer provides
Headline (statement + promise on line two), one-paragraph lead, the badge credential, real stats, phone number, a background photo of the actual school.

Static rendition of `src/components/Hero.tsx` at lg; the photo is the site's own `storefront.webp` (Imagery group).
