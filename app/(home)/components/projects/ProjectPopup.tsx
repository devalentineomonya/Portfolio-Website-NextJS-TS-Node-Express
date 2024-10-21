import React from "react";
import Image, { StaticImageData } from "next/image";
import { BsXLg } from "react-icons/bs";
import Link from "next/link";
import { LuEye } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";

interface ProjectPopupProps {
  showPopup: boolean;
  setShowPopup: (prev: boolean) => void;
  project:
    | {
        id: number | string;
        name: string;
        description: string;
        previewImage: StaticImageData;
        popupImage: StaticImageData;
        technologies: string[];
        liveLink: string;
        githubLink: string;
      }
    | undefined;
}

const ProjectPopup = ({
  showPopup,
  setShowPopup,
  project,
}: ProjectPopupProps) => {
  return (
    <dialog
      className={`fixed h-screen w-full top-0 left-0 bg-[rgba(0,_0,_0,_0.4)]  flex justify-center items-center z-50 transition-all ease-in-out duration-300 `}
      style={{ scale: ` ${showPopup ? "1" : "0"}` }}
    >
      <div className="flex bg-white h-[98%] w-[98%] md:h-[80%] ms:w-[70%] max-w-8xl rounded-md relative overflow-hidden">
        <button
          className="absolute right-2 top-[5px] h-10 aspect-square cursor-pointer bg-[rgba(0,_0,_0,_0.3)] rounded-md flex justify-center items-center text-white text-lg  z-50  "
          onClick={() => setShowPopup(false)}
        >
          <BsXLg size={24} />
        </button>
        {project && (
          <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-[1.1fr_0.9fr] gap-x-4 p-[5px]">
            <div className="w-full h-full overflow-hidden relative rounded-md ">
              <div className="w-full h-full absolute">
                <Image
                  src={project.popupImage}
                  alt={project.name}
                  layout="fill"
                  quality={100}
                  objectFit="cover"
                  className="absolute inset-0"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex justify-center items-center flex-col relative">
              <div className="popup-text">
                <h1 className="text-3xl mt-2 cursor-pointer hover:text-primary">
                  {project.name}
                </h1>
                <p className="text-lg leading-loose tracking-widest font-light mt-3">
                  {project.description}
                </p>
                <p className="text-xl leading-loose tracking-widest font-medium  mt-3">
                  {project.technologies.join(" | ")}
                </p>
              </div>
              <div className="absolute bottom-0 flex justify-between w-full py-0 px-4 z-10 bg-white">
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="text-red-700 border border-red-600 hover:bg-red-700 hover:text-white hover:border-white py-2 px-6 gap-2 rounded inline-flex items-center gap-x-3 transition-all ease-in-out duration-300 "
                >
                  <span>View Github</span>
                  <GoArrowUpRight size={24} />
                </Link>

                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="text-indigo-700 border border-indigo-600  hover:bg-indigo-700 hover:text-white hover:border-white py-2 px-6 gap-2 rounded inline-flex items-center gap-x-3  transition-all ease-in-out duration-300 "
                >
                  <span>View Live</span>
                  <LuEye size={24} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </dialog>
  );
};

export default ProjectPopup;
