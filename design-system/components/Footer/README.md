# Footer

Dark four-column footer with logo and claim, navigation, contact details and office hours, over a legal bar.

## Structure
- Ground `color-green-950`, top border and legal-bar divider `color-green-800`. Four columns at lg (2 at sm, 1 on mobile), `space-10` gaps, `space-14` vertical padding.
- Logo on a white `radius-sm` plate (the wordmark only ever sits on white). Claim and years in `body-sm`, green-100 at 70%.
- Column headings `button` style in white; lists `body-sm` green-100 at 70%, 8px apart, links turn `color-green-400` on hover. Facebook is the only social link, with its icon.
- Legal bar: `caption` text in green-100 at 60% — copyright with the legal name, Impressum, Datenschutz, Cookie-Einstellungen. On mobile it gets 96px bottom padding so the StickyContactBar never covers it.

## The consumer provides
Business facts from the single source of truth (address, phone, email, hours, legal name) — never retyped variants.

Static rendition of `src/components/Footer.tsx`.
