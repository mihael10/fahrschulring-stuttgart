import { Button } from "./Button";
import { site } from "@/content/site";
import { classes } from "@/content/classes";
import { team } from "@/content/team";
import { fleet } from "@/content/fleet";

const electricCount = fleet.filter((v) => v.tag === "Elektro").length;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-green-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60rem 30rem at 80% -10%, rgba(74,222,128,0.25), transparent), radial-gradient(40rem 25rem at 0% 100%, rgba(21,128,61,0.5), transparent)",
        }}
      />
      <div className="container-page relative flex flex-col gap-10 py-20 sm:py-28 lg:flex-row lg:items-center lg:gap-16 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-green-300 ring-1 ring-white/10">
            Seit über {site.yearsExperience} Jahren in Stuttgart
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Dein Führerschein.
            <span className="block text-green-400">Sicher ans Ziel.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-green-100/80">
            {site.claim} Moderne Flotte mit E-Autos, erfahrenes Fahrlehrer-Team
            und alle Führerscheinklassen – mitten in Stuttgart.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/kontakt" variant="primary">
              Kostenlos anmelden
            </Button>
            <Button href="/klassen" variant="ghost">
              Klassen &amp; Angebot ansehen
            </Button>
          </div>
          <a
            href={`tel:${site.phoneHref}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
          >
            oder direkt anrufen: {site.phone}
          </a>
        </div>

        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:w-80 lg:grid-cols-2">
          {[
            { value: `${site.yearsExperience}+`, label: "Jahre Erfahrung" },
            { value: `${classes.length}`, label: "Führerscheinklassen" },
            { value: `${team.length}`, label: "Fahrlehrer:innen" },
            { value: `${electricCount}`, label: "E-Fahrzeuge in der Flotte" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <dt className="text-2xl font-extrabold text-white">{stat.value}</dt>
              <dd className="mt-1 text-xs text-green-100/70">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
