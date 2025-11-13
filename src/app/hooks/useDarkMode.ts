"use client";
import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage or system preference
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) {
      setIsDark(stored === "true");
    } else {
      // Default to dark mode based on system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(prefersDark);
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
