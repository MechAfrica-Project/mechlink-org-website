import { SectionHeader } from "../ui/SectionHeader";
import { BentoCard } from "../ui/BentoCard";
import { DeviceMockup } from "../ui/DeviceMockup";
import { Button } from "../ui/Button";
import { BespokeReveal } from "../ui/BespokeReveal";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesSection() {
  return (
    <section id="portfolio" className="w-full bg-void py-section-gap">
      <div className="max-w-max-width mx-auto px-gutter w-full">

      {/* Section Header */}
      <SectionHeader 
        overline="SELECTED WORK"
        centered={true}
        className="mb-24 md:mb-32"
      />

      {/* Case Study Stack */}
      <div className="space-y-section-gap">
        {/* Project 1: Meridian Capital */}
        <article className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-y-12 gap-x-4 md:gap-x-6 items-stretch border-b border-steel pb-section-gap">
          {/* Left Column (25%) */}
          <div className="col-span-4 md:col-span-3 lg:col-span-3 flex flex-col justify-between space-y-8">
            <div>
              <p className="text-slate text-xs uppercase tracking-widest mb-2 font-bold">
                FINTECH PLATFORM
              </p>
              <h3 className="text-cloud text-5xl font-bold tracking-tight leading-none">
                Meridian Capital
              </h3>
            </div>
            <BentoCard 
              title="Smart Adaptation"
              description="Dynamic interface scaling for complex data environments."
            />
          </div>

          {/* Center Column (50%) */}
          <div className="col-span-4 md:col-span-6 lg:col-span-6 flex items-center justify-center py-12 lg:py-0 relative group order-first lg:order-none">
            <DeviceMockup 
              type="desktop"
              src="https://lh3.googleusercontent.com/aida/AP1WRLv9PYtwq2czmUC7w02K3RVw3AzzboHiLnqmSixPgv7QNee4_LUbJ1bJ6H3NEbltTbYBJj_cwbGdrUa77qL__ToQzwIG5PpQr_bwhNR5C1EC6UkYXOUv-a6QavrkRj3cWN9ytABbbQSQbxvp3AQKRfoPgkAJVGMGYG68Fg1joU4iakAoabMfSQq5-7yGWHiVi_RF79fBhA6YXzTvqKIUTjkhW9lcbQS3J8TewIioTJOuqu5p4V1Se5Kk"
              alt="High-res monochrome fintech UI dashboard"
            />
          </div>

          {/* Right Column (25%) */}
          <div className="col-span-4 md:col-span-3 lg:col-span-3 flex flex-col justify-between space-y-8">
            <BentoCard 
              title="Real-Time Tracking"
              description="Millisecond latency data streams across global markets."
            />
            <div className="space-y-4">
              <p className="text-silver text-body-lg">
                End-to-end trading platform serving institutional investors across 12 markets.
              </p>
              <div>
                <p className="text-accent-primary drop-shadow-[0_0_10px_var(--accent-glow)] text-3xl font-bold">340%</p>
                <p className="text-slate text-sm">increase in daily active users</p>
              </div>
              <Button variant="text" href="#">
                View Case Study
                <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" strokeWidth={2} />
              </Button>
            </div>
          </div>
        </article>

        {/* Project 2: Praxis Health */}
        <article className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left Column (25%) */}
          <div className="w-full md:w-1/4 flex flex-col justify-between space-y-8">
            <div>
              <p className="text-slate text-xs uppercase tracking-widest mb-2 font-bold">
                HEALTHCARE SAAS
              </p>
              <h3 className="text-cloud text-5xl font-bold tracking-tight leading-none">
                Praxis Health
              </h3>
            </div>
            <BentoCard 
              title="Surgical Precision"
              description="High-contrast data visualization for critical care settings."
            />
          </div>

          {/* Center Column (50%) */}
          <div className="col-span-4 md:col-span-6 lg:col-span-6 flex items-center justify-center py-12 lg:py-0 relative group order-first lg:order-none">
            <DeviceMockup 
              type="desktop"
              src="https://lh3.googleusercontent.com/aida/AP1WRLvhnZZum0UyACHHRklBDjiQ79tH5AQNkyPi48ZNLNh_u4IoDuNsIKETn9uSHFM3UFusHj1EeC0ighm12_xr0bk1N3ZlZujebvmDJmVOUiwMPrr4iw-stuy-NQgai4gT0eFBIL9gobuh_059Ed4qAzA3jCqhs5pENbvnGZgrZaW9dM4ZxWbsT6EPgsDBmrxCFsmEcZQMK0NcEe_N_p10ZkKRhEqu0PZYrbY_HDmtRslOaX6-hEl-8ojy"
              alt="High-res monochrome healthcare UI dashboard"
            />
          </div>

          {/* Right Column (25%) */}
          <div className="col-span-4 md:col-span-3 lg:col-span-3 flex flex-col justify-between space-y-8">
            <BentoCard 
              title="Seamless Integration"
              description="Unifying legacy hospital databases into a single view."
            />
            <div className="space-y-4">
              <p className="text-silver text-body-lg">
                Patient management system processing 2M+ records with 99.9% uptime.
              </p>
              <div>
                <p className="text-accent-primary drop-shadow-[0_0_10px_var(--accent-glow)] text-3xl font-bold">85%</p>
                <p className="text-slate text-sm">reduction in administrative overhead</p>
              </div>
              <Button variant="text" href="#">
                View Case Study
                <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" strokeWidth={2} />
              </Button>
            </div>
          </div>
        </article>
      </div>
      </div>
    </section>
  );
}
