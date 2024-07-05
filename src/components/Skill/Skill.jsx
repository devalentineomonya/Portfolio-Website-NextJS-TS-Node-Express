import React from "react";
import "./skill.css";

const Skills = ({ name = "", value = 0 }) => {
  return (
    <div className="skills-container">
      <div className="skills-details">
        <p>{name}</p>
      </div>
      <div className="skill-level">
        <div className="skills-level-bar" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};

export default Skills;
