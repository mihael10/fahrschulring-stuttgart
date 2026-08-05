import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";
import { ClassesOverview } from "@/components/ClassesOverview";
import { Highlights } from "@/components/Highlights";
import { Process } from "@/components/Process";
import { TeamPreview } from "@/components/TeamPreview";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { ContactCta } from "@/components/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <ClassesOverview />
      <Highlights />
      <Process />
      <TeamPreview />
      <Testimonials />
      <Faq />
      <ContactCta />
    </>
  );
}
