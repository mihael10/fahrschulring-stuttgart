import type { LicenseClass } from "@/content/classes";

// `heading` lets the card sit correctly in each page's outline: H3 on the
// /klassen hub (under its H2 group headings), H4 on the homepage (under the
// section H2 → group H3).
export function ClassCard({ item, heading: Heading = "h3" }: { item: LicenseClass; heading?: "h3" | "h4" }) {
  return (
    <div
      className={`reveal rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/5 motion-reduce:hover:translate-y-0 ${
        item.featured ? "border-green-400 bg-green-50" : "border-green-100 bg-white"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <Heading className="text-lg font-bold text-green-950">{item.title}</Heading>
        {item.featured && (
          <span className="rounded-full bg-green-500 px-2.5 py-1 text-[10px] font-bold uppercase text-green-950">
            Beliebt
          </span>
        )}
      </div>
      <p className="mt-1 text-xs font-semibold text-green-600">Mindestalter: {item.minAge}</p>
      <p className="mt-3 text-sm text-green-700">{item.summary}</p>
      {item.requires && (
        <p className="mt-3 text-xs text-green-600">Voraussetzung: {item.requires}</p>
      )}
      {item.includes && <p className="mt-1 text-xs text-green-600">{item.includes}</p>}
    </div>
  );
}
