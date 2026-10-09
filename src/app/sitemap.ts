import type { MetadataRoute } from "next";
import { routes } from "@/content/routes";
import { productionUrl } from "@/lib/site-url";

// Required for output: "export" — see next.config.ts and knowledge/deployment.md.
export const dynamic = "force-static";

// One entry per indexable route in src/content/routes.ts, always on the
// production host (a preview build is noindex anyway, and must never
// advertise github.io URLs as canonical). Impressum/Datenschutz are noindex
// and not in the registry. `lastModified` is the hand-maintained content
// date from the registry, not the build time.
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: productionUrl(route.path),
    lastModified: new Date(route.lastModified),
    priority: route.path === "/" ? 1 : route.parent ? 0.8 : 0.7,
  }));
}
