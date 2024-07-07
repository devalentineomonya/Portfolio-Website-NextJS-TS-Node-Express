import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const selectedTheme = localStorage.getItem("selectedTheme");
document.querySelector("body").setAttribute("data-theme", selectedTheme);


export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(selectedTheme === "dark" ? true : false);

  const toggleTheme = () => {
    const newTheme = toggle ? "dark" : "light";
    document.querySelector("body").setAttribute("data-theme", newTheme);
    localStorage.setItem("selectedTheme", newTheme);
    setToggle(!toggle);
  };
  useEffect(()=>{
    toggleTheme()
  },[toggle])

  return (
    <ThemeContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
