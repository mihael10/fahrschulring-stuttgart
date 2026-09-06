import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { team } from "@/content/team";
import { basePath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Team",
  description: "Lerne das Fahrlehrer-Team von Fahrschulring Stuttgart kennen.",
  alternates: { canonical: "/team/" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Wir sind für dich da"
        description={`${team.length} erfahrene Fahrlehrer begleiten dich persönlich durch deine gesamte Ausbildung.`}
      />
      <div className="container-page py-16 sm:py-20">
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
                    alt={member.name}
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
