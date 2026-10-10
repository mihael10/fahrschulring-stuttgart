import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { ContactForm } from "./ContactForm";
import { PhoneIcon, MailIcon } from "./icons";
import { site } from "@/content/site";

export function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-20 bg-green-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Kontakt"
          title="Schreib uns oder ruf an"
          description="Hier kannst du uns eine Nachricht hinterlassen oder direkt anrufen. Wir melden uns schnellstmöglich zurück."
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[1fr_20rem]">
          <div className="reveal rounded-2xl border border-green-100 bg-white p-6 sm:p-10">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-600">
              <MailIcon className="h-4 w-4" />
              Nachricht schreiben
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-green-950">Schreib uns</h3>
            <p className="mt-2 text-sm text-green-700">
              Füll das Formular aus – wir antworten dir per E-Mail oder rufen dich zurück.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="reveal flex flex-col items-center gap-2 self-start rounded-2xl border border-green-100 bg-white p-8 text-center transition-shadow duration-300 hover:shadow-lg hover:shadow-green-900/5">
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
        </div>
      </div>
    </section>
  );
}
