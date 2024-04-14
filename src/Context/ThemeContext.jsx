// ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    setToggle(selectedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = !toggle ? "dark" : "light";
    document.querySelector("body").setAttribute("data-theme", newTheme);
    localStorage.setItem("selectedTheme", newTheme);
    setToggle(!toggle);
  };

  return (
    <ThemeContext.Provider value={{ toggle, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
