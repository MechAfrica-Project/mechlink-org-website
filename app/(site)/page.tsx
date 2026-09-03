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
import { getServices, getTestimonials } from "@/lib/content";
import { withLiveMetrics, type Stat } from "@/lib/metrics";

export default async function Home() {
  const [settings, mechafrica, services, testimonials] = await Promise.all([
    getSiteSettings(),
    getProductBySlug("mechafrica"),
    getServices(),
    getTestimonials(),
  ]);

  // Stats are stored as JSON on the product; fall back gracefully if unset.
  const storedStats = (Array.isArray(mechafrica?.stats) ? mechafrica.stats : []) as Stat[];
  // Farmer and provider counts come live from the MechAfrica backend, so the
  // figures track the platform without anyone editing them in the admin.
  const mechafricaStats = await withLiveMetrics(storedStats);

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
          features={mechafrica?.features ?? []}
        />
      </SectionSwoop>
      <SectionSwoop><ServicesSection services={services} /></SectionSwoop>
      <SectionSwoop><WhyChooseUsSection /></SectionSwoop>
      <SectionSwoop><TestimonialsSection testimonials={testimonials} /></SectionSwoop>
      <SectionSwoop fullHeight={false}><GetInTouchSection contactEmail={settings.contactEmail} /></SectionSwoop>
    </>
  );
}
