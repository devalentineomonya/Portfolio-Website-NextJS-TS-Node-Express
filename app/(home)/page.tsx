import React from "react"
import { Metadata } from "next";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import TechStacks from "./components/techStacks/TechStacks";
import Testimonials from "./components/testimonials/Testimonials";

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
      <div className="px-4 lg:px-0">
      <TechStacks />
      <About />
      <Testimonials />
      <Projects />
      <Blogs/>
      <Contact />
      </div>
    </>
  );
}
