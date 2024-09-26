import React from "react";
import Image, { StaticImageData } from "next/image";
import { BsX } from "react-icons/bs";
import Link from "next/link";

interface ProjectPopupProps{
  showPopup:boolean,
  setShowPopup:(prev:boolean)=>void,
  project:{
    id: number | string;
    name: string;
    description:string;
    previewImage: StaticImageData;
    popupImage: StaticImageData;
    technologies: string[];
    liveLink: string;
    githubLink:string;
  } | undefined
}

const ProjectPopup = ({ showPopup, setShowPopup ,project}:ProjectPopupProps) => {
  return (
    <dialog className={`fixed h-screen w-full top-0 left-0 bg-[rgba(0,_0,_0,_0.4)]  flex justify-center items-center z-50 `} style={{scale: ` ${showPopup ? "1" : "0" }` }}>
      <div className="flex bg-white h-4/5 aspect-square rounded-md relative overflow-hidden">
        <button className="absolute right-2 top-[5px] h-16 aspect-square cursor-pointer bg-[rgba(0,_0,_0,_0.3)] rounded-full flex justify-center items-center text-white text-lg rotate-45 z-50  " onClick={() => setShowPopup(false)} >
          <BsX/>
        </button>
        {project && ( 
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-x-4 p-[5px]">
            <div className="w-full h-full overflow-hidden relative rounded-md ">
              <div className="w-full h-full absolute">
                <Image src={project.popupImage} alt={project.name} width={100} height={100} quality={100} fill className="object-cover inset-0"/>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col relative">
              <div className="popup-text">
                <h1 className="text-3xl mt-2 cursor-pointer hover:text-primary">{project.name}</h1>
                <p className="text-sm leading-[3px] tracking-[2rem]">{project.description}</p>
              </div>
              <div className="absolute bottom-0 flex justify-between w-full py-0 px-4 ">
                <Link href={project.githubLink} target="_blank">View Github</Link>
                <Link href={project.liveLink} target="_blank">View Live</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </dialog>
  );
};

export default ProjectPopup;
