"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button aria-label="Toggle Theme" className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors duration-300 group">
        <Sun className="w-5 h-5 text-slate group-hover:text-cloud transition-colors duration-300" strokeWidth={2} />
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button 
      onClick={toggleTheme}
      aria-label="Toggle Theme" 
      className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors duration-300 group"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-slate group-hover:text-cloud transition-colors duration-300" strokeWidth={2} />
      ) : (
        <Moon className="w-5 h-5 text-slate group-hover:text-cloud transition-colors duration-300" strokeWidth={2} />
      )}
    </button>
  );
}
