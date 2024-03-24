import React, { useEffect, useState } from "react";
import { scrollToSection } from "../../Utils/ScrollUtils/ScrollUtils";
import "./navbar.css";

const Navbar = ({ activeTab, setActiveTab }) => {
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const [sideMenu, setSideMenu] = useState("closed");
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
    setActiveTab(tabName);
    scrollToSection(tabName);
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
            >
              Tech Stack
            </a>
          </li>
          <li className={`nav-item ${activeTab === "about" ? "active" : ""}`}>
            <a
              className="nav-link"
              onClick={() => handleTabClick("about", event)}
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
            >
              Projects
            </a>
          </li>
          <li className={`nav-item ${activeTab === "contact" ? "active" : ""}`}>
            <a
              className="nav-link"
              onClick={() => handleTabClick("contact", event)}
            >
              Contacts
            </a>
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

export default Navbar;
