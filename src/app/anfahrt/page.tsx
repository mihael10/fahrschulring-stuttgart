import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PhoneIcon } from "@/components/icons";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { site } from "@/content/site";

const path = "/anfahrt/" as const;
const title = "Anfahrt: Fahrschule Fahrschulring, Hegelstraße 48, 70174 Stuttgart-Mitte";
const description = `So findest du Fahrschulring in Stuttgart-Mitte: ${site.address.street}, ${site.address.zip} ${site.address.city} – nahe Berliner Platz/Liederhalle und Russische Kirche. Bürozeiten ${site.hours.office}, Theorie ${site.hours.theory}.`;

export const metadata = pageMetadata({ path, title, description });

export default function AnfahrtPage() {
  const query = encodeURIComponent(
    `${site.address.street}, ${site.address.zip} ${site.address.city}`
  );

  return (
    <>
      <JsonLd data={graph([webPageNode({ path, title, description }), breadcrumbNode(path)])} />
      <PageHero
        eyebrow="Anfahrt"
        title="Anfahrt zur Fahrschule in Stuttgart-Mitte"
        description={`${site.address.street}, ${site.address.zip} ${site.address.city} – zwischen Berliner Platz und Hegelplatz, gut erreichbar mit Stadtbahn und Bus.`}
      />
      <Breadcrumbs path={path} />
      <div className="container-page grid gap-10 py-12 sm:py-16 lg:grid-cols-2">
        <div className="reveal">
          <h2 className="text-xl font-bold text-green-950">Adresse</h2>
          <address className="mt-3 not-italic text-green-700">
            {site.legalName}
            <br />
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city} ({site.address.district})
          </address>
          <a
            href={site.googleReviews.mapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-3 inline-block text-sm font-semibold text-green-800 underline hover:text-green-950"
          >
            In Google Maps öffnen
          </a>

          <h2 className="mt-8 text-xl font-bold text-green-950">Mit Stadtbahn und Bus</h2>
          <p className="mt-3 text-green-700">
            Die Hegelstraße liegt im Stuttgarter Westen der Innenstadt, unweit der Liederhalle. Nächstgelegene
            Stadtbahn-Haltestellen sind <strong>Berliner Platz (Liederhalle)</strong> und{" "}
            <strong>Russische Kirche</strong>; die Buslinie 43 hält an der Hegel-/Seidenstraße. Aktuelle Linien
            und Umleitungen prüfst du am besten in der VVS-Fahrplanauskunft.
          </p>

          <h2 className="mt-8 text-xl font-bold text-green-950">Mit dem Auto</h2>
          <p className="mt-3 text-green-700">
            In der Umgebung gibt es bewirtschaftete Parkplätze. Den Treffpunkt für Fahrstunden besprechen wir
            bei der Terminvereinbarung mit dir.
          </p>

          <h2 className="mt-8 text-xl font-bold text-green-950">Bürozeiten</h2>
          <p className="mt-3 text-green-700">{site.hours.office}</p>

          <h2 className="mt-8 text-xl font-bold text-green-950">Theorieunterricht</h2>
          <p className="mt-3 text-green-700">{site.hours.theory}</p>

          <h2 className="mt-8 text-xl font-bold text-green-950">Kontakt</h2>
          <p className="mt-3 text-green-700">
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center gap-1.5 font-semibold hover:text-green-950"
            >
              <PhoneIcon className="animate-ring-wiggle h-4 w-4" />
              {site.phone}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="font-semibold hover:text-green-950">
              {site.email}
            </a>
          </p>
        </div>

        <div className="reveal overflow-hidden rounded-2xl border border-green-100">
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
