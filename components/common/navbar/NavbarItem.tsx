import { useRouter, usePathname } from "next/navigation";
import { FC, MouseEvent } from "react";
import { scrollToSection } from "@/utils/ScrollUtils";

interface NavbarItemProps {
  isActive: boolean;
  setActiveTab: (sectionName: string) => void;
  name: string;
  setShowSideMenu: (prev: boolean) => void;
  sectionName: string;
  stickyNavbar:boolean
}

const NavbarItem: FC<NavbarItemProps> = ({
  isActive,
  name,
  setActiveTab,
  sectionName,
  setShowSideMenu,
  stickyNavbar
}) => {
  const router = useRouter(); 
  const pathname = usePathname();
  const handleTabClick = async (event: MouseEvent, sectionName: string) => {
    event.preventDefault();
    setShowSideMenu(false);


    if (pathname === "/") {
      setActiveTab(sectionName);
      scrollToSection(sectionName);
    } else {
      await router.push("/");
      setTimeout(() => {
        setActiveTab(sectionName);
        scrollToSection(sectionName);
      }, 500); 
    }
  };

  return (
    <li
      className={`border-b border-b-gray-600 w-full md:w-fit pb-5 md:pb-0 md:border-none ${
        isActive ? "text-primary" : stickyNavbar ? "text-dark-primary" : pathname === "/" ? "md:text-white" :"text-dark-primary"
      }`}
    >
      <button
        className="text-lg font-semibold"
        onClick={(e) => handleTabClick(e, sectionName)}
      >
        {name}
      </button>
    </li>
  );
};

export default NavbarItem;
