"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export default function PageHeader({ title, subtitle, eyebrow }: PageHeaderProps) {
  return (
    <div className="relative pt-40 pb-20 md:pt-52 md:pb-32 max-w-max-width mx-auto px-gutter w-full">
      <div className="max-w-[800px]">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-xs md:text-sm text-silver uppercase tracking-[0.2em] mb-6 block"
          >
            {eyebrow}
          </motion.span>
        )}
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.05] text-cloud mb-8"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-xl text-silver leading-relaxed max-w-[600px]"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
