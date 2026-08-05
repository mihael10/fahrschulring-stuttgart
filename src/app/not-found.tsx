import type { Metadata } from "next";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="bg-green-950">
      <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-green-400">
          404
        </span>
        <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
          Diese Seite gibt es nicht.
        </h1>
        <p className="mt-4 max-w-md text-green-100/75">
          Der Link war fehlerhaft oder die Seite wurde verschoben. Von der
          Startseite aus findest du alles Weitere.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary">
            Zur Startseite
          </Button>
          <Button href="/kontakt" variant="ghost">
            Kontakt aufnehmen
          </Button>
        </div>
      </div>
    </section>
  );
}
