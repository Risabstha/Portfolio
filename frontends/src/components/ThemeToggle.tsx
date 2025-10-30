import React from "react";
import { useTheme } from "../stores/ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`rounded-full lg:p-2 md:p-1.5 p-1  ${theme === 'dark' ? "hover:bg-gray-800" : "hover:bg-gray-300" } transition `}
      title={`Dark Mode ${theme === "dark" ? "On" : "Off"}`}
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-gray-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
