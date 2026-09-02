import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";
import { ClassesOverview } from "@/components/ClassesOverview";
import { Highlights } from "@/components/Highlights";
import { VehicleCarousel } from "@/components/VehicleCarousel";
import { Process } from "@/components/Process";
import { TeamPreview } from "@/components/TeamPreview";
import { Testimonials } from "@/components/Testimonials";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Faq } from "@/components/Faq";
import { ContactCta } from "@/components/ContactCta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <ClassesOverview />
      <Highlights />
      <VehicleCarousel />
      <Process />
      <TeamPreview />
      <GoogleReviews />
      <Testimonials />
      <Faq />
      <ContactCta />
    </>
  );
}
