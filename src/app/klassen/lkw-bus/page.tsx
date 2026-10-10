import Link from "next/link";
import { TopicPage } from "@/components/TopicPage";
import { Section, FactTable } from "@/components/content/Prose";
import { pageMetadata } from "@/lib/metadata";
import { faqLkwBus } from "@/content/faq";
import { sources } from "@/content/sources";
import { classes } from "@/content/classes";
import { site } from "@/content/site";

const path = "/klassen/lkw-bus/" as const;
const metaTitle = "LKW- und Busführerschein Stuttgart: C1, C, CE, D1, D | Fahrschulring";
const metaDescription =
  "LKW-Führerschein (C1, C1E, C, CE) und Busführerschein (D1, D1E, D, DE) in Stuttgart-Mitte: Fahrschulring bildet in allen Klassen aus – mit Sprinter, Actros-Gliederzug und Setra-Bus. Voraussetzungen und Mindestalter.";

export const metadata = pageMetadata({ path, title: metaTitle, description: metaDescription });

const heavy = classes.filter((c) => c.group === "LKW & Bus");
const special = classes.filter((c) => c.group === "Sonderklassen");

export default function LkwBusPage() {
  return (
    <TopicPage
      path={path}
      eyebrow="LKW & Bus"
      title="LKW- und Busführerschein in Stuttgart: Klassen C1 bis DE"
      description="Eine der wenigen Fahrschulen in Stuttgart, die vom Roller bis zum Gliederzug und Reisebus alle Klassen unter einem Dach ausbildet."
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      lead={
        <>
          <strong>Fahrschulring</strong> in Stuttgart-Mitte bildet in allen LKW- und Busklassen aus:{" "}
          <strong>C1, C1E, C, CE</strong> sowie <strong>D1, D1E, D, DE</strong>, dazu die Zugmaschinenklassen{" "}
          <strong>T und L</strong>. Ausbildungsfahrzeuge sind ein Mercedes Sprinter (C1), ein Mercedes Actros als
          Gliederzug (C/CE) und ein Setra-Bus (D). Inhaber {site.owner} ist Fahrlehrer aller Klassen.
        </>
      }
      faq={faqLkwBus}
      sources={[sources.fev10, sources.fev11, sources.adacAntrag]}
      service={{
        name: "LKW- und Busführerschein-Ausbildung (C1, C1E, C, CE, D1, D1E, D, DE, T, L) in Stuttgart",
        description: metaDescription,
        classes: [...heavy, ...special].map((c) => c.id),
      }}
    >
      <Section title="LKW- und Busklassen auf einen Blick">
        <FactTable
          caption="Mindestalter und Fahrzeuge der LKW- und Busklassen"
          rows={heavy.map((c) => [c.title, c.minAge, c.summary, [c.requires && `Voraussetzung: ${c.requires}`, c.includes].filter(Boolean).join(" · ") || "—"])}
        />
        <h3>Zugmaschinen (Land- und Forstwirtschaft)</h3>
        <FactTable
          caption="Klassen T und L"
          rows={special.map((c) => [c.title, c.minAge, c.summary, c.includes ?? "—"])}
        />
      </Section>

      <Section title="Voraussetzungen für LKW und Bus" tone="tinted">
        <p>
          Für die Klassen C und D brauchst du die Klasse B, eine ärztliche Untersuchung und ein augenärztliches
          Gutachten (strenger als der einfache Sehtest). Die Mindestalter in der Tabelle gelten für den
          Normalfall; wer die Berufskraftfahrer-Grundqualifikation absolviert, darf bestimmte Klassen früher
          gewerblich fahren. Weil die Anforderungen davon abhängen, ob du privat (z. B. Wohnmobil über 3,5 t,
          Feuerwehr, Verein) oder beruflich fährst, klären wir sie im persönlichen Gespräch – ruf an:{" "}
          <a href={`tel:${site.phoneHref}`}>{site.phone}</a>.
        </p>
        <p>
          Antrag, Sehtest, Erste-Hilfe-Kurs und Prüfungsorte in Stuttgart findest du unter{" "}
          <Link href="/fuehrerschein-ablauf/">Ablauf &amp; Voraussetzungen</Link>.
        </p>
      </Section>
    </TopicPage>
  );
}
