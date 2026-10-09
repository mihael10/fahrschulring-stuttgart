import Link from "next/link";
import { TopicPage } from "@/components/TopicPage";
import { Section, FactTable } from "@/components/content/Prose";
import { pageMetadata } from "@/lib/metadata";
import { faqKosten } from "@/content/faq";
import { sources } from "@/content/sources";
import { site } from "@/content/site";

const path = "/fuehrerschein-kosten/" as const;
const metaTitle = "Führerschein-Kosten in Stuttgart: Was kostet der Führerschein wirklich? | Fahrschulring";
const metaDescription =
  "Woraus sich die Führerschein-Kosten in Stuttgart zusammensetzen: Fahrschulgebühren, Pflicht-Sonderfahrten, TÜV-Prüfungsgebühren (24,99 € / 129,83 €), Behördengebühren – und warum ein Festpreis unseriös wäre. Angebot von Fahrschulring, Stuttgart-Mitte.";

export const metadata = pageMetadata({ path, title: metaTitle, description: metaDescription });

export default function KostenPage() {
  return (
    <TopicPage
      path={path}
      eyebrow="Führerschein-Kosten"
      title="Was kostet der Führerschein in Stuttgart?"
      description="Eine ehrliche Antwort: Es kommt auf dich an. Hier steht, aus welchen Posten der Preis besteht, welche davon feststehen und wie du ein verlässliches Angebot bekommst."
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      lead={
        <>
          Die Kosten für den Führerschein Klasse B setzen sich aus den <strong>Fahrschulgebühren</strong>{" "}
          (Grundbetrag, Theorie, Fahrstunden, Sonderfahrten, Prüfungsvorstellung), den{" "}
          <strong>Prüfungsgebühren des TÜV SÜD</strong> und den <strong>Nebenkosten</strong> (Antrag bei der
          Führerscheinstelle, Sehtest, Erste-Hilfe-Kurs, Passfoto) zusammen. Das Bundesverkehrsministerium nennt
          für Klasse B einen bundesweiten Durchschnitt von rund 3.400 € (Mai 2026). Was dein Führerschein bei{" "}
          <strong>Fahrschulring</strong> kostet, hängt vor allem von der Zahl deiner Übungsstunden ab – deshalb
          bekommst du von uns eine schriftliche Preisliste und ein individuelles Angebot statt eines Lockpreises.
        </>
      }
      faq={faqKosten}
      sources={[sources.tuevGebuehren, sources.bmvReform, sources.adacAusbildung, sources.stuttgartErsterteilung, sources.bundestagReform]}
    >
      <Section title="Die Kostenbestandteile im Überblick">
        <FactTable
          caption="Bestandteile der Führerschein-Kosten Klasse B"
          head={["Posten", "Steht vorher fest?", "Wer bekommt das Geld?", "Anmerkung"]}
          rows={[
            ["Grundbetrag der Fahrschule (Anmeldung, Theorieunterricht, Verwaltung)", "Ja", "Fahrschule", "Steht in unserer Preisliste"],
            ["Lernmaterial / Theorie-App", "Ja", "Fahrschule / Verlag", "Einmalig"],
            ["12 Sonderfahrten à 45 Min. (5 Überland, 4 Autobahn, 3 Nacht)", "Ja (Anzahl gesetzlich)", "Fahrschule", "Pflicht für Klasse B"],
            ["Übungsfahrstunden", "Nein", "Fahrschule", "Hängt von deinem Lernfortschritt ab – der größte variable Posten"],
            ["Vorstellung zur Theorie- und Praxisprüfung", "Ja (pro Versuch)", "Fahrschule", "Fällt bei Wiederholung erneut an"],
            ["TÜV SÜD Theorieprüfung Klasse B", "Ja: 24,99 €", "TÜV SÜD", "Gebührenordnung, Stand laut TÜV SÜD seit 31.01.2024"],
            ["TÜV SÜD praktische Prüfung Klasse B", "Ja: 129,83 €", "TÜV SÜD", "Pro Versuch"],
            ["Antrag Führerscheinstelle Stuttgart", "Ja (Gebührenordnung)", "Stadt Stuttgart", "Höhe siehe stuttgart.de; bei BF17 zusätzlich je Begleitperson"],
            ["Sehtest, Erste-Hilfe-Kurs, Passfoto", "Ja", "Optiker, Hilfsorganisation, Fotograf", "Nicht an die Fahrschule"],
          ]}
        />
        <p>
          <strong>Wichtig:</strong> Die Zahlen in dieser Tabelle sind amtliche Gebühren Dritter, keine Preise von
          Fahrschulring. Unsere eigenen Preise stehen in der Preisliste, die du vor der Anmeldung ausgehändigt
          bekommst.
        </p>
      </Section>

      <Section title="Warum ein Festpreis im Internet unseriös wäre" tone="tinted">
        <p>
          Bei fast allen Fahrschülern entscheidet die Zahl der Übungsstunden über den Endpreis – und die lässt
          sich vor der ersten Fahrstunde nicht seriös vorhersagen: Vorerfahrung, Lerntempo, Regelmäßigkeit der
          Termine und auch Prüfungsnerven spielen hinein. Ein pauschaler „Führerschein ab …“-Preis rechnet in
          der Regel mit dem gesetzlichen Minimum, das nur wenige erreichen. Wir sagen dir nach den ersten
          Fahrstunden ehrlich, wo du stehst – und planen die Prüfung erst, wenn Fahrlehrer und Schüler sicher
          sind. Das spart am Ende mehr Geld als jeder Rabatt.
        </p>
        <h3>So sparst du bei uns wirklich</h3>
        <ul>
          <li>Theorie zügig und am Stück absolvieren ({site.hours.theory}) und die Prüfung früh ablegen.</li>
          <li>Fahrstunden regelmäßig – zwei pro Woche sind lernökonomischer als eine alle zwei Wochen.</li>
          <li>
            Fahrsimulator nutzen: Abläufe wie Anfahren, Schalten und Blickführung übst du bei uns vorab ohne
            laufende Fahrstundenuhr.
          </li>
          <li>Vor dem Fahrzeugtyp entscheiden: Automatik/E-Auto oder Schaltung mit B197 (siehe <Link href="/klassen/auto/">Klasse B</Link>).</li>
        </ul>
      </Section>

      <Section title="Senkt die Führerscheinreform die Kosten?">
        <p>
          Die im Mai 2026 vom Kabinett beschlossene Reform ist noch nicht in Kraft (Stand Oktober 2026: Beratung
          im Bundestag). Der Bundesverkehrsminister bezifferte die mögliche Ersparnis im Oktober 2026 auf „mehrere
          Hundert, bestenfalls bis zu 1.000 Euro“ – mit großen regionalen Unterschieden. Das Ministerium rät
          ausdrücklich davon ab, mit dem Führerschein auf die Reform zu warten. Mehr zum Stand unter{" "}
          <Link href="/fuehrerschein-ablauf/">Ablauf &amp; Voraussetzungen</Link>.
        </p>
      </Section>

      <Section title="Dein Angebot von Fahrschulring" tone="tinted">
        <p>
          Sag uns Klasse, Vorerfahrung und Wunschfahrzeug – per Telefon (<a href={`tel:${site.phoneHref}`}>{site.phone}</a>),
          über das <Link href="/kontakt/">Kontaktformular</Link> oder persönlich in der {site.address.street} ({site.hours.office}).
          Du bekommst unsere aktuelle Preisliste und eine realistische Einschätzung des Gesamtumfangs.
        </p>
      </Section>
    </TopicPage>
  );
}
