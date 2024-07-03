import React, { useEffect, useState } from "react";
import { scrollToSection } from "../../Utils/ScrollUtils/ScrollUtils";
import "./mainavbar.css";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const MainNavbar = ({ activeTab, setActiveTab, sideMenu, setSideMenu }) => {
  const [stickyNavbar, setStickyNavbar] = useState(false);

  const [cross, setCross] = useState("normal");

  useEffect(() => {
    const scrollHandler = () => {
      const scrolled = window.scrollY;
      if (scrolled > 0) {
        setStickyNavbar(true);
      } else {
        setStickyNavbar(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const toggleMenu = () => {
    setSideMenu((prevState) => (prevState === "closed" ? "open" : "closed"));
    setCross((prevState) => (prevState === "crossed" ? "normal" : "crossed"));
  };

  const handleTabClick = (tabName, event) => {
    event.preventDefault();
    setTimeout(() => {
      setActiveTab(tabName);
      scrollToSection(tabName);
      setTimeout(() => {
        scrollToSection(tabName);
      }, 50);
    }, 50);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleTabClick(tabName, event)
    }
  };

  return (
    <div className={`navbar ${stickyNavbar ? "navbar-sticky" : ""}`}>
      <div className="logo">
        <h1
          className="logo-title"
          onClick={(event) => handleTabClick("home", event)}
        >
          Devalentine<span>.</span>
        </h1>
      </div>
      <nav className={`nav-container ${sideMenu === "open" ? "open" : ""}`}>
        <ul>
          <li className={`nav-item ${activeTab === "home" ? "active" : ""}`}>
            <a
              className="nav-link"
              onClick={(event) => handleTabClick("home", event)}
              onKeyDown={(event)=>handleKeyDown("home", event)}
            >
              Home
            </a>
          </li>
          <li
            className={`nav-item ${activeTab === "techstack" ? "active" : ""}`}
          >
            <a
              className="nav-link"
              onClick={() => handleTabClick("techstack", event)}
              onKeyDown={() => handleKeyDown("techstack",event)}
            >
              Tech Stack
            </a>
          </li>
          <li className={`nav-item ${activeTab === "about" ? "active" : ""}`}>
            <a
              className="nav-link"
              onClick={() => handleTabClick("about", event)}
              onKeyDown={() => handleKeyDown("about", event)}
            >
              About
            </a>
          </li>
          <li
            className={`nav-item ${activeTab === "projects" ? "active" : ""}`}
          >
            <a
              className="nav-link"
              onClick={() => handleTabClick("projects", event)}
              onKeyDown={()=>handleKeyDown("projects",event)}
            >
              Projects
            </a>
          </li>
          <li className={`nav-item ${activeTab === "contact" ? "active" : ""}`}>
            <a
              className="nav-link"
              onClick={() => handleTabClick("contact", event)}
              onKeyDown={()=>handleKeyDown("contact", event)}
            >
              Contacts
            </a>
          </li>
          <li className="nav-item ">
            <div className="nav-link">
              <ThemeToggler />
            </div>
          </li>
        </ul>
      </nav>
      <div className="nav-hamburger-container">
        <div
          className={`nav-hamburger ${cross === "crossed" ? "cross" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
