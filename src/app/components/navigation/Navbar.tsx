"use client";
import { NavLinks } from "./NavLinks";
import { DarkModeButton } from "./DarkModeButton";
import { LanguageDropdown } from "./LanguageDropdown";
import { useDarkMode } from "../../hooks/useDarkMode";

export function Navbar() {
  const { isDark, toggle, mounted } = useDarkMode();

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-4 bg-night/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo/Brand - could be added here in the future */}
        <div className="hidden sm:block sm:w-1/3"></div>

        {/* Nav Links - centered */}
        <div className="w-full sm:w-1/3 flex justify-center">
          <NavLinks />
        </div>

        {/* Settings - right aligned */}
        <div className="w-full sm:w-1/3 flex items-center justify-center sm:justify-end gap-2">
          <LanguageDropdown selectedLanguage="en" onLanguageChange={() => {}} />
          <DarkModeButton onToggle={toggle} isDark={isDark} mounted={mounted} />
        </div>
      </div>
    </nav>
  );
}
