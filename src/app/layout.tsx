import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fahrschulring.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fahrschulring Stuttgart – Führerschein mit über 50 Jahren Erfahrung",
    template: "%s | Fahrschulring Stuttgart",
  },
  description:
    "Fahrschulring Stuttgart bildet seit über 50 Jahren in allen Führerscheinklassen aus – moderne Flotte mit E-Autos, erfahrenes Team, zentral in Stuttgart-Mitte. Jetzt unverbindlich Kontakt aufnehmen.",
  openGraph: {
    title: "Fahrschulring Stuttgart",
    description:
      "Führerschein in allen Klassen – moderne Flotte, erfahrenes Team, zentral in Stuttgart.",
    url: siteUrl,
    siteName: "Fahrschulring Stuttgart",
    locale: "de_DE",
    type: "website",
    images: [
      {
        // Absolute, not "/images/..." — metadataBase resolution treats a
        // leading slash as domain-root, which would drop the GitHub Pages
        // basePath (see next.config.ts).
        url: `${siteUrl}/images/og-cover.jpg`,
        width: 1200,
        height: 630,
        alt: "Fahrschulring Stuttgart",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: site.name,
    legalName: site.legalName,
    image: `${siteUrl}/images/og-cover.jpg`,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressCountry: "DE",
    },
    openingHours: "Mo-Th 15:00-18:30",
    url: siteUrl,
  };

  return (
    <html lang="de" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
