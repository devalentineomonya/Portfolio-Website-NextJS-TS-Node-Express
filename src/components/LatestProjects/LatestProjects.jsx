import React from "react";
import CardItem from "../CardItem/CardItem";
import LatestProjectsList from "../../assets/LatestProjectsList/LatestProjectsList";
import HeadLine from "../HeadLine/HeadLine";
const LatestProjects = () => {
  return (
    <div className="latest-projects-section">
      <HeadLine id="latest" number={"06"} description={"What i did Recently"} name={"Latest project"}/>
      <div className="collaborators-card-container">
        <div className="collaborators-cards">
          {LatestProjectsList.map((cardContent, i) => (
            <CardItem key={i} cardContent={cardContent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
