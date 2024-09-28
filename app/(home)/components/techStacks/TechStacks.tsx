import React from "react";
import TechStack from "./TechStack";
import techStackList from "./techStackList";
import SectionLayout from "@/components/layouts/section/SectionLayout";
const TechStacks = () => {
  return (
    <SectionLayout
      sectionName="Tech Stacks"
      sectionId="techStack"
      sectionDescription="Tech Stacks I work on"
      sectionNumber="01"
    >
      <div className="flex justify-center items-start flex-wrap gap-y-4 gap-x-8 px-4 md:px-0">
        {techStackList.map((techStack) => (
          <TechStack key={techStack.name} techStack={techStack} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default TechStacks;
