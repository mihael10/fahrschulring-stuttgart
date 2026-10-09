"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { classes } from "@/content/classes";
import { site } from "@/content/site";

const classOptions = Array.from(new Set(classes.map((c) => c.title)));

// URL of alfahosting/kontakt.php on the Alfahosting webspace, set via the
// CONTACT_ENDPOINT repository variable (see knowledge/deployment.md). While
// it's unset, the form opens the visitor's mail app with the message
// pre-filled instead of sending it directly.
const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-green-200 bg-white px-3.5 py-2.5 text-sm text-green-950 outline-none transition-colors focus:border-green-600 focus:ring-2 focus:ring-green-500/20";

function buildMailto(data: FormData) {
  const get = (key: string) => String(data.get(key) ?? "").trim();
  const body = [
    `Name: ${get("name")}`,
    `E-Mail: ${get("email")}`,
    `Telefon: ${get("phone") || "–"}`,
    `Gewünschte Klasse: ${get("wunschklasse") || "–"}`,
    "",
    get("message"),
  ].join("\n");
  const subject = `Kontaktanfrage über die Website: ${get("name")}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);

    if (!endpoint) {
      window.location.href = buildMailto(data);
      return;
    }

    setStatus("loading");
    setErrorMessage(null);
    try {
      const res = await fetch(endpoint, { method: "POST", body: data });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Der Versand ist fehlgeschlagen.");
      }
      setStatus("success");
      form.reset();
      // Picked up by AnalyticsEvents.tsx (GA4 "form_submit", consent-gated).
      window.dispatchEvent(new Event("contact-form-sent"));
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Der Versand ist fehlgeschlagen.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-green-100 bg-green-50 p-8 text-center">
        <h3 className="text-lg font-bold text-green-950">Danke für deine Nachricht!</h3>
        <p className="mt-2 text-sm text-green-700">Wir melden uns so schnell wie möglich bei dir.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot – hidden from real visitors, catches bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Firma
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-green-900">
            Name *
          </label>
          <input id="name" name="name" required autoComplete="name" maxLength={200} className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-green-900">
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={200}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-green-900">
            Telefon (optional)
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={50} className={inputClass} />
        </div>
        <div>
          <label htmlFor="wunschklasse" className="text-sm font-semibold text-green-900">
            Gewünschte Klasse (optional)
          </label>
          <select id="wunschklasse" name="wunschklasse" defaultValue="" className={inputClass}>
            <option value="">Bitte wählen</option>
            {classOptions.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
            <option value="Noch unsicher">Noch unsicher</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-green-900">
          Nachricht *
        </label>
        <textarea id="message" name="message" rows={5} required maxLength={5000} className={inputClass} />
      </div>

      <p className="text-xs text-green-700">
        Deine Angaben verwenden wir ausschließlich zur Bearbeitung deiner Anfrage. Mehr dazu in
        unserer{" "}
        <Link href="/datenschutz" className="underline hover:text-green-950">
          Datenschutzerklärung
        </Link>
        .
      </p>

      {status === "error" && errorMessage && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage} Bitte versuche es erneut oder schreib uns direkt an{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-green-950 transition-colors hover:bg-green-400 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Wird gesendet…" : "Nachricht senden"}
      </button>
    </form>
  );
}
