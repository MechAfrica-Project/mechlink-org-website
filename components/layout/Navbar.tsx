"use client";

import Link from "next/link";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useContact } from "../context/ContactContext";

const navLinks = [
  { name: "MechAfrica", href: "#product" },
  { name: "Services", href: "#services" },
  { name: "Talent", href: "#talent" },
  { name: "Vision", href: "#vision" },
];

// Section contextual messages — mirrors Textura's center-nav copy rotation
const sectionMessages: Record<string, string> = {
  hero: "Africa's agricultural infrastructure engine.",
  product: "The operating system for ag service infrastructure.",
  services: "Engineering discipline, delivered under contract.",
  talent: "Training the generation that builds what's next.",
  vision: "Products, Services, Talent — one flywheel.",
  contact: "Let's build something that matters.",
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openContact } = useContact();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const allSectionIds = [...navLinks.map((l) => l.href.substring(1)), "hero", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -50% 0px", threshold: 0 }
    );

    allSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const contextMessage = sectionMessages[activeSection] ?? "";

  return (
    <nav className="fixed top-0 w-full bg-void/65 backdrop-blur-3xl border-b border-white/5 z-50 transition-all duration-300">
      <div className="max-w-max-width mx-auto w-full flex justify-between items-center px-gutter py-4">

        {/* Logo */}
        <Link
          href="/"
          className="hover:opacity-80 transition-opacity shrink-0"
          onClick={() => setActiveSection("hero")}
        >
          <Logo textClassName="text-xl" />
        </Link>

        {/* ── CENTER CONTEXTUAL MESSAGE (desktop only) ── */}
        <div className="hidden xl:flex flex-1 justify-center px-4 overflow-hidden pointer-events-none select-none">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeSection}
              className="text-[11px] uppercase tracking-[0.22em] text-silver/70 font-medium whitespace-nowrap"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {contextMessage}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Desktop Nav Links (right side) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative overflow-hidden flex items-center text-sm font-medium transition-colors duration-300 py-1 ${
                  isActive
                    ? "text-cloud after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-cloud after:rounded-full"
                    : "text-silver hover:text-cloud"
                }`}
                onClick={() => setActiveSection(link.href.substring(1))}
              >
                <span className="relative inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[120%]">
                  {link.name}
                </span>
                <span className="absolute inset-0 inline-flex items-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-[120%] group-hover:translate-y-0 text-cloud">
                  {link.name}
                </span>
              </Link>
            );
          })}
          <Button onClick={openContact} size="md">
            Start a Project
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden text-cloud focus:outline-none cursor-pointer relative z-[60]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" strokeWidth={2} /> : <Menu className="w-6 h-6" strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[55] bg-void/95 backdrop-blur-3xl flex flex-col items-center justify-center px-6 md:hidden min-h-screen"
          >
            <div className="flex flex-col items-center gap-10 w-full mt-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl font-medium text-cloud hover:text-silver transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setActiveSection(link.href.substring(1));
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="mt-8 w-full max-w-[280px]"
              >
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openContact();
                  }}
                  size="lg"
                  className="w-full text-lg py-6"
                >
                  Start Project
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
