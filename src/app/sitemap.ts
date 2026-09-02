import type { MetadataRoute } from "next";

// Required for output: "export" — see next.config.ts and knowledge/deployment.md.
export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fahrschulring.de";

// Impressum and Datenschutz carry `robots: { index: false }` (legally
// required pages, not marketing content) so they're deliberately left out —
// a sitemap should only list indexable URLs.
//
// Trailing slashes match the actual served paths (next.config.ts sets
// trailingSlash: true — see knowledge/deployment.md) so these URLs are the
// canonical ones, not a redirect source.
const routes = ["/", "/klassen/", "/team/", "/anfahrt/", "/kontakt/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
