import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsDark(!isDark)}
      className="relative w-9 h-9 rounded-full flex items-center justify-center bg-secondary hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-4 h-4 text-foreground" /> : <Moon className="w-4 h-4 text-foreground" />}
    </motion.button>
  );
};

export default ThemeToggle;
