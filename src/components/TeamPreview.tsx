import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { team } from "@/content/team";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export function TeamPreview() {
  return (
    <section className="bg-navy-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Unser Team"
          title="Wir sind für dich da"
          description={`${team.length} erfahrene Fahrlehrer:innen begleiten dich persönlich durch deine gesamte Ausbildung.`}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center rounded-2xl border border-navy-100 bg-white p-6 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-lg font-bold text-amber-400">
                {initials(member.name)}
              </div>
              <h3 className="mt-4 text-sm font-bold text-navy-950">{member.name}</h3>
              <p className="mt-1 text-xs text-navy-700">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/team" variant="secondary">
            Ganzes Team kennenlernen
          </Button>
        </div>
      </div>
    </section>
  );
}
