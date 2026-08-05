"use client";

import { FormEvent, useState } from "react";
import { classes } from "@/content/classes";

const classOptions = Array.from(new Set(classes.map((c) => c.title)));

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      wunschklasse: String(data.get("wunschklasse") || ""),
      message: String(data.get("message") || ""),
      consent: data.get("consent") === "on",
      company: String(data.get("company") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Der Versand ist fehlgeschlagen.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Unbekannter Fehler.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-100 bg-green-50 p-8 text-center">
        <h3 className="text-lg font-bold text-green-950">Danke für deine Anfrage!</h3>
        <p className="mt-2 text-sm text-green-700">
          Wir melden uns schnellstmöglich bei dir zurück.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot – hidden from real users, catches bots */}
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
          <input
            id="name"
            name="name"
            required
            className="mt-1.5 w-full rounded-lg border border-green-200 px-3.5 py-2.5 text-sm outline-none focus:border-green-700"
          />
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
            className="mt-1.5 w-full rounded-lg border border-green-200 px-3.5 py-2.5 text-sm outline-none focus:border-green-700"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-green-900">
            Telefon (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1.5 w-full rounded-lg border border-green-200 px-3.5 py-2.5 text-sm outline-none focus:border-green-700"
          />
        </div>
        <div>
          <label htmlFor="wunschklasse" className="text-sm font-semibold text-green-900">
            Gewünschte Klasse *
          </label>
          <select
            id="wunschklasse"
            name="wunschklasse"
            required
            defaultValue=""
            className="mt-1.5 w-full rounded-lg border border-green-200 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-green-700"
          >
            <option value="" disabled>
              Bitte wählen
            </option>
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
          Nachricht (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1.5 w-full rounded-lg border border-green-200 px-3.5 py-2.5 text-sm outline-none focus:border-green-700"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-green-700">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-green-300"
        />
        <span>
          Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage gespeichert
          werden. Details in der{" "}
          <a href="/datenschutz" className="underline hover:text-green-950">
            Datenschutzerklärung
          </a>
          . *
        </span>
      </label>

      {status === "error" && errorMessage && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-green-950 transition-colors hover:bg-green-400 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Wird gesendet…" : "Anfrage senden"}
      </button>
    </form>
  );
}
