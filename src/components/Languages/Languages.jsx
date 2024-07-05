import React from "react";
import "./languages.css";

const languages = ({ name = "", value = 0 }) => {
  return (
    <div className="languages-container">
      <div className="languages-details">
        <p>{name}</p>
      </div>
      <div className="language-level">
        <div className="languages-level-bar" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};

export default languages;
