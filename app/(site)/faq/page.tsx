import PageHeader from "@/components/ui/PageHeader";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { getFaqs } from "@/lib/content";

export default async function FAQPage() {
  const faqs = await getFaqs();

  return (
    <main className="min-h-screen bg-void pt-20">
      <PageHeader
        eyebrow="Knowledge Base"
        title="Frequently Asked Questions."
        subtitle="Clarity and transparency on MechAfrica, our Services engagements, and the Talent program."
      />

      <section className="max-w-[900px] mx-auto px-gutter w-full pb-40">
        <FaqAccordion faqs={faqs} />
      </section>
    </main>
  );
}
