export default function SocialProofSection() {
  return (
    <>
      {/* Social Proof Strip */}
      <section className="w-full bg-void py-[64px] flex flex-col items-center justify-center border-b border-steel">
        <div className="max-w-max-width mx-auto px-gutter w-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-x-4 md:gap-x-6 items-center">
          <div className="col-span-4 md:col-span-6 lg:col-span-12 flex flex-col items-center">
            <h3 className="text-slate uppercase tracking-[0.12em] text-[12px] font-bold mb-12 text-center">
              TRUSTED BY LEADING TEAMS
            </h3>
            <div className="flex flex-row items-center justify-center gap-12 opacity-50 grayscale mix-blend-luminosity w-full overflow-hidden flex-wrap md:flex-nowrap">
            <svg className="flex-shrink-0" fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
              <rect height="24" stroke="currentColor" strokeWidth="2" width="24" x="12" y="12"></rect>
              <circle cx="24" cy="24" fill="currentColor" r="6"></circle>
            </svg>
            <svg className="flex-shrink-0" fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 10L38 34H10L24 10Z" stroke="currentColor" strokeWidth="2"></path>
              <circle cx="24" cy="26" fill="currentColor" r="4"></circle>
            </svg>
            <svg className="flex-shrink-0" fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2"></circle>
              <rect fill="currentColor" height="8" width="8" x="20" y="20"></rect>
            </svg>
            <svg className="flex-shrink-0" fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 24L24 14L34 24L24 34L14 24Z" stroke="currentColor" strokeWidth="2"></path>
              <line stroke="currentColor" strokeWidth="2" x1="18" x2="30" y1="24" y2="24"></line>
            </svg>
            <svg className="flex-shrink-0" fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
              <rect height="16" stroke="currentColor" strokeWidth="2" width="8" x="10" y="20"></rect>
              <rect height="24" stroke="currentColor" strokeWidth="2" width="8" x="20" y="12"></rect>
              <rect height="20" stroke="currentColor" strokeWidth="2" width="8" x="30" y="16"></rect>
            </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Ticker */}
      <section className="w-full border-b border-steel bg-void overflow-hidden py-6 relative flex items-center">
        {/* Fade masks for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-[200%] animate-marquee">
          {/* First Set */}
          <div className="flex w-1/2 justify-around items-center whitespace-nowrap text-[20px] font-medium text-slate">
            <span>Web Development</span>
            <span className="text-cloud opacity-40 mx-4">·</span>
            <span>Mobile Apps</span>
            <span className="text-cloud opacity-40 mx-4">·</span>
            <span>UI/UX Design</span>
            <span className="text-cloud opacity-40 mx-4">·</span>
            <span>Data Analytics</span>
            <span className="text-cloud opacity-40 mx-4">·</span>
            <span>SaaS Products</span>
            <span className="text-cloud opacity-40 mx-4">·</span>
            <span>Cloud Architecture</span>
            <span className="text-cloud opacity-40 mx-4">·</span>
            <span>API Design</span>
            <span className="text-cloud opacity-40 mx-4">·</span>
            <span>DevOps</span>
            <span className="text-cloud opacity-40 mx-4">·</span>
          </div>

          {/* Duplicated Set for Seamless Loop */}
          <div className="flex w-1/2 justify-around items-center whitespace-nowrap text-[20px] font-medium text-slate">
            <span>Web Development</span>
            <span className="text-cloud opacity-40 mx-4">·</span>
            <span>Mobile Apps</span>
            <span className="text-cloud opacity-40 mx-4">·</span>
            <span>UI/UX Design</span>
            <span className="text-cloud opacity-40 mx-4">·</span>
            <span>Data Analytics</span>
            <span className="text-cloud opacity-40 mx-4">·</span>
            <span>SaaS Products</span>
            <span className="text-cloud opacity-40 mx-4">·</span>
            <span>Cloud Architecture</span>
            <span className="text-cloud opacity-40 mx-4">·</span>
            <span>API Design</span>
            <span className="text-cloud opacity-40 mx-4">·</span>
            <span>DevOps</span>
            <span className="text-cloud opacity-40 mx-4">·</span>
          </div>
        </div>
      </section>
    </>
  );
}
