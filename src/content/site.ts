// Single source of truth for business facts.
// Every fact here was sourced from the live site (fahrschulring.de) on 2026-08-05.
// Flagged items have known discrepancies across the old site's own pages — verify before launch.

export const site = {
  name: "Fahrschulring Stuttgart",
  legalName: "Fahrschulring GmbH",
  owner: "Frank Eibl",
  claim: "Ihr Erfolg ist unser Ziel!",
  yearsExperience: 50,

  address: {
    street: "Hegelstraße 48",
    zip: "70174",
    city: "Stuttgart",
    country: "Deutschland",
  },

  // NOTE: the old site is internally inconsistent. Homepage, Kontakt, Anfahrt and
  // Fahrzeuge pages all show 0711 / 294100. The Impressum shows 0711 - 295928.
  // Using the number that appears on 4 of 5 pages. CONFIRM with the owner before launch.
  phone: "0711 294100",
  phoneHref: "+4971129410",
  phoneImpressum: "0711 295928",

  // The Impressum is authoritative for the legal email: info@fahrschulring.de
  // (older marketing pages showed a .com typo — do not use it).
  email: "info@fahrschulring.de",

  hours: {
    // Impressum and Anfahrt agree: 15:00-18:30. Kontakt page alone said 18:00 (likely stale).
    office: "Montag – Donnerstag, 15:00 – 18:30 Uhr",
    officeDays: ["Montag", "Dienstag", "Mittwoch", "Donnerstag"],
    theory: "Montag & Mittwoch, 18:30 – 20:00 Uhr",
  },

  legal: {
    court: "Amtsgericht Stuttgart",
    registerNumber: "14308",
    vatId: "DE9906306056",
    supervisoryAuthority: "Führerscheinstelle Stuttgart",
  },

  social: {
    // Not present on the old site — leave empty until real profiles exist.
  },
} as const;

export const navigation = [
  { href: "/", label: "Start" },
  { href: "/klassen", label: "Führerscheinklassen" },
  { href: "/fahrzeuge", label: "Fuhrpark" },
  { href: "/team", label: "Team" },
  { href: "/anfahrt", label: "Anfahrt" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
