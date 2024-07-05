import Hero from "../components/Hero/Hero";
import TechStacks from "../components/TechStacks/TechStacks";
import ServicesContextProvider from "../Context/TechStacksContext";
import About from "../components/About/About";
import CounterContextProvider from "../Context/CounterContext";
import SkillsContextProvider from "../Context/SkillsContext";
import Testimonial from "../components/Testimonials/Testimonial";
import SwipperContextProvider from "../Context/SwipperContext";
import Team from "../components/Colaborators/Collaborators";
// import Certifications from "../components/Certifications/Certifications";
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

  return (
    <>
      <Hero />
      <TechStacks TechStacksList={data.skills} />


      <CounterContextProvider>
          <About SkillsList={data.languages} />
      </CounterContextProvider>

      <SwipperContextProvider>
        <Testimonial  SwipperList={data.testimonials} />
      </SwipperContextProvider>
      <Projects setTogglePopup={setTogglePopup} setProjectID={setProjectID} />
      <Team />
      {/* <Certifications /> */}
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
