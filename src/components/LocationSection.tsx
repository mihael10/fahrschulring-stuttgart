import { SectionHeading } from "./SectionHeading";
import { PhoneIcon } from "./icons";
import { site } from "@/content/site";

export function LocationSection() {
  const query = encodeURIComponent(
    `${site.address.street}, ${site.address.zip} ${site.address.city}`
  );

  return (
    <section id="anfahrt" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Anfahrt" title="Hier findest du uns" />
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="reveal">
            <h3 className="text-xl font-bold text-green-950">Adresse</h3>
            <address className="mt-3 not-italic text-green-700">
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </address>

            <h3 className="mt-8 text-xl font-bold text-green-950">Bürozeiten</h3>
            <p className="mt-3 text-green-700">{site.hours.office}</p>

            <h3 className="mt-8 text-xl font-bold text-green-950">Theorieunterricht</h3>
            <p className="mt-3 text-green-700">
            {site.hours.theory}
            <br />
            {site.hours.theoryNote}
          </p>

            <h3 className="mt-8 text-xl font-bold text-green-950">Kontakt</h3>
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
      </div>
    </section>
  );
}
