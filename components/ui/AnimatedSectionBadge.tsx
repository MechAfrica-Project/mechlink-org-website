"use client";

import { motion } from "framer-motion";

interface AnimatedSectionBadgeProps {
  number?: string;
  title: string;
  highlight?: boolean;
  className?: string;
}

export function AnimatedSectionBadge({ 
  number, 
  title, 
  highlight = false, 
  className = "" 
}: AnimatedSectionBadgeProps) {
  
  // Staggering container to orchestrate the elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Delays each child animation by 250ms
      },
    },
  };

  // 1. Number slides in from left
  const numberVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } 
    },
  };

  // 2. Line draws itself from left to right
  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    },
  };

  // 3. Pill emerges out of nothing (mask/clip-path) and slides slightly
  const pillVariants = {
    hidden: { opacity: 0, x: -20, clipPath: "inset(0 100% 0 0)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      clipPath: "inset(0 0% 0 0)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } 
    },
  };

  const circleClasses = "w-12 h-12 rounded-full border border-steel flex items-center justify-center text-cloud font-medium flex-shrink-0 bg-void";
  const pillClasses = highlight 
    ? "px-4 py-1.5 rounded-full bg-cloud text-void text-sm uppercase tracking-widest font-bold flex-shrink-0"
    : "px-4 py-1.5 rounded-full border border-steel bg-carbon text-silver text-sm uppercase tracking-widest font-bold flex-shrink-0";

  return (
    <motion.div 
      className={`flex items-center gap-6 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {number && (
        <motion.div variants={numberVariants} className={circleClasses}>
          {number}
        </motion.div>
      )}
      
      {number && (
        <motion.div 
          variants={lineVariants} 
          className="h-px bg-steel flex-grow max-w-[100px] origin-left"
        ></motion.div>
      )}
      
      <motion.div variants={pillVariants} className={pillClasses}>
        {title}
      </motion.div>
    </motion.div>
  );
}
