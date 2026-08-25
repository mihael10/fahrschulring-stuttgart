import Image from "next/image";
import { Button } from "./Button";
import { basePath } from "@/lib/base-path";

const highlights = [
  {
    tag: "Für Auto-Fahrer:innen",
    title: "B196 – Motorrad fahren mit deinem Autoführerschein",
    description:
      "Mit vorhandener Klasse B steigst du über eine kompakte Zusatzausbildung aufs 125-cm³-Motorrad um – ohne neue Theorieprüfung.",
    cta: "Mehr zu B196",
    href: "/klassen#motorrad",
    image: "/images/fleet/duke.jpg",
  },
  {
    tag: "Für Eltern & Jugendliche",
    title: "Begleitetes Fahren ab 17 (BF17)",
    description:
      "Führerschein mit 17, erste Praxiserfahrung in Begleitung – ein sicherer Start vor dem selbstständigen Fahren ab 18.",
    cta: "Mehr zu BF17",
    href: "/klassen#auto",
    image: "/images/fleet/golf.jpg",
  },
  {
    tag: "Modern ausgestattet",
    title: "Fahrsimulator für den risikofreien Einstieg",
    description:
      "Erste Fahreindrücke, Gefahrensituationen und Routine üben wir gemeinsam im Simulator, bevor es auf die Straße geht.",
    cta: "Zum Fuhrpark",
    href: "/#fuhrpark",
    image: "/images/hero/simulator.jpg",
  },
];

export function Highlights() {
  return (
    <section className="bg-green-950 py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={`${basePath}${item.image}`}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-green-400">
                  {item.tag}
                </span>
                <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm text-green-100/75">{item.description}</p>
                <Button href={item.href} variant="ghost" className="mt-6 self-start">
                  {item.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
