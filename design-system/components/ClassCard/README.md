# ClassCard

Linked card for one group of license classes, lifting on hover.

## When to use
In the class overview grid on a green-50 band: 1 column on mobile, 2 at sm, 4 at lg, `space-6` gaps.

## The consumer provides
`title` (group name), `classes` (codes separated by " · "), `description` (one sentence), `href` (anchor on `/klassen`), optional `cta` label.

## Do / don't
- Keep descriptions to one line of plain benefit; no prices.
- Hand-ported from the inline card in `src/components/ClassesOverview.tsx`.
