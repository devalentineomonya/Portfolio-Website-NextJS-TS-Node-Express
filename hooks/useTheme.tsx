import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []); 

  useEffect(() => {
    if (theme) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      localStorage.setItem("theme", theme);
    }
  }, [theme]); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const darkMode = theme === "dark";

  return { darkMode, toggleTheme };
};
