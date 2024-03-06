import React from 'react';
import './skill.css';

const Skills = (props) => {
  const skillLevel = props.value + '%';

  return (
    <div className="skills-container">
      <div className="skills-details">
        <p>{props.name}</p>
        <p>{props.value}%</p>
      </div>
      <div className="skill-level">
        <div className="skills-level-bar" style={{ width: skillLevel }}></div>
      </div>
    </div>
  )
}

export default Skills;
