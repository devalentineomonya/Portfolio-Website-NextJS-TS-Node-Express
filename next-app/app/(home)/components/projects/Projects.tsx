"use client"
import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import ProjectPopup from "./ProjectPopup";
import SectionLayout from "@/components/layouts/section/SectionLayout";
import projectsList from "./projectsList"
const Projects = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [projectId, setProjectId] = useState(1)
  const projectInFocus = projectsList.find(p => p.id ===  projectId)
  return (
    <>
      <SectionLayout
        sectionId="projects"
        sectionDescription="What i have done"
        sectionName="Projects"
        sectionNumber="04"
      >
        <div className="project-container">
          {projectsList.slice(0, 6).map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              setShowPopup={setShowPopup}
              setProjectId={setProjectId}
            />
          ))}
        </div>

        <div className="load-more-button">
          <button>Load More</button>
        </div>
      </SectionLayout>
     
      <ProjectPopup project={projectInFocus} showPopup={showPopup} setShowPopup={setShowPopup} />
    </>
  );
};

export default Projects;
