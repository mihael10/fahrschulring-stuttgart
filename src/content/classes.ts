export type LicenseClass = {
  id: string;
  group: "Motorrad" | "Auto" | "LKW & Bus" | "Sonderklassen";
  title: string;
  minAge: string;
  summary: string;
  includes?: string;
  requires?: string;
  featured?: boolean;
};

// Sourced from fahrschulring.de/pages/klassen.php. Descriptions paraphrase the
// legal vehicle definitions in plain language; no prices are stated anywhere
// on the source site, so none are invented here.
export const classes: LicenseClass[] = [
  {
    id: "AM",
    group: "Motorrad",
    title: "Klasse AM",
    minAge: "15 Jahre",
    summary: "Kleinkrafträder, Mofas und Leichtfahrzeuge bis 45 km/h.",
  },
  {
    id: "A1",
    group: "Motorrad",
    title: "Klasse A1",
    minAge: "16 Jahre",
    summary: "Leichtkrafträder bis 125 cm³ und 11 kW.",
    includes: "schließt AM ein",
  },
  {
    id: "A2",
    group: "Motorrad",
    title: "Klasse A2",
    minAge: "18 Jahre",
    summary: "Motorräder bis 35 kW mit begrenztem Leistungsgewicht.",
    includes: "schließt A1, AM ein",
  },
  {
    id: "A",
    group: "Motorrad",
    title: "Klasse A",
    minAge: "24 Jahre (direkt) oder 20 Jahre (2 Jahre A2)",
    summary: "Alle Motorräder ohne Leistungsbegrenzung.",
    includes: "schließt A2, A1, AM ein",
  },
  {
    id: "B196",
    group: "Motorrad",
    title: "Klasse B196",
    minAge: "Ab bestehender Klasse B",
    summary:
      "125-cm³-Motorrad fahren mit vorhandenem Auto-Führerschein Klasse B – kompakte Zusatzausbildung ohne neue Theorieprüfung.",
    requires: "Führerschein Klasse B",
    featured: true,
  },
  {
    id: "B-BF17",
    group: "Auto",
    title: "Klasse B / BF17",
    minAge: "18 Jahre (BF17: ab 17 Jahren, begleitetes Fahren)",
    summary: "PKW bis 3.500 kg zulässiger Gesamtmasse, bis 8 Sitzplätze plus Fahrer.",
    includes: "schließt AM, L ein",
    featured: true,
  },
  {
    id: "B96",
    group: "Auto",
    title: "Klasse B96",
    minAge: "18 Jahre (17 Jahre bei begleitetem Fahren)",
    summary: "Fahrzeugkombinationen mit Anhänger über 750 kg, Gesamtmasse bis 4.250 kg.",
    requires: "Führerschein Klasse B",
  },
  {
    id: "BE",
    group: "Auto",
    title: "Klasse BE",
    minAge: "18 Jahre (17 Jahre bei begleitetem Fahren)",
    summary: "PKW mit Anhänger oder Sattelanhänger bis 3.500 kg.",
    requires: "Führerschein Klasse B",
  },
  {
    id: "C1",
    group: "LKW & Bus",
    title: "Klasse C1",
    minAge: "18 Jahre",
    summary: "Fahrzeuge über 3.500 kg bis 7.500 kg, bis 8 Sitzplätze plus Fahrer.",
    requires: "Führerschein Klasse B",
  },
  {
    id: "C1E",
    group: "LKW & Bus",
    title: "Klasse C1E",
    minAge: "18 Jahre",
    summary: "Kombinationen aus C1-Fahrzeug und Anhänger, Gesamtmasse bis 12.000 kg.",
    requires: "Führerschein Klasse C1",
    includes: "schließt BE ein",
  },
  {
    id: "C",
    group: "LKW & Bus",
    title: "Klasse C",
    minAge: "21 Jahre",
    summary: "Fahrzeuge über 3.500 kg, bis 8 Sitzplätze plus Fahrer.",
    requires: "Führerschein Klasse B",
  },
  {
    id: "CE",
    group: "LKW & Bus",
    title: "Klasse CE",
    minAge: "21 Jahre",
    summary: "LKW mit Anhänger oder Sattelanhänger über 750 kg.",
    requires: "Führerschein Klasse C",
    includes: "schließt BE, C1E, T ein",
  },
  {
    id: "D1",
    group: "LKW & Bus",
    title: "Klasse D1",
    minAge: "21 Jahre",
    summary: "Fahrzeuge für bis zu 16 Fahrgäste, maximal 8 m Länge.",
    requires: "Führerschein Klasse B",
  },
  {
    id: "D1E",
    group: "LKW & Bus",
    title: "Klasse D1E",
    minAge: "21 Jahre",
    summary: "D1-Kombinationen mit Anhänger über 750 kg.",
    requires: "Führerschein Klasse D1",
    includes: "schließt BE ein",
  },
  {
    id: "D",
    group: "LKW & Bus",
    title: "Klasse D",
    minAge: "24 Jahre",
    summary: "Fahrzeuge für mehr als 8 Fahrgäste (Busse).",
    requires: "Führerschein Klasse B",
    includes: "schließt D1 ein",
  },
  {
    id: "DE",
    group: "LKW & Bus",
    title: "Klasse DE",
    minAge: "24 Jahre",
    summary: "Busse mit Anhänger über 750 kg.",
    requires: "Führerschein Klasse D",
    includes: "schließt BE, D1E ein",
  },
  {
    id: "T",
    group: "Sonderklassen",
    title: "Klasse T",
    minAge: "16 Jahre (bis 40 km/h) bzw. 18 Jahre (bis 60 km/h)",
    summary: "Zugmaschinen und selbstfahrende Arbeitsmaschinen für Land- und Forstwirtschaft.",
    includes: "schließt L, AM ein",
  },
  {
    id: "L",
    group: "Sonderklassen",
    title: "Klasse L",
    minAge: "16 Jahre",
    summary: "Landwirtschaftliche Zugmaschinen bis 40 km/h.",
  },
];

export const classGroups = ["Motorrad", "Auto", "LKW & Bus", "Sonderklassen"] as const;
