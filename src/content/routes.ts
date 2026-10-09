// Single registry of indexable routes — the sitemap, breadcrumbs and the
// footer navigation all read from here, so a new page only has to be added
// once. `lastModified` is the date the page's *content* last changed (hand-
// maintained; an always-"now" lastmod is ignored by search engines).
// Impressum/Datenschutz are noindex and deliberately not listed.

export type SiteRoute = {
  path: `/${string}`;
  label: string;
  lastModified: string; // ISO date
  // Which hub the page belongs to (for breadcrumbs). Omit for top-level.
  parent?: "/klassen/";
};

export const routes: SiteRoute[] = [
  { path: "/", label: "Start", lastModified: "2026-10-09" },
  { path: "/klassen/", label: "Führerscheinklassen", lastModified: "2026-10-09" },
  { path: "/klassen/auto/", label: "Klasse B & BF17", lastModified: "2026-10-09", parent: "/klassen/" },
  { path: "/klassen/motorrad/", label: "Motorradführerschein", lastModified: "2026-10-09", parent: "/klassen/" },
  { path: "/klassen/anhaenger/", label: "Anhänger: BE & B96", lastModified: "2026-10-09", parent: "/klassen/" },
  { path: "/klassen/lkw-bus/", label: "LKW & Bus", lastModified: "2026-10-09", parent: "/klassen/" },
  { path: "/fuehrerschein-ablauf/", label: "Ablauf & Voraussetzungen", lastModified: "2026-10-09" },
  { path: "/fuehrerschein-kosten/", label: "Führerschein-Kosten", lastModified: "2026-10-09" },
  { path: "/fuehrerschein-umschreiben/", label: "Führerschein umschreiben", lastModified: "2026-10-09" },
  { path: "/team/", label: "Team", lastModified: "2026-10-09" },
  { path: "/anfahrt/", label: "Anfahrt", lastModified: "2026-10-09" },
  { path: "/kontakt/", label: "Kontakt", lastModified: "2026-10-09" },
];

export const findRoute = (path: string) => routes.find((r) => r.path === path);
