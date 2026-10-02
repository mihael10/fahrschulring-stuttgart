# FaqItem

One accordion row: a question button with a rotating "+" toggle and an animated answer panel.

## When to use
Stacked in a `max-width: 48rem` list with a `color-green-100` top border on the list; the first item open by default.

## The consumer provides
`question`, `answer` (plain text, `body-sm-relaxed`), optional `defaultOpen`.

## Do / don't
- The source allows one open item at a time (state lives in the list); this port keeps state per row — coordinate it in the parent if you need exclusivity.
- Hand-ported from `src/components/Faq.tsx`.
