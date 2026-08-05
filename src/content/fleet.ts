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
  { name: "VW ID.3", category: "Auto", tag: "Elektro", image: "/images/fleet/id3-troc.jpg" },
  { name: "VW Polo", category: "Auto", tag: "Schaltung" },
  { name: "VW Golf", category: "Auto", tag: "Automatik", image: "/images/fleet/golf.jpg" },
  { name: "VW T-Roc", category: "Auto", tag: "Schaltung", image: "/images/fleet/troc.jpg" },
  { name: "BMW X1", category: "Auto" },
  { name: "BMW X2", category: "Auto" },
  { name: "Kia Niro", category: "Auto", tag: "Automatik", image: "/images/fleet/kia-niro.jpg" },
  { name: "MG4", category: "Auto", tag: "Elektro", image: "/images/fleet/mg4.jpg" },
  { name: "Tesla Model S", category: "Auto", tag: "Elektro" },
  { name: "Suzuki Roller", category: "Motorrad", tag: "AM" },
  { name: "Aprilia Tuono 125", category: "Motorrad", tag: "A1" },
  { name: "KTM Duke 125", category: "Motorrad", tag: "B196", image: "/images/fleet/duke.jpg" },
  { name: "Honda CB 500", category: "Motorrad", tag: "A2", image: "/images/fleet/a2.jpg" },
  { name: "Honda Hornet 750", category: "Motorrad", tag: "A" },
  { name: "BMW F900R", category: "Motorrad", tag: "A", image: "/images/fleet/bmw-motorrad.jpg" },
  { name: "Mercedes Sprinter", category: "LKW & Bus", tag: "C1" },
  { name: "Mercedes Actros (Sattelzug)", category: "LKW & Bus", tag: "C/CE" },
  { name: "Setra Bus", category: "LKW & Bus", tag: "D" },
];

// Additional gallery photos from the same source that don't map to one
// specific vehicle confidently — shown as a general "Impressionen" strip
// on /fahrzeuge instead of guessed onto the wrong car.
export const galleryPhotos: string[] = [
  "/images/hero/simulator.jpg",
  "/images/hero/fz-start-1.png",
  "/images/fleet/moto.png",
  "/images/fleet/motor-1.jpeg",
  "/images/fleet/gallery-02.jpg",
  "/images/fleet/gallery-03.jpg",
  "/images/fleet/gallery-06.jpg",
  "/images/fleet/gallery-misc-1.jpg",
  "/images/fleet/gallery-misc-2.jpg",
];
