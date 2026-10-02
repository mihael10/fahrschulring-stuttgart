import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { PhoneIcon, MailIcon } from "@/components/icons";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktiere Fahrschulring Stuttgart über das Kontaktformular oder telefonisch – wir melden uns mit den nächsten Schritten.",
  alternates: { canonical: "/kontakt/" },
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Lass uns starten"
        description="Schreib uns über das Formular oder ruf uns direkt an – wir melden uns mit den nächsten Schritten und einem individuellen Angebot."
      />
      <div className="container-page py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_20rem]">
          <div className="reveal rounded-2xl border border-green-100 bg-white p-6 sm:p-10">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-600">
              <MailIcon className="h-4 w-4" />
              Nachricht schreiben
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-green-950">Schreib uns</h2>
            <p className="mt-2 text-sm text-green-700">
              Füll das Formular aus – wir antworten dir per E-Mail oder rufen dich zurück.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="reveal flex flex-col items-center gap-2 rounded-2xl border border-green-100 bg-white p-8 text-center transition-shadow duration-300 hover:shadow-lg hover:shadow-green-900/5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-600">
                <PhoneIcon className="animate-ring-wiggle h-5 w-5" />
              </span>
              <span className="mt-2 text-xs font-bold uppercase tracking-wider text-green-600">
                Lieber telefonisch?
              </span>
              <span className="text-2xl font-extrabold text-green-950">{site.phone}</span>
              <Button href={`tel:${site.phoneHref}`} variant="primary" className="animate-cta-pulse mt-3">
                Jetzt anrufen
              </Button>
            </div>

            <div className="reveal rounded-2xl border border-green-100 bg-white p-8 text-sm">
              <h2 className="text-base font-bold text-green-950">{site.legalName}</h2>
              <address className="mt-2 not-italic text-green-700">
                {site.address.street}, {site.address.zip} {site.address.city}
              </address>
              <a href={`mailto:${site.email}`} className="mt-1 inline-block text-green-700 underline hover:text-green-950">
                {site.email}
              </a>
              <dl className="mt-5 space-y-3">
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
        </div>
      </div>
    </>
  );
}
