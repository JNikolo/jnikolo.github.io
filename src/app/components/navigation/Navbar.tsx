"use client";
import { NavLinks } from "./NavLinks";
import { DarkModeButton } from "./DarkModeButton";
import { LanguageDropdown } from "./LanguageDropdown";
import { useDarkMode } from "../../hooks/useDarkMode";

export function Navbar() {
  const { isDark, toggle, mounted } = useDarkMode();

  return (
    <nav className="grid grid-cols-3 gap-3 p-4">
      <div className="col-start-2 flex items-center justify-center">
        <NavLinks />
      </div>
      <div className="col-start-3 flex items-center justify-end">
        <LanguageDropdown selectedLanguage="en" onLanguageChange={() => {}} />

        <DarkModeButton onToggle={toggle} isDark={isDark} mounted={mounted} />
      </div>
    </nav>
  );
}
