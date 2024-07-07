import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import "./themetoggler.css";
import { useTheme } from "../../Context/ThemeContext";

const ThemeToggler = () => {
  const { toggle, setToggle } = useTheme();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setToggle(!toggle);
    }
  };

  return (
    <div
      onClick={() => setToggle((prev) => !prev)}
      onKeyDown={() => handleKeyDown()}
      className={`wrg-toggle ${toggle ? "wrg-toggle--checked" : ""}`}
    >
      <div className="wrg-toggle-container">
        <div className="wrg-toggle-check">
          <span>
            <FaMoon />
          </span>
        </div>
        <div className="wrg-toggle-uncheck">
          <span>
            <FaSun />
          </span>
        </div>
      </div>
      <div className="wrg-toggle-circle"></div>
      <input
        className="wrg-toggle-input"
        type="checkbox"
        aria-label="Toggle Button"
        checked={toggle}
        onChange={() => setToggle((prev) => !prev)}
      />
    </div>
  );
};

export default ThemeToggler;
