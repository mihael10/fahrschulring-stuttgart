export type Vehicle = {
  name: string;
  category: "Auto" | "Motorrad" | "LKW & Bus";
  tag?: string;
  image?: string;
};

// Sourced from fahrschulring.de/pages/fahrzeuge.php. Images are photos from
// that same gallery — only assigned where the source filename made the
// match confident; vehicles without a clear source photo stay text-only
// rather than guessing.
export const fleet: Vehicle[] = [
  { name: "VW ID.3", category: "Auto", tag: "Elektro", image: "/images/fleet/id3-troc.webp" },
  { name: "VW Polo", category: "Auto", tag: "Schaltung" },
  { name: "VW Golf", category: "Auto", tag: "Automatik", image: "/images/fleet/golf.webp" },
  { name: "VW T-Roc", category: "Auto", tag: "Schaltung", image: "/images/fleet/troc.webp" },
  { name: "BMW X1", category: "Auto" },
  { name: "BMW X2", category: "Auto" },
  { name: "Kia Niro", category: "Auto", tag: "Automatik", image: "/images/fleet/kia-niro.webp" },
  { name: "MG4", category: "Auto", tag: "Elektro", image: "/images/fleet/mg4.webp" },
  { name: "Tesla Model S", category: "Auto", tag: "Elektro" },
  { name: "Suzuki Roller", category: "Motorrad", tag: "AM" },
  { name: "Aprilia Tuono 125", category: "Motorrad", tag: "A1" },
  { name: "KTM Duke 125", category: "Motorrad", tag: "B196", image: "/images/fleet/duke.webp" },
  { name: "Honda CB 500", category: "Motorrad", tag: "A2", image: "/images/fleet/a2.webp" },
  { name: "Honda Hornet 750", category: "Motorrad", tag: "A" },
  { name: "BMW F900R", category: "Motorrad", tag: "A", image: "/images/fleet/bmw-motorrad.webp" },
  { name: "Mercedes Sprinter", category: "LKW & Bus", tag: "C1" },
  { name: "Mercedes Actros (Sattelzug)", category: "LKW & Bus", tag: "C/CE" },
  { name: "Setra Bus", category: "LKW & Bus", tag: "D" },
];

// Additional gallery photos from the same source that don't map to one
// specific vehicle confidently.
export const galleryPhotos: string[] = [
  "/images/hero/simulator.webp",
  "/images/hero/fz-start-1.webp",
  "/images/fleet/moto.webp",
  "/images/fleet/motor-1.webp",
  "/images/fleet/gallery-02.webp",
  "/images/fleet/gallery-03.webp",
  "/images/fleet/gallery-06.webp",
  "/images/fleet/gallery-misc-1.webp",
  "/images/fleet/gallery-misc-2.webp",
];

// Every vehicle photo we have — assigned vehicle shots plus the unmapped
// gallery shots that are still vehicle photos (excludes the two general
// hero/ shots, simulator + fz-start-1, which aren't of a vehicle). This is
// the single source feeding the homepage vehicle carousel; vehicle photos
// don't appear anywhere else on the site.
export const vehiclePhotos: string[] = [
  ...fleet.filter((v) => v.image).map((v) => v.image as string),
  ...galleryPhotos.filter((src) => src.startsWith("/images/fleet/")),
];
