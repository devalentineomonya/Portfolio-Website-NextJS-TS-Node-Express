import React from "react";
import ProjectCard from "./ProjectCard";
import SectionLayout from "@/components/layouts/section/SectionLayout";
import projectsList from "./projectsList";
import { sectionMetadata } from "@/assets/data/metaDatas";
import { Metadata } from "next";
import Link from "next/link";

const { title, description } = sectionMetadata.projects;
export const metadata: Metadata = {
  title,
  description
}

const Projects = () => {


  return (
  <>

      <SectionLayout
        sectionId="projects"
        sectionDescription="What i have done"
        sectionName="Projects"
        sectionNumber="04"
      >
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {projectsList.slice(0, 6).map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
            />
          ))}
        </div>

        <div className="w-full h-36 flex items-center justify-center">
          <Link href="/projects" className="relative group cursor-pointer text-pink-50  overflow-hidden h-14 w-48 rounded-md bg-pink-800 p-2 flex justify-center items-center font-extrabold">
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-pink-900"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-pink-800"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-pink-700"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-pink-600"></div>
            <p className="z-10">Keep Exploring</p>
          </Link>
        </div>
      </SectionLayout>

  
    </>
  );
};

export default Projects;
