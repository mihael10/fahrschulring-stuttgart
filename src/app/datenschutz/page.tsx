import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <div className="container-page max-w-2xl space-y-8 py-16 text-sm leading-relaxed text-green-800 sm:py-20">
        <section>
          <h2 className="text-base font-bold text-green-950">1. Verantwortlicher</h2>
          <p className="mt-3">
            {site.legalName}
            <br />
            {site.address.street}, {site.address.zip} {site.address.city}
            <br />
            E-Mail: {site.email} · Telefon: {site.phone}
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-green-950">2. Hosting und Server-Logfiles</h2>
          <p className="mt-3">
            Diese Website wird über GitHub Pages (GitHub, Inc.) gehostet.
            Beim Aufruf der Website erhebt der Hosting-Provider automatisch technische
            Zugriffsdaten (Server-Logfiles), unter anderem IP-Adresse, Datum und Uhrzeit
            des Zugriffs, aufgerufene Seite, Browsertyp und Referrer-URL. Diese Daten
            dienen ausschließlich der technischen Bereitstellung und Absicherung der
            Website (Art. 6 Abs. 1 lit. f DSGVO, berechtigtes Interesse an einem sicheren
            Betrieb) und werden nicht mit anderen Datenquellen zusammengeführt.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-green-950">3. Kontaktaufnahme</h2>
          <p className="mt-3">
            Du erreichst uns derzeit ausschließlich telefonisch oder per E-Mail; ein
            Online-Kontaktformular steht momentan nicht zur Verfügung. Wenn du uns per
            E-Mail schreibst, verarbeiten wir die von dir mitgeteilten Daten (z. B. Name,
            E-Mail-Adresse, Nachricht) ausschließlich zur Bearbeitung deiner Anfrage und
            für den Fall von Anschlussfragen (Art. 6 Abs. 1 lit. b DSGVO) und löschen sie
            nach abgeschlossener Bearbeitung, sofern keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-green-950">4. Google Maps</h2>
          <p className="mt-3">
            Auf der Seite &bdquo;Anfahrt&ldquo; binden wir eine Karte des Dienstes Google
            Maps (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland)
            ein. Beim Aufruf dieser Seite wird eine Verbindung zu Servern von Google
            hergestellt, wobei auch Daten wie deine IP-Adresse an Google übertragen
            werden können. Rechtsgrundlage ist unser berechtigtes Interesse an einer
            anschaulichen Anfahrtsbeschreibung (Art. 6 Abs. 1 lit. f DSGVO). Weitere
            Informationen findest du in der{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Datenschutzerklärung von Google
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-green-950">5. Cookies und Tracking (Google Analytics)</h2>
          <p className="mt-3">
            Diese Website nutzt Google Analytics, einen Webanalysedienst der Google
            Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland
            (&bdquo;Google&ldquo;). Google Analytics verwendet Cookies und ähnliche
            Technologien, die eine Analyse der Websitenutzung ermöglichen (z. B.
            aufgerufene Seiten, Verweildauer, ungefährer Standort, verwendetes Gerät).
            Die dabei erzeugten Informationen werden an einen Server von Google
            übertragen und dort gespeichert.
          </p>
          <p className="mt-3">
            Google Analytics wird bei uns erst geladen und aktiv, nachdem du in dem
            beim Seitenaufruf eingeblendeten Cookie-Banner ausdrücklich zugestimmt
            hast. Rechtsgrundlage ist damit ausschließlich deine Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG). Du kannst deine
            Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem du
            über den Link &bdquo;Cookie-Einstellungen&ldquo; im Footer deine Auswahl
            änderst; ohne Zustimmung werden keine Analyse-Cookies gesetzt und keine
            Nutzungsdaten an Google übertragen.
          </p>
          <p className="mt-3">
            Weitere Informationen zur Datenverarbeitung durch Google findest du in der{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Datenschutzerklärung von Google
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-green-950">6. SSL-/TLS-Verschlüsselung</h2>
          <p className="mt-3">
            Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine
            verschlüsselte Verbindung erkennst du daran, dass die Adresszeile des
            Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-green-950">7. Deine Rechte</h2>
          <p className="mt-3">
            Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder
            Einschränkung der Verarbeitung deiner gespeicherten personenbezogenen Daten,
            ein Widerspruchsrecht gegen die Verarbeitung sowie das Recht auf
            Datenübertragbarkeit (Art. 15–21 DSGVO). Zudem steht dir ein
            Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu. Wende dich dazu
            an {site.email}.
          </p>
        </section>

        <p className="text-xs text-green-500">Stand: September 2026</p>
      </div>
    </>
  );
}
