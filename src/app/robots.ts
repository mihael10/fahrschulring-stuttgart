import type { MetadataRoute } from "next";

// Required for output: "export" — see next.config.ts and knowledge/deployment.md.
export const dynamic = "force-static";

// Same fallback/override pattern as layout.tsx: unset locally, set by the
// GitHub Actions workflow to the deployed Pages URL (which already includes
// the basePath, e.g. https://mihael10.github.io/fahrschulring-stuttgart).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fahrschulring.de";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
