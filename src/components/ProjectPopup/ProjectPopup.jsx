import React from "react";
import "./projectpopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ProjectPopup = ({ togglePopup, setTogglePopup, projectID ,projects}) => {
  let project = null;
  
 
  if (projectID) {
    project = projects.find((p) => p._id === projectID);
  }
console.log(projects);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setTogglePopup(false)
    }
  };
  return (
    <dialog className={`popup-overlay  ${togglePopup ? "open" : null}`}>
      <div className="popup-content">
        <div className="close-button " onClick={() => setTogglePopup(false)} onKeyDown={handleKeyDown}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        {project && ( 
          <div className="popup-grid">
            <div className="popup-left-section">
              <div className="project-image">
                <img src={`${project.image2}`} alt={project.name} />
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
