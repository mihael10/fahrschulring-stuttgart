import Image from "next/image";
import { Button } from "./Button";
import { site } from "@/content/site";
import { classes } from "@/content/classes";
import { team } from "@/content/team";
import { fleet } from "@/content/fleet";
import { basePath } from "@/lib/base-path";
import { PhoneIcon } from "./icons";
import { Counter } from "./Counter";

const electricCount = fleet.filter((v) => v.tag === "Elektro").length;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-green-950">
      <Image
        src={`${basePath}/images/hero/storefront.webp`}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-green-950/60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60rem 30rem at 80% -10%, rgba(74,222,128,0.25), transparent), radial-gradient(40rem 25rem at 0% 100%, rgba(21,128,61,0.5), transparent)",
        }}
      />
      <Image
        src={`${basePath}/images/logo/vb-fs-logo.webp`}
        alt="Gut betreut – Verbands-Fahrschule"
        width={90}
        height={95}
        className="absolute right-5 top-5 z-10 hidden h-16 w-auto drop-shadow-lg sm:right-8 sm:top-8 sm:block sm:h-20"
      />
      <div className="container-page relative flex flex-col items-center gap-10 py-20 text-center sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-green-300 ring-1 ring-white/10">
            Seit über {site.yearsExperience} Jahren in Stuttgart
          </span>
          <h1 className="animate-fade-up mt-6 text-4xl font-extrabold leading-tight text-white [animation-delay:80ms] sm:text-5xl lg:text-6xl">
            Deine Fahrschule in Stuttgart-Mitte.
            <span className="block text-green-400">{site.claim}</span>
          </h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-xl text-lg text-green-100/80 [animation-delay:160ms]">
            Seit über {site.yearsExperience} Jahren sind wir kompetenter Ansprechpartner
            rund um den Führerschein.
          </p>
          <div className="animate-fade-up mt-9 flex flex-wrap justify-center gap-4 [animation-delay:240ms]">
            <Button href="#kontakt" variant="primary" className="animate-cta-pulse">
              Jetzt Kontakt aufnehmen
            </Button>
            <Button href="#klassen" variant="ghost">
              Klassen ansehen
            </Button>
          </div>
          <a
            href={`tel:${site.phoneHref}`}
            className="animate-fade-up mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 [animation-delay:320ms] hover:text-white"
          >
            <PhoneIcon className="animate-ring-wiggle h-4 w-4" />
            oder direkt anrufen: {site.phone}
          </a>
        </div>

        <dl className="grid w-full max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: site.yearsExperience, suffix: "+", label: "Jahre Erfahrung" },
            { value: classes.length, suffix: "", label: "Führerscheinklassen" },
            { value: team.length, suffix: "", label: "Fahrlehrer" },
            { value: electricCount, suffix: "", label: "E-Modelle in der Flotte" },
          ].map((stat, i) => {
            const delay = 400 + i * 90;
            return (
              <div
                key={stat.label}
                style={{ animationDelay: `${delay}ms` }}
                className="animate-fade-up rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/10"
              >
                <dt className="text-2xl font-extrabold text-white">
                  <Counter value={stat.value} suffix={stat.suffix} delay={delay} />
                </dt>
                <dd className="mt-1 text-xs text-green-100/70">{stat.label}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
