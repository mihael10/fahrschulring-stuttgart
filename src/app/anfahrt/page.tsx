import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Anfahrt",
  description: "So findest du zu Fahrschulring Stuttgart in der Hegelstraße 48.",
};

export default function AnfahrtPage() {
  const query = encodeURIComponent(
    `${site.address.street}, ${site.address.zip} ${site.address.city}`
  );

  return (
    <>
      <PageHero eyebrow="Anfahrt" title="Hier findest du uns" />
      <div className="container-page grid gap-10 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-green-950">Adresse</h2>
          <address className="mt-3 not-italic text-green-700">
            {site.legalName}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
          </address>

          <h2 className="mt-8 text-xl font-bold text-green-950">Bürozeiten</h2>
          <p className="mt-3 text-green-700">{site.hours.office}</p>

          <h2 className="mt-8 text-xl font-bold text-green-950">Theorieunterricht</h2>
          <p className="mt-3 text-green-700">{site.hours.theory}</p>

          <h2 className="mt-8 text-xl font-bold text-green-950">Kontakt</h2>
          <p className="mt-3 text-green-700">
            <a href={`tel:${site.phoneHref}`} className="font-semibold hover:text-green-950">
              {site.phone}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="font-semibold hover:text-green-950">
              {site.email}
            </a>
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-green-100">
          <iframe
            title="Standort Fahrschulring Stuttgart"
            src={`https://maps.google.com/maps?q=${query}&output=embed`}
            className="h-full min-h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
}
