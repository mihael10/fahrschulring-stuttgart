import { Button } from "./Button";
import { site } from "@/content/site";

export function ContactCta() {
  return (
    <section className="bg-green-500">
      <div className="container-page flex flex-col items-center gap-6 py-16 text-center sm:py-20">
        <h2 className="max-w-2xl text-3xl font-extrabold text-green-950 sm:text-4xl">
          Bereit für deinen Führerschein?
        </h2>
        <p className="max-w-xl text-green-900/80">
          Schreib uns kurz, was du vorhast – wir melden uns mit deinem individuellen
          Angebot und den nächsten Schritten.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/kontakt" variant="dark">
            Jetzt Kontakt aufnehmen
          </Button>
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-green-950/20 px-6 py-3 text-sm font-semibold text-green-950 hover:bg-green-950/10"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
