import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import "./modetoggler.css";
import { useTheme } from "../../Context/ThemeContext";

const ModeToggler = () => {
  const { toggle, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
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
        onChange={toggleTheme}
      />
    </div>
  );
};

export default ModeToggler;
