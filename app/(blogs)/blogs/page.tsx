import React from "react";
import BlogCard from "../components/BlogCard";
const page = () => {
  
  return (
    <div className="flex items-center flex-col justify-start w-full bg-[#f8f8f8] py-12">
      <div className="min-h-8 mb-12 font-semibold font-dosis text-5xl">
        My Blogs
      </div>
      <div className=" flex items-center justify-center flex-col gap-y-16 w-full max-w-3xl">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="py-10"></div>
    </div>
  );
};

export default page;
