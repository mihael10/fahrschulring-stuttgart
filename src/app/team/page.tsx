import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Team",
  description: "Lerne das Fahrlehrer-Team von Fahrschulring Stuttgart kennen.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Wir sind für dich da"
        description={`${team.length} erfahrene Fahrlehrer:innen begleiten dich persönlich durch deine gesamte Ausbildung.`}
      />
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center rounded-2xl border border-navy-100 bg-white p-8 text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-navy-900 text-xl font-bold text-amber-400">
                {initials(member.name)}
              </div>
              <h2 className="mt-5 text-base font-bold text-navy-950">{member.name}</h2>
              <p className="mt-1 text-sm text-navy-700">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <ContactCta />
    </>
  );
}
