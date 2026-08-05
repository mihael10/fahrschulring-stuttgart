"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation, site } from "@/content/site";
import { Button } from "./Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-navy-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-amber-400 sm:h-10 sm:w-10">
            FR
          </span>
          <span className="text-base leading-tight sm:text-lg">
            Fahrschulring
            <span className="block text-xs font-medium text-navy-600 sm:text-sm">
              Stuttgart
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-800 hover:text-navy-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${site.phoneHref}`}
            className="text-sm font-semibold text-navy-800 hover:text-navy-950"
          >
            {site.phone}
          </a>
          <Button href="/kontakt" variant="primary">
            Jetzt anmelden
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-100 lg:hidden"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-navy-900" />
            <span className="h-0.5 w-5 bg-navy-900" />
            <span className="h-0.5 w-5 bg-navy-900" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navigation.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy-800 hover:bg-navy-50"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phoneHref}`}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-navy-800 hover:bg-navy-50"
            >
              {site.phone}
            </a>
            <Button href="/kontakt" variant="primary" className="mt-2" onClick={() => setOpen(false)}>
              Jetzt anmelden
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
