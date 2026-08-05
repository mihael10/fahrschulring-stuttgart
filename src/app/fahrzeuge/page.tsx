import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { fleet, galleryPhotos, type Vehicle } from "@/content/fleet";

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
                    className="overflow-hidden rounded-xl border border-green-100 bg-white"
                  >
                    <div className="relative h-40 w-full bg-green-50">
                      {vehicle.image && (
                        <Image
                          src={vehicle.image}
                          alt={vehicle.name}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex items-center justify-between px-5 py-4">
                      <span className="text-sm font-semibold text-green-950">
                        {vehicle.name}
                      </span>
                      {vehicle.tag && (
                        <span className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-bold text-green-700">
                          {vehicle.tag}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-2xl font-extrabold text-green-950">
            Impressionen aus unserer Fahrschule
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {galleryPhotos.map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-xl bg-green-50">
                <Image
                  src={src}
                  alt="Fahrschulring Stuttgart"
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <ContactCta />
    </>
  );
}
