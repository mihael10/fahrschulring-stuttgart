import type { MetadataRoute } from "next";
import { isProduction, PRODUCTION_URL } from "@/lib/site-url";

// Required for output: "export" — see next.config.ts and knowledge/deployment.md.
export const dynamic = "force-static";

// Production: everything crawlable + sitemap. Staging (GitHub Pages
// preview): disallow all. Note that on a *project* Pages site this file is
// emitted under the repo sub-path, where crawlers never look for it — the
// per-page noindex from src/lib/metadata.ts is what actually keeps the
// preview out of the index; this is belt-and-braces for the production host.
export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${PRODUCTION_URL}/sitemap.xml`,
    host: PRODUCTION_URL,
  };
}
