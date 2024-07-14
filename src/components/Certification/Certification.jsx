import React from "react";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css';
import "./certification.css";

const imageSource = import.meta.env.DEV
  ? "http://localhost:8080/api/images"
  : `${import.meta.env.VITE_API_iconName}/images`;

const Certification = ({ certification }) => {
  return (
    <div className="certification-card">
      <div className="certification-image">
        <Zoom>
          <img 
            src={`${imageSource}/${certification.image}`} 
            alt={certification.name} 
            className="zoomable-image"
          />
        </Zoom>
      </div>
    </div>
  );
};

export default Certification;
