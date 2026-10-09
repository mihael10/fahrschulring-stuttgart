import { site } from "@/content/site";
import { findRoute } from "@/content/routes";
import { PRODUCTION_URL, productionUrl, servedUrl } from "./site-url";

// Stable entity identifiers — every JSON-LD node on the site references
// the business through ORGANIZATION_ID so search engines/LLMs see one
// entity, not a fresh anonymous "DrivingSchool" per page.
export const ORGANIZATION_ID = `${PRODUCTION_URL}/#organization`;
export const WEBSITE_ID = `${PRODUCTION_URL}/#website`;

// Only facts that are visible on the site and verified in site.ts go in
// here (no ratings, no geo coordinates, no founding date — none of those is
// verified by a primary source yet; see knowledge/entity-consistency.md).
export function organizationNode() {
  return {
    "@type": ["DrivingSchool", "LocalBusiness"],
    "@id": ORGANIZATION_ID,
    name: site.name,
    alternateName: "Fahrschulring",
    legalName: site.legalName,
    url: `${PRODUCTION_URL}/`,
    logo: `${servedUrl}/images/logo/template-logo.webp`,
    image: `${servedUrl}/images/og-cover.jpg`,
    telephone: site.phoneE164,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressRegion: "Baden-Württemberg",
      addressCountry: "DE",
    },
    hasMap: site.googleReviews.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "15:00",
        closes: "18:30",
      },
    ],
    areaServed: { "@type": "City", name: "Stuttgart" },
    knowsLanguage: ["de"],
    sameAs: [site.social.facebook, site.googleReviews.mapsUrl],
    slogan: site.claim,
    vatID: site.legal.vatId,
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${PRODUCTION_URL}/`,
    name: site.name,
    inLanguage: "de-DE",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function webPageNode({
  path,
  title,
  description,
}: {
  path: `/${string}`;
  title: string;
  description: string;
}) {
  const route = findRoute(path);
  return {
    "@type": "WebPage",
    "@id": `${productionUrl(path)}#webpage`,
    url: productionUrl(path),
    name: title,
    description,
    inLanguage: "de-DE",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    ...(route ? { dateModified: route.lastModified } : {}),
    ...(path !== "/" ? { breadcrumb: { "@id": `${productionUrl(path)}#breadcrumb` } } : {}),
  };
}

export function breadcrumbNode(path: `/${string}`) {
  const route = findRoute(path);
  if (!route || path === "/") return null;
  const chain = [findRoute("/")!, ...(route.parent ? [findRoute(route.parent)!] : []), route];
  return {
    "@type": "BreadcrumbList",
    "@id": `${productionUrl(path)}#breadcrumb`,
    itemListElement: chain.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.label,
      item: productionUrl(r.path),
    })),
  };
}

export function faqNode(items: { question: string; answer: string }[], path: `/${string}`) {
  return {
    "@type": "FAQPage",
    "@id": `${productionUrl(path)}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

// A Service node per licence-class page: the training the school sells.
// No price/offers — none are published (knowledge/content-editing.md).
export function serviceNode({
  path,
  name,
  description,
  classes,
}: {
  path: `/${string}`;
  name: string;
  description: string;
  classes: string[];
}) {
  return {
    "@type": "Service",
    "@id": `${productionUrl(path)}#service`,
    serviceType: "Fahrausbildung",
    name,
    description,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "City", name: "Stuttgart" },
    category: classes.map((c) => `Führerscheinklasse ${c}`),
    url: productionUrl(path),
  };
}

export function graph(nodes: (object | null)[]) {
  return { "@context": "https://schema.org", "@graph": nodes.filter(Boolean) };
}
