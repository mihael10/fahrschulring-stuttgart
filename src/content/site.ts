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

  // RESOLVED 2026-08-06: the old site's marketing pages (Homepage, Kontakt,
  // Anfahrt, Fahrzeuge) showed 0711/294100, but the Impressum showed
  // 0711-295928. Checked the business's live Google Business Profile
  // (4.9★, 315 reviews, "Fahrschulring", Hegelstraße 48) — it lists
  // +49 711 295928, matching the Impressum, not the marketing-page number.
  // Two independent current sources beat four stale marketing pages, so
  // 295928 is used site-wide now. Still worth a final confirmation with the
  // owner before launch, but this is no longer an open guess.
  phone: "0711 295928",
  phoneHref: "+49711295928",

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

  // Found on the live Google Business Profile ("Fahrschulring", Driving
  // school, Hegelstraße 48) on 2026-08-06: 4.9★ from 315 reviews. This is a
  // dated snapshot for the static fallback in GoogleReviews.tsx, not a live
  // value — it will drift as new reviews come in. Wire up
  // GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID (see .env.example) to replace it
  // with live data instead of updating this number by hand.
  googleReviews: {
    snapshotRating: 4.9,
    snapshotCount: 315,
    snapshotDate: "2026-08-06",
    // Stable link to this exact listing (CID-based), works without any API key.
    mapsUrl: "https://maps.google.com/?cid=15448751995835036082",
  },
} as const;

export const navigation = [
  { href: "/", label: "Start" },
  { href: "/klassen", label: "Führerscheinklassen" },
  { href: "/team", label: "Team" },
  { href: "/anfahrt", label: "Anfahrt" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
