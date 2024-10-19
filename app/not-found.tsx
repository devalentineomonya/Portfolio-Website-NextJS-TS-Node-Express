import Image from "next/image";
import Link from "next/link";
import notFound from "@/assets/images/404.png"
import { GoArrowUpRight } from "react-icons/go";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Valentine Omonya | Software Engineer",
  description:
    "Explore the work of Valentine Omonya, a passionate Software Engineer specializing in web and mobile development. Discover innovative projects showcasing expertise in Python, JavaScript, PHP, and React, all crafted with a focus on user experience and creative problem-solving",
  creator: "Valentine Omonya",
  keywords: "Valentine Omonya, Omonya, Valentine, valentine omonya, valentine mutinda, devalentine, devalentine omonya, devalenthcohen, deval enth cohen, devalenthcohen.inpynb.dev, deval enth cohen.ipynb.dev, devalenthcohen ipynb.dev, Software Engineer, Python, JavaScript, PHP, React, Web Development, Mobile Development, User Experience, Creative Problem-Solving",

}
export default function NotFound() {
  return (
    <div className="h-fit min-h-[calc(100vh-6rem)] flex items-center justify-center flex-col pt-16 pb-12">
      <Image
        src={notFound}
        alt="Image 404"
        quality={100}
        placeholder="empty"
        priority
      />
      <h2 className="font-dosis text-5xl mt-6 font-semibold ">Page Not Found</h2>
      <div className="h-[2px] w-full max-w-[500px] bg-gray-500 my-8"></div>
      <p className="text-lg  max-w-[700px] text-center">
        A 404 error is a common error and can be caused by a number of issues.
        Essentially, a 404 error occurs when the information that you requested
        is not available
      </p>
      <Link
        href="/"
        className="text-red-700 border border-red-600 hover:bg-red-700 hover:text-white hover:border-white py-2 px-6 gap-2 rounded inline-flex items-center gap-x-1 transition-all ease-in-out duration-300 mt-4"
      >
        <span>Return Home</span>
        <GoArrowUpRight size={24} />
      </Link>

    </div>
  );
}
