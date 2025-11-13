"use client";
import { MdDarkMode, MdLightMode } from "react-icons/md";

type DarkModeButtonProps = {
  onToggle: () => void;
  isDark: boolean;
  mounted: boolean;
};

export function DarkModeButton({
  onToggle,
  isDark,
  mounted,
}: DarkModeButtonProps) {
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
