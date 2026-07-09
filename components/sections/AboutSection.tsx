"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "../ui/SectionHeader";

const ABOUT_PILLS = [
  {
    id: "monolithic",
    title: "The Monolithic Approach",
    description:
      "We reject the divide between design and engineering. True product quality is born when both disciplines are practiced simultaneously.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvRi0k8Kl8QqpZJnP6FPzxKdAxIIov8BQbptdkg-OMRbxQOPMN0prqeBCgcIZWD62-ZnIA2vzIjJ_Douxn8L_qleuuT2GvUZQmTNNcpFEeTnslEZFVyc9fdX_WZnYCk9NigB8kCejwXcYM8O6XdnzdbPkfoN9N2kCRW_vELDlwyLTvj7gMLqEhC2DiUJqqSCCqXL0a93AcCfiy159sDBXrHioTUqaWlOxqodY8vay3gt2n7v4_Qp_uRFYbRoAzwHwoKY1EemsCwg",
  },
  {
    id: "engineering",
    title: "Engineering Excellence",
    description:
      "We don't just write code; we build resilient, scalable digital infrastructure that stands the test of time.",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLvrukfgSc29QBxsyuQWL5D2PeaQmlt1MdOslhi9nCTzRIAYszABDfgCkQeBpoHXWotFXrtUbB-w8vucyjr8sep0G6kGK1tNGHL9_mGNwD422IwAAiHYCNPWTQq3VeKS9boWmOUmR7F-KBsIDeqk2g8JCx248_OVuEeIB94gSu1tBE9QwF7XAVrNrcI8m3Wy8xMZilwSOd2lSgxizGy-NpCY6yCgNGGTDoa7fyOr9womEiNZqqswyG-MiA",
  },
  {
    id: "systemic",
    title: "Systemic Design",
    description:
      "Visuals must serve a purpose. We design systems optimized for performance and engineered to command attention.",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLv9PYtwq2czmUC7w02K3RVw3AzzboHiLnqmSixPgv7QNee4_LUbJ1bJ6H3NEbltTbYBJj_cwbGdrUa77qL__ToQzwIG5PpQr_bwhNR5C1EC6UkYXOUv-a6QavrkRj3cWN9ytABbbQSQbxvp3AQKRfoPgkAJVGMGYG68Fg1joU4iakAoabMfSQq5-7yGWHiVi_RF79fBhA6YXzTvqKIUTjkhW9lcbQS3J8TewIioTJOuqu5p4V1Se5Kk",
  },
  {
    id: "collective",
    title: "The Collective",
    description:
      "A highly specialized team of architects, developers, and designers working as a singular, unified machine.",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLvhnZZum0UyACHHRklBDjiQ79tH5AQNkyPi48ZNLNh_u4IoDuNsIKETn9uSHFM3UFusHj1EeC0ighm12_xr0bk1N3ZlZujebvmDJmVOUiwMPrr4iw-stuy-NQgai4gT0eFBIL9gobuh_059Ed4qAzA3jCqhs5pENbvnGZgrZaW9dM4ZxWbsT6EPgsDBmrxCFsmEcZQMK0NcEe_N_p10ZkKRhEqu0PZYrbY_HDmtRslOaX6-hEl-8ojy",
  },
];

export default function AboutSection() {
  const [activePill, setActivePill] = useState(ABOUT_PILLS[0].id);

  return (
    <section id="studio" className="w-full bg-void py-section-gap overflow-hidden">
      <div className="max-w-max-width mx-auto px-gutter">
        {/* Section Header */}
        <SectionHeader
          overline="WHO WE ARE"
          title="Engineers who design. Designers who think in systems."
          className="mb-24 md:mb-32"
        />

        {/* 35/65 Interactive Layout mapped to 4/8 grid columns */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-y-12 gap-x-4 md:gap-x-6 items-start">
          {/* Left Column: Interactive Vertical Accordion Pills */}
          <div className="col-span-4 md:col-span-2 lg:col-span-4 flex flex-col space-y-4">
            {ABOUT_PILLS.map((pill) => {
              const isActive = activePill === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => setActivePill(pill.id)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? "bg-carbon border-white/10"
                      : "bg-transparent border-transparent hover:bg-carbon/50"
                  }`}
                >
                  <h3
                    className={`font-sub-heading text-xl font-medium transition-colors duration-300 ${
                      isActive ? "text-cloud" : "text-silver"
                    }`}
                  >
                    {pill.title}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-body text-slate leading-relaxed">
                      {pill.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Visual Canvas */}
          <div className="col-span-4 md:col-span-4 lg:col-span-8 sticky top-32">
            <div className="aspect-[4/3] md:aspect-[16/10] bg-carbon rounded-3xl overflow-hidden border border-white/5 relative">
              {ABOUT_PILLS.map((pill) => (
                <Image
                  key={pill.id}
                  src={pill.image}
                  alt={pill.title}
                  width={1200}
                  height={800}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 mix-blend-screen opacity-90 ${
                    activePill === pill.id ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                  style={{
                    maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
