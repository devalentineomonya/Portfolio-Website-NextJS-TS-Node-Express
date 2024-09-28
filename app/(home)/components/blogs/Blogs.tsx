import SectionLayout from "@/components/layouts/section/SectionLayout";
import React from "react";
import BlogCard from "./BlogCard";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import blogsList from "./blogsList";
const Blogs = () => {
  return (
    <SectionLayout
      sectionDescription="Wanna hear from me"
      sectionName="Latest Blogs"
      sectionId="blogs"
      sectionNumber="05"
    >
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-3 justify-center gap-x-4 lg:max-w-6xl">
            {
                blogsList.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))
            }
     
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/contact"
            target="_self"
            className="text-pink-700 border border-pink-600 hover:bg-pink-700 hover:text-white hover:border-white py-2 px-6 gap-2 rounded inline-flex items-center gap-x-3 transition-all ease-in-out duration-300 mt-4 "
          >
            <span>Read More</span>
            <GoArrowUpRight size={24} />
          </Link>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Blogs;
