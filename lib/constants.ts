import {
  Music,
  MonitorSmartphone,
  Laptop,
  Mountain,
  BookOpen,
  MessageCircle,
  Instagram,
  Youtube,
  Github,
  Linkedin,
} from "lucide-react";

import {
  PiXLogo,
  PiStackOverflowLogo,
  PiMediumLogo,
} from "react-icons/pi";
import { TbBrandLeetcode } from "react-icons/tb";

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/tools", label: "Tools" },
  { href: "/books", label: "Books" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
] as const;

export const personalFavorites = [
  {
    category: "Coding Music",
    value: "Instrumental ",
    icon: Music,
  },

  {
    category: "Series",
    value: "Silicon Valley",
    icon: MonitorSmartphone,
  },

  {
    category: "System",
    value: "Ubuntu / Linux",
    icon: Laptop,
  },

  {
    category: "Weekend Vibe",
    value: "Hiking Trails",
    icon: Mountain,
  },
  {
    category: "Book",
    value: "Clean Architecture",
    icon: BookOpen,
  },
  {
    category: "Community",
    value: "Tech Meetups",
    icon: MessageCircle,
  },
] as const;


 export const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/devalentineomonya" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/devalentineomonya" },
    { name: "Twitter", icon: PiXLogo, href: "https://x.com/devalentine_" },
    {
      name: "Stack Overflow",
      icon: PiStackOverflowLogo,
      href: "https://stackoverflow.com/users/22697841/valentine-omonya",
    },

    { name: "Medium", icon: PiMediumLogo, href: "https://medium.com/@devalentineomonya" },
    { name: "Leetcode", icon: TbBrandLeetcode, href: "https://leetcode.com/devalentineomonya" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/devalentineomonya" },
    { name: "Youtube", icon: Youtube, href: "https://youtube.com/@devMinutes" },
  ] as const
