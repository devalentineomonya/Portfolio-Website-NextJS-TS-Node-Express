import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import TechStacks from "./components/techStacks/TechStacks";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valentine Omonya | Software Engineer",
  description:
    "Explore the work of Valentine Omonya, a passionate Software Engineer specializing in web and mobile development. Discover innovative projects showcasing expertise in Python, JavaScript, PHP, and React, all crafted with a focus on user experience and creative problem-solving",
creator: "Valentine Omonya",
keywords: "Valentine Omonya, Omonya, Valentine, valentine omonya, valentine mutinda, devalentine, devalentine omonya, devalenthcohen, deval enth cohen, devalenthcohen.inpynb.dev, deval enth cohen.ipynb.dev, devalenthcohen ipynb.dev, Software Engineer, Python, JavaScript, PHP, React, Web Development, Mobile Development, User Experience, Creative Problem-Solving",


  };

export default function Home() {
  return (
    <>
      <Hero />
      <TechStacks />
      <About />
      <Testimonials />
      <Projects />
      <Contact />
    </>
  );
}
