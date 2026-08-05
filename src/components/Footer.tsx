import Link from "next/link";
import Image from "next/image";
import { navigation, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-green-800 bg-green-950 text-green-100">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo/template-logo.jpg"
              alt="Fahrschulring Stuttgart"
              width={157}
              height={68}
              className="h-9 w-auto rounded bg-white/95 px-1.5 py-1"
            />
          </div>
          <p className="mt-4 text-sm text-green-100/70">{site.claim}</p>
          <p className="mt-2 text-sm text-green-100/70">
            Seit über {site.yearsExperience} Jahren in Stuttgart.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-green-100/70 hover:text-green-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Kontakt</h3>
          <ul className="mt-4 space-y-2 text-sm text-green-100/70">
            <li>{site.address.street}</li>
            <li>
              {site.address.zip} {site.address.city}
            </li>
            <li>
              <a href={`tel:${site.phoneHref}`} className="hover:text-green-400">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-green-400">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Bürozeiten</h3>
          <p className="mt-4 text-sm text-green-100/70">{site.hours.office}</p>
          <h3 className="mt-6 text-sm font-semibold text-white">Theorieunterricht</h3>
          <p className="mt-4 text-sm text-green-100/70">{site.hours.theory}</p>
        </div>
      </div>

      <div className="border-t border-green-800">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-green-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-green-400">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-green-400">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
