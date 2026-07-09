import HeroSection from "../components/sections/HeroSection";
import StatsFactsSection from "../components/sections/StatsFactsSection";
import FeaturedProjectsSection from "../components/sections/FeaturedProjectsSection";
import ServicesSection from "../components/sections/ServicesSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import GetInTouchSection from "../components/sections/GetInTouchSection";
import { SectionSwoop } from "../components/ui/SectionSwoop";

export default function Home() {
  return (
    <>
      <HeroSection />

      <SectionSwoop><StatsFactsSection /></SectionSwoop>
      <SectionSwoop><FeaturedProjectsSection /></SectionSwoop>
      <SectionSwoop><ServicesSection /></SectionSwoop>
      <SectionSwoop><WhyChooseUsSection /></SectionSwoop>
      <SectionSwoop><TestimonialsSection /></SectionSwoop>
      <SectionSwoop fullHeight={false}><GetInTouchSection /></SectionSwoop>
    </>
  );
}
