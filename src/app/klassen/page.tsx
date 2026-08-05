import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { classes, classGroups, type LicenseClass } from "@/content/classes";

export const metadata: Metadata = {
  title: "Führerscheinklassen",
  description:
    "Alle Führerscheinklassen bei Fahrschulring Stuttgart im Überblick: Motorrad, Auto, LKW & Bus sowie Sonderklassen.",
};

const groupSlugs: Record<(typeof classGroups)[number], string> = {
  Motorrad: "motorrad",
  Auto: "auto",
  "LKW & Bus": "lkw-bus",
  Sonderklassen: "sonderklassen",
};

function ClassCard({ item }: { item: LicenseClass }) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        item.featured ? "border-green-400 bg-green-50" : "border-green-100 bg-white"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-green-950">{item.title}</h3>
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

export default function KlassenPage() {
  return (
    <>
      <PageHero
        eyebrow="Führerscheinklassen"
        title="Für jedes Fahrzeug die passende Ausbildung"
        description={`${classes.length} Klassen, ein Ansprechpartner. Preise richten sich nach Klasse und individuellem Übungsbedarf – fordere ein unverbindliches Angebot an.`}
      />
      <div className="container-page py-16 sm:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-green-50 p-6 sm:p-8">
          <p className="max-w-xl text-sm text-green-800">
            Nicht sicher, welche Klasse zu dir passt? Wir beraten dich gerne persönlich
            und erstellen ein individuelles Angebot.
          </p>
          <Button href="/kontakt" variant="primary">
            Angebot anfordern
          </Button>
        </div>

        {classGroups.map((group) => {
          const items = classes.filter((c) => c.group === group);
          return (
            <section key={group} id={groupSlugs[group]} className="scroll-mt-24 pt-16 first:pt-14">
              <h2 className="text-2xl font-extrabold text-green-950">{group}</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <ClassCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
