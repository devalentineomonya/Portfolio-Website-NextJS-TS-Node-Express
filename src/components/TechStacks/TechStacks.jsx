import React, { useContext } from "react";
import "./techstacks.css";
import TechStack from "../TechStack/TechStack";
import HeadLine from "../HeadLine/HeadLine";
import { TechStacksContext } from "../../Context/TechStacksContext";

const TechStacks = () => {
const {TechStacksList} = useContext(TechStacksContext)
  return (
    <div className="techstacks-section" >
    <HeadLine id="techstack" number={"01"} description={"Tech Stacks I Use"} name={"Tech Stack"} />
      <div className="techstacks-container">
        {TechStacksList.map((techstack, i) => (
          <TechStack key={i} techstack={techstack} />
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
