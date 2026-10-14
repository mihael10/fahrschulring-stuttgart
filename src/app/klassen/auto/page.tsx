import Link from "next/link";
import { TopicPage } from "@/components/TopicPage";
import { Section, FactTable } from "@/components/content/Prose";
import { pageMetadata } from "@/lib/metadata";
import { faqAuto } from "@/content/faq";
import { sources } from "@/content/sources";
import { site } from "@/content/site";
import { fleet } from "@/content/fleet";

const path = "/klassen/auto/" as const;
const metaTitle = "Autoführerschein Klasse B in Stuttgart – BF17, Automatik (B197) & E-Autos | Fahrschulring";
const metaDescription =
  "Führerschein Klasse B bei Fahrschulring in Stuttgart-Mitte: Begleitetes Fahren ab 17, Automatik mit B197, Ausbildung auf E-Autos (VW ID.3, MG4, Tesla) oder Schaltwagen. Alle Voraussetzungen, Pflichtstunden und Prüfungsorte in Stuttgart.";

export const metadata = pageMetadata({ path, title: metaTitle, description: metaDescription });

const cars = fleet.filter((v) => v.category === "Auto");
const byTag = (tag: string) => cars.filter((v) => v.tag === tag).map((v) => v.name);

export default function AutoPage() {
  return (
    <TopicPage
      path={path}
      eyebrow="Klasse B & BF17"
      title="Autoführerschein in Stuttgart: Klasse B, BF17 und Automatik"
      description="Schaltung, Automatik oder Elektro – bei Fahrschulring in Stuttgart-Mitte machst du den PKW-Führerschein auf dem Fahrzeug, das zu dir passt."
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      lead={
        <>
          <strong>Fahrschulring</strong> ist eine Fahrschule in Stuttgart-Mitte ({site.address.street}) und
          bildet in der Klasse B (PKW bis 3.500 kg) aus – regulär ab 18, als <strong>Begleitetes Fahren ab 17
          (BF17)</strong> und auf Wunsch als <strong>Automatik-Ausbildung mit B197</strong>, bei der du
          trotzdem Schaltwagen fahren darfst. Du lernst auf Schaltwagen (VW Polo, VW T-Roc), Automatik (VW Golf,
          Kia Niro) oder Elektroautos (VW ID.3, MG4, Tesla Model S).
        </>
      }
      faq={faqAuto}
      sources={[sources.fev10, sources.adacBf17, sources.adacB197, sources.adacAusbildung, sources.adacTheorie, sources.stuttgartUmzug, sources.stuttgartErsterteilung, sources.tuevFeuerbach, sources.bmvReform]}
      service={{
        name: "Führerscheinausbildung Klasse B / BF17 / B197 in Stuttgart",
        description: metaDescription,
        classes: ["B", "BF17", "B197"],
      }}
    >
      <Section title="Klasse B, BF17 und B197 auf einen Blick">
        <p>
          Die Klasse B berechtigt zum Fahren von PKW bis 3.500 kg zulässiger Gesamtmasse mit bis zu acht
          Sitzplätzen außer dem Fahrersitz; die Klassen AM und L sind eingeschlossen. Die gesetzlichen Eckdaten:
        </p>
        <FactTable
          caption="Mindestalter und Besonderheiten der PKW-Klassen"
          rows={[
            ["Klasse B", "18 Jahre", "PKW bis 3.500 kg, Anhänger bis 750 kg (oder schwerer, wenn das Gespann ≤ 3.500 kg bleibt)", "Theorie- und Praxisprüfung; schließt AM und L ein"],
            ["BF17", "17 Jahre (Antrag ab 16½)", "Wie Klasse B, bis zum 18. Geburtstag nur mit eingetragener Begleitperson", "Begleitperson: ab 30 Jahre, 5 Jahre Klasse B, max. 1 Punkt"],
            ["B mit Schlüsselzahl 78", "18 / 17 (BF17)", "Nur Automatikfahrzeuge", "Prüfung auf Automatik, kein Schalttraining"],
            ["B197", "18 / 17 (BF17)", "Automatik und Schaltung", "Prüfung auf Automatik + mind. 10 Schaltstunden à 45 Min. und 15-Min.-Testfahrt, keine Zusatzprüfung"],
          ]}
        />
      </Section>

      <Section title="Offizielle Vorgaben: Theorie, Sonderfahrten, Prüfung" tone="tinted">
        <p>
          Nach der aktuell geltenden Fahrschüler-Ausbildungsordnung umfasst die Ausbildung für Klasse B{" "}
          <strong>14 Theorie-Doppelstunden</strong> (12 Grundstoff + 2 Zusatzstoff, je 90 Minuten) und{" "}
          <strong>12 Sonderfahrten</strong> à 45 Minuten: 5 Überland, 4 Autobahn, 3 bei Dunkelheit. Für die
          übrigen Übungsstunden gibt es keine gesetzliche Mindestzahl – ihre Anzahl ist der Grund, warum sich die
          Gesamtkosten nicht pauschal nennen lassen (mehr dazu auf der Seite{" "}
          <Link href="/fuehrerschein-kosten/">Führerschein-Kosten</Link>).
        </p>
        <p>
          Die Theorieprüfung (30 Fragen, maximal 10 Fehlerpunkte) und die praktische Prüfung nimmt in Stuttgart
          der TÜV SÜD ab; die Praxisprüfung startet seit April 2025 am Service-Center Stuttgart-Feuerbach. Den
          Führerscheinantrag stellst du bei der Führerscheinstelle der Stadt Stuttgart (seit März 2026 im
          Löwentorbogen 11, Bad Cannstatt) – als Stuttgarter auch online. Alle Schritte in der richtigen
          Reihenfolge findest du unter <Link href="/fuehrerschein-ablauf/">Ablauf &amp; Voraussetzungen</Link>.
        </p>
        <p>
          <strong>Hinweis zur Führerscheinreform:</strong> Das Bundeskabinett hat im Mai 2026 eine Reform der
          Ausbildung (flexiblere Theorie, kürzerer Fragenkatalog, Simulator-Anteile) beschlossen; der Bundestag
          berät sie seit September 2026. Solange sie nicht in Kraft ist, gelten die oben genannten Regeln.
        </p>
      </Section>

      <Section title="So läuft die PKW-Ausbildung bei Fahrschulring">
        <h3>Fahrzeuge: Schaltung, Automatik und Elektro</h3>
        <p>
          Schaltwagen: {byTag("Schaltung").join(", ")}. Automatik: {byTag("Automatik").join(", ")}. Elektro:{" "}
          {byTag("Elektro").join(", ")}. Dazu BMW X1 und X2. Wer auf einem E-Auto oder Automatik die Prüfung
          ablegt und trotzdem Schaltwagen fahren möchte, macht bei uns die B197-Schaltausbildung auf dem Polo
          oder T-Roc.
        </p>
        <h3>Fahrsimulator vor der ersten Fahrstunde</h3>
        <p>
          Im Fahrsimulator in unseren Räumen übst du Anfahren, Schalten, Blickführung und erste
          Gefahrensituationen, bevor du auf die Hegelstraße hinausfährst – entspannter für dich, und die ersten
          echten Fahrstunden werden effektiver genutzt.
        </p>
        <h3>Theorie direkt in Stuttgart-Mitte</h3>
        <p>
          Theorieunterricht: {site.hours.theory}, in der {site.address.street}. Bürozeiten für Anmeldung und
          Fragen: {site.hours.office}.
        </p>
        <h3>Fahrlehrer-Team</h3>
        <p>
          Fünf Fahrlehrerinnen und Fahrlehrer begleiten dich in der Klasse B – wer welche Klassen unterrichtet,
          siehst du auf der <Link href="/team/">Team-Seite</Link>.
        </p>
      </Section>
    </TopicPage>
  );
}
