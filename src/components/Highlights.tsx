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
      caption: "Unser Fahrsimulator",
    },
    {
      src: "/images/hero/simulator-training.webp",
      alt: "Fahrlehrer erklärt einer Fahrschülerin am Fahrsimulator eine Verkehrssituation",
      caption: "Üben mit dem Fahrlehrer",
    },
  ],
};

export function Highlights() {
  return (
    <section className="bg-green-950 py-20 sm:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-green-400">
            {highlight.tag}
          </span>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{highlight.title}</h2>
          <p className="mt-4 text-green-100/75">{highlight.description}</p>
          <Button href={highlight.href} variant="ghost" className="mt-6">
            {highlight.cta}
          </Button>
        </div>

        {/* Both photos are 3:4 portraits — shown whole, not cropped. */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {highlight.images.map((image) => (
            <figure
              key={image.src}
              className="reveal overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={`${basePath}${image.src}`}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 28rem, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm font-semibold text-white">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
