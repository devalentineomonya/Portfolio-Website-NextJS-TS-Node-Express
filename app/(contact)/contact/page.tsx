import React from "react";
import ContactCard from "../components/ContactCard";
import { FaRegComment } from "react-icons/fa6";
import { BsGithub, BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import ContactForm from "../components/ContactForm";
import SectionLayout from "@/components/layouts/section/SectionLayout";
const page = () => {
  return (
    <SectionLayout sectionDescription="Let Have a professional conversation" sectionId="contact-page" sectionName="Contact Me" sectionNumber="01">


    <div className="h-full py-12 flex justify-center px-4 md:px-0">
      <div className="h-full w-full max-w-8xl flex items-center flex-col">
        <div className="w-full flex items-center justify-center flex-col lg:flex-row gap-4 max-w-7xl">
          <ContactCard icon={<SlLocationPin />} content="Nairobi, Kenya" />
          <ContactCard icon={<BsTelephone />} content="+254-768-133-220" />
          <ContactCard icon={<FaRegComment />} content="valmosh254@gmail.com" />
          <ContactCard icon={<BsGithub />} content="@devalentineomonya" />
        </div>
        <div className=" mt-12 h-fit pb-12 min-h-[500px]  w-full max-w-7xl">
          <div className="h-full w-full flex gap-x-4 flex-col lg:flex-row">
            <div className="h-full  lg:w-[480px]  xl:pt-12">
              <h2 className="text-3xl text-wrap md:text-5xl font-semibold text-gray-900 lg:max-w-[480px]">
                Let&apos;s work together
              </h2>
              <p className="text-lg text-wrap  md:text-2xl font-light text-gray-800 mt-3 lg:max-w-[450px]">
                We&apos;d love to learn more about you and we can build
                something great together.
              </p>
            </div>
            <div className="h-full flex-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
    </SectionLayout>
  );
};

export default page;
