import { SectionHeading } from "./SectionHeading";
import { testimonials } from "@/content/testimonials";

// Renders nothing until src/content/testimonials.ts has real entries.
// Do not fill this with placeholder quotes — see the comment in that file.
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-green-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Stimmen unserer Fahrschüler:innen" title="Das sagen unsere Absolvent:innen" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.author} className="rounded-2xl border border-green-100 bg-white p-6">
              <blockquote className="text-sm text-green-800">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-green-950">
                {t.author}
                {t.class && <span className="ml-1 font-normal text-green-600">· Klasse {t.class}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
