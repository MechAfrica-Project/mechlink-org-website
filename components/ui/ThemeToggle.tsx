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
      <button aria-label="Toggle Theme" className="w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 group">
        <Sun className="w-4 h-4 text-slate group-hover:text-cloud transition-colors duration-300" strokeWidth={2} />
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
      className="w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 group"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-slate group-hover:text-cloud transition-colors duration-300" strokeWidth={2} />
      ) : (
        <Moon className="w-4 h-4 text-slate group-hover:text-cloud transition-colors duration-300" strokeWidth={2} />
      )}
    </button>
  );
}
