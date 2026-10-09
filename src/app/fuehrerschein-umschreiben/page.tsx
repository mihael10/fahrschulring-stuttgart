import Link from "next/link";
import { TopicPage } from "@/components/TopicPage";
import { Section, FactTable } from "@/components/content/Prose";
import { pageMetadata } from "@/lib/metadata";
import { faqUmschreiben } from "@/content/faq";
import { sources } from "@/content/sources";
import { site } from "@/content/site";

const path = "/fuehrerschein-umschreiben/" as const;
const metaTitle = "Ausländischen Führerschein umschreiben in Stuttgart – Prüfung & Vorbereitung | Fahrschulring";
const metaDescription =
  "Foreign driving licence conversion in Stuttgart: Fahrschulring (Stuttgart-Mitte) prepares you for the German theory and practical exam. 185-day rule, EU vs. Anlage 11 vs. other countries, theory test in English and 11 more languages, Führerscheinstelle Stuttgart.";

export const metadata = pageMetadata({ path, title: metaTitle, description: metaDescription });

export default function UmschreibenPage() {
  return (
    <TopicPage
      path={path}
      eyebrow="Führerschein umschreiben"
      title="Ausländischen Führerschein in Stuttgart umschreiben"
      description="Ob EU-Führerschein, Anlage-11-Staat oder Drittland: Wir erklären, wann du Prüfungen brauchst – und bereiten dich darauf vor. English summary below."
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      lead={
        <>
          Wer seinen Wohnsitz nach Deutschland verlegt, darf mit dem ausländischen Führerschein noch{" "}
          <strong>sechs Monate (185 Tage)</strong> fahren und muss ihn danach umschreiben lassen. EU/EWR-Führerscheine
          gelten weiter; Führerscheine aus Staaten der <strong>Anlage 11 FeV</strong> werden ohne oder mit reduzierter
          Prüfung umgeschrieben; alle übrigen Länder erfordern eine <strong>Theorie- und praktische Prüfung</strong>.
          <strong> Fahrschulring</strong> in Stuttgart-Mitte bereitet dich auf diese Prüfungen vor – mit so vielen
          Fahrstunden, wie du brauchst, nicht mehr.
        </>
      }
      faq={faqUmschreiben}
      sources={[sources.stuttgartUmschreibung, sources.fevAnlage11, sources.sprachen, sources.adacTheorie, sources.tuevFeuerbach]}
      service={{
        name: "Vorbereitung auf die Umschreibung ausländischer Führerscheine in Stuttgart",
        description: metaDescription,
        classes: ["B"],
      }}
    >
      <Section title="Welche Prüfungen brauche ich? Das hängt vom Ausstellungsland ab">
        <FactTable
          caption="Umschreibung nach Herkunft des Führerscheins"
          head={["Führerschein aus …", "Umschreibung", "Prüfung", "Fahrschule nötig?"]}
          rows={[
            ["EU / EWR", "Nicht nötig (freiwilliger Umtausch möglich)", "Keine", "Nein"],
            ["Staat der Anlage 11 FeV (z. B. Schweiz, Japan, Südkorea, Kanada, Australien, viele US-Bundesstaaten)", "Innerhalb der 6 Monate beantragen", "Keine oder nur Theorie / nur Praxis – je nach Staat und Klasse", "Nur bei Prüfpflicht"],
            ["Alle anderen Staaten (Drittstaaten)", "Innerhalb der 6 Monate beantragen", "Theorie- und praktische Prüfung", "Ja – zur Prüfungsvorstellung; keine Mindeststundenzahl"],
          ]}
        />
        <p>
          Die Liste der Anlage-11-Staaten und die jeweiligen Einschränkungen (manche nur für Klasse B, manche nur
          mit Theorieprüfung) stehen in der Fahrerlaubnis-Verordnung; die Führerscheinstelle Stuttgart prüft
          deinen Einzelfall im Termin. Voraussetzung ist immer, dass der Führerschein erworben wurde, während du
          mindestens 185 Tage im Ausstellungsstaat gewohnt hast.
        </p>
      </Section>

      <Section title="So läuft die Umschreibung in Stuttgart" tone="tinted">
        <ol className="list-decimal space-y-2">
          <li>
            <strong>Termin bei der Führerscheinstelle</strong> der Stadt Stuttgart (Löwentorbogen 11, 70376
            Stuttgart, seit März 2026). Mitbringen: Pass, Meldebescheinigung, ausländischer Führerschein (ggf. mit
            beglaubigter Übersetzung), Passfoto – bei Prüfpflicht außerdem Sehtest und Erste-Hilfe-Nachweis.
          </li>
          <li>
            <strong>Anmeldung bei Fahrschulring</strong>, falls Prüfungen vorgeschrieben sind. Theoriestunden sind
            bei der Umschreibung nicht vorgeschrieben; für die Praxisprüfung brauchst du eine Fahrschule, die dich
            vorstellt.
          </li>
          <li>
            <strong>Theorieprüfung beim TÜV SÜD</strong> – auf Deutsch oder in einer der zwölf zugelassenen
            Fremdsprachen (Englisch, Französisch, Griechisch, Hocharabisch, Italienisch, Kroatisch, Polnisch,
            Portugiesisch, Rumänisch, Russisch, Spanisch, Türkisch). Wir empfehlen die Lern-App, die wir zur
            Verfügung stellen.
          </li>
          <li>
            <strong>Fahrstunden</strong> auf deutsche Besonderheiten: Rechts-vor-links, Straßenbahn und Busspuren
            in Stuttgart, Autobahn, Kreisverkehre, Verhalten an Fußgängerüberwegen – und das Prüfungsformat selbst.
            Erfahrene Fahrer brauchen oft nur wenige Stunden.
          </li>
          <li>
            <strong>Praktische Prüfung</strong> beim TÜV SÜD (Start in Stuttgart-Feuerbach) – dann wird der
            deutsche Führerschein ausgestellt.
          </li>
        </ol>
        <p>
          Ein Beispiel aus unseren Google-Bewertungen: Ein Fahrschüler beschreibt, dass er seinen ausländischen
          Führerschein bei uns umgeschrieben und die Praxisprüfung im ersten Anlauf bestanden hat (nachlesbar auf
          unserem <a href={site.googleReviews.reviewsUrl} target="_blank" rel="noreferrer noopener">Google-Profil</a>).
        </p>
      </Section>

      <Section title="In English: converting your foreign driving licence in Stuttgart">
        <p lang="en">
          After registering your residence in Germany you may drive on your foreign licence for six months (185
          days). EU/EEA licences remain valid. Licences from the countries listed in Annex 11 of the German
          Driving Licence Regulation (FeV) are converted without a test or with a reduced test; all other
          licences require a theory and a practical test. The application is made at the Stuttgart driving licence
          office (Führerscheinstelle, Löwentorbogen 11, 70376 Stuttgart – appointment required).
        </p>
        <p lang="en">
          Fahrschulring, a driving school in Stuttgart city centre ({site.address.street}, 70174 Stuttgart),
          prepares you for both exams. The theory test is available in English and eleven other languages. There
          is no minimum number of lessons; experienced drivers usually need only a few hours to get used to German
          priority rules, trams and motorway driving. Call us on <a href={`tel:${site.phoneHref}`}>{site.phone}</a>{" "}
          or use the <Link href="/kontakt/">contact form</Link>.
        </p>
      </Section>
    </TopicPage>
  );
}
