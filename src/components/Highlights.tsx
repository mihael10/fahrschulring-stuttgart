import Image from "next/image";
import { Button } from "./Button";
import { basePath } from "@/lib/base-path";

const highlight = {
  tag: "Modern ausgestattet",
  title: "Fahrsimulator für den risikofreien Einstieg",
  description:
    "Erste Fahreindrücke, Gefahrensituationen und Routine üben wir gemeinsam im Simulator, bevor es auf die Straße geht.",
  cta: "Zum Fuhrpark",
  href: "/#fuhrpark",
  image: "/images/hero/simulator.jpg",
};

export function Highlights() {
  return (
    <section className="bg-green-950 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:flex-row">
          <div className="relative h-56 w-full sm:h-auto sm:w-1/2">
            <Image
              src={`${basePath}${highlight.image}`}
              alt={highlight.title}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center p-8 sm:p-10">
            <span className="text-xs font-bold uppercase tracking-wider text-green-400">
              {highlight.tag}
            </span>
            <h3 className="mt-3 text-xl font-bold text-white">{highlight.title}</h3>
            <p className="mt-3 text-sm text-green-100/75">{highlight.description}</p>
            <Button href={highlight.href} variant="ghost" className="mt-6 self-start">
              {highlight.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
