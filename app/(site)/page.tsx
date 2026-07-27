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

type Stat = { label: string; value: string };

export default async function Home() {
  const settings = await getSiteSettings();
  const mechafrica = await getProductBySlug("mechafrica");

  // Stats are stored as JSON on the product; fall back gracefully if unset.
  const mechafricaStats = (Array.isArray(mechafrica?.stats) ? mechafrica.stats : []) as Stat[];

  return (
    <>
      <HeroSection />

      <SectionSwoop><StatsFactsSection /></SectionSwoop>
      <SectionSwoop>
        <FeaturedProjectsSection
          mechafricaUrl={mechafrica?.url ?? "https://www.mechafrica.com/"}
          tagline={mechafrica?.tagline ?? "The product we build and own"}
          description={
            mechafrica?.description ??
            "MechAfrica connects farmers with mechanization, crop care, and logistics providers through an offline-first, mobile and USSD-based platform — starting in Ghana, scaling pan-African."
          }
          stats={mechafricaStats}
        />
      </SectionSwoop>
      <SectionSwoop><ServicesSection /></SectionSwoop>
      <SectionSwoop><WhyChooseUsSection /></SectionSwoop>
      <SectionSwoop><TestimonialsSection /></SectionSwoop>
      <SectionSwoop fullHeight={false}><GetInTouchSection contactEmail={settings.contactEmail} /></SectionSwoop>
    </>
  );
}
