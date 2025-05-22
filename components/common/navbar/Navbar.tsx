"use client";
import React, { FC, useEffect, useState, ChangeEvent } from "react";
import Link from "next/link";
import { scrollToSection } from "@/utils/ScrollUtils";
import { navbarItems } from "./navbarItems";
import styles from "./navbar.module.css";
import Dropdown from "./Dropdown";
import NavbarItem from "./NavbarItem";
import { usePathname } from "next/navigation";

const Navbar: FC = () => {
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [showSideMenu, setShowSideMenu] = useState(false);
  const pathname = usePathname().substring(1)


  useEffect(() => {
    const scrollHandler = () => {
      setStickyNavbar(window.scrollY > 0);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        setActiveTab(hash);
        scrollToSection(hash);
      }, 1000);
    }
  }, [activeTab]);

  const toggleSideBar = (e: ChangeEvent<HTMLInputElement>) => {
    setShowSideMenu(e.target.checked);
  };

  return (
    <header
      className={` justify-center py-1 w-full h-16 md:h-20 relative  z-50 ${stickyNavbar
          ? "shadow-[0px_5px_6px] shadow-navbar h-14 md:h-16 sticky top-0 bg-bg-primary"
          : " bg-transparent"
        } ${pathname.includes("admin") ? "hidden" : "flex"} `}
    >
      <div className="max-w-9xl w-full flex justify-between md:justify-start items-center px-4 md:px-2">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
        {/* Logo */}
>>>>>>> Stashed changes
=======
        {/* Logo */}
>>>>>>> Stashed changes
=======
        {/* Logo */}
>>>>>>> Stashed changes
        <div className="w-fit md:z-40">
          <Link href="/">
            <h1 className="text-primary text-2xl md:text-5xl font-semibold font-caveat">
              Deval<span className="inline md:hidden lg:inline">entine</span><span className="text-text-light-primary">.</span>
            </h1>
          </Link>
        </div>

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
        {/* Navbar Links */}
>>>>>>> Stashed changes
=======
        {/* Navbar Links */}
>>>>>>> Stashed changes
=======
        {/* Navbar Links */}
>>>>>>> Stashed changes
        <nav
          className={`flex-1 w-full  bg-black bg-opacity-50 transition-all ease-in-out duration-300 ${showSideMenu
              ? "opacity-100 left-0 delay-600 overflow-scroll"
              : "opacity-0 -left-[1200px]"
            }  fixed bottom-0 top-0 block z-30 md:z-0 md:static md:opacity-100 md:bg-transparent`}
        >
          <ul
            className={`w-72 flex justify-start flex-col md:bg-transparent bg-bg-primary items-start h-full pt-5 gap-y-3 z-30 md:z-auto relative transition-all ease-linear duration-300 delay-500  ${showSideMenu ? "left-0 overflow-scroll" : "-left-[1200px]"
              }  md:justify-end md:static md:pt-0 md:gap-y-0 md:items-center md:w-full mg:bg-transparent md:flex-row gap-x-10 2xl:px-0 px-4`}
          >
            {navbarItems?.map((navItem) => (
              <NavbarItem
                stickyNavbar={stickyNavbar}
                setShowSideMenu={setShowSideMenu}
                key={navItem.sectionName}
                setActiveTab={setActiveTab}
                isActive={activeTab === navItem.sectionName}
                sectionName={navItem.sectionName}
                name={navItem.name}
              />
            ))}
            <li className="border-b border-b-gray-600 w-full md:w-fit pb-5 md:pb-0 md:border-none text-dark-primary">
              <Dropdown setShowSideMenu={setShowSideMenu} />
            </li>
          </ul>
        </nav>

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
        {/* Hamburger Menu */}
>>>>>>> Stashed changes
=======
        {/* Hamburger Menu */}
>>>>>>> Stashed changes
=======
        {/* Hamburger Menu */}
>>>>>>> Stashed changes
        <div>
          <div
            className={`block md:hidden z-40 relative ${showSideMenu
                ? "rounded-md border bg-white h-12 w-16 flex justify-center items-center flex-col shadow-md"
                : ""
              }`}
          >
            <input
              type="checkbox"
              id="checkbox"
              onChange={toggleSideBar}
              className={styles.checkBox}
              checked={showSideMenu}
            />
            <label htmlFor="checkbox" className={styles.toggle}>
              <div className={`${styles.bar} ${styles.barTop}`}></div>
              <div className={`${styles.bar} ${styles.barMiddle}`}></div>
              <div className={`${styles.bar} ${styles.barBottom}`}></div>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
