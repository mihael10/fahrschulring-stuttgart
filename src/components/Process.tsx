import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    step: "1",
    title: "Anfragen",
    description: "Formular ausfüllen oder anrufen – wir klären deine Wunschklasse und Fragen.",
  },
  {
    step: "2",
    title: "Anmelden",
    description: "Sehtest, Erste-Hilfe-Kurs, Antrag bei der Führerscheinstelle – wir begleiten dich Schritt für Schritt.",
  },
  {
    step: "3",
    title: "Theorie & Praxis",
    description: "Unterricht am Nachmittag/Abend, Praxisstunden nach Absprache – inklusive Simulator.",
  },
  {
    step: "4",
    title: "Prüfung",
    description: "Bestens vorbereitet zur Theorie- und Praxisprüfung – dein Führerschein in der Tasche.",
  },
];

export function Process() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="So läuft's ab"
          title="In vier Schritten zum Führerschein"
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, idx) => (
            <div key={item.step} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 text-lg font-extrabold text-amber-400">
                {item.step}
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy-950">{item.title}</h3>
              <p className="mt-2 text-sm text-navy-700">{item.description}</p>
              {idx < steps.length - 1 && (
                <div
                  aria-hidden
                  className="absolute right-[-1rem] top-6 hidden h-px w-8 bg-navy-100 lg:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
