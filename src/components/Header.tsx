"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, site } from "@/content/site";
import { basePath } from "@/lib/base-path";
import { Button } from "./Button";
import { PhoneIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Re-synced on every route change too — the App Router resets scroll
    // position on navigation, but this component stays mounted across it,
    // so without the pathname dependency the shadow could stay stuck "on"
    // from the previous page until the next scroll event.
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    // Safety net for e.g. the browser back/forward button, which bypasses
    // each nav Link's own onClick={() => setOpen(false)}.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- closing the menu is itself the synchronization this effect exists to do
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "border-green-100 shadow-sm shadow-green-950/5" : "border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={`${basePath}/images/logo/template-logo.webp`}
            alt="Fahrschulring Stuttgart"
            width={157}
            height={68}
            priority
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-green-800 hover:text-green-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-800 hover:text-green-950"
          >
            <PhoneIcon className="animate-ring-wiggle h-4 w-4" />
            {site.phone}
          </a>
          <Button href="/#kontakt" variant="primary">
            Kontakt aufnehmen
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-100 lg:hidden"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-green-900 transition-transform duration-300 motion-reduce:transition-none ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-green-900 transition-opacity duration-200 motion-reduce:transition-none ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-green-900 transition-transform duration-300 motion-reduce:transition-none ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="animate-dropdown-in border-t border-green-100 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navigation.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-green-800 hover:bg-green-50"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-green-800 hover:bg-green-50"
            >
              <PhoneIcon className="animate-ring-wiggle h-4 w-4" />
              {site.phone}
            </a>
            <Button href="/#kontakt" variant="primary" className="mt-2" onClick={() => setOpen(false)}>
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
