import Link from "next/link";
import { TopicPage } from "@/components/TopicPage";
import { Section } from "@/components/content/Prose";
import { FormDownloadButton } from "@/components/FormDownloads";
import { pageMetadata } from "@/lib/metadata";
import { faqAnmeldung } from "@/content/faq";
import { sources } from "@/content/sources";
import { site } from "@/content/site";
import { registrationForms } from "@/content/forms";

const path = "/anmeldung/" as const;
const metaTitle = "Anmeldung & Formulare: Ausbildungsvertrag zum Download | Fahrschulring Stuttgart";
const metaDescription =
  "Anmeldeformulare von Fahrschulring Stuttgart zum Ausfüllen: B197, Klasse A und B196. Mit Checkliste, welche Unterlagen du brauchst und wo du Sehtest, Erste-Hilfe-Kurs und Antrag bei der Führerscheinstelle Stuttgart bekommst.";

export const metadata = pageMetadata({ path, title: metaTitle, description: metaDescription });

const allSources = [
  ...new Map(
    [sources.fev12, sources.fev19, sources.drkStuttgart, ...registrationForms.flatMap((f) => f.authority.links)].map(
      (s) => [s.href, s]
    )
  ).values(),
];

export default function AnmeldungPage() {
  return (
    <TopicPage
      path={path}
      eyebrow="Anmeldung & Formulare"
      title="Anmeldung bei Fahrschulring: Formulare und Unterlagen"
      description="Vertrag herunterladen, ausfüllen, Unterlagen besorgen – und alles zusammen bei uns im Büro abgeben."
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      lead={
        <>
          So meldest du dich bei <strong>Fahrschulring</strong> in Stuttgart-Mitte an: <strong>1.</strong> Lade den
          Ausbildungsvertrag für deine Klasse herunter, <strong>2.</strong> fülle ihn am PC aus oder drucke ihn aus,{" "}
          <strong>3.</strong> besorge die Unterlagen aus der Checkliste und <strong>4.</strong> bring alles während
          der Bürozeiten ({site.hours.office}) in die {site.address.street} – unterschrieben wird vor Ort.
          Online-Formulare gibt es bisher für <strong>B197</strong>, <strong>Klasse A</strong> und{" "}
          <strong>B196</strong>; für alle anderen Klassen bekommst du den Vertrag im Büro.
        </>
      }
      faq={faqAnmeldung}
      sources={allSources}
    >
      {registrationForms.map((form, i) => (
        <Section key={form.id} id={form.id.toLowerCase()} title={form.title} tone={i % 2 ? "tinted" : "white"}>
          <p>{form.intro}</p>
          <div className="pt-1">
            <FormDownloadButton form={form} />
          </div>

          <h3>Das bringst du zur Anmeldung mit</h3>
          <ul>
            <li>
              <strong>Den ausgefüllten Ausbildungsvertrag</strong> (ausgedruckt; unterschrieben wird im Büro)
            </li>
            {form.bring.map((b) => (
              <li key={b.item}>
                <strong>{b.item}</strong> – {b.where}
                {b.link && (
                  <>
                    {" "}
                    (
                    <a href={b.link.source.href} target="_blank" rel="noreferrer noopener">
                      {b.link.text}
                    </a>
                    )
                  </>
                )}
              </li>
            ))}
          </ul>

          <h3>{form.authority.title}</h3>
          <ol className="space-y-1.5 [&>li]:!list-decimal">
            {form.authority.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <p className="text-sm">
            Offizielle Infos:{" "}
            {form.authority.links.map((l, j) => (
              <span key={l.href}>
                {j > 0 && " · "}
                <a href={l.href} target="_blank" rel="noreferrer noopener">
                  {l.label}
                </a>
              </span>
            ))}
          </p>

          {form.note && <p className="text-sm">{form.note}</p>}
          <p className="text-sm">
            Mehr zur Ausbildung: <Link href={form.classPage}>{form.classPageLabel}</Link>
          </p>
        </Section>
      ))}

      <Section title="Gut zu wissen" tone={registrationForms.length % 2 ? "tinted" : "white"}>
        <ul>
          <li>
            Ausfüllen geht in jedem PDF-Programm. Deine Angaben werden dabei <strong>nicht</strong> an uns
            übertragen – sie bleiben auf deinem Gerät, bis du den Ausdruck bei uns abgibst.
          </li>
          <li>Bei Minderjährigen unterschreibt zusätzlich ein Erziehungsberechtigter.</li>
          <li>
            Den kompletten Weg vom Antrag bis zur Prüfung erklärt{" "}
            <Link href="/fuehrerschein-ablauf/">Ablauf &amp; Voraussetzungen</Link>.
          </li>
          <li>
            Unsicher, was du brauchst? Ruf an unter <a href={`tel:${site.phoneHref}`}>{site.phone}</a> oder schreib
            an <a href={`mailto:${site.email}`}>{site.email}</a>.
          </li>
        </ul>
      </Section>
    </TopicPage>
  );
}
