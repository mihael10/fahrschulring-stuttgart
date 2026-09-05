"use client";

import { openCookieSettings } from "@/components/CookieConsent";

export function CookieSettingsButton() {
  return (
    <button type="button" onClick={openCookieSettings} className="hover:text-green-400">
      Cookie-Einstellungen
    </button>
  );
}
