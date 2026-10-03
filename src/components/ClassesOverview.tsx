import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { ClassCard } from "./ClassCard";
import { classes, classGroups } from "@/content/classes";

const groupSlugs: Record<(typeof classGroups)[number], string> = {
  Motorrad: "motorrad",
  Auto: "auto",
  "LKW & Bus": "lkw-bus",
  Sonderklassen: "sonderklassen",
};

export function ClassesOverview() {
  return (
    <section id="klassen" className="scroll-mt-20 bg-green-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Führerscheinklassen"
          title="Für jedes Fahrzeug die passende Ausbildung"
          description={`${classes.length} Führerscheinklassen, ein Ansprechpartner. Preise richten sich nach Klasse und individuellem Übungsbedarf – fordere ein unverbindliches Angebot an.`}
        />
        {classGroups.map((group) => (
          <div key={group} id={groupSlugs[group]} className="scroll-mt-24 pt-14">
            <h3 className="text-2xl font-extrabold text-green-950">{group}</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {classes
                .filter((c) => c.group === group)
                .map((item) => (
                  <ClassCard key={item.id} item={item} />
                ))}
            </div>
          </div>
        ))}
        <div className="mt-14 flex justify-center">
          <Button href="#kontakt" variant="primary">
            Individuelles Angebot anfordern
          </Button>
        </div>
      </div>
    </section>
  );
}
