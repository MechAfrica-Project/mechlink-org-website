export default function MetricsSection() {
  return (
    <section className="relative w-full bg-void py-section-gap flex flex-col items-center justify-center z-10 overflow-hidden">
      {/* Metrics Container */}
      <div className="max-w-max-width mx-auto px-gutter w-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-y-12 gap-x-4 md:gap-x-6 text-center items-center justify-center">
        {/* Metric 1 */}
        <div className="col-span-2 md:col-span-3 lg:col-span-3 flex flex-col items-center justify-center space-y-2 animate-fade-in-up" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
          <span className="text-[5rem] leading-none tracking-[-0.04em] font-black text-cloud">50+</span>
          <span className="text-[0.75rem] leading-none tracking-[0.12em] font-medium uppercase text-silver">PROJECTS DELIVERED</span>
        </div>
        
        {/* Metric 2 */}
        <div className="col-span-2 md:col-span-3 lg:col-span-3 flex flex-col items-center justify-center space-y-2 animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          <span className="text-[5rem] leading-none tracking-[-0.04em] font-black text-cloud">99.9%</span>
          <span className="text-[0.75rem] leading-none tracking-[0.12em] font-medium uppercase text-silver">UPTIME GUARANTEED</span>
        </div>
        
        {/* Metric 3 */}
        <div className="col-span-2 md:col-span-3 lg:col-span-3 flex flex-col items-center justify-center space-y-2 animate-fade-in-up" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
          <span className="text-[5rem] leading-none tracking-[-0.04em] font-black text-cloud">15+</span>
          <span className="text-[0.75rem] leading-none tracking-[0.12em] font-medium uppercase text-silver">INDUSTRIES SERVED</span>
        </div>
        
        {/* Metric 4 */}
        <div className="col-span-2 md:col-span-3 lg:col-span-3 flex flex-col items-center justify-center space-y-2 animate-fade-in-up" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
          <span className="text-[5rem] leading-none tracking-[-0.04em] font-black text-cloud">200%</span>
          <span className="text-[0.75rem] leading-none tracking-[0.12em] font-medium uppercase text-silver">AVG. CLIENT GROWTH</span>
        </div>
      </div>
    </section>
  );
}
