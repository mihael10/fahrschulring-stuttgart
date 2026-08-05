import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <div className="container-page max-w-2xl space-y-8 py-16 text-sm leading-relaxed text-navy-800 sm:py-20">
        <section>
          <h2 className="text-base font-bold text-navy-950">Angaben gemäß § 5 DDG</h2>
          <p className="mt-3">
            {site.legalName}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
            <br />
            {site.address.country}
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-navy-950">Vertreten durch</h2>
          <p className="mt-3">{site.owner}</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-navy-950">Kontakt</h2>
          <p className="mt-3">
            Telefon: {site.phone}
            <br />
            E-Mail: {site.email}
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-navy-950">Registereintrag</h2>
          <p className="mt-3">
            Eintragung im Handelsregister.
            <br />
            Registergericht: {site.legal.court}
            <br />
            Registernummer: {site.legal.registerNumber}
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-navy-950">Umsatzsteuer-ID</h2>
          <p className="mt-3">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            {site.legal.vatId}
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-navy-950">Zuständige Aufsichtsbehörde</h2>
          <p className="mt-3">{site.legal.supervisoryAuthority}</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-navy-950">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p className="mt-3">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
            einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-navy-950">Haftung für Inhalte</h2>
          <p className="mt-3">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf
            diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
            DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
            forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-navy-950">Haftung für Links</h2>
          <p className="mt-3">
            Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
            Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
            ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-navy-950">Urheberrecht</h2>
          <p className="mt-3">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
            gekennzeichnet.
          </p>
        </section>
      </div>
    </>
  );
}
