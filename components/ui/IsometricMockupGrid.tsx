"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { heroImages } from "../../lib/images";

export default function IsometricMockupGrid() {
  // Common styling for all devices based on Sparrow CSS
  const deviceClass = "absolute overflow-hidden rounded-[0.5rem] border-[0.25rem] border-[rgba(225,225,225,0.15)] shadow-[0.125rem_0.125rem_1.25rem_0_rgba(0,0,0,0.3)] bg-white";

  // Use global scroll to drive the parallax animations
  const { scrollY } = useScroll();
  
  // Create transforms mapping scrollY to a vertical shift (parallax effect).
  // Multiplying by different "speeds" identical to Sparrow's rellax-speed values.
  const baseSpeed = 40;
  const y1 = useTransform(scrollY, [0, 1000], [0, -3 * baseSpeed]);     // macbook-1
  const y2 = useTransform(scrollY, [0, 1000], [0, -3.8 * baseSpeed]);   // ipad--l-1
  const y3 = useTransform(scrollY, [0, 1000], [0, -4.8 * baseSpeed]);   // iphone-1
  const y4 = useTransform(scrollY, [0, 1000], [0, -3.4 * baseSpeed]);   // ipad--l-2
  const y5 = useTransform(scrollY, [0, 1000], [0, -4 * baseSpeed]);     // iphone-2
  const y6 = useTransform(scrollY, [0, 1000], [0, -5 * baseSpeed]);     // macbook-2
  const y7 = useTransform(scrollY, [0, 1000], [0, -3.7 * baseSpeed]);   // ipad--l-3
  const y8 = useTransform(scrollY, [0, 1000], [0, -4.8 * baseSpeed]);   // ipad--p-1
  const y9 = useTransform(scrollY, [0, 1000], [0, -3 * baseSpeed]);     // iphone-3
  const y10 = useTransform(scrollY, [0, 1000], [0, -3 * baseSpeed]);    // iphone-4
  const y11 = useTransform(scrollY, [0, 1000], [0, -2 * baseSpeed]);    // iphone--l-1

  // Base delay offset so the text has time to load before the grid swoops in
  const delayOffset = 0;
  const animProps = {
    initial: { opacity: 0, y: -150, filter: "blur(12px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: false, amount: 0.1 },
    transition: (delay: number) => ({
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: delay + delayOffset,
    }),
  };

  return (
    <div 
      className="absolute top-1/2 left-[35%] sm:left-[70%] md:left-[60%] lg:left-[50%] xl:left-[40%] 2xl:left-[35%] 
                 w-[56.25rem] h-[56.25rem] sm:w-[31.25rem] sm:h-[31.25rem] md:w-[75rem] md:h-[75rem] 
                 lg:w-[68.75rem] lg:h-[68.75rem] xl:w-[75rem] xl:h-[75rem] 2xl:w-[100rem] 2xl:h-[100rem] 
                 pointer-events-none z-0"
      style={{ transform: "translateY(-50%) rotate(45deg)", transformOrigin: "center" }}
    >
      
      {/* 1. macbook-1 (44% width, left 42%, top 63%) */}
      <motion.div className="absolute" style={{ width: "44%", left: "42%", top: "63%", aspectRatio: "16/10", y: y1 }}>
        <motion.div
          initial={animProps.initial} whileInView={animProps.whileInView} viewport={animProps.viewport} transition={animProps.transition(0.5)}
          className={`${deviceClass} w-full h-full bg-iron flex flex-col items-center justify-center p-8 text-center`}
        >
          <span className="text-silver font-serif italic mb-1 text-[12px] 2xl:text-base">MechAfrica</span>
          <h3 className="text-2xl 2xl:text-4xl font-black text-black leading-tight">Farmers, connected<br/>to mechanization</h3>
        </motion.div>
      </motion.div>

      {/* 2. ipad--l-1 (28% width, left -3%, top 40%) */}
      <motion.div className="absolute" style={{ width: "28%", left: "-3%", top: "40%", aspectRatio: "4/3", y: y2 }}>
        <motion.div
          initial={animProps.initial} whileInView={animProps.whileInView} viewport={animProps.viewport} transition={animProps.transition(0.5)}
          className={`${deviceClass} w-full h-full`}
        >
          <Image {...heroImages.fieldAgentOnboarding} alt={heroImages.fieldAgentOnboarding.alt} className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>

      {/* 3. iphone-1 (10% width, left 27%, top 40%) */}
      <motion.div className="absolute" style={{ width: "10%", left: "27%", top: "40%", aspectRatio: "9/19", y: y3 }}>
        <motion.div
          initial={animProps.initial} whileInView={animProps.whileInView} viewport={animProps.viewport} transition={animProps.transition(0.4)}
          className={`${deviceClass} w-full h-full`}
        >
          <Image {...heroImages.tractorOperator} alt={heroImages.tractorOperator.alt} className="w-full h-full object-cover opacity-90" />
        </motion.div>
      </motion.div>

      {/* 4. ipad--l-2 (28% width, left 39%, top 40%) - USSD flow */}
      <motion.div className="absolute" style={{ width: "28%", left: "39%", top: "40%", aspectRatio: "4/3", y: y4 }}>
        <motion.div
          initial={animProps.initial} whileInView={animProps.whileInView} viewport={animProps.viewport} transition={animProps.transition(0.3)}
          className={`${deviceClass} w-full h-full p-4 2xl:p-8 flex flex-col justify-center`}
        >
          <h3 className="text-2xl 2xl:text-4xl font-black tracking-tighter text-[#1a1a1a] mb-2 2xl:mb-4">*928*123#</h3>
          <div className="flex gap-2 2xl:gap-4">
             <div className="relative w-4 h-4 2xl:w-8 2xl:h-8 shrink-0">
               <Image src="/images/brand/mechafrica-icon.png" alt="MechAfrica" fill sizes="32px" className="object-contain" />
             </div>
             <div>
                <h4 className="font-bold text-[10px] 2xl:text-sm text-[#1a1a1a]">offline-first by design</h4>
                <p className="text-[8px] 2xl:text-xs text-gray-500 leading-relaxed mt-1">No smartphone or internet required to book a service.</p>
             </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 5. iphone-2 (10% width, left 69%, top 40%) */}
      <motion.div className="absolute" style={{ width: "10%", left: "69%", top: "40%", aspectRatio: "9/19", y: y5 }}>
        <motion.div
          initial={animProps.initial} whileInView={animProps.whileInView} viewport={animProps.viewport} transition={animProps.transition(0.2)}
          className={`${deviceClass} w-full h-full`}
        >
          <Image {...heroImages.farmlandRows} alt={heroImages.farmlandRows.alt} className="w-full h-full object-cover opacity-90" />
        </motion.div>
      </motion.div>

      {/* 6. macbook-2 (44% width, left 22%, top 10%) */}
      <motion.div className="absolute" style={{ width: "44%", left: "22%", top: "10%", aspectRatio: "16/10", y: y6 }}>
        <motion.div
          initial={animProps.initial} whileInView={animProps.whileInView} viewport={animProps.viewport} transition={animProps.transition(0.4)}
          className={`${deviceClass} w-full h-full`}
        >
          <Image {...heroImages.providerDashboardUi} alt={heroImages.providerDashboardUi.alt} className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>

      {/* 7. ipad--l-3 (28% width, left 81%, top 40%) */}
      <motion.div className="absolute" style={{ width: "28%", left: "81%", top: "40%", aspectRatio: "4/3", y: y7 }}>
        <motion.div
          initial={animProps.initial} whileInView={animProps.whileInView} viewport={animProps.viewport} transition={animProps.transition(0.5)}
          className={`${deviceClass} w-full h-full`}
        >
          <Image {...heroImages.ruralLandscape} alt={heroImages.ruralLandscape.alt} className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>

      {/* 8. ipad--p-1 (21% width, left 69%, top 10%) - "Mobile money settlement" */}
      <motion.div className="absolute" style={{ width: "21%", left: "69%", top: "10%", aspectRatio: "3/4", y: y8 }}>
        <motion.div
          initial={animProps.initial} whileInView={animProps.whileInView} viewport={animProps.viewport} transition={animProps.transition(0.5)}
          className={`${deviceClass} w-full h-full p-4 2xl:p-8 flex flex-col`}
        >
          <span className="text-[6px] 2xl:text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-2 block">Field Agent Network</span>
          <h3 className="text-sm 2xl:text-2xl font-black text-[#1a1a1a] leading-tight mb-2 2xl:mb-4">Real-time provider matching</h3>
          <p className="text-[8px] 2xl:text-sm text-gray-500 leading-relaxed mb-4">Payments settle through mobile money, end to end.</p>
          <div className="w-full flex-grow bg-gray-100 rounded-lg overflow-hidden">
             <Image {...heroImages.matchingMapUi} alt={heroImages.matchingMapUi.alt} className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </motion.div>

      {/* 9. iphone-3 (10% width, left 55%, top -14%) */}
      <motion.div className="absolute" style={{ width: "10%", left: "55%", top: "-14%", aspectRatio: "9/19", y: y9 }}>
        <motion.div
          initial={animProps.initial} whileInView={animProps.whileInView} viewport={animProps.viewport} transition={animProps.transition(0.3)}
          className={`${deviceClass} w-full h-full`}
        >
          <Image {...heroImages.cropsCloseup} alt={heroImages.cropsCloseup.alt} className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>

      {/* 10. iphone-4 (10% width, left 88%, top 63%) */}
      <motion.div className="absolute" style={{ width: "10%", left: "88%", top: "63%", aspectRatio: "9/19", y: y10 }}>
        <motion.div
          initial={animProps.initial} whileInView={animProps.whileInView} viewport={animProps.viewport} transition={animProps.transition(0.2)}
          className={`${deviceClass} w-full h-full`}
        >
          <Image {...heroImages.logisticsDelivery} alt={heroImages.logisticsDelivery.alt} className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>

      {/* 11. iphone--l-1 (29.5% width, left 42%, top 93%) */}
      <motion.div className="absolute" style={{ width: "29.5%", left: "42%", top: "93%", aspectRatio: "19/9", y: y11 }}>
        <motion.div
          initial={animProps.initial} whileInView={animProps.whileInView} viewport={animProps.viewport} transition={animProps.transition(0.5)}
          className={`${deviceClass} w-full h-full`}
        >
          <Image {...heroImages.harvestWide} alt={heroImages.harvestWide.alt} className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>

    </div>
  );
}
