import React from "react";
import ContactCard from "../components/ContactCard";
import { FaRegComment } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import ContactForm from "../components/ContactForm"
const page = () => {
  return (
    <div className="h-[calc(100vh-6rem)] flex justify-center pt-12">
      <div className="h-full w-full max-w-8xl flex items-center flex-col">
        <div className="w-full flex items-center justify-center gap-x-4 max-w-7xl">
          <ContactCard icon={<SlLocationPin />} content="Nairobi, Kenya" />
          <ContactCard icon={<BsTelephone />} content="+254-768-133-220" />
          <ContactCard icon={<FaRegComment />} content="valmosh254@gmail.com" />
        </div>
        <div className=" mt-12 h-[500px] w-full max-w-7xl">
          <div className="h-full w-full flex ">
            <div className="h-full  w-[480px]  xl:pt-12">
              <h2 className="text-5xl font-semibold text-gray-900 lg:max-w-[480px]">Let&apos;s work together</h2>
              <p className="text-2xl font-light text-gray-800 mt-3 lg:max-w-[450px]">
                We&apos;d love to learn more about you and we can build something great
                together.
              </p>
            </div>
            <div className="h-full flex-1 bg-orange-400">
                <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
