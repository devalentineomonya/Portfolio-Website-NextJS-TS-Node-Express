"use client"
import React from "react";
import socialLinksList from "../socialLinks/socialLinksList";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import { navbarItems } from "../navbar/navbarItems";
import { usePathname } from "next/navigation";

type LinkItem = {
  name: string;
  href?: string; 
  sectionName?: string; 
};

const Footer: React.FC = () => {
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const pathname = usePathname().substring(1)

  

  const pages: LinkItem[] = [
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "About", href: "/about" },
    { name: "Home", href: "/" },
    { name: "404", href: "/404" },
  ];

  return (
    <footer className={`${pathname.includes("admin") ? "hidden" : "flex"} justify-center items-center w-full h-auto text-gray-900 bg-white py-12 shadow-[0.5px_-4.5px_6px_-3.5px_#dddddd]`}>
      <div className="max-w-7xl w-full h-full flex flex-col md:flex-row justify-between items-start md:items-center md:gap-x-16 px-6 space-y-8 md:space-y-0">
        {/* About Section */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-2xl font-bold">Devalentine 👩‍💻</h1>
          <p className="text-sm leading-relaxed">
            Valentine Omonya is a software developer from Nairobi, Kenya, with a passion for building beautiful and functional websites and applications.
          </p>
          <h2 className="text-sm">&copy; {today.getFullYear()} Devalentine</h2>
          <h3 className="text-sm">Have a blessed {dayName}</h3>
        </div>

        {/* Links Section */}
        <div className="md:w-1/2 flex justify-between w-full space-x-4">
          <FooterSection title="Social" items={socialLinksList} isExternal={true} />
          <FooterSection title="Pages" items={pages} />
          <FooterSection title="Quick Links" items={navbarItems} />
        </div>
      </div>
    </footer>
  );
};

type FooterSectionProps = {
  title: string;
  items: LinkItem[];
  isExternal?: boolean; 
};


const FooterSection: React.FC<FooterSectionProps> = ({ title, items, isExternal }) => (
  <div className="space-y-2">
    <p className="text-lg font-semibold">{title}</p>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.name} className="text-sm my-3 font-medium">
          <Link 
            href={item.href || `/#${item.sectionName}`} 
            target={isExternal ? "_blank" : "_self"} 
            rel={isExternal ? "noopener noreferrer" : undefined} 
            className="hover:text-gray-700 transition-colors flex items-center gap-x-3"
          >
            {item.name}
            {isExternal && <LuExternalLink className="inline ml-1" />} 
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
