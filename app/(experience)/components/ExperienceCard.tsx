import { CheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const ExperienceCard = ({
  href,
  shortDescription,
  name,
  responsibilities,
  timeRange,
  status,
}: {
  href: string;
  shortDescription: string;
  name: string;
  timeRange: string;
  responsibilities: { name: string; description: string }[];
  status: string;
}) => {
  return (
    <Link
      href={href}
      className="relative flex items-start group  min-h-52 h-fit py-5 "
      aria-current="step"
    >
      <span className="h-3 flex items-center" aria-hidden="true">
        <span className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-red-600 rounded-full">
          {status === "past" ? (
            <CheckIcon className="w-5 h-5 text-primary" />
          ) : (
            <span className="h-2.5 w-2.5 bg-red-600 rounded-full" />
          )}
        </span>
      </span>
      <span className=" bg-white  ml-2 flex flex-col w-full min-h-52 h-fit shadow-md rounded-md p-4 relative experience-card px-3">
        <span className="text-sm font-semibold tracking-wide uppercase text-red-600 flex items-center flex-wrap gap-x-3 gap-y-2">
          <span className="whitespace-nowrap">{name}</span>
          <span className="bg-red-500 w-8 h-[2px] max-sm:hidden"></span>
          <span className="whitespace-nowrap">{timeRange}</span>
        </span>
        <span className="text-sm text-gray-500 my-2">{shortDescription}</span>
        <span className="text-md font-medium mt-1 mb-2 flex flex-col items-center justify-center w-fit">
          Responsibilities
          <span className="w-full h-[2px] bg-red-400"></span>
        </span>
        {responsibilities.map((responsibility, index) => (
          <dl key={index}>
            <dt className="font-medium ">
              {index + 1} . {responsibility.name}
            </dt>
            <dd className="ml-3 relative before:absolute before:h-full before:w-[2px] before:bg-red-500 before:content-[''] before:left-0 pl-1 py-2 flex items-center bg-blue-50 bg-opacity-30">
              {responsibility.description}
            </dd>
          </dl>
        ))}
      </span>
    </Link>
  );
};

export default ExperienceCard;
