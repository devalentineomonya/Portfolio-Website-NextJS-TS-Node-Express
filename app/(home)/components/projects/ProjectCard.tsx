"use client"
import Image, { StaticImageData } from "next/image";
import React, {useState} from "react";
import ProjectPopup from "./ProjectPopup";
interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description:string;
    popupImage: StaticImageData;
    previewImage: StaticImageData;
    technologies: string[];
    liveLink: string;
    githubLink: string;
  };
}

const ProjectCard = ({
  project,
}: ProjectCardProps) => {



  const [showPopup, setShowPopup] = useState(false);
  const openPopup = ()=> {
    setShowPopup(true);
  }
  return (
    <>
        <ProjectPopup
        project={project}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    <div className="project-card-container w-full  relative flex items-center justify-center overflow-hidden shadow-[0px_0px_2px_2px] shadow-navbar rounded-[5px] aspect-video">
      <div className="relative w-full h-full">
        <Image
          src={project.previewImage}
          alt={project?.name}
          layout="fill"
          quality={100}
          objectFit="cover"
          className="absolute inset-0"
          placeholder="blur"
          priority
        />
      </div>
      <div className="bg-[rgba(0,0,0,0.8)] absolute w-[90%] h-[90%] opacity-0 hover:opacity-100 flex items-center flex-col justify-between cursor-pointer  transition-all ease-in-out duration-300">
        <p className=" text-white font-semibold text-2xl">
          {project?.name}
        </p>
        <div className="h-full w-full flex items-center justify-center ">
          <button onClick={openPopup} className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-10 w-40 rounded-md bg-red-800 p-2 flex justify-center items-center font-extrabold">
            <div className="absolute z-[5] w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-900 delay-150 group-hover:delay-75"></div>
            <div className="absolute z-[5] w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-800 delay-150 group-hover:delay-100"></div>
            <div className="absolute z-[5] w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-700 delay-150 group-hover:delay-150"></div>
            <div className="absolute z-[5] w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-600 delay-150 group-hover:delay-200"></div>
            <div className="absolute z-[5] w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-red-500 delay-150 group-hover:delay-300"></div>
            <p className="z-[5]">Discover More</p>
          </button>
        </div>
          <p className=" text-[#e0e0e0] flex justify-center flex-col font-medium">{project?.technologies?.join(" | ")}</p>
      </div>
    </div>
    </>
  );
};

export default ProjectCard;
