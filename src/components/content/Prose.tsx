import type { ReactNode } from "react";

// Layout primitives for the topic pages (Klassen, Ablauf, Kosten,
// Umschreiben): a lead "direct answer" block, H2 sections, fact tables and
// a sources footer. Deliberately plain so the content reads as information,
// not as marketing — that is what search engines and answer engines reward
// and what visitors with a concrete question want.

export function Lead({ children }: { children: ReactNode }) {
  return (
    <div className="container-page">
      <p className="reveal mx-auto max-w-3xl -mt-6 rounded-2xl border border-green-100 bg-green-50 p-6 text-base leading-relaxed text-green-900 sm:p-8">
        {children}
      </p>
    </div>
  );
}

export function Section({
  id,
  title,
  children,
  tone = "white",
}: {
  id?: string;
  title: string;
  children: ReactNode;
  tone?: "white" | "tinted";
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-14 sm:py-16 ${tone === "tinted" ? "bg-green-50" : "bg-white"}`}>
      <div className="container-page">
        <div className="reveal mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold text-green-950 sm:text-3xl">{title}</h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-green-800 [&_a]:font-semibold [&_a]:text-green-900 [&_a]:underline [&_a:hover]:text-green-950 [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-green-950 [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-green-950">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FactTable({
  caption,
  rows,
  head = ["Klasse", "Mindestalter", "Das darfst du fahren", "Hinweis"],
}: {
  caption: string;
  rows: (string | ReactNode)[][];
  head?: string[];
}) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-green-100">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-green-50 text-xs font-bold uppercase tracking-wider text-green-700">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-3">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-green-100 bg-white">
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="px-4 py-3 font-bold text-green-950">
                    {cell}
                  </th>
                ) : (
                  <td key={j} className="px-4 py-3 text-green-800">
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export type Source = { label: string; href: string; note?: string };

// "Stand" + official sources: separates what the law/authority says (linked)
// from what Fahrschulring offers, and tells readers (and AI retrieval) how
// current the page is. `updated` comes from src/content/routes.ts.
export function Sources({ updated, sources }: { updated: string; sources: Source[] }) {
  const date = new Date(updated).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });
  return (
    <section className="bg-white pb-14">
      <div className="container-page">
        <div className="reveal mx-auto max-w-3xl rounded-2xl border border-green-100 p-6 text-sm text-green-800">
          <p>
            <strong className="text-green-950">Stand: {date}.</strong> Gesetzliche Angaben (Mindestalter,
            Pflichtstunden, Gebühren, Zuständigkeiten) stammen aus den unten verlinkten offiziellen Quellen und
            können sich ändern. Was bei Fahrschulring konkret abläuft, besprechen wir mit dir persönlich.
          </p>
          <h2 className="mt-5 text-xs font-bold uppercase tracking-wider text-green-600">Quellen</h2>
          <ul className="mt-2 space-y-1.5">
            {sources.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noreferrer noopener" className="font-semibold underline hover:text-green-950">
                  {s.label}
                </a>
                {s.note && <span className="text-green-700"> – {s.note}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
