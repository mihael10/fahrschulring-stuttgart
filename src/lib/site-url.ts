// Where the site is *served* vs. what it *canonically is* are two different
// things (knowledge/seo-strategy.md → "Staging vs. production"):
//
// - PRODUCTION_URL is the one canonical hostname of the business website.
//   Canonical tags, sitemap <loc>s, og:url and JSON-LD always use it, so a
//   preview build never declares itself the canonical copy.
// - servedUrl is where *this* build is actually reachable (the GitHub Pages
//   preview URL incl. basePath, or the production domain). Only used for
//   things that must resolve on the current host (the og:image file).
// - isProduction flips the build from "staging, keep out of the index"
//   (noindex/nofollow on every page, robots.txt disallow, no canonical) to
//   "production" (indexable, canonical, sitemap). It is set by deploy.yml
//   from the PRODUCTION_DOMAIN repo variable — never by default, so a stray
//   preview deploy can't become an indexable duplicate.
export const PRODUCTION_URL = "https://www.fahrschulring.de";

export const isProduction = process.env.SITE_IS_PRODUCTION === "true";

export const servedUrl = process.env.NEXT_PUBLIC_SITE_URL ?? PRODUCTION_URL;

// Absolute production URL for a site path ("/klassen/" → "https://www.…/klassen/").
export const productionUrl = (path: string) => `${PRODUCTION_URL}${path}`;
