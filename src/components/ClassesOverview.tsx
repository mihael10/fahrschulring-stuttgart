import Link from "next/link";
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

// Each group links to its detail page (src/content/routes.ts) with
// descriptive anchor text — the only crawlable path from the homepage into
// the topic pages apart from the footer.
const groupLinks: Partial<Record<(typeof classGroups)[number], { href: `/${string}`; label: string }>> = {
  Motorrad: { href: "/klassen/motorrad/", label: "Alles zum Motorradführerschein in Stuttgart" },
  Auto: { href: "/klassen/auto/", label: "Alles zum Autoführerschein Klasse B, BF17 und Automatik" },
  "LKW & Bus": { href: "/klassen/lkw-bus/", label: "Alles zum LKW- und Busführerschein" },
  Sonderklassen: { href: "/klassen/lkw-bus/", label: "Zugmaschinen T und L – Details" },
};

export function ClassesOverview() {
  return (
    <section id="klassen" className="scroll-mt-20 bg-green-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Führerscheinklassen"
          title="Alle Führerscheinklassen in Stuttgart-Mitte"
          description={`${classes.length} Führerscheinklassen, ein Ansprechpartner – vom Roller über Auto, Motorrad und Anhänger bis zu LKW und Bus. Preise richten sich nach Klasse und individuellem Übungsbedarf – fordere ein unverbindliches Angebot an.`}
        />
        {classGroups.map((group) => {
          const link = groupLinks[group];
          return (
            <div key={group} id={groupSlugs[group]} className="scroll-mt-24 pt-14">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="text-2xl font-extrabold text-green-950">{group}</h3>
                {link && (
                  <Link href={link.href} className="text-sm font-semibold text-green-700 underline hover:text-green-950">
                    {link.label} →
                  </Link>
                )}
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {classes
                  .filter((c) => c.group === group)
                  .map((item) => (
                    <ClassCard key={item.id} item={item} heading="h4" />
                  ))}
              </div>
            </div>
          );
        })}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <Button href="#kontakt" variant="primary">
            Individuelles Angebot anfordern
          </Button>
          <Button href="/klassen/anhaenger/" variant="secondary">
            Anhänger: BE &amp; B96
          </Button>
        </div>
      </div>
    </section>
  );
}
