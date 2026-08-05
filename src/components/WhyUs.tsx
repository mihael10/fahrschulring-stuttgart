import { SectionHeading } from "./SectionHeading";
import { site } from "@/content/site";

const points = [
  {
    title: "Moderne Flotte",
    description:
      "Elektroautos (VW ID.3, MG4, Tesla Model S), Automatik und Schaltung – du übst im Fahrzeug, das zu dir passt.",
  },
  {
    title: `${site.yearsExperience}+ Jahre Erfahrung`,
    description:
      "Fahrschulring bildet seit über einem halben Jahrhundert in Stuttgart aus – inhabergeführt von Frank Eibl.",
  },
  {
    title: "Alle Klassen unter einem Dach",
    description:
      "Vom Roller bis zum Sattelzug: Motorrad, PKW, LKW und Bus – wir begleiten dich über deine gesamte Fahrkarriere.",
  },
  {
    title: "Fahrsimulator",
    description:
      "Erste Fahreindrücke und kritische Situationen übst du risikofrei im Simulator, bevor es auf die Straße geht.",
  },
  {
    title: "Zentrale Lage",
    description: `${site.address.street}, mitten in Stuttgart – gut erreichbar für Theorie und Praxis.`,
  },
  {
    title: "Flexible Zeiten",
    description:
      "Theorieunterricht am Nachmittag und Abend, Praxistermine nach Absprache – auch neben Schule oder Job.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Warum Fahrschulring"
          title="Fahrschule, die zu deinem Leben passt"
          description="Wir verbinden jahrzehntelange Erfahrung mit moderner Ausstattung – für eine Ausbildung, auf die du dich verlassen kannst."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-green-100 p-6 transition-shadow hover:shadow-lg hover:shadow-green-900/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-green-950">{point.title}</h3>
              <p className="mt-2 text-sm text-green-700">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
