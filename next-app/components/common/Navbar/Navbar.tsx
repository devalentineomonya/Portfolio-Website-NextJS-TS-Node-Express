"use client";
import React, { FC, useEffect, useState, MouseEvent, ChangeEvent } from "react";
import Link from "next/link";
import { scrollToSection } from "@/utils/ScrollUtils";
import { navbarItems } from "./navbarItems";
import styles from "./navbar.module.css";

const Navbar: FC = () => {
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [showSideMenu, setShowSideMenu] = useState(true);

  // Sticky navbar effect on scroll
  useEffect(() => {
    const scrollHandler = () => {
      setStickyNavbar(window.scrollY > 0);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // Update active tab based on URL hash
  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        setActiveTab(hash);
      }, 1000);
    }
  }, [activeTab]);

  const toggleSideBar = (e:ChangeEvent<HTMLInputElement>)=>{
    console.log("Changed")
    setShowSideMenu(e.target.checked);

  }


  return (
    <header
      className={`flex justify-center bg-transparent py-1 w-full h-24 relative ${
        stickyNavbar
          ? "shadow-[0px_5px_6px] shadow-navbar h-20 sticky top-0"
          : ""
      }`}
    >
      <div className="max-w-9xl w-full flex justify-between md:justify-start items-center px-8 md:px-2">
        {/* Logo */}
        <div className="w-1/6 md:z-40">
          <h1 className="text-primary text-5xl font-semibold font-caveat">
            <Link href="#">
              Devalentine<span className="text-primary">.</span>
            </Link>
          </h1>
        </div>

        {/* Navbar Links */}
        <nav className={`flex-1 w-full  bg-black bg-opacity-50 transition-all ease-in-out duration-300 ${showSideMenu ? "opacity-100 left-0 delay-600 " : "opacity-0 -left-96" }  fixed bottom-0 top-0 block z-30 md:z-auto md:static md:opacity-100 md:bg-transparent`}>
          <ul className={`w-72  flex justify-start flex-col bg-bg-primary items-start h-full pt-5 gap-y-3 z-30 md:z-auto relative transition-all ease-linear duration-300 delay-500 ${showSideMenu ? "left-0 " : "-left-96"}  md:justify-end md:static md:pt-0 md:gap-y-0 md:items-center md:w-full mg:bg-transparent md:flex-row gap-x-10 2xl:px-0 px-4`}>
            {navbarItems?.map((navItem) => (
              <NavbarItem
                key={navItem.sectionName}
                setActiveTab={setActiveTab}
                isActive={activeTab === navItem.sectionName}
                sectionName={navItem.sectionName}
                name={navItem.name}
              />
            ))}
          </ul>
        </nav>

        {/* Hamburger Menu */}
     
          {/* <div
            className={`nav-hamburger ${cross === "crossed" ? "cross" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div> */}
          <div>

          <div className={`block md:hidden z-40 relative ${showSideMenu ? " rounded-md border bg-white h-12 w-16 flex justify-center items-center flex-col shadow-md" : ""}`}>
            <input type="checkbox" id="checkbox" onChange={toggleSideBar} className={styles.checkBox} checked={showSideMenu} />
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

const NavbarItem = ({
  isActive,
  name,
  setActiveTab,
  sectionName,
}: {
  isActive: boolean;
  setActiveTab: (sectionName: string) => void;
  name: string;
  sectionName: string;
}) => {
  const handleTabClick = (event: MouseEvent, sectionName: string) => {
    event.preventDefault();
    setTimeout(() => {
      setActiveTab(sectionName);
      scrollToSection(sectionName);
    }, 50);
  };

  return (
    <li className={`border-b border-b-gray-600 w-full md:w-fit pb-5 md:pb-0 md:border-none ${isActive ? "text-primary" : "text-dark-primary"}`}>
      <button
        className="text-xl font-semibold"
        onClick={(e) => handleTabClick(e, sectionName)}
      >
        {name}
      </button>
    </li>
  );
};
