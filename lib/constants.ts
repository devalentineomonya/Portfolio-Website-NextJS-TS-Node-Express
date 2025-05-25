import {
  Music,
  MonitorSmartphone,
  Laptop,
  Mountain,
  BookOpen,
  MessageCircle,
} from "lucide-react";

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
