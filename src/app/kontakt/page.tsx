import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktiere Fahrschulring Stuttgart telefonisch oder per E-Mail – wir melden uns mit den nächsten Schritten.",
  alternates: { canonical: "/kontakt/" },
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Lass uns starten"
        description="Ruf uns direkt an oder schreib uns eine E-Mail – wir melden uns mit den nächsten Schritten und einem individuellen Angebot."
      />
      <div className="container-page py-16 sm:py-20">
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-green-100 bg-white p-8 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-green-600">
              Telefon
            </span>
            <span className="text-2xl font-extrabold text-green-950">{site.phone}</span>
            <Button href={`tel:${site.phoneHref}`} variant="primary" className="mt-3">
              Jetzt anrufen
            </Button>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-2xl border border-green-100 bg-white p-8 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-green-600">
              E-Mail
            </span>
            <span className="text-2xl font-extrabold text-green-950">{site.email}</span>
            <Button href={`mailto:${site.email}`} variant="secondary" className="mt-3">
              E-Mail schreiben
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <h2 className="text-xl font-bold text-green-950">{site.legalName}</h2>
          <address className="mt-3 not-italic text-green-700">
            {site.address.street}, {site.address.zip} {site.address.city}
          </address>

          <dl className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm">
            <div>
              <dt className="font-semibold text-green-900">Bürozeiten</dt>
              <dd className="text-green-700">{site.hours.office}</dd>
            </div>
            <div>
              <dt className="font-semibold text-green-900">Theorieunterricht</dt>
              <dd className="text-green-700">{site.hours.theory}</dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
