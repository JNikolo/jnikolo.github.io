import { useState, useRef, useEffect } from "react";
import { MdLanguage, MdExpandMore } from "react-icons/md";

const LANGUAGES: Language[] = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
];
type Language = {
  code: string;
  name: string;
};
type LanguageDropdownProps = {
  selectedLanguage: string;
  onLanguageChange: (language: Language) => void;
};

export function LanguageDropdown({
  selectedLanguage,
  onLanguageChange,
}: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (language: Language) => {
    onLanguageChange(language);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-2 px-3 py-2 rounded-md hover:text-gray-300 hover:bg-gray-700 text-white"
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MdLanguage className="text-xl" />
        <span className="hidden md:inline">{selectedLanguage}</span>
        <MdExpandMore
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {LANGUAGES.map((language) => (
              <button
                key={language.code}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-600 text-white"
                role="menuitem"
                onClick={() => handleLanguageSelect(language)}
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
