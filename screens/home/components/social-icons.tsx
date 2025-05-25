"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Link2,
  Instagram,
  Youtube,
  Codepen,
  Github,
  Linkedin,
} from "lucide-react";
import {
  PiXLogo,
  PiStackOverflowLogo,
  PiDevToLogoLight,
  PiMediumLogo,
} from "react-icons/pi";

const SocialLinks = () => {
  const [showIcons, setShowIcons] = useState(false);

  const handleShowIcons = () => {
    setShowIcons(true);
    setTimeout(() => {
      setShowIcons(false);
    }, 10000); // 10 seconds
  };

  const socialLinks = [
    { name: "GitHub", icon: <Github />, href: "https://github.com" },
    { name: "LinkedIn", icon: <Linkedin />, href: "https://linkedin.com" },
    { name: "Twitter", icon: <PiXLogo />, href: "https://twitter.com" },
    {
      name: "Stack Overflow",
      icon: <PiStackOverflowLogo size={14} />,
      href: "https://stackoverflow.com",
    },

    { name: "Medium", icon: <PiMediumLogo />, href: "https://medium.com" },
    { name: "Linkedin", icon: <Linkedin />, href: "https://hashnode.com" },
    { name: "Instagram", icon: <Instagram />, href: "https://dribbble.com" },
    { name: "Youtube", icon: <Youtube />, href: "https://behance.net" },
  ];

  return (
    <div className="border-t py-2 flex justify-between items-center mt-5">
      {showIcons ? (
        <div className="flex space-x-2 items-center justify-center w-full">
          {socialLinks.map((link) => (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              key={link.name}
            >
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </Link>
            </Button>
          ))}
        </div>
      ) : (
        <>
          <Button variant="ghost" onClick={handleShowIcons}>
            <Link2 />
          </Button>
          <Link href="/changelogs">
            <Button variant="ghost">
              <span className="w-2 h-2 bg-green-600 rounded-full" />
              <span>v4.0</span>
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default SocialLinks;
