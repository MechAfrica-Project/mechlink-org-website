"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is MechAfrica, and how do farmers use it without a smartphone?",
    answer: "MechAfrica is our flagship product — an offline-first platform that connects farmers with mechanization, crop care, and logistics providers. Farmers can book services through USSD on any feature phone, with no internet connection required. Field Agents handle onboarding in person, and payments settle through mobile money."
  },
  {
    question: "What does MechLink actually do, beyond MechAfrica?",
    answer: "MechLink operates on three pillars: Products we build and own (like MechAfrica), Services delivered under contract for other businesses and organizations, and Talent — hands-on training for aspiring engineers. All three reinforce each other."
  },
  {
    question: "Do you take on custom software projects outside of MechAfrica?",
    answer: "Yes. Our Services pillar delivers custom software under contract, bringing the same engineering, AI, and product discipline behind MechAfrica to client work — web, mobile, cloud infrastructure, and data/AI integration."
  },
  {
    question: "How does the Talent program work?",
    answer: "We run practical, cohort-based training for aspiring tech professionals, mentored by our engineering team. Training is grounded in real product and client work, not toy exercises — and our strongest graduates go on to build on MechAfrica and MechLink client projects."
  },
  {
    question: "Where does MechAfrica currently operate, and what's next?",
    answer: "We're starting in Ghana, building the Field Agent network and provider base district by district. The long-term vision is a connected, multi-sided coordination platform serving the agricultural value chain across the continent."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first by default

  return (
    <main className="min-h-screen bg-void pt-20">
      <PageHeader
        eyebrow="Knowledge Base"
        title="Frequently Asked Questions."
        subtitle="Clarity and transparency on MechAfrica, our Services engagements, and the Talent program."
      />

      <section className="max-w-[900px] mx-auto px-gutter w-full pb-40">
        <div className="border-t border-steel/20">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className="border-b border-steel/20 group">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-8 md:py-12 flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 
                    className={`text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-500 pr-8 ${
                      isOpen ? "text-cloud" : "text-silver group-hover:text-cloud/80"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  
                  <div className="relative shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-steel/40 text-silver overflow-hidden">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 text-lg md:text-xl text-silver/80 leading-relaxed font-body max-w-[700px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
