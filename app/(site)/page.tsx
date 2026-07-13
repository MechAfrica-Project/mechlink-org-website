import HeroSection from "@/components/sections/HeroSection";
import StatsFactsSection from "@/components/sections/StatsFactsSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GetInTouchSection from "@/components/sections/GetInTouchSection";
import { SectionSwoop } from "@/components/ui/SectionSwoop";
import { getSiteSettings } from "@/lib/site-settings";
import { getProductBySlug } from "@/lib/products";

export default async function Home() {
  const settings = await getSiteSettings();
  const mechafrica = await getProductBySlug("mechafrica");

  return (
    <>
      <HeroSection />

      <SectionSwoop><StatsFactsSection /></SectionSwoop>
      <SectionSwoop><FeaturedProjectsSection mechafricaUrl={mechafrica?.url ?? "https://www.mechafrica.com/"} /></SectionSwoop>
      <SectionSwoop><ServicesSection /></SectionSwoop>
      <SectionSwoop><WhyChooseUsSection /></SectionSwoop>
      <SectionSwoop><TestimonialsSection /></SectionSwoop>
      <SectionSwoop fullHeight={false}><GetInTouchSection contactEmail={settings.contactEmail} /></SectionSwoop>
    </>
  );
}
