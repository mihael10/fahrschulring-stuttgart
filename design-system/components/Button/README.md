# Button

Pill-shaped link button — the site's only button shape, used for every call to action.

## When to use
- `primary` (green-500, green-950 text): the main conversion action in a view — "Jetzt Kontakt aufnehmen". Add `pulse` to at most one or two per page (the hero and the closing CTA).
- `secondary` (white, green-100 border): a lower-priority action on white or green-50.
- `ghost` (white outline): secondary action on green-950 grounds, next to a primary.
- `dark` (green-950): the action on a green-500 band; pair with `pulse` there for the dark ring.

## The consumer provides
`href` (always a link — the site has no forms; contact is `/kontakt`, `tel:` or `mailto:`), the label as children, optional `icon="phone"` for call buttons.

## Do / don't
- Labels are German verbs about contact or navigation; no emoji, no trailing arrows (arrows belong to text links).
- Don't put a `primary` on green-500 — use `dark`.
- Ported by hand from `src/components/Button.tsx` (a `next/link` there).
