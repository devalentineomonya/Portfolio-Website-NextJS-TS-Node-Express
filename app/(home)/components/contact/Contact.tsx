import SectionLayout from "@/components/layouts/section/SectionLayout";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { sectionMetadata } from "@/assets/data/metaDatas";
import { Metadata } from "next";
const { title, description } = sectionMetadata.contact;
export const metadata: Metadata = {
  title,
  description,
};

const Contact = () => {
  return (
    <>
      <SectionLayout
        sectionDescription="Question or message for me?"
        sectionId="contact"
        sectionName="Contact"
        sectionNumber="06"
      >
        <div className="bg-white text-slate-800">
          <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-red-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Let make something.
                <span className="sm:block"> amazing together. </span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                &apos;m excited to explore project collaborations that leverage
                the skills I&apos;ve developed. In addition to my full-time
                coding work, I also take on freelance projects that challenge my
                creativity and problem-solving abilities. If you have a project
                idea in mind or need assistance with a specific task, I&apos;d
                love to hear from you. Let&apos;s connect and see how we can
                bring your vision to life! 😊
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  target="_blank"
                  className="flex items-center gap-x-3 justify-center  w-full rounded border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                >
                  <span>Schedule A Meeting</span>
                  <GoArrowUpRight size={24} />
                </Link>

                <Link
                  href="/contact"
                  target="_self"
                  className="flex items-center gap-x-3 justify-center w-full rounded border border-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                >
                  <span>Let talk</span>
                  <GoArrowUpRight size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default Contact;
