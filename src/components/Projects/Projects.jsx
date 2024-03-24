import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectsList from "../../assets/ProjectsList/ProjectsList";
import "./projects.css";
import HeadLine from "../HeadLine/HeadLine";
const Projects = ({setTogglePopup, setProjectID}) => {
  return (
    <div className="projects-section">
      <HeadLine id="projects" number={"04"} description={"What i have done"} name={"Projects"}  />
      <div className="project-container">
      {ProjectsList.map((project, i) => (
        <ProjectCard key={i} projectInfo={project} setTogglePopup={setTogglePopup} setProjectID={setProjectID} />
      ))}
      </div>
    </div>
  );
};

export default Projects;
