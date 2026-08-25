import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { vehiclePhotos } from "@/content/fleet";
import { basePath } from "@/lib/base-path";

export function VehicleCarousel() {
  const photos = [...vehiclePhotos, ...vehiclePhotos];

  return (
    <section className="overflow-hidden bg-green-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Unser Fuhrpark" title="Unsere Fahrzeuge" />
      </div>
      <div className="group relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-green-50 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-green-50 to-transparent sm:w-32" />
        <div className="flex w-max animate-vehicle-scroll gap-6 group-hover:[animation-play-state:paused]">
          {photos.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-48 w-72 shrink-0 overflow-hidden rounded-2xl border border-green-100 bg-white sm:h-56 sm:w-80"
            >
              <Image
                src={`${basePath}${src}`}
                alt="Fahrzeug aus unserem Fuhrpark"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
