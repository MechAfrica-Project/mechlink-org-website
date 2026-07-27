"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

type Faq = { id: string; question: string; answer: string };

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first by default

  return (
    <div className="border-t border-steel/20">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={faq.id} className="border-b border-steel/20 group">
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
  );
}
