import { Button } from "./Button";

const highlights = [
  {
    tag: "Für Auto-Fahrer:innen",
    title: "B196 – Motorrad fahren mit deinem Autoführerschein",
    description:
      "Mit vorhandener Klasse B steigst du über eine kompakte Zusatzausbildung aufs 125-cm³-Motorrad um – ohne neue Theorieprüfung.",
    cta: "Mehr zu B196",
    href: "/klassen#motorrad",
  },
  {
    tag: "Für Eltern & Jugendliche",
    title: "Begleitetes Fahren ab 17 (BF17)",
    description:
      "Führerschein mit 17, erste Praxiserfahrung in Begleitung – ein sicherer Start vor dem selbstständigen Fahren ab 18.",
    cta: "Mehr zu BF17",
    href: "/klassen#auto",
  },
  {
    tag: "Modern ausgestattet",
    title: "Fahrsimulator für den risikofreien Einstieg",
    description:
      "Erste Fahreindrücke, Gefahrensituationen und Routine üben wir gemeinsam im Simulator, bevor es auf die Straße geht.",
    cta: "Zum Fuhrpark",
    href: "/fahrzeuge",
  },
];

export function Highlights() {
  return (
    <section className="bg-navy-950 py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {item.tag}
              </span>
              <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm text-navy-100/75">{item.description}</p>
              <Button href={item.href} variant="ghost" className="mt-6 self-start">
                {item.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
