import React from "react";
import BlogCard from "../components/BlogCard";
const page = () => {
  
  return (
    <div className="flex items-center flex-col justify-start w-full">
      <div className=" flex items-center justify-center gap-y-4 max-w-5xl">
        <BlogCard />
      </div>
    </div>
  );
};

export default page;
