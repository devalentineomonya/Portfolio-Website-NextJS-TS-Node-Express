import React from "react";
import blogImage from "@/assets/images/1.png";
import Image from "next/image";
const BlogCard = () => {
  return (
    <div className="flex flex-col w-full max-h-[700px] h-full bg-red-700">
      <div className="flex-1 w-full h-1/2">
        <Image
          src={blogImage}
          alt="Blog Image"
          layout="fill"
          quality={100}
          objectFit="cover"
          className="absolute inset-0"
          placeholder="blur"
        />
      </div>
      <div className="flex-1 w-full h-1/2 bg-red-400">

      </div>
    </div>
  );
};

export default BlogCard;
