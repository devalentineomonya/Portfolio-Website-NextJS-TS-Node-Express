import React from "react";
import "./projectcard.css";
const ProjectCard = ({projectInfo}) => {
  return (
    <div className="project-card-container">
      <div className="project-card-content">
        <div className="project-card-image">
          <img src={projectInfo.image} alt={projectInfo.name}/>
        </div>
      </div>
      <div className="card-overlay">
        <div className="project-technology">
          <p>{projectInfo.technology}</p>
        </div>

        <div className="project-link">
          <a href={projectInfo.link}>{projectInfo.name}</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
