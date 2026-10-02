import Image from "next/image";
import { Button } from "./Button";
import { basePath } from "@/lib/base-path";

const highlight = {
  tag: "Modern ausgestattet",
  title: "Fahrsimulator für den risikofreien Einstieg",
  description:
    "Im Simulator sammelst du erste Fahreindrücke und übst gemeinsam mit uns Gefahrensituationen und Abläufe, bevor es auf die Straße geht.",
  cta: "Zum Fuhrpark",
  href: "/#fuhrpark",
  images: [
    {
      src: "/images/hero/simulator.webp",
      alt: "Fahrsimulator mit Sportsitz, Lenkrad, Pedalen, Schaltung und drei Bildschirmen in unserer Fahrschule",
      position: "object-center",
    },
    {
      src: "/images/hero/simulator-training.webp",
      alt: "Fahrlehrer erklärt einer Fahrschülerin am Fahrsimulator eine Verkehrssituation",
      // Keep the instructor (right side of the photo) in frame under object-cover.
      position: "object-[80%_center]",
    },
  ],
};

export function Highlights() {
  return (
    <section className="bg-green-950 py-20 sm:py-28">
      <div className="container-page">
        <div className="reveal group mx-auto flex max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/20 sm:flex-row">
          <div className="grid h-64 w-full grid-cols-2 gap-px bg-white/10 sm:h-auto sm:min-h-[22rem] sm:w-1/2">
            {highlight.images.map((image) => (
              <div key={image.src} className="relative overflow-hidden">
                <Image
                  src={`${basePath}${image.src}`}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className={`object-cover ${image.position} transition-transform duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100`}
                />
              </div>
            ))}
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
