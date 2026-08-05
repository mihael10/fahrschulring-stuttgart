import Link from "next/link";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";

const groups = [
  {
    slug: "auto",
    title: "Auto",
    classes: "B · BF17 · BE · B96",
    description: "Vom ersten begleiteten Kilometer mit 17 bis zum Anhänger.",
  },
  {
    slug: "motorrad",
    title: "Motorrad",
    classes: "AM · A1 · A2 · A · B196",
    description: "Roller, Leichtkrafträder und alle Motorradklassen.",
  },
  {
    slug: "lkw-bus",
    title: "LKW & Bus",
    classes: "C1 · C · CE · D1 · D",
    description: "Für den Einstieg in die Berufskraftfahrt.",
  },
  {
    slug: "sonderklassen",
    title: "Sonderklassen",
    classes: "L · T",
    description: "Zugmaschinen und Arbeitsmaschinen für Land- und Forstwirtschaft.",
  },
];

export function ClassesOverview() {
  return (
    <section className="bg-navy-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Führerscheinklassen"
          title="Für jedes Fahrzeug die passende Ausbildung"
          description="18 Führerscheinklassen, ein Ansprechpartner. Wähle deinen Bereich – Details findest du auf unserer Klassen-Übersicht."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <Link
              key={group.slug}
              href={`/klassen#${group.slug}`}
              className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-navy-900/5"
            >
              <h3 className="text-lg font-bold text-navy-950">{group.title}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-amber-600">
                {group.classes}
              </p>
              <p className="mt-3 flex-1 text-sm text-navy-700">{group.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-900 group-hover:text-amber-600">
                Details ansehen →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/kontakt" variant="primary">
            Individuelles Angebot anfordern
          </Button>
        </div>
      </div>
    </section>
  );
}
