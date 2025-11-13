"use client";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDarkMode } from "../../hooks/useDarkMode";

type DarkModeButtonProps = {
  onToggle: () => void;
};

export function DarkModeButton({ onToggle }: DarkModeButtonProps) {
  const { isDark, mounted } = useDarkMode();

  // Avoid hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-md hover:text-gray-300 dark:hover:bg-gray-700 dark:text-white"
        type="button"
        title="Toggle dark mode"
        disabled
      >
        <MdDarkMode className="text-xl" />
      </button>
    );
  }

  return (
    <button
      className="p-2 rounded-md hover:text-gray-300 dark:hover:bg-gray-700 dark:text-white transition-colors"
      type="button"
      title="Toggle dark mode"
      onClick={onToggle}
    >
      {isDark ? (
        <MdLightMode className="text-xl" />
      ) : (
        <MdDarkMode className="text-xl" />
      )}
    </button>
  );
}
