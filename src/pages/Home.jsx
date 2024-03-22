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
import React, { useEffect } from "react";

const Home = ({ activeTab, setActiveTab }) => {
  const hash = window.location.hash.substr(1);
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
      <Projects />

      <Team />

      <Partners />

      <LatestProjects />
      <Contact activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
};

export default Home;
