import React from "react";
import SectionHeader from "./SectionHeader";

interface SectionLayoutProps {
  children: React.ReactNode,
  sectionId: string,
  sectionNumber:string,
  sectionDescription:string,
  sectionName:string,
  full?:boolean
}
const SectionLayout = ({
  children,
  sectionId,
  sectionNumber,
  sectionDescription,
  sectionName,
  full=false,

}:SectionLayoutProps) => {
  return (
    <section className="w-full h-fit min-h-screen flex items-center justify-center flex-col" id={sectionId}>
      <SectionHeader
        sectionNumber={sectionNumber}
        sectionDescription={sectionDescription}
        sectionName={sectionName}
      />
      <div className={`w-full ${full ? "max-w-[1600px]" : "max-w-7xl"} `}>

      {children}
      </div>
    </section>
  );
};

export default SectionLayout;
