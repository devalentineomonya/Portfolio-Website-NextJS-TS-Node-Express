import SectionLayout from "@/components/layouts/section/SectionLayout";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { sectionMetadata } from "@/assets/data/metaDatas";
import { Metadata } from "next";
const { title, description } = sectionMetadata.contact;
export const metadata: Metadata = {
  title,
  description
}

const Contact = () => {

  return (
    <>

      <SectionLayout
        sectionDescription="Question or message for me?"
        sectionId="contact"
        sectionName="Contact"
        sectionNumber="06"
      >
        <div className="w-full h-[500px]  flex justify-center items-center flex-col ">
          <div>
            <h2 className="font-semibold text-3xl text-center ">
              Let make something
            </h2>
            <h2 className="font-semibold text-3xl text-center mt-2">
              amazing together
            </h2>
          </div>
          <p className="text-base  leading-relaxed tracking-wider font-medium text-center max-w-[700px] text-gray-800 mt-5">
            &apos;m excited to explore project collaborations that leverage the
            skills I&apos;ve developed. In addition to my full-time coding work,
            I also take on freelance projects that challenge my creativity and
            problem-solving abilities. If you have a project idea in mind or
            need assistance with a specific task, I&apos;d love to hear from
            you. Let&apos;s connect and see how we can bring your vision to
            life! 😊
          </p>
          <Link
            href="/contact"
            target="_self"
            className="text-red-700 border border-red-600 hover:bg-red-700 hover:text-white hover:border-white py-2 px-6 gap-2 rounded inline-flex items-center gap-x-3 transition-all ease-in-out duration-300 mt-4 "
          >
            <span>Let talk</span>
            <GoArrowUpRight size={24} />
          </Link>
        </div>
      </SectionLayout>
    </>
  );
};

export default Contact;
