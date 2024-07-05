import React from "react";
import "./collaborators.css";
import CardItem from "../CardItem/CardItem";
import TeamList from "../../assets/TeamList/TeamList";
import HeadLine from "../HeadLine/HeadLine";
const Collaborators = () => {
  return (
    <div className="collaborators-section">
      <HeadLine number={"05"} description={"Who i have Collaborated with"} name={"Collaborations"}/>
      <div className="collaborators-card-container">
        <div className="collaborators-cards">
          {TeamList.map((cardContent, i) => (
            <CardItem key={i} cardContent={cardContent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
