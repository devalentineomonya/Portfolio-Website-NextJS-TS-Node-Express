import React, { useState } from "react";
import "./techstack.css";
import { BsChevronRight } from "react-icons/bs";
const TechStacks = ({techstack=null}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      toggleAccordion();
    }
  };
  return (
    <div
      className={`techstacks-card ${isActive ? "active" : ""}`}
      onClick={toggleAccordion}
      onKeyDown={handleKeyDown}
    >
      <div className="card-content">
        <div className="techstack-icon">
          {techstack?.icon}
        </div>
        <div className="techstack-name">
          <BsChevronRight className="chevron"  size={35}/>
          <p>{techstack?.name}</p>
        </div>
      </div>
      <div className="techstack-description">
        <p>{techstack?.description}</p>
      </div>
    </div>
  );
};

export default TechStacks;
