"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const Counter = dynamic(() => import("./Counter"), {
  ssr: false,
});
import lightSlider from "@/assets/images/lightSlider3.jpg";
import darkSlider from "@/assets/images/darkSlider3.jpg";
import Language from "./Language";
import SectionLayout from "@/components/layouts/section/SectionLayout";
import { useTheme } from "@/hooks/useTheme";
import counterItems from "./counterItems";
import languages from "./languages";
import { sectionMetadata } from "@/assets/data/metaDatas";
import type { Metadata } from 'next'
const { title, description } = sectionMetadata.about;
export const metadata: Metadata = {
  title,
  description
}

const About = () => {
<<<<<<< Updated upstream
  const [bgImage, setBgImage] = useState<string>(lightSlider.src);
  const { darkMode } = useTheme();

  useEffect(() => {
    setBgImage(darkMode ? darkSlider.src : lightSlider.src);
=======
  const [bgImage, setBgImage] = useState<string>(lightSlider.src); // Use src
  const { darkMode } = useTheme();

  useEffect(() => {
    setBgImage(darkMode ? darkSlider.src : lightSlider.src); // Use .src
>>>>>>> Stashed changes
  }, [darkMode]);

  return (
    <>

      <SectionLayout
        full
        sectionId="about"
        sectionNumber="02"
        sectionDescription="Why Work with me."
        sectionName="About"
      >
        <div className="relative flex items-center justify-center flex-col-reverse md:flex-row gap-x-4 w-full">
          <div
            className="w-full md:w-1/2 mt-4  md:mt-0 flex items-center justify-center h-[700px] sm:h-[600px] relative"
            style={{
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
            }}
          >
            <div className="grid justify-center items-center overflow-hidden sm:grid-cols-2 bg-white shadow-[0px_0px_20px] shadow-navbar w-[90%] h-[90%] lg:w-4/5 lg:h-3/4 absolute ">
              {counterItems.map((count) => (
                <Counter
                  key={count.name}
                  name={count.name}
                  value={count.value}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold mb-2 text-black">
              Valentine Omonya
            </h3>
            <p className="text-lg text-[#333333] leading-[1.75em] font-medium">
              A versatile software engineer proficient in Python, JavaScript,
              PHP, and React. I have a adept in both web and mobile development.
              Crafts robust, aesthetically pleasing digital solutions, known for
              creative problem-solving and commitment to excellence. Delivers
              innovative solutions tailored to client needs, with a keen eye for
              detail and a passion for staying current. A valuable asset to any
              team.
            </p>
            <div className="skills-section">
              {languages.map((language) => (
                <Language
                  key={language.name}
                  name={language.name}
                  value={language.value}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default About;
