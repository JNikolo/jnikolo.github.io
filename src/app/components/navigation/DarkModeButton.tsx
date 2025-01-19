import { MdDarkMode } from "react-icons/md";

type DarkModeButtonProps = {
  onToggle: () => void;
};

export function DarkModeButton({ onToggle }: DarkModeButtonProps) {
  return (
    <button
      className="p-2 rounded-md hover:text-gray-300 dark:hover:bg-gray-700 dark:text-white"
      type="button"
      title="Toggle dark mode"
      onClick={onToggle}
    >
      <MdDarkMode className="text-xl" />
    </button>
  );
}
