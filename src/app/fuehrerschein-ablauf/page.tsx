import Link from "next/link";
import { TopicPage } from "@/components/TopicPage";
import { Section, FactTable } from "@/components/content/Prose";
import { pageMetadata } from "@/lib/metadata";
import { faqAblauf } from "@/content/faq";
import { sources } from "@/content/sources";
import { site } from "@/content/site";

const path = "/fuehrerschein-ablauf/" as const;
const metaTitle = "Führerschein machen in Stuttgart: Ablauf, Voraussetzungen, Führerscheinstelle & Prüfung | Fahrschulring";
const metaDescription =
  "Schritt für Schritt zum Führerschein in Stuttgart: Unterlagen, Sehtest, Erste-Hilfe-Kurs, Antrag bei der Führerscheinstelle (Löwentorbogen 11), Theorie- und Praxisprüfung beim TÜV SÜD in Feuerbach – erklärt von Fahrschulring, Stuttgart-Mitte.";

export const metadata = pageMetadata({ path, title: metaTitle, description: metaDescription });

export default function AblaufPage() {
  return (
    <TopicPage
      path={path}
      eyebrow="Ablauf & Voraussetzungen"
      title="Führerschein machen in Stuttgart: So läuft es ab"
      description="Vom Erstgespräch über den Antrag bei der Führerscheinstelle bis zur Prüfung beim TÜV – in der richtigen Reihenfolge, mit den offiziellen Stuttgarter Anlaufstellen."
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      lead={
        <>
          In Stuttgart läuft der Führerschein in sechs Schritten: <strong>1.</strong> Anmeldung in der Fahrschule,{" "}
          <strong>2.</strong> Sehtest, Erste-Hilfe-Kurs und Passfoto, <strong>3.</strong> Antrag bei der
          Führerscheinstelle der Stadt Stuttgart (seit März 2026: Löwentorbogen 11, Bad Cannstatt – für Stuttgarter
          auch online), <strong>4.</strong> Theorieunterricht und Fahrstunden, <strong>5.</strong> Theorieprüfung,{" "}
          <strong>6.</strong> praktische Prüfung beim TÜV SÜD. Bei <strong>Fahrschulring</strong> in Stuttgart-Mitte
          begleiten wir dich durch jeden dieser Schritte – die Anmeldung geht telefonisch, per Formular oder vor Ort
          ({site.hours.office}).
        </>
      }
      faq={faqAblauf}
      sources={[sources.adacAntrag, sources.stuttgartErsterteilung, sources.stuttgartUmzug, sources.stuttgartTermine, sources.adacAusbildung, sources.adacTheorie, sources.sprachen, sources.tuevFeuerbach, sources.tuevVerbandQuote, sources.bmvReform, sources.bundestagReform]}
    >
      <Section title="Schritt 1: Erstgespräch und Anmeldung bei Fahrschulring">
        <p>
          Wir klären mit dir die passende Klasse (<Link href="/klassen/">Übersicht aller Führerscheinklassen</Link>),
          ob BF17, Automatik/B197 oder E-Auto für dich sinnvoll ist, und wie dein Zeitplan aussieht. Du bekommst
          die schriftliche Preisliste und die Anmeldebestätigung, die du für den Antrag brauchst. Mitbringen:
          Personalausweis oder Reisepass.
        </p>
      </Section>

      <Section title="Schritt 2: Sehtest, Erste-Hilfe-Kurs, Passfoto" tone="tinted">
        <FactTable
          caption="Unterlagen für den Führerscheinantrag"
          head={["Unterlage", "Wo", "Hinweis"]}
          rows={[
            ["Sehtest-Bescheinigung", "Optiker, Augenarzt (amtlich anerkannte Sehteststelle)", "Nicht älter als 2 Jahre"],
            ["Erste-Hilfe-Nachweis", "DRK, ASB, Johanniter, Malteser u. a.", "9 Unterrichtseinheiten à 45 Min., für alle Klassen"],
            ["Biometrisches Passfoto", "Fotograf oder Automat", "Wie beim Personalausweis"],
            ["Personalausweis / Reisepass", "—", "Bei ausländischem Pass ggf. Meldebescheinigung"],
            ["Anmeldebestätigung der Fahrschule", "Fahrschulring", "Bekommst du beim Erstgespräch"],
            ["Bei BF17: Begleitpersonen", "Formular der Führerscheinstelle", "Je Begleitperson: Kopie des Führerscheins, Zustimmung der Eltern"],
          ]}
        />
      </Section>

      <Section title="Schritt 3: Antrag bei der Führerscheinstelle Stuttgart">
        <p>
          Zuständig ist die <strong>Kfz-Zulassungs- und Führerscheinstelle der Landeshauptstadt Stuttgart</strong>.
          Sie ist im März 2026 von Feuerbach nach <strong>Löwentorbogen 11, 70376 Stuttgart (Bad Cannstatt)</strong>{" "}
          umgezogen – Stadtbahn-Haltestelle Löwentor, eigene Tiefgarage. Persönlich geht es nur mit Termin
          (kostenlose Online-Buchung); Stuttgarter Bürgerinnen und Bürger können den Erstantrag auch{" "}
          <strong>online</strong> stellen. Den Antrag kannst du bis zu sechs Monate vor dem Mindestalter einreichen.
          Plane einige Wochen Bearbeitungszeit ein – mit Theorie und Fahrstunden kannst du derweil anfangen.
        </p>
        <p>
          Wohnst du nicht in Stuttgart (z. B. Leinfelden-Echterdingen, Fellbach, Esslingen), ist die
          Führerscheinstelle deines Landkreises zuständig; die Fahrschule kannst du trotzdem frei wählen.
        </p>
      </Section>

      <Section title="Schritt 4: Theorie und Praxis" tone="tinted">
        <p>
          Theorieunterricht bei uns: {site.hours.theory}, {site.address.street}. Für Klasse B sind nach geltendem
          Recht 14 Doppelstunden (12 Grundstoff + 2 Zusatzstoff) vorgeschrieben. In der Praxis stehen 12
          Sonderfahrten fest (5 Überland, 4 Autobahn, 3 Dunkelheit); die übrigen Fahrstunden richten sich nach
          deinem Fortschritt. Den Einstieg erleichtert unser <strong>Fahrsimulator</strong>: erste Abläufe und
          Gefahrensituationen übst du dort, bevor es auf die Straße geht.
        </p>
        <p>
          Weil die praktische Prüfung in Stuttgart-Feuerbach startet, üben wir mit dir neben der Innenstadt auch
          dort und auf den Zufahrten dorthin – du kennst die Strecken am Prüfungstag also schon.
        </p>
      </Section>

      <Section title="Schritt 5 und 6: Prüfungen beim TÜV SÜD">
        <p>
          <strong>Theorieprüfung:</strong> am Computer, für Klasse B 30 Fragen mit maximal 10 Fehlerpunkten (nicht
          zwei 5-Punkte-Fragen falsch). Verfügbar auf Deutsch und in zwölf Fremdsprachen (u. a. Englisch, Türkisch,
          Hocharabisch, Russisch, Spanisch, Polnisch). Die Theorieprüfung musst du innerhalb von zwölf Monaten
          nach Erteilung des Prüfauftrags ablegen, sonst verfällt der Antrag.
        </p>
        <p>
          <strong>Praktische Prüfung:</strong> Seit April 2025 starten die praktischen Prüfungen in Stuttgart
          einheitlich am TÜV-SÜD-Service-Center in Stuttgart-Feuerbach. Du fährst mit deinem Fahrlehrer im
          gewohnten Fahrschulauto; der Prüfer sitzt hinten. Zur Einordnung: Laut TÜV-Verband sind im Prüfjahr
          2025 bundesweit rund 44 % der Theorie- und 37 % der Praxisprüfungen für Klasse B nicht bestanden
          worden – deshalb gehen wir erst in die Prüfung, wenn du wirklich sicher bist.
        </p>
      </Section>

      <Section title="Führerscheinreform 2026/2027: Was gilt heute?" tone="tinted">
        <p>
          Das Bundeskabinett hat am 20. Mai 2026 den Entwurf „Bezahlbarer Führerschein“ beschlossen: Theorie soll
          künftig auch online möglich sein, der Fragenkatalog um etwa ein Drittel schrumpfen, Fahrsimulatoren
          sollen ergänzend anerkannt werden, und die Sonderfahrten sollen nicht mehr in fester Zahl vorgeschrieben
          sein. Der Bundestag hat den Entwurf am 24. September 2026 in erster Lesung beraten; die Verabschiedung
          und die Zustimmung des Bundesrats stehen noch aus. Das Verkehrsministerium nennt frühestens Anfang 2027
          als Inkrafttreten und rät Fahrschülern ausdrücklich, <strong>nicht zu warten</strong>. Bis dahin gilt
          alles, was auf dieser Seite steht. Wir aktualisieren sie, sobald sich die Rechtslage ändert.
        </p>
      </Section>
    </TopicPage>
  );
}
