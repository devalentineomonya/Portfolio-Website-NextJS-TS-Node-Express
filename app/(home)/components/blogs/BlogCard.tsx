import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import styles from "./blogCard.module.css"
interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    date: string;
    imageSmall: StaticImageData;
    shortDescription:string;
    blogContent:string;
    tags: string[];
  };
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className=" w-full md:h-[400px]">
      <div className="flex flex-col h-full">
        <div className={`relative w-full h-[300px] overflow-hidden bg-white ${styles.blogCardImageContainer}`}>
          <Image
            src={blog?.imageSmall}
            alt={blog?.title}
            layout="fill"
            quality={100}
            objectFit="cover"
            className={`absolute inset-0 transition-all ease-in-out duration-400 hover:scale-110 cursor-pointer z-8`}
            placeholder="blur"
            priority
          />
        </div>
        <div className="w-full h-32 bg-light-primary px-4">
          <p className="font-base text-light-text-secondary font-light flex items-center gap-x-2">
            {blog?.date}
            {blog?.tags[0]}
          </p>

          <Link className="mt-1 text-3xl font-medium text-light-text-secondary hover:text-primary" href={"blog/" + blog.id}>{blog?.title}</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
