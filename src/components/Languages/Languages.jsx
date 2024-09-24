import React from "react";
import "./languages.css";

const languages = ({ name, value }) => {
  console.log(value)
  return (
    <div className="languages-container">
      <div className="languages-details">
        <p>{name}</p>
      </div>
      <div className="language-level">
        <div className="languages-level-bar" style={{ width: `${value}%`,  position: "absolute",height: "100%", backgroundColor: "var(--color-primary)" }}></div>
      </div>
    </div>
  );
};

export default languages;
