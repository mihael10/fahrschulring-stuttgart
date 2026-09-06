import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { team } from "@/content/team";
import { basePath } from "@/lib/base-path";

export function TeamPreview() {
  return (
    <section className="bg-green-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Unser Team"
          title="Wir sind für dich da"
          description={`${team.length} erfahrene Fahrlehrer begleiten dich persönlich durch deine gesamte Ausbildung.`}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((member) => (
            <div
              key={member.name}
              className="reveal group flex flex-col items-center rounded-2xl border border-green-100 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/5 motion-reduce:hover:translate-y-0"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full bg-green-900">
                {member.photo && (
                  <Image
                    src={`${basePath}${member.photo}`}
                    alt={member.name}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100"
                  />
                )}
              </div>
              <h3 className="mt-4 text-sm font-bold text-green-950">{member.name}</h3>
              <p className="mt-1 text-xs text-green-700">{member.role}</p>
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
