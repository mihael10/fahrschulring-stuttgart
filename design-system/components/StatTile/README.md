# StatTile

Glassy key-figure tile for green-950 grounds, used in a row of four under the hero.

## When to use
Two to four real, countable facts about the school (years, classes, instructors, electric vehicles). Render inside a `<dl>` grid, 2 columns on mobile and 4 from sm.

## The consumer provides
`value` and optional `suffix` ("+"), `label` in `caption` style.

## Do / don't
- Only real numbers derived from the site's content — never invent figures.
- The source counts up on scroll-in (`Counter.tsx`); this port shows the final value.
- Hand-ported from the inline stat list in `src/components/Hero.tsx`.
