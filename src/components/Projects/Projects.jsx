import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectItems from "../../assets/ProjectsList/ProjectsList";
import "./projects.css";
import HeadLine from "../HeadLine/HeadLine";
const Projects = ({setTogglePopup, setProjectID, projects=ProjectItems}) => {
  return (
    <div className="projects-section">
      <HeadLine id="projects" number={"04"} description={"What i have done"} name={"Projects"}  />
      <div className="project-container">
      {projects.map((project, i) => (
        <ProjectCard key={i} projectInfo={project} setTogglePopup={setTogglePopup} setProjectID={setProjectID} />
      ))}
      </div>
    </div>
  );
};

export default Projects;
