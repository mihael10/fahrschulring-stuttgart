import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { fleet, type Vehicle } from "@/content/fleet";

export const metadata: Metadata = {
  title: "Fuhrpark",
  description:
    "Unsere Fahrzeugflotte: E-Autos, Automatik und Schaltung, Motorräder aller Klassen sowie LKW und Bus.",
};

const categories: Vehicle["category"][] = ["Auto", "Motorrad", "LKW & Bus"];

export default function FahrzeugePage() {
  return (
    <>
      <PageHero
        eyebrow="Fuhrpark"
        title="Moderne Fahrzeuge für jede Klasse"
        description="Von Elektroautos bis zum Sattelzug – unsere Flotte deckt alle Ausbildungsklassen ab. Ergänzend trainierst du erste Fahreindrücke im Fahrsimulator."
      />
      <div className="container-page space-y-16 py-16 sm:py-20">
        {categories.map((category) => (
          <section key={category}>
            <h2 className="text-2xl font-extrabold text-green-950">{category}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {fleet
                .filter((v) => v.category === category)
                .map((vehicle) => (
                  <div
                    key={vehicle.name}
                    className="flex items-center justify-between rounded-xl border border-green-100 bg-white px-5 py-4"
                  >
                    <span className="text-sm font-semibold text-green-950">
                      {vehicle.name}
                    </span>
                    {vehicle.tag && (
                      <span className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-bold text-green-700">
                        {vehicle.tag}
                      </span>
                    )}
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
      <ContactCta />
    </>
  );
}
