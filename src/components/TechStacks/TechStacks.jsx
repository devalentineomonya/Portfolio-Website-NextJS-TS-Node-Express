import React, { useContext } from "react";
import "./techstacks.css";
import TechStack from "../TechStack/TechStack";
import { ServicesContext } from "../../Context/ServicesContext";
import HeadLine from "../HeadLine/HeadLine";

const TechStacks = () => {
  const { servicesList } = useContext(ServicesContext);
  return (
    <div className="services-section" >
    <HeadLine id="techstack" number={"01"} description={"Teh Stacks I Use"} name={"Tech Stack"} />
      <div className="services-container">
        {servicesList.map((service, i) => (
          <TechStack key={i} name={service.name} image={service.image} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
