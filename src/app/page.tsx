import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";
import { ClassesOverview } from "@/components/ClassesOverview";
import { Highlights } from "@/components/Highlights";
import { VehicleCarousel } from "@/components/VehicleCarousel";
import { Process } from "@/components/Process";
import { TeamPreview } from "@/components/TeamPreview";
import { Testimonials } from "@/components/Testimonials";
import { GoogleReviews } from "@/components/GoogleReviews";
import { FaqList } from "@/components/FaqList";
import { LocationSection } from "@/components/LocationSection";
import { ContactSection } from "@/components/ContactSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { graph, webPageNode } from "@/lib/schema";
import { faq } from "@/content/faq";

const path = "/" as const;
const title = "Fahrschule in Stuttgart-Mitte – alle Führerscheinklassen | Fahrschulring";
const description =
  "Fahrschulring: Fahrschule in Stuttgart-Mitte (Hegelstraße 48) für Auto, Motorrad, Anhänger, LKW und Bus. Seit über 50 Jahren, E-Autos und Automatik, Fahrsimulator, 4,9 Sterne bei Google. Jetzt anrufen: 0711 295928.";

export const metadata = pageMetadata({ path, title, description, ogTitle: "Fahrschulring – Fahrschule in Stuttgart-Mitte" });

export default function Home() {
  return (
    <>
      <JsonLd data={graph([webPageNode({ path, title, description })])} />
      <Hero />
      <WhyUs />
      <ClassesOverview />
      <Highlights />
      <VehicleCarousel />
      <Process />
      <TeamPreview />
      <GoogleReviews />
      <Testimonials />
      <FaqList items={faq} path={path} title="Gut zu wissen" eyebrow="Häufige Fragen" />
      <LocationSection />
      <ContactSection />
    </>
  );
}
