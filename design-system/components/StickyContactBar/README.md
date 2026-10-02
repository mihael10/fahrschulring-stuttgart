# StickyContactBar

Mobile-only floating call + email bar that keeps the main CTA on screen.

## When to use
Once per page on viewports below 1024px (the desktop header already shows phone and Kontakt). In the source it appears only after the cookie banner has been dismissed, so the two never stack.

## The consumer provides
`phoneHref` (E.164, e.g. "+49711295928"), `email`, optional `callLabel` (default "Anrufen"); `fixed={false}` to render it inline.

## Do / don't
- Don't add more buttons; call is the wide primary, mail is icon-only with an `aria-label`.
- Hand-ported from `src/components/StickyContactBar.tsx` (without the localStorage/cookie gating).
