import Link from "next/link";
import { TopicPage } from "@/components/TopicPage";
import { Section, FactTable } from "@/components/content/Prose";
import { pageMetadata } from "@/lib/metadata";
import { faqAnhaenger } from "@/content/faq";
import { sources } from "@/content/sources";
import { site } from "@/content/site";

const path = "/klassen/anhaenger/" as const;
const metaTitle = "Anhängerführerschein Stuttgart: Klasse BE und B96 | Fahrschulring";
const metaDescription =
  "BE oder B96 in Stuttgart: Fahrschulring in Stuttgart-Mitte erklärt den Unterschied, Gewichtsgrenzen, Schulung ohne Prüfung (B96) und die BE-Praxisprüfung – und bildet in beiden aus.";

export const metadata = pageMetadata({ path, title: metaTitle, description: metaDescription });

export default function AnhaengerPage() {
  return (
    <TopicPage
      path={path}
      eyebrow="Anhänger: BE & B96"
      title="Anhängerführerschein in Stuttgart: BE und B96"
      description="Wohnwagen, Pferdeanhänger, Autotransporter – wir bringen dich sicher mit Anhänger durch Stuttgart und durch die Prüfung."
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      lead={
        <>
          <strong>Fahrschulring</strong> ({site.address.street}, Stuttgart-Mitte) bildet in der Klasse{" "}
          <strong>BE</strong> (PKW mit Anhänger bis 3.500 kg, praktische Prüfung) und in der Schlüsselzahl{" "}
          <strong>B96</strong> (Gespanne bis 4.250 kg, siebenstündige Schulung ohne Prüfung) aus. Voraussetzung ist
          in beiden Fällen die Klasse B. Alle fünf Fahrlehrerinnen und Fahrlehrer unseres Teams unterrichten BE.
        </>
      }
      faq={faqAnhaenger}
      sources={[sources.fev10, sources.b96, sources.adacAusbildung]}
      service={{
        name: "Anhängerführerschein BE und B96-Schulung in Stuttgart",
        description: metaDescription,
        classes: ["BE", "B96"],
      }}
    >
      <Section title="Welchen Anhängerführerschein brauche ich?">
        <FactTable
          caption="Gewichtsgrenzen von B, B96 und BE"
          head={["Berechtigung", "Mindestalter", "Gespann", "Weg dorthin"]}
          rows={[
            ["Klasse B", "18 (17 BF17)", "Anhänger bis 750 kg – oder schwerer, solange das Gespann ≤ 3.500 kg bleibt", "Im Autoführerschein enthalten"],
            ["B96", "18 (17 BF17)", "Anhänger über 750 kg, Gespann bis 4.250 kg", "Mind. 7 Stunden Schulung in der Fahrschule, keine Prüfung"],
            ["Klasse BE", "18 (17 BF17)", "Anhänger bis 3.500 kg hinter einem Klasse-B-Fahrzeug", "Praktische Prüfung, keine Theorieprüfung"],
          ]}
        />
        <p>
          Faustregel: Für einen mittleren Wohnwagen oder einen einachsigen Pferdeanhänger hinter einem
          normalen PKW reicht häufig B96; für große Wohnwagen, Zweipferde-Anhänger oder einen Autotransporter
          hinter einem SUV brauchst du BE. Wir rechnen das anhand der Fahrzeugpapiere mit dir durch.
        </p>
      </Section>

      <Section title="So läuft die Anhängerausbildung bei uns" tone="tinted">
        <p>
          Du übst mit einem PKW und Kastenanhänger (Foto in unserem Fuhrpark auf der Startseite): Ankuppeln,
          Sicherung, Rangieren, Rückwärtsfahren um die Ecke, Abstellen – und die vorgeschriebenen Sonderfahrten
          Überland, Autobahn und bei Dunkelheit. Bei BE gibt es keine Mindestzahl an Übungsstunden; wer schon
          sicher fährt, ist meist nach wenigen Stunden prüfungsreif. Die BE-Prüfung nimmt der TÜV SÜD ab
          (Start in Stuttgart-Feuerbach, siehe <Link href="/fuehrerschein-ablauf/">Ablauf</Link>).
        </p>
        <p>
          Bürozeiten für die Anmeldung: {site.hours.office}. Das Angebot für BE oder B96 bekommst du
          schriftlich – siehe <Link href="/fuehrerschein-kosten/">Führerschein-Kosten</Link>, warum wir keine
          Pauschalpreise ins Netz stellen.
        </p>
      </Section>
    </TopicPage>
  );
}
