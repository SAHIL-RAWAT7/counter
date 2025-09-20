import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-3 rounded-full bg-white/30 dark:bg-gray-700/50 backdrop-blur-md shadow-md hover:scale-110 transition"
    >
      {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-500" />}
    </button>
  );
}

export default ThemeToggle;
