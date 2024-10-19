import React from "react";
import blogImage from "@/assets/images/1.jpg";
import Image from "next/image";
const BlogCard = () => {
  return (
    <div className="flex flex-col  w-full h-full bg-red-700">
      <div className="flex-1 w-full h-1/2">
        <Image
          src={blogImage}
          alt="Blog Image"
          layout="fill"
          quality={100}
          objectFit="cover"
          className="object-cover w-full h-full"
          placeholder="blur"
        />
      </div>
      <div className="flex-1 w-full h-1/2 bg-red-400">
hello
      </div>
    </div>
  );
};

export default BlogCard;
