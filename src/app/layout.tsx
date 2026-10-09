import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { StickyContactBar } from "@/components/StickyContactBar";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { JsonLd } from "@/components/JsonLd";
import { graph, organizationNode, websiteNode } from "@/lib/schema";
import { isProduction, servedUrl } from "@/lib/site-url";
import { OG_IMAGE } from "@/lib/metadata";
import { site } from "@/content/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

// Page-level metadata (title, description, canonical, og:url, robots) is set
// per page through src/lib/metadata.ts → pageMetadata(). This root block
// only holds the defaults a page can't or shouldn't repeat. metadataBase is
// the *served* host so relative asset URLs resolve on previews too; the
// canonical host is always production (see src/lib/site-url.ts).
export const metadata: Metadata = {
  metadataBase: new URL(servedUrl),
  title: {
    default: `Fahrschule in ${site.address.district} – alle Führerscheinklassen | Fahrschulring`,
    template: "%s | Fahrschulring Stuttgart",
  },
  description:
    "Fahrschulring: Fahrschule in Stuttgart-Mitte (Hegelstraße 48) für Auto, Motorrad, Anhänger, LKW und Bus. Seit über 50 Jahren, E-Autos und Automatik, Fahrsimulator. Jetzt anrufen: 0711 295928.",
  // Staging protection: every page is noindex unless this is the production
  // build. Pages call pageMetadata() which sets this explicitly as well.
  robots: isProduction ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    siteName: site.name,
    locale: "de_DE",
    type: "website",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* Entity graph shared by every page: the business + the website.
            Pages add their own WebPage/BreadcrumbList/FAQPage/Service nodes
            that reference these by @id. */}
        <JsonLd data={graph([organizationNode(), websiteNode()])} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyContactBar />
        <CookieConsent />
        <AnalyticsEvents />
      </body>
    </html>
  );
}
