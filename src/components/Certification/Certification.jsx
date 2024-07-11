import React from "react";
import "./certification.css"


const imageSource = import.meta.env.DEV
? "http://localhost:8080/api/images"
: `${import.meta.env.VITE_API_iconName}/images`;


const Certification = ({ certification }) => {
  return (
    <div className="certification-card">
      <div className="certification-image">
        <img src={`${imageSource}/${certification.image}`} alt={certification.name} />
      </div>
    </div>
  );
};

export default Certification;
