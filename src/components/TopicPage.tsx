import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { Breadcrumbs } from "./Breadcrumbs";
import { Lead, Sources, type Source } from "./content/Prose";
import { FaqList } from "./FaqList";
import { ContactCta } from "./ContactCta";
import { JsonLd } from "./JsonLd";
import { breadcrumbNode, graph, serviceNode, webPageNode } from "@/lib/schema";
import { findRoute } from "@/content/routes";
import type { FaqItem } from "@/content/faq";

// Common skeleton of every topic page, in the order answer engines and
// skim-readers want it (knowledge/seo-strategy.md → "AI-ready content"):
// breadcrumb → H1 → direct answer → detailed sections → FAQ → sources → CTA.
export function TopicPage({
  path,
  eyebrow,
  title,
  description,
  metaTitle,
  metaDescription,
  lead,
  children,
  faq,
  sources,
  service,
}: {
  path: `/${string}`;
  eyebrow: string;
  title: string;
  description?: string;
  metaTitle: string;
  metaDescription: string;
  lead: ReactNode;
  children: ReactNode;
  faq: FaqItem[];
  sources: Source[];
  service?: { name: string; description: string; classes: string[] };
}) {
  const route = findRoute(path);
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({ path, title: metaTitle, description: metaDescription }),
          breadcrumbNode(path),
          service ? serviceNode({ path, ...service }) : null,
        ])}
      />
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <Breadcrumbs path={path} />
      <div className="pt-10">
        <Lead>{lead}</Lead>
      </div>
      {children}
      <FaqList items={faq} path={path} title={`Häufige Fragen: ${eyebrow}`} />
      {route && <Sources updated={route.lastModified} sources={sources} />}
      <ContactCta />
    </>
  );
}
