import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { PhoneIcon, MailIcon } from "./icons";
import { site } from "@/content/site";

export function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-20 bg-green-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Kontakt"
          title="Lass uns starten"
          description="Ruf uns direkt an oder schreib uns eine E-Mail – wir melden uns mit den nächsten Schritten und einem individuellen Angebot."
        />
        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          <div className="reveal flex flex-col items-center gap-2 rounded-2xl border border-green-100 bg-white p-8 text-center transition-shadow duration-300 hover:shadow-lg hover:shadow-green-900/5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-600">
              <PhoneIcon className="animate-ring-wiggle h-5 w-5" />
            </span>
            <span className="mt-2 text-xs font-bold uppercase tracking-wider text-green-600">
              Telefon
            </span>
            <span className="text-2xl font-extrabold text-green-950">{site.phone}</span>
            <Button href={`tel:${site.phoneHref}`} variant="primary" className="animate-cta-pulse mt-3">
              Jetzt anrufen
            </Button>
          </div>

          <div className="reveal flex flex-col items-center gap-2 rounded-2xl border border-green-100 bg-white p-8 text-center transition-shadow duration-300 hover:shadow-lg hover:shadow-green-900/5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-600">
              <MailIcon className="h-5 w-5" />
            </span>
            <span className="mt-2 text-xs font-bold uppercase tracking-wider text-green-600">
              E-Mail
            </span>
            <span className="break-all text-xl font-extrabold text-green-950 sm:text-2xl">
              {site.email}
            </span>
            <Button href={`mailto:${site.email}`} variant="secondary" className="mt-3">
              E-Mail schreiben
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
