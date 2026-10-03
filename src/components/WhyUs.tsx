import { SectionHeading } from "./SectionHeading";
import { site } from "@/content/site";

// Stroke icons (24×24, currentColor) for the "why us" cards.
const iconPaths: Record<string, string[]> = {
  car: [
    "M5 17h14v-5l-2-5H7l-2 5v5z",
    "M5 12h14",
    "M7.5 17v2M16.5 17v2",
    "M8 14.5h.01M16 14.5h.01",
  ],
  award: ["M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", "M8.5 13.9 7 21l5-3 5 3-1.5-7.1"],
  layers: ["m12 3 9 5-9 5-9-5 9-5z", "m3 13 9 5 9-5"],
  wheel: [
    "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
    "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    "M3.5 10.5 10 12M20.5 10.5 14 12M12 14v7",
  ],
  pin: ["M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z", "M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"],
  clock: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M12 7v5l3 2"],
};

const points = [
  {
    title: "Moderne Flotte",
    icon: "car",
    description:
      "Elektroautos (VW ID.3, MG4, Tesla Model S), Automatik und Schaltung – du übst im Fahrzeug, das zu dir passt.",
  },
  {
    title: `${site.yearsExperience}+ Jahre Erfahrung`,
    icon: "award",
    description:
      "Fahrschulring bildet seit über einem halben Jahrhundert in Stuttgart aus – inhabergeführt von Frank Eibl.",
  },
  {
    title: "Alle Klassen unter einem Dach",
    icon: "layers",
    description:
      "Vom Roller bis zum Sattelzug: Motorrad, PKW, LKW und Bus – wir begleiten dich über deine gesamte Fahrkarriere.",
  },
  {
    title: "Fahrsimulator",
    icon: "wheel",
    description:
      "Im Simulator sammelst du erste Fahreindrücke und übst kritische Situationen risikofrei, bevor es auf die Straße geht.",
  },
  {
    title: "Zentrale Lage",
    icon: "pin",
    description: `${site.address.street}, mitten in Stuttgart – gut erreichbar für Theorie und Praxis.`,
  },
  {
    title: "Flexible Zeiten",
    icon: "clock",
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
              className="reveal rounded-2xl border border-green-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-900/5 motion-reduce:hover:translate-y-0"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  {iconPaths[point.icon].map((d) => (
                    <path key={d} d={d} />
                  ))}
                </svg>
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
