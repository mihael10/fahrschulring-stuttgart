# Header

Sticky white header with logo, navigation, phone link and the primary Kontakt button — a static rendition of the desktop (lg+) state, scrolled.

## Structure
- 80px tall (64px on mobile), `background` at 90% with backdrop blur; once scrolled it gains a `color-green-100` bottom border and `shadow-header`.
- Logo `template-logo.webp` 44px tall (36px mobile). Nav links in `nav` style, `color-green-800` → `color-green-950` on hover, 28px apart. All navigation items except "Start".
- Right: the ringing phone link (`button` style, `color-green-800`) and a `primary` Button "Kontakt aufnehmen".
- Below 1024px, nav and actions collapse into a 40px `radius-lg` burger that drops down a menu panel (`dropdown-in`, 0.2s) with the same links, phone and a full-width primary button.

## The consumer provides
Navigation items, phone number (display + E.164), logo.

Static rendition of `src/components/Header.tsx` — markup and styles only, no menu behaviour.
