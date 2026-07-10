import Link from "next/link";
import { Logo } from "../ui/Logo";
import { ThemeToggle } from "../ui/ThemeToggle";

const FooterLink = ({ href, children, isExternal = false }: { href: string; children: React.ReactNode; isExternal?: boolean }) => {
  const Comp = isExternal ? "a" : Link;
  const props = isExternal ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };
  
  return (
    <Comp {...props} className="group relative w-fit overflow-hidden flex items-center text-lg font-medium text-silver hover:text-cloud transition-colors duration-300 py-1">
      <span className="relative inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[120%]">{children}</span>
      <span className="absolute inset-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-[120%] group-hover:translate-y-0 text-cloud py-1">{children}</span>
    </Comp>
  );
};

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-void border-t border-steel/30 pt-16 md:pt-24 lg:pt-32">
      
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] h-[400px] bg-accent-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />

      {/* Massive Background Watermark */}
      <div className="absolute inset-x-0 -bottom-10 flex justify-center items-end pointer-events-none z-0 overflow-hidden pb-8 opacity-20 dark:opacity-10">
        <h1 className="text-[clamp(16rem,20vw,30rem)] font-black tracking-tighter leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-cloud/20 to-transparent">
          MECHLINK
        </h1>
      </div>

      {/* Main Grid: 4/8 Split */}
      <div className="max-w-max-width mx-auto px-gutter w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-16">

          {/* Left 4 Cols: Brand */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:pr-12">
            <Link href="/" className="w-fit hover:opacity-80 transition-opacity">
              <Logo textClassName="text-xl" />
            </Link>
            <p className="text-lg text-silver leading-relaxed max-w-[300px] -mt-2">
              Building Africa&apos;s agricultural infrastructure engine — one flywheel of Products, Services, and Talent.
            </p>
          </div>

          {/* Right 8 Cols: Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8">

            {/* Column 1: Navigate */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-silver/40">
                Navigate
              </h4>
              <nav className="flex flex-col gap-2">
                <FooterLink href="#product">MechAfrica</FooterLink>
                <FooterLink href="#services">Services</FooterLink>
                <FooterLink href="#talent">Talent</FooterLink>
                <FooterLink href="/team">Team</FooterLink>
                <FooterLink href="#contact">Contact</FooterLink>
              </nav>
            </div>

            {/* Column 2: Resources */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-silver/40">
                Resources
              </h4>
              <nav className="flex flex-col gap-2">
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
                <FooterLink href="/faq">FAQ</FooterLink>
                <FooterLink href="/privacy">Privacy</FooterLink>
                <FooterLink href="/terms">Terms</FooterLink>
              </nav>
            </div>

            {/* Column 3: Connect */}
            <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
              <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-silver/40">
                Connect
              </h4>
              <div className="flex flex-col gap-2">
                <FooterLink href="mailto:hello@mechlink.africa" isExternal>Email Us</FooterLink>
                <FooterLink href="https://linkedin.com/company/mechlink" isExternal>LinkedIn</FooterLink>
                <FooterLink href="https://twitter.com/mechlinkafrica" isExternal>Twitter</FooterLink>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel/20 relative z-10">
        <div className="max-w-max-width mx-auto px-gutter w-full py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.18em] text-silver/50 font-medium">
          <span>© {new Date().getFullYear()} MechLink</span>
          <span className="hidden md:inline-block">Ghana, Scaling Pan-African</span>
          <ThemeToggle />
        </div>
      </div>
      
    </footer>
  );
}
