import React from "react";
import "./projectcard.css";

const ProjectCard = ({ projectInfo = null, setTogglePopup, setProjectID }) => {
  function openPopup(e) {
    e.preventDefault();
    setTogglePopup(true);
    setProjectID(projectInfo._id);
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      openPopup(event);
    }
  };

  const imageSource = import.meta.env.DEV
    ? "http://localhost:8080/api/images"
    : `${import.meta.env.VITE_API_ENDPOINT}/images`;
  return (
    <div className="project-card-container">
      <div className="project-card-content">
        <div className="project-card-image">
          <img
            src={`${imageSource}/${projectInfo?.image}`}
            alt={projectInfo?.name}
          />
        </div>
      </div>
      <div className="card-overlay">
        <div className="click-me-text">
          <span>Click on the Project Name for more info</span>
        </div>
        <div className="project-technology">
          <p>
            {projectInfo?.technologies?.join('. ')
            }
          </p>
        </div>

        <div className="project-link">
          <a
            target="_blank"
            href={projectInfo?.live_link}
            onClick={openPopup}
            onKeyDown={handleKeyDown}
          >
            {projectInfo?.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
