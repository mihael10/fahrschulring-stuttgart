import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { vehiclePhotos, altFor } from "@/content/fleet";
import { basePath } from "@/lib/base-path";

export function VehicleCarousel() {
  // The list is duplicated so the CSS loop is seamless; the second copy is
  // purely visual and hidden from assistive tech / crawlers.
  const loops: ("visible" | "duplicate")[] = ["visible", "duplicate"];

  return (
    <section id="fuhrpark" className="scroll-mt-24 overflow-hidden bg-green-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Unser Fuhrpark"
          title="Unsere Fahrzeuge"
          description="Schaltwagen, Automatik und Elektroautos, Motorräder von AM bis A, Anhänger, LKW und Bus – du übst auf dem Fahrzeug, das zu deiner Klasse passt."
        />
      </div>
      <div className="reveal group relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-green-50 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-green-50 to-transparent sm:w-32" />
        <div className="flex w-max animate-vehicle-scroll gap-6 group-hover:[animation-play-state:paused]">
          {loops.map((loop) => (
            <ul
              key={loop}
              aria-hidden={loop === "duplicate" || undefined}
              className="flex gap-6"
            >
              {vehiclePhotos.map((src) => (
                <li
                  key={src}
                  className="relative h-48 w-72 shrink-0 overflow-hidden rounded-2xl border border-green-100 bg-white sm:h-56 sm:w-80"
                >
                  <Image
                    src={`${basePath}${src}`}
                    alt={loop === "visible" ? altFor(src) : ""}
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
