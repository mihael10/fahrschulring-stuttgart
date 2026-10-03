import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { ClassCard } from "@/components/ClassCard";
import { classes, classGroups } from "@/content/classes";

export const metadata: Metadata = {
  title: "Führerscheinklassen",
  description:
    "Alle Führerscheinklassen bei Fahrschulring Stuttgart im Überblick: Motorrad, Auto, LKW & Bus sowie Sonderklassen.",
  alternates: { canonical: "/klassen/" },
};

const groupSlugs: Record<(typeof classGroups)[number], string> = {
  Motorrad: "motorrad",
  Auto: "auto",
  "LKW & Bus": "lkw-bus",
  Sonderklassen: "sonderklassen",
};

export default function KlassenPage() {
  return (
    <>
      <PageHero
        eyebrow="Führerscheinklassen"
        title="Für jedes Fahrzeug die passende Ausbildung"
        description={`${classes.length} Klassen, ein Ansprechpartner. Preise richten sich nach Klasse und individuellem Übungsbedarf – fordere ein unverbindliches Angebot an.`}
      />
      <div className="container-page py-16 sm:py-20">
        <div className="animate-fade-up flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-green-50 p-6 sm:p-8">
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
