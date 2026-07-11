"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useContact } from "../context/ContactContext";
import { Logo } from "./Logo";

type Step = 'intent' | 'context' | 'budget' | 'details' | 'contact' | 'success' | 'quick-chat';

const StaggeredText = ({ text, className = "" }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <h2 className={`flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.1em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: "100%", rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1],
              delay: i * 0.05 + 0.1,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  );
};

export function ContactOverlay() {
  const { isOpen, closeContact } = useContact();
  const [step, setStep] = useState<Step>('intent');
  const [intent, setIntent] = useState<string | null>(null);

  // Form selections
  const [context, setContext] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);

  // Form Details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle closing and reset state
  const handleClose = () => {
    closeContact();
    // Delay reset so it doesn't snap back while fading out
    setTimeout(() => {
      setStep('intent');
      setIntent(null);
      setContext([]);
      setBudget(null);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 500);
  };

  const handleIntentSelection = (selectedIntent: 'project' | 'chat') => {
    setIntent(selectedIntent);
    if (selectedIntent === 'project') setStep('context');
    if (selectedIntent === 'chat') setStep('quick-chat');
  };

  const toggleContextSelection = (selection: string) => {
    setContext(prev => 
      prev.includes(selection) 
        ? prev.filter(item => item !== selection)
        : [...prev, selection]
    );
  };

  const handleBudgetSelect = (selection: string) => {
    setBudget(selection);
    setStep('details');
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, context, budget, intent }),
      });

      if (res.ok) {
        setStep('success');
      } else {
        console.error("Failed to submit");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contextOptions = [
    "MechAfrica Partnership",
    "Custom Software (Services)",
    "Talent Program",
    "Mobile / USSD App",
    "UI/UX Design",
    "Cloud & AI Integration",
  ];

  const budgetOptions = [
    "<$10k",
    "$10k - $25k",
    "$25k - $50k",
    "$50k+",
  ];

  return (
    <>
      <motion.div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-void/90 backdrop-blur-2xl overflow-y-auto"
        initial={{ opacity: 0, visibility: "hidden" }}
        animate={isOpen ? {
          opacity: 1,
          visibility: "visible"
        } : {
          opacity: 0,
          transitionEnd: {
            visibility: "hidden"
          }
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="fixed top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full bg-carbon border cursor-pointer border-white/5 flex items-center justify-center text-silver hover:text-cloud hover:scale-105 hover:bg-white/5 transition-all duration-200 z-[110]"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Step Container */}
          <div className="w-full max-w-max-width px-gutter py-24 min-h-[100dvh] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {/* INTENT STEP (Step 0) */}
              {step === 'intent' && (
                <motion.div 
                  key="step-intent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="max-w-[720px] mx-auto w-full flex flex-col items-center justify-center"
                >
                   <StaggeredText
                    text="Welcome to MechLink"
                    className="text-silver text-xl md:text-2xl font-medium tracking-tight mb-2 text-center leading-tight"
                  />
                  <StaggeredText
                    text="How can we help you?"
                    className="text-cloud text-4xl md:text-6xl font-bold tracking-tight mb-16 text-center leading-tight font-serif"
                  />

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                    <motion.button
                      onClick={() => handleIntentSelection('project')}
                      className="px-8 py-4 rounded-full border cursor-pointer border-cloud/20 text-silver hover:text-cloud hover:border-cloud hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start a project
                    </motion.button>

                    <motion.button
                      onClick={() => handleIntentSelection('chat')}
                      className="px-8 py-4 rounded-full border cursor-pointer border-cloud/20 text-silver hover:text-cloud hover:border-cloud hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Quick Chat
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* STEP 1 - CONTEXT */}
              {step === 'context' && (
                <motion.div 
                  key="step-context"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="max-w-[720px] mx-auto w-full"
                >
                  <div className="flex justify-center mb-6">
                    <button onClick={() => setStep('intent')} className="text-slate cursor-pointer hover:text-cloud text-sm flex items-center gap-2 transition-colors">
                      <ArrowRight size={14} className="rotate-180" /> Back
                    </button>
                  </div>
                  <p className="text-slate uppercase tracking-widest text-sm font-bold mb-6 text-center">Step 01</p>
                 
                  <StaggeredText 
                    text="What are we building?"
                    className="text-cloud text-3xl md:text-5xl font-bold tracking-tight mb-12 text-center leading-tight"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contextOptions.map((opt, i) => {
                      const isSelected = context.includes(opt);
                      return (
                        <motion.button
                          key={opt}
                          onClick={() => toggleContextSelection(opt)}
                          className={`group relative w-full p-5 md:p-6 rounded-2xl border cursor-pointer flex items-center justify-between text-left overflow-hidden transition-all duration-300 ${
                            isSelected 
                              ? "bg-cloud border-cloud shadow-[0_0_40px_rgba(250,250,250,0.1)]" 
                              : "bg-carbon border-white/5 hover:border-white/20 hover:shadow-[0_0_40px_rgba(250,250,250,0.03)]"
                          }`}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        >
                          <span className={`text-lg md:text-xl font-medium transition-colors relative z-10 ${
                            isSelected ? "text-void" : "text-silver group-hover:text-cloud"
                          }`}>
                            {opt}
                          </span>
                          <div className={`w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 relative z-10 ${
                            isSelected ? "bg-void text-cloud" : "bg-graphite text-silver group-hover:text-void group-hover:bg-cloud"
                          }`}>
                            <div className="relative w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute transition-all duration-300 ${isSelected ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
                                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              <div className={`absolute w-full h-full rounded-full border-2 border-current transition-all duration-300 ${isSelected ? "opacity-0 scale-150" : "opacity-100 scale-100"}`}></div>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                  
                  <div className="mt-12 flex justify-center min-h-[60px]">
                    <AnimatePresence>
                      {context.length > 0 && (
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }} 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setStep('budget')}
                          className="bg-accent-primary cursor-pointer text-void font-bold tracking-widest uppercase text-sm px-10 py-5 rounded-full shadow-lg flex items-center gap-3"
                        >
                          Continue <ArrowRight size={16} />
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}

              {/* STEP 2 - BUDGET */}
              {step === 'budget' && (
                <motion.div 
                  key="step-budget"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="max-w-[720px] mx-auto w-full"
                >
                  <div className="flex justify-center mb-6">
                    <button onClick={() => setStep('context')} className="text-slate cursor-pointer hover:text-cloud text-sm flex items-center gap-2 transition-colors">
                      <ArrowRight size={14} className="rotate-180" /> Back
                    </button>
                  </div>
                  <p className="text-slate uppercase tracking-widest text-sm font-bold mb-6 text-center">Step 02</p>
                  <StaggeredText 
                    text="What is your estimated budget?"
                    className="text-cloud text-3xl md:text-5xl font-bold tracking-tight mb-12 text-center leading-tight"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {budgetOptions.map((opt, i) => (
                      <motion.button
                        key={opt}
                        onClick={() => handleBudgetSelect(opt)}
                        className="group relative w-full cursor-pointer p-5 md:p-6 rounded-2xl bg-carbon border border-white/5 flex items-center justify-between text-left overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_rgba(250,250,250,0.03)]"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      >
                        <span className="text-silver group-hover:text-cloud text-lg md:text-xl font-medium transition-colors relative z-10">
                          {opt}
                        </span>
                        <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-graphite flex items-center justify-center text-silver group-hover:text-void group-hover:bg-cloud transition-all duration-300 relative z-10">
                          <ArrowRight size={18} className="-translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 3 - PROJECT DETAILS */}
              {step === 'details' && (
                <motion.div 
                  key="step-details"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="max-w-[720px] mx-auto w-full"
                >
                  <div className="flex justify-center mb-6">
                    <button onClick={() => setStep('budget')} className="text-slate cursor-pointer hover:text-cloud text-sm flex items-center gap-2 transition-colors">
                      <ArrowRight size={14} className="rotate-180" /> Back
                    </button>
                  </div>
                  <p className="text-slate uppercase tracking-widest text-sm font-bold mb-6 text-center">Step 03</p>
                  <StaggeredText 
                    text="Tell us about the project."
                    className="text-cloud text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center leading-tight"
                  />
                  <p className="text-silver text-center mb-12 max-w-[500px] mx-auto">
                    What are the main goals? Any specific technical requirements, constraints, or timelines we should know about?
                  </p>

                  <div className="flex flex-col gap-6">
                    <textarea 
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-carbon border border-white/10 rounded-xl px-6 py-4 text-cloud focus:outline-none focus:border-cloud/50 focus:ring-1 focus:ring-cloud/50 transition-all placeholder:text-slate-400 dark:placeholder:text-white/20 resize-none"
                      placeholder="We need a scalable infrastructure for..."
                    />

                    <motion.div className="mt-4 flex justify-center">
                      <button 
                        onClick={() => setStep('contact')}
                        disabled={!message.trim()}
                        className="bg-accent-primary cursor-pointer text-void font-bold tracking-widest uppercase text-sm px-10 py-5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        Continue
                        <ArrowRight size={18} />
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* STEP 4 - CONTACT DETAILS */}
              {step === 'contact' && (
                <motion.div 
                  key="step-contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="max-w-[720px] mx-auto w-full"
                >
                  <div className="flex justify-center mb-6">
                    <button onClick={() => setStep('details')} className="text-slate cursor-pointer hover:text-cloud text-sm flex items-center gap-2 transition-colors">
                      <ArrowRight size={14} className="rotate-180" /> Back
                    </button>
                  </div>
                  <p className="text-slate uppercase tracking-widest text-sm font-bold mb-6 text-center">Step 04</p>
                  <StaggeredText 
                    text="How can we reach you?"
                    className="text-cloud text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center leading-tight"
                  />
                  <p className="text-silver text-center mb-12 max-w-[500px] mx-auto">
                    I&apos;ll review your requirements and reach out within 2 hours to discuss architecture and timelines.
                  </p>

                  <form onSubmit={handleSubmitForm} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-bold tracking-wide uppercase text-slate">Name</label>
                        <input 
                          id="name"
                          type="text" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-carbon border border-white/10 rounded-xl px-6 py-4 text-cloud focus:outline-none focus:border-cloud/50 focus:ring-1 focus:ring-cloud/50 transition-all placeholder:text-slate-400 dark:placeholder:text-white/20"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-bold tracking-wide uppercase text-slate">Email</label>
                        <input 
                          id="email"
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-carbon border border-white/10 rounded-xl px-6 py-4 text-cloud focus:outline-none focus:border-cloud/50 focus:ring-1 focus:ring-cloud/50 transition-all placeholder:text-slate-400 dark:placeholder:text-white/20"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-bold tracking-wide uppercase text-slate">Phone Number (Optional)</label>
                      <input 
                        id="phone"
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-carbon border border-white/10 rounded-xl px-6 py-4 text-cloud focus:outline-none focus:border-cloud/50 focus:ring-1 focus:ring-cloud/50 transition-all placeholder:text-slate-400 dark:placeholder:text-white/20"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <motion.div className="mt-8 flex justify-center">
                      <button 
                        type="submit"
                        disabled={isSubmitting || !name || !email}
                        className="bg-accent-primary cursor-pointer text-void font-bold tracking-widest uppercase text-sm px-10 py-5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? "Transmitting..." : "Submit Inquiry"}
                        {!isSubmitting && <ArrowRight size={18} />}
                      </button>
                    </motion.div>
                  </form>
                </motion.div>
              )}

              {/* QUICK CHAT (Alt flow) */}
              {step === 'quick-chat' && (
                <motion.div 
                  key="step-quickchat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="max-w-[720px] mx-auto w-full"
                >
                  <div className="flex justify-center mb-6">
                    <button onClick={() => setStep('intent')} className="text-slate cursor-pointer hover:text-cloud text-sm flex items-center gap-2 transition-colors">
                      <ArrowRight size={14} className="rotate-180" /> Back
                    </button>
                  </div>
                  <StaggeredText 
                    text="Let's chat."
                    className="text-cloud text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center leading-tight"
                  />
                  <p className="text-silver text-center mb-12 max-w-[500px] mx-auto">
                    Got a quick question or proposal? Drop it here and we&apos;ll get back to you shortly.
                  </p>

                  <form onSubmit={handleSubmitForm} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="chat-name" className="text-sm font-bold tracking-wide uppercase text-slate">Name</label>
                      <input 
                        id="chat-name"
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-carbon border border-white/10 rounded-xl px-6 py-4 text-cloud focus:outline-none focus:border-cloud/50 focus:ring-1 focus:ring-cloud/50 transition-all placeholder:text-slate-400 dark:placeholder:text-white/20"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="chat-email" className="text-sm font-bold tracking-wide uppercase text-slate">Email</label>
                      <input 
                        id="chat-email"
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-carbon border border-white/10 rounded-xl px-6 py-4 text-cloud focus:outline-none focus:border-cloud/50 focus:ring-1 focus:ring-cloud/50 transition-all placeholder:text-slate-400 dark:placeholder:text-white/20"
                        placeholder="john@company.com"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="chat-message" className="text-sm font-bold tracking-wide uppercase text-slate">Message</label>
                      <textarea 
                        id="chat-message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-carbon border border-white/10 rounded-xl px-6 py-4 text-cloud focus:outline-none focus:border-cloud/50 focus:ring-1 focus:ring-cloud/50 transition-all placeholder:text-slate-400 dark:placeholder:text-white/20 resize-none"
                        placeholder="Hi MechLink, I had a question about..."
                      />
                    </div>

                    <motion.div className="mt-8 flex justify-center">
                      <button 
                        type="submit"
                        disabled={isSubmitting || !name || !email || !message}
                        className="bg-accent-primary cursor-pointer text-void font-bold tracking-widest uppercase text-sm px-10 py-5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        {!isSubmitting && <ArrowRight size={18} />}
                      </button>
                    </motion.div>
                  </form>
                </motion.div>
              )}

              {/* SUCCESS (After Project or Chat) */}
              {step === 'success' && (
                <motion.div
                  key="step-success"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="w-full flex flex-col items-center"
                >
                  <div className="mb-8">
                    <Logo textClassName="text-2xl" />
                  </div>
                  <StaggeredText
                    text="Transmission received."
                    className="text-cloud text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center leading-tight"
                  />
                  <p className="text-silver text-lg mb-4 text-center max-w-[600px] mx-auto">
                    Thanks, {name || "there"} — we&apos;ll review your inquiry and reach out at {email} shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </motion.div>
    </>
  );
}
