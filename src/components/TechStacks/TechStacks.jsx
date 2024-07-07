import React, { useContext } from "react";
import "./techstacks.css";
import TechStack from "../TechStack/TechStack";
import HeadLine from "../HeadLine/HeadLine";
import TechStackItems from "../../assets/TechStacksList/TechStacksList";
const TechStacks = ({techStacks=TechStackItems}) => {
  return (
    <div className="techstacks-section" >
    <HeadLine id="techstack" number={"01"} description={"Tech Stacks I Use"} name={"Tech Stack"} />
      <div className="techstacks-container">
        {techStacks.map((techstack, i) => (
          <TechStack key={i} techstack={techstack} />
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
