import Hero from "../components/Hero/Hero";
import TechStacks from "../components/TechStacks/TechStacks";
import About from "../components/About/About";
import CounterContextProvider from "../Context/CounterContext";
import Testimonial from "../components/Testimonials/Testimonial";
import Collaborators from "../components/Collaborators/Collaborators";
import Certifications from "../components/Certifications/Certifications";
import LatestProjects from "../components/LatestProjects/LatestProjects";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import React, { useState } from "react";
import ProjectPopup from "../components/ProjectPopup/ProjectPopup";
import { useDataContext } from "../Context/DataContext";

const Home = ({ setActiveTab }) => {
  const [togglePopup, setTogglePopup] = useState(false);
  const [projectID, setProjectID] = useState(null);
  const { data } = useDataContext();
  console.dir(data)

  return (
    <>
      <Hero />
      <TechStacks TechStacksList={data.stacks} />
      <CounterContextProvider>
        <About languages={data.languages} />
      </CounterContextProvider>
      
      <Testimonial testimonials={data.testimonials} />
      <Projects setTogglePopup={setTogglePopup} setProjectID={setProjectID} ProjectsList={data.projects} />
      <Collaborators collaborators={data.collaborators} />
      <Certifications certifications={data.certifications}/>

      <LatestProjects />
      <Contact setActiveTab={setActiveTab} />
      <ProjectPopup
        togglePopup={togglePopup}
        setTogglePopup={setTogglePopup}
        projectID={projectID}
      />
    </>
  );
};

export default Home;
