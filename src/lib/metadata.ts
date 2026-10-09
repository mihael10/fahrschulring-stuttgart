import type { Metadata } from "next";
import { isProduction, productionUrl, servedUrl } from "./site-url";
import { site } from "@/content/site";

export const OG_IMAGE = {
  url: `${servedUrl}/images/og-cover.jpg`,
  width: 1200,
  height: 630,
  alt: "Fahrschulring – Fahrschule in Stuttgart-Mitte, Hegelstraße 48",
};

// Per-page metadata with the SEO plumbing every indexable page needs:
// canonical on the production host, matching og:url/og:title/og:description
// (the root layout's OG block used to be inherited verbatim by every page, so
// all subpages shared the homepage og:url), and staging protection.
//
// `title` is the full <title> (no template) so each page controls its own
// length/wording; keep it ≤ 60 characters where possible.
export function pageMetadata({
  path,
  title,
  description,
  ogTitle,
  noindex = false,
}: {
  path: `/${string}`;
  title: string;
  description: string;
  ogTitle?: string;
  noindex?: boolean;
}): Metadata {
  const url = productionUrl(path);
  const index = isProduction && !noindex;
  return {
    title: { absolute: title },
    description,
    // No canonical on staging: a noindex page that also canonicalises to
    // another URL sends Google two conflicting signals.
    alternates: isProduction && !noindex ? { canonical: url } : undefined,
    robots: index ? { index: true, follow: true } : { index: false, follow: !noindex && false },
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: site.name,
      url,
      title: ogTitle ?? title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
