import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktiere Fahrschulring Stuttgart – fordere unverbindlich dein individuelles Angebot an.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Lass uns starten"
        description="Erzähl uns kurz, was du vorhast – wir melden uns mit den nächsten Schritten und einem individuellen Angebot."
      />
      <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-xl font-bold text-navy-950">{site.legalName}</h2>
          <address className="mt-3 not-italic text-navy-700">
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
          </address>

          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-navy-900">Telefon</dt>
              <dd>
                <a href={`tel:${site.phoneHref}`} className="text-navy-700 hover:text-navy-950">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-navy-900">E-Mail</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="text-navy-700 hover:text-navy-950">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-navy-900">Bürozeiten</dt>
              <dd className="text-navy-700">{site.hours.office}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy-900">Theorieunterricht</dt>
              <dd className="text-navy-700">{site.hours.theory}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
