import React, { useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "../modeswitch/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode, isAutoMode, setAutoMode } = useTheme();
  const [showOptions, setShowOptions] = useState(false);

  const handleToggle = () => {
    if (isAutoMode) {
      // Jika dalam mode otomatis, klik pertama untuk mematikannya dan mengatur mode manual
      setAutoMode(false);
      toggleDarkMode(); // Beralih ke kebalikan dari preferensi sistem
    } else {
      // tombol saat dalam mode manual
      toggleDarkMode();
    }
  };

  const selectMode = (mode) => {
    if (mode === "auto") {
      setAutoMode(true);
    } else {
      setAutoMode(false);
      setIsDarkMode(mode === "dark");
      localStorage.setItem("theme", mode);
    }
    setShowOptions(false);
  };

  return (
    <div className="fixed top-4 right-4 flex flex-col items-end gap-2">
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col gap-2 p-2 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <button
              onClick={() => selectMode("light")}
              className={`flex items-center gap-2 p-2 rounded-lg ${
                !isDarkMode && !isAutoMode
                  ? "bg-blue-100 dark:bg-blue-900"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <Sun size={18} />
              <span>Light</span>
            </button>
            <button
              onClick={() => selectMode("dark")}
              className={`flex items-center gap-2 p-2 rounded-lg ${
                isDarkMode && !isAutoMode
                  ? "bg-blue-100 dark:bg-blue-900"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <Moon size={18} />
              <span>Dark</span>
            </button>
            <button
              onClick={() => selectMode("auto")}
              className={`flex items-center gap-2 p-2 rounded-lg ${
                isAutoMode
                  ? "bg-blue-100 dark:bg-blue-900"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <Monitor size={18} />
              <span>System</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleToggle}
        onDoubleClick={() => setShowOptions(!showOptions)}
        className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white shadow-lg transition flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={
          isAutoMode
            ? "System Theme (Double click for options)"
            : isDarkMode
            ? "Dark Mode (Double click for options)"
            : "Light Mode (Double click for options)"
        }
      >
        {isAutoMode ? (
          <Monitor size={22} />
        ) : isDarkMode ? (
          <Sun size={22} />
        ) : (
          <Moon size={22} />
        )}
      </motion.button>
    </div>
  );
}