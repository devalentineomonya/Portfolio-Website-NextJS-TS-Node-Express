import Hero from "../components/Hero/Hero";
import TechStacks from "../components/TechStacks/TechStacks";
import ServicesContextProvider from "../Context/ServicesContext";
import About from "../components/About/About";
import CounterContextProvider from "../Context/CounterContext";
import SkillsContextProvider from "../Context/SkillsContext";
import Testimonial from "../components/Testimonials/Testimonial";
import SwipperContextProvider from "../Context/SwipperContext";
import Team from "../components/Team/Team";
import Partners from "../components/Partners/Partners";
import LatestProjects from "../components/LatestProjects/LatestProjects";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import { scrollToSection } from "../Utils/ScrollUtils/ScrollUtils";
import React, { useEffect, useState } from "react";
import ProjectPopup from "../components/ProjectPopup/ProjectPopup";

const Home = ({ activeTab, setActiveTab }) => {
  const hash = window.location.hash.substr(1);
  const[togglePopup, setTogglePopup] = useState(false);
  const [projectID, setProjectID] = useState(null);
  useEffect(() => {
    scrollToSection(hash);
    setActiveTab(hash);
  }, [hash]);

  return (
    <>
      <Hero />

      <ServicesContextProvider>
        <TechStacks />
      </ServicesContextProvider>

      <CounterContextProvider>
        <SkillsContextProvider>
          <About />
        </SkillsContextProvider>
      </CounterContextProvider>

      <SwipperContextProvider>
        <Testimonial />
      </SwipperContextProvider>
      <Projects setTogglePopup={setTogglePopup} setProjectID={setProjectID}/>

      <Team />

      <Partners />

      <LatestProjects />
      <Contact activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProjectPopup togglePopup={togglePopup} setTogglePopup={setTogglePopup} projectID={projectID}/>
    </>
  );
};

export default Home;
