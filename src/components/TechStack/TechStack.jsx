import React, { lazy, useState } from "react";
import "./techstack.css";
import { BsChevronRight } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { FaServer } from "react-icons/fa";
import { PiMonitorFill } from "react-icons/pi";
import { BsDatabaseFillGear } from "react-icons/bs";
import { FaMobile } from "react-icons/fa";


const TechStacks = ({techstack}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      toggleAccordion();
    }
  };
  console.log(techstack.icon)
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
