import React from "react";
import "./collaborators.css";
import CardItem from "../CardItem/CardItem";
import CollaboratorsList from "../../assets/TeamList/TeamList";
import HeadLine from "../HeadLine/HeadLine";
const Collaborators = ({collaborators=CollaboratorsList}) => {
  return (
    <div className="collaborators-section">
      <HeadLine number={"05"} description={"Who i have Collaborated with"} name={"Collaborations"}/>
      <div className="collaborators-card-container">
        <div className="collaborators-cards">
          {collaborators?.map((collaborator, i) => (
            <CardItem key={i} cardContent={collaborator} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
