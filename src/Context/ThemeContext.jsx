import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    console.log("Selected theme from localStorage:", selectedTheme);
    setToggle(selectedTheme === "dark"? true :  false);
    toggleTheme();
  }, []);

  console.log("Current toggle state:", toggle);

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
