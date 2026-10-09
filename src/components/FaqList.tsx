import type { FaqItem } from "@/content/faq";
import { JsonLd } from "./JsonLd";
import { faqNode, graph } from "@/lib/schema";
import { SectionHeading } from "./SectionHeading";

// Accordion on native <details>/<summary>: no client JS, every answer is in
// the HTML for crawlers and screen readers, keyboard-accessible by default.
// The FAQPage JSON-LD is generated from the very same items, so it can only
// ever describe visible content. (Google no longer shows FAQ rich results
// for businesses since 2023 — the schema is there for entity/AI
// understanding, not for stars in the SERP.)
export function FaqList({
  items,
  path,
  title = "Häufige Fragen",
  eyebrow = "Gut zu wissen",
  openFirst = true,
}: {
  items: FaqItem[];
  path: `/${string}`;
  title?: string;
  eyebrow?: string;
  openFirst?: boolean;
}) {
  if (items.length === 0) return null;
  return (
    <section id="faq" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <JsonLd data={graph([faqNode(items, path)])} />
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="reveal mx-auto mt-12 max-w-3xl divide-y divide-green-100 border-y border-green-100">
          {items.map((item, idx) => (
            <details key={item.question} open={openFirst && idx === 0} className="group">
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold text-green-950">{item.question}</h3>
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-green-200 text-green-700 transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-green-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
