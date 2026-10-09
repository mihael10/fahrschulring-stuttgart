"use client";

import { useEffect } from "react";

// Conversion tracking for the only things this site exists to produce:
// phone calls, emails, form submissions, map/review clicks. Delegated click
// listener → GA4 events, fired only if gtag exists, i.e. only after the
// visitor accepted analytics in CookieConsent.tsx (no consent, no gtag, no
// events — nothing here touches storage or Google on its own).
//
// Event names/params are what knowledge/seo-kpi-dashboard.md expects; mark
// them as conversions ("Schlüsselereignisse") in the GA4 property.
type Gtag = (...args: unknown[]) => void;

function track(name: string, params: Record<string, string>) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}

export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const page = window.location.pathname;

      if (href.startsWith("tel:")) {
        track("phone_click", { link_url: href, page_path: page });
      } else if (href.startsWith("mailto:")) {
        track("email_click", { link_url: href, page_path: page });
      } else if (/maps\.google\.|google\.com\/maps|share\.google|maps\.app\.goo\.gl/.test(href)) {
        track("map_click", { link_url: href, page_path: page });
      } else if (link.dataset.cta) {
        track("cta_click", { cta: link.dataset.cta, link_url: href, page_path: page });
      }
    };

    const onFormSuccess = () => track("form_submit", { form: "kontakt", page_path: window.location.pathname });

    document.addEventListener("click", onClick);
    window.addEventListener("contact-form-sent", onFormSuccess);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("contact-form-sent", onFormSuccess);
    };
  }, []);

  return null;
}
