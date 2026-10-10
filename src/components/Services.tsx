import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { services } from "@/content/services";

export function Services() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Unser Angebot" title="Was wir dir bieten" />
        <ul className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service}
              className="reveal flex items-center gap-3 rounded-2xl border border-green-100 p-6 text-base font-bold text-green-950"
            >
              <span
                aria-hidden
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600"
              >
                ✓
              </span>
              {service}
            </li>
          ))}
        </ul>
        <div className="mt-14 flex justify-center">
          <Button href="#kontakt" variant="primary">
            Kontakt aufnehmen
          </Button>
        </div>
      </div>
    </section>
  );
}
