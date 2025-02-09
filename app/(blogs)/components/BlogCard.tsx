import React from "react";
import blogImage from "@/assets/images/1.jpg";
import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <article className="w-full h-fit min-h-[700px] max-w-3xl bg-white shadow-md ">
      <figure className="relative">
        <Image
          src={blogImage}
          alt="Blog Image"
          layout="responsive"
          width={700}
          height={400}
          quality={100}
          objectFit="cover"
          className="w-full h-full"
          placeholder="blur"
        />
      </figure>
      <div className="flex-1 w-full h-fit min-h-52 bg-white px-5 pb-12">
        <div className="h-14  flex justify-between items-center px-2 md:px-12">
          <p>Javascript, PHP, Web</p>
          <p>September 07 - 2021</p>
        </div>
        <div className="px-4 md:px-24 mt-5 pb-6">
          <Link href="/">
            <h1 className="font-dosis font-semibold text-3xl ">
              Dating While Studying Abroad—Maximize Fun, Minimize Heartbreak
            </h1>
          </Link>
          <p className="my-6">
            Velit duis commodo magna commodo ut est minim tempor. Voluptate
            aliqua aliquip excepteur esse exercitation amet commodo veniam
            tempor voluptate ut laborum sunt. Ea eiusmod anim ex laborum ad in
            excepteur incididunt pariatur ullamco in veniam. Aliquip nulla sit
            duis sit ipsum qui veniam aute voluptate tempor dolore. Proident
            veniam exercitation reprehenderit sint excepteur anim nisi elit ex
            do. Voluptate minim ipsum ad id esse sunt commodo laboris velit
            laboris non consequat.
          </p>
          <Link href="/" className="bg-primary text-white rounded-md py-3 px-6">
          Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
