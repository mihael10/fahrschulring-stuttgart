import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { ClassCard } from "@/components/ClassCard";
import { JsonLd } from "@/components/JsonLd";
import { ContactCta } from "@/components/ContactCta";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { classes, classGroups } from "@/content/classes";

const path = "/klassen/" as const;
const title = "Führerscheinklassen in Stuttgart: Auto, Motorrad, Anhänger, LKW & Bus | Fahrschulring";
const description =
  "Alle 18 Führerscheinklassen bei Fahrschulring in Stuttgart-Mitte: AM, A1, A2, A, B196, B/BF17, B96, BE, C1 bis CE, D1 bis DE, T und L – mit Mindestalter und Voraussetzungen auf einen Blick.";

export const metadata = pageMetadata({ path, title, description });

const groupSlugs: Record<(typeof classGroups)[number], string> = {
  Motorrad: "motorrad",
  Auto: "auto",
  "LKW & Bus": "lkw-bus",
  Sonderklassen: "sonderklassen",
};

// Hub → detail page per group (see src/content/routes.ts).
const detailPages: Record<(typeof classGroups)[number], { href: `/${string}`; label: string; blurb: string }> = {
  Auto: { href: "/klassen/auto/", label: "Klasse B, BF17 & Automatik (B197)", blurb: "PKW-Führerschein ab 17 oder 18, Automatik mit B197, Ausbildung auf E-Autos." },
  Motorrad: { href: "/klassen/motorrad/", label: "Motorradführerschein AM, A1, A2, A & B196", blurb: "Alle Zweiradklassen und die 125er-Erweiterung für Autofahrer." },
  "LKW & Bus": { href: "/klassen/lkw-bus/", label: "LKW & Bus: C1 bis DE", blurb: "Sprinter, Actros-Gliederzug und Setra-Bus – alle Nutzfahrzeugklassen." },
  Sonderklassen: { href: "/klassen/lkw-bus/", label: "Zugmaschinen T & L", blurb: "Land- und forstwirtschaftliche Zugmaschinen – Details auf der LKW-&-Bus-Seite." },
};

export default function KlassenPage() {
  return (
    <>
      <JsonLd data={graph([webPageNode({ path, title, description }), breadcrumbNode(path)])} />
      <PageHero
        eyebrow="Führerscheinklassen"
        title="Alle Führerscheinklassen in Stuttgart – an einem Ort"
        description="Ausbildung in allen Klassen – Mindestalter, Voraussetzungen und eingeschlossene Klassen im Überblick."
      />
      <Breadcrumbs path={path} />
      <div className="container-page py-12 sm:py-16">
        <div className="animate-fade-up flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-green-50 p-6 sm:p-8">
          <p className="max-w-xl text-sm text-green-800">
            Fragen zu einer Klasse? Hinterlass uns eine Nachricht – wir melden uns schnellstmöglich
            zurück. Den Weg von der Anmeldung bis zur Prüfung erklärt die Seite{" "}
            <Link href="/fuehrerschein-ablauf/" className="font-semibold underline">Ablauf &amp; Voraussetzungen</Link>.
          </p>
          <Button href="/kontakt/" variant="primary">
            Kontakt aufnehmen
          </Button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {classGroups.map((group) => {
            const d = detailPages[group];
            return (
              <Link
                key={group}
                href={d.href}
                className="reveal rounded-2xl border border-green-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-lg hover:shadow-green-900/5 motion-reduce:hover:translate-y-0"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-green-600">{group}</span>
                <span className="mt-2 block text-base font-bold text-green-950">{d.label}</span>
                <span className="mt-2 block text-sm text-green-700">{d.blurb}</span>
                <span className="mt-3 block text-sm font-semibold text-green-700">Mehr erfahren →</span>
              </Link>
            );
          })}
        </div>

        {classGroups.map((group) => {
          const items = classes.filter((c) => c.group === group);
          const d = detailPages[group];
          return (
            <section key={group} id={groupSlugs[group]} className="scroll-mt-24 pt-16">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h2 className="text-2xl font-extrabold text-green-950">{group}</h2>
                <Link href={d.href} className="text-sm font-semibold text-green-700 underline hover:text-green-950">
                  {d.label} →
                </Link>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <ClassCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
      <ContactCta />
    </>
  );
}
