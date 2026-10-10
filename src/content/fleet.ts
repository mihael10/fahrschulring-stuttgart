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
  { name: "Mercedes Actros (Gliederzug)", category: "LKW & Bus", tag: "C/CE" },
  { name: "Setra Bus", category: "LKW & Bus", tag: "D" },
];

// Additional gallery photos from the same source that don't map to one
// specific vehicle confidently.
export const galleryPhotos: string[] = [
  "/images/hero/simulator.webp",
  "/images/hero/simulator-training.webp",
  "/images/hero/fz-start-1.webp",
  "/images/fleet/moto.webp",
  "/images/fleet/motor-1.webp",
  "/images/fleet/gallery-02.webp",
  "/images/fleet/gallery-03.webp",
  "/images/fleet/gallery-06.webp",
  "/images/fleet/gallery-misc-1.webp",
  "/images/fleet/gallery-misc-2.webp",
];

// Alt text for every carousel photo — written from looking at each picture
// (2026-10-09), describing only what is visibly in it. The mapped vehicles
// fall back to "<name> – Fahrschulauto/-motorrad von Fahrschulring"; the
// unmapped gallery shots are described by what they show, not by a guessed
// model. Same text for all 30 slides (the previous state) told screen
// readers and image search nothing.
const photoAlt: Record<string, string> = {
  "/images/fleet/id3-troc.webp": "VW T-Roc und VW ID.3 von Fahrschulring vor der Fahrschule in Stuttgart",
  "/images/fleet/golf.webp": "VW Golf – Automatik-Fahrschulauto von Fahrschulring",
  "/images/fleet/troc.webp": "VW T-Roc – Schaltwagen von Fahrschulring",
  "/images/fleet/kia-niro.webp": "Kia Niro – Automatik-Fahrschulauto von Fahrschulring",
  "/images/fleet/mg4.webp": "MG4 – Elektro-Fahrschulauto von Fahrschulring",
  "/images/fleet/duke.webp": "KTM Duke 125 – Schulungsmotorrad für A1 und B196",
  "/images/fleet/a2.webp": "Honda CB 500 – Schulungsmotorrad für Klasse A2",
  "/images/fleet/bmw-motorrad.webp": "BMW F900R – Schulungsmotorrad für Klasse A",
  "/images/fleet/moto.webp": "Vier Schulungsmotorräder und ein Roller von Fahrschulring auf der Straße",
  "/images/fleet/motor-1.webp": "Weiß-rote Honda Hornet 750 – Schulungsmotorrad für Klasse A",
  "/images/fleet/gallery-02.webp": "Grauer VW Elektro-SUV mit Stuttgarter E-Kennzeichen aus dem Fuhrpark von Fahrschulring",
  "/images/fleet/gallery-03.webp": "Silberner VW Polo mit Fahrschulring.de-Beschriftung „Ausbildung in allen Klassen“",
  "/images/fleet/gallery-06.webp": "Blauer Suzuki-Roller für die Klasse AM vor einem VW Polo",
  "/images/fleet/gallery-misc-1.webp": "KTM Duke 125 in Blau-Orange vor dem Schaufenster der Fahrschule",
  "/images/fleet/gallery-misc-2.webp": "Grauer BMW X1 mit Kastenanhänger für die Anhängerausbildung BE und B96",
};

export const altFor = (src: string) => photoAlt[src] ?? "Fahrzeug aus dem Fuhrpark von Fahrschulring";

// Every vehicle photo we have — assigned vehicle shots plus the unmapped
// gallery shots that are still vehicle photos (excludes the general
// hero/ shots — the two simulator photos + fz-start-1 — which aren't of a vehicle). This is
// the single source feeding the homepage vehicle carousel; vehicle photos
// don't appear anywhere else on the site.
export const vehiclePhotos: string[] = [
  ...fleet.filter((v) => v.image).map((v) => v.image as string),
  ...galleryPhotos.filter((src) => src.startsWith("/images/fleet/")),
];
