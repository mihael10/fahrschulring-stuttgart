// Renders a schema.org JSON-LD block. `data` must only describe content
// that is actually visible on the page (Google's structured-data policy and
// the no-fabrication rule in knowledge/content-editing.md).
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline except for "</script>" —
      // escape "<" so user-facing text (FAQ answers) can never break out.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
