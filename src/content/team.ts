export type Instructor = {
  name: string;
  role: string;
  photo?: string;
};

// Sourced from fahrschulring.de/pages/team.php. The old site lists only names
// and certified classes — no bios or tenure are published, so none are invented.
export const team: Instructor[] = [
  { name: "Frank Eibl", role: "Inhaber · Fahrlehrer aller Klassen" },
  { name: "Heiko Schaible", role: "Fahrlehrer Klasse A, B, BE" },
  { name: "Karol Szymanowski", role: "Fahrlehrer Klasse A, B, BE" },
  { name: "Florije Iseni", role: "Fahrlehrerin Klasse B, BE" },
  { name: "Leyla Heptunali", role: "Fahrlehrerin Klasse B, BE" },
];
