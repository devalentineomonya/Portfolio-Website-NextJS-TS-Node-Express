import React, { useState, useEffect } from "react";
import "./modetoggler.css";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

const ModeToggler = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Set the initial theme when the component mounts
    if (toggle) setDarkTheme();
    else setLightTheme();
  }, [toggle]);

  const triggerToggle = () => {
    setToggle(!toggle);
  };

  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  return (
    <div
      onClick={triggerToggle}
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
        onChange={triggerToggle}
      />
    </div>
  );
};

export default ModeToggler;
