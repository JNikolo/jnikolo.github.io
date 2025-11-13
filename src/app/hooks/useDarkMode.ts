"use client";
import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage or default to dark mode
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) {
      setIsDark(stored === "true");
    } else {
      // Default to dark mode
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", String(isDark));
  }, [isDark, mounted]);

  const toggle = () => setIsDark((prev) => !prev);

  return { isDark, toggle, mounted };
}
