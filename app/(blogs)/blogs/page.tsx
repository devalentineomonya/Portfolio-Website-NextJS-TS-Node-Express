import React from "react";
import BlogCard from "../components/BlogCard";
const page = () => {
  return (
    <div className="flex items-start flex-col justify-center w-full">
      <div className="h-full min-h-[calc(100vh-6rem)] flex items-center justify-center gap-y-4 max-w-5xl">
        <BlogCard />
      </div>
    </div>
  );
};

export default page;
