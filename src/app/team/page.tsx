import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCta } from "@/components/ContactCta";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { team } from "@/content/team";
import { site } from "@/content/site";
import { basePath } from "@/lib/base-path";

const path = "/team/" as const;
const title = "Fahrlehrer-Team der Fahrschule Fahrschulring in Stuttgart";
const description = `Die ${team.length} Fahrlehrerinnen und Fahrlehrer von Fahrschulring in Stuttgart-Mitte – mit den Führerscheinklassen, die sie unterrichten. Inhaber: ${site.owner}, Fahrlehrer aller Klassen.`;

export const metadata = pageMetadata({ path, title, description });

export default function TeamPage() {
  return (
    <>
      <JsonLd data={graph([webPageNode({ path, title, description }), breadcrumbNode(path)])} />
      <PageHero
        eyebrow="Team"
        title="Unser Fahrlehrer-Team in Stuttgart"
        description={`${team.length} erfahrene Fahrlehrerinnen und Fahrlehrer begleiten dich persönlich durch deine gesamte Ausbildung – inhabergeführt von ${site.owner}.`}
      />
      <Breadcrumbs path={path} />
      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="reveal group flex flex-col items-center rounded-2xl border border-green-100 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/5 motion-reduce:hover:translate-y-0"
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-green-900">
                {member.photo && (
                  <Image
                    src={`${basePath}${member.photo}`}
                    alt={`${member.name}, ${member.role} bei Fahrschulring Stuttgart`}
                    fill
                    sizes="96px"
                    className="object-cover transition-transform duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100"
                  />
                )}
              </div>
              <h2 className="mt-5 text-base font-bold text-green-950">{member.name}</h2>
              <p className="mt-1 text-sm text-green-700">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <ContactCta />
    </>
  );
}
