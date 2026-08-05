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
      <div className="container-page max-w-2xl space-y-8 py-16 text-sm leading-relaxed text-navy-800 sm:py-20">
        <section>
          <h2 className="text-base font-bold text-navy-950">1. Verantwortlicher</h2>
          <p className="mt-3">
            {site.legalName}
            <br />
            {site.address.street}, {site.address.zip} {site.address.city}
            <br />
            E-Mail: {site.email} · Telefon: {site.phone}
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-navy-950">2. Hosting und Server-Logfiles</h2>
          <p className="mt-3">
            Diese Website wird bei einem Cloud-Hosting-Anbieter (DigitalOcean) betrieben.
            Beim Aufruf der Website erhebt der Hosting-Provider automatisch technische
            Zugriffsdaten (Server-Logfiles), unter anderem IP-Adresse, Datum und Uhrzeit
            des Zugriffs, aufgerufene Seite, Browsertyp und Referrer-URL. Diese Daten
            dienen ausschließlich der technischen Bereitstellung und Absicherung der
            Website (Art. 6 Abs. 1 lit. f DSGVO, berechtigtes Interesse an einem sicheren
            Betrieb) und werden nicht mit anderen Datenquellen zusammengeführt.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-navy-950">3. Kontaktformular</h2>
          <p className="mt-3">
            Wenn du das Kontaktformular nutzt, verarbeiten wir die von dir angegebenen
            Daten (Name, E-Mail-Adresse, optional Telefonnummer, gewünschte
            Führerscheinklasse, Nachricht) ausschließlich zur Bearbeitung deiner Anfrage
            und für den Fall von Anschlussfragen (Art. 6 Abs. 1 lit. b DSGVO). Die Daten
            werden per E-Mail an unser Postfach übermittelt und nach abgeschlossener
            Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
            entgegenstehen.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-navy-950">4. Google Maps</h2>
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
          <h2 className="text-base font-bold text-navy-950">5. Cookies und Tracking</h2>
          <p className="mt-3">
            Diese Website setzt derzeit keine Analyse- oder Marketing-Cookies ein. Sollte
            sich das künftig ändern (z. B. durch Webanalyse), informieren wir dich an
            dieser Stelle und holen, soweit erforderlich, vorab deine Einwilligung ein.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-navy-950">6. SSL-/TLS-Verschlüsselung</h2>
          <p className="mt-3">
            Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine
            verschlüsselte Verbindung erkennst du daran, dass die Adresszeile des
            Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-navy-950">7. Deine Rechte</h2>
          <p className="mt-3">
            Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder
            Einschränkung der Verarbeitung deiner gespeicherten personenbezogenen Daten,
            ein Widerspruchsrecht gegen die Verarbeitung sowie das Recht auf
            Datenübertragbarkeit (Art. 15–21 DSGVO). Zudem steht dir ein
            Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu. Wende dich dazu
            an {site.email}.
          </p>
        </section>

        <p className="text-xs text-navy-500">Stand: August 2026</p>
      </div>
    </>
  );
}
