"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { PhoneIcon, MailIcon } from "./icons";
import {
  COOKIE_CONSENT_DECIDED_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
} from "./CookieConsent";

// Mobile-only floating call/email bar — the desktop header already keeps
// the phone number and a Kontakt button permanently visible, but on mobile
// that CTA scrolls out of view with the header. Kept off-screen until the
// cookie banner (also fixed to the bottom, full-width) has been dismissed,
// so the two never stack on top of each other.
export function StickyContactBar() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage, unavailable during static-export prerender
      setReady(window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY) !== null);
    } catch {
      setReady(true);
    }

    const onDecided = () => setReady(true);
    window.addEventListener(COOKIE_CONSENT_DECIDED_EVENT, onDecided);
    return () => window.removeEventListener(COOKIE_CONSENT_DECIDED_EVENT, onDecided);
  }, []);

  if (!ready) return null;

  return (
    <div className="animate-bar-slide-up fixed inset-x-3 bottom-3 z-40 flex gap-2 lg:hidden">
      <a
        href={`tel:${site.phoneHref}`}
        className="animate-cta-pulse flex flex-1 items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-3.5 text-sm font-bold text-green-950 shadow-lg shadow-green-950/25"
      >
        <PhoneIcon className="h-4 w-4" />
        Anrufen
      </a>
      <a
        href={`mailto:${site.email}`}
        aria-label="E-Mail schreiben"
        className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-green-950 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-950/25"
      >
        <MailIcon className="h-4 w-4" />
      </a>
    </div>
  );
}
