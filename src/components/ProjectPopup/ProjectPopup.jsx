import React from "react";
import "./projectpopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import image1 from "../../assets/images/slider1.jpg";
import ProjectsList from "../../assets/ProjectsList/ProjectsList";

const ProjectPopup = ({ togglePopup, setTogglePopup, projectID }) => {
  let project = null; // Initialize project as null
  
  // Check if projectID is set before finding the project
  if (projectID) {
    project = ProjectsList.find((p) => p.id === projectID);
  }

  return (
    <dialog className={`popup-overlay  ${togglePopup ? "open" : null}`}>
      <div className="popup-content">
        <div className="close-button " onClick={() => setTogglePopup(false)}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        {project && ( // Render content only if project is found
          <div className="popup-grid">
            <div className="popup-left-section">
              <div className="project-image">
                <img src={project.image2} alt={project.name} />
              </div>
            </div>
            <div className="popup-right-section">
              <div className="popup-text">
                <h1>{project.name}</h1>
                <p>{project.description}</p>
              </div>
              <div className="popup-buttons">
                <a href={project.github_link} target="_blank">View Github</a>
                <a href={project.live_link} target="_blank">View Live</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </dialog>
  );
};

export default ProjectPopup;
