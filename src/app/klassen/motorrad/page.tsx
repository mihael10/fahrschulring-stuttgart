import Link from "next/link";
import { TopicPage } from "@/components/TopicPage";
import { Section, FactTable } from "@/components/content/Prose";
import { pageMetadata } from "@/lib/metadata";
import { faqMotorrad } from "@/content/faq";
import { sources } from "@/content/sources";
import { classes } from "@/content/classes";
import { fleet } from "@/content/fleet";
import { site } from "@/content/site";

const path = "/klassen/motorrad/" as const;
const metaTitle = "Motorradführerschein Stuttgart: Klasse A, A2, A1, AM & B196 | Fahrschulring";
const metaDescription =
  "Motorradführerschein bei Fahrschulring in Stuttgart-Mitte: alle Zweiradklassen AM, A1, A2, A und die B196-Erweiterung für 125er. Mindestalter, Stufenaufstieg, Voraussetzungen und unsere Schulungsmotorräder.";

export const metadata = pageMetadata({ path, title: metaTitle, description: metaDescription });

const moto = classes.filter((c) => c.group === "Motorrad");
const bikes = fleet.filter((v) => v.category === "Motorrad");

export default function MotorradPage() {
  return (
    <TopicPage
      path={path}
      eyebrow="Motorradführerschein"
      title="Motorradführerschein in Stuttgart: AM, A1, A2, A und B196"
      description="Vom Roller bis zum Motorrad ohne Leistungsgrenze – alle Zweiradklassen an einem Ort, mitten in Stuttgart."
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      lead={
        <>
          <strong>Fahrschulring</strong> in Stuttgart-Mitte ({site.address.street}) bildet in allen
          Motorradklassen aus: <strong>AM</strong> (Roller, ab 15), <strong>A1</strong> (125er, ab 16),{" "}
          <strong>A2</strong> (bis 35 kW, ab 18) und <strong>A</strong> (unbegrenzt, ab 24 oder ab 20 nach zwei
          Jahren A2) – sowie die <strong>B196</strong>-Erweiterung, mit der Autofahrer ab 25 ohne Prüfung ein
          125er-Motorrad fahren dürfen. Zwei unserer Fahrlehrer, Heiko Schaible und Karol Szymanowski,
          unterrichten die Klasse A.
        </>
      }
      faq={faqMotorrad}
      sources={[sources.fev10, sources.adacMotorrad, sources.b196, sources.adacAusbildung]}
      service={{
        name: "Motorradführerschein-Ausbildung (AM, A1, A2, A, B196) in Stuttgart",
        description: metaDescription,
        classes: moto.map((c) => c.id),
      }}
    >
      <Section title="Die Zweiradklassen auf einen Blick">
        <FactTable
          caption="Mindestalter und Fahrzeuge der Zweiradklassen"
          rows={moto.map((c) => [c.title, c.minAge, c.summary, [c.requires && `Voraussetzung: ${c.requires}`, c.includes].filter(Boolean).join(" · ") || "—"])}
        />
        <p>
          <strong>Stufenaufstieg:</strong> Wer A2 seit mindestens zwei Jahren hat, steigt mit einer rein
          praktischen Prüfung auf A auf – ohne neue Theorieprüfung. Von A1 auf A2 gilt dasselbe Prinzip.
        </p>
      </Section>

      <Section title="B196: 125er fahren mit dem Autoführerschein" tone="tinted">
        <p>
          Die Schlüsselzahl B196 ist keine eigene Klasse, sondern eine Erweiterung der Klasse B. Voraussetzungen:
          mindestens <strong>25 Jahre</strong> und seit mindestens <strong>fünf Jahren</strong> Klasse B. Die
          Schulung umfasst mindestens <strong>4 Theorie- und 5 Praxiseinheiten à 90 Minuten</strong>, es gibt{" "}
          <strong>keine Prüfung</strong>. Die Eintragung muss innerhalb eines Jahres nach der Schulung beantragt
          werden. B196 gilt nur in Deutschland und ist kein A1-Führerschein – wer auch im Ausland 125er fahren
          will, braucht A1.
        </p>
        <p>
          Bei uns fährst du die B196-Schulung auf einer KTM Duke 125. Die Praxiseinheiten finden in der
          Motorradsaison statt – sichere dir Termine am besten vor dem Frühjahr.
        </p>
      </Section>

      <Section title="Unsere Schulungsmotorräder">
        <ul>
          {bikes.map((b) => (
            <li key={b.name}>
              <strong>{b.name}</strong>
              {b.tag && ` – Klasse ${b.tag}`}
            </li>
          ))}
        </ul>
        <p>
          Übungsplatzfahrten (Grundfahraufgaben wie Slalom, Ausweichen, Gefahrbremsung) und die vorgeschriebenen
          Sonderfahrten (Überland, Autobahn, Dunkelheit) gehören zu jeder Motorradklasse. Theorieunterricht:{" "}
          {site.hours.theory}. Wie Antrag, Sehtest und Erste-Hilfe-Kurs ablaufen, steht unter{" "}
          <Link href="/fuehrerschein-ablauf/">Ablauf &amp; Voraussetzungen</Link>.
        </p>
      </Section>
    </TopicPage>
  );
}
