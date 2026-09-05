"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-2EZF4EWNP8";
const STORAGE_KEY = "cookie-consent";
const REOPEN_EVENT = "open-cookie-settings";

type Consent = "granted" | "denied";

function readStoredConsent(): Consent | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "granted" || stored === "denied" ? stored : null;
  } catch {
    // Storage blocked (e.g. Safari private mode) — treat as no decision yet.
    return null;
  }
}

function deleteGaCookies() {
  for (const entry of document.cookie.split(";")) {
    const name = entry.split("=")[0]?.trim();
    if (name === "_ga" || name?.startsWith("_ga_")) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
  }
}

export function CookieConsent() {
  // localStorage isn't available on the server (static export prerenders
  // without `window`), so the stored consent has to be read post-mount to
  // avoid a hydration mismatch — this one-time sync setState is expected.
  const [consent, setConsent] = useState<Consent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage, unavailable during static-export prerender
    setConsent(stored);
    setShowBanner(stored === null);

    const reopen = () => setShowBanner(true);
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  function choose(value: Consent) {
    const isRevoking = value === "denied" && consent === "granted";
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Storage blocked — the choice just won't persist across visits.
    }
    setConsent(value);
    setShowBanner(false);
    if (value === "denied") {
      deleteGaCookies();
      // Unmounting the <Script> tags removes them from the DOM but can't
      // stop the gtag runtime that already executed — reload to actually
      // unload it when revoking a previously-granted consent.
      if (isRevoking) window.location.reload();
    }
  }

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {showBanner && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-green-800 bg-green-950 px-4 py-4 text-sm text-green-100 sm:px-6">
          <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-green-100/80">
              Wir nutzen Google Analytics, um zu verstehen, wie unsere Website genutzt
              wird. Das setzen wir erst ein, wenn du zustimmst. Mehr dazu in unserer{" "}
              <Link href="/datenschutz" className="underline hover:text-green-400">
                Datenschutzerklärung
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => choose("denied")}
                className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Ablehnen
              </button>
              <button
                type="button"
                onClick={() => choose("granted")}
                className="rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-green-950 hover:bg-green-400"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(REOPEN_EVENT));
}
