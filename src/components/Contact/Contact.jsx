import React, { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./contact.css";
import emailLogo from "../../assets/images/email.png";
import telephoneLogo from "../../assets/images/telephone.png";
import { scrollToSection } from "../../Utils/ScrollUtils/ScrollUtils";

const Contact = ({ setActiveTab }) => {
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

   const handleKeyDown = (tabName, event) => {
    if (event.key === "Enter") {
      handleTabClick(tabName, event);
    }
  };


  const currentYear = new Date().getFullYear();
  const today = new Date();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = dayNames[today.getDay()];

  return (
    <div className="contact-section" id="contact">
      <div className="contact-form">
        <ContactForm />
      </div>
      <div className="contact-links">
        <div className="contact-links-container">
          <div className="contact-quick-links">
            <h1>
              <span>Quick Links</span>
            </h1>
            <ul>
              <li>
                <a
                  onClick={(event) => handleTabClick("home", event)}
                  onKeyDown={(event) => handleKeyDown("home", event)}
                  tabIndex={0}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={(event) => handleTabClick("about", event)}
                  onKeyDown={(event) => handleKeyDown("about", event)}
                  tabIndex={0}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={(event) => handleTabClick("techstack", event)}
                  onKeyDown={(event) => handleKeyDown("techstack", event)}
                  tabIndex={0}
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  onClick={(event) => handleTabClick("projects", event)}
                  onKeyDown={(event) => handleKeyDown("projects", event)}
                  tabIndex={0}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={(event) => handleTabClick("contact", event)}
                  onKeyDown={(event) => handleKeyDown("contact", event)}
                  tabIndex={0}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="social-contact">
            <div className="contact-item">
              <div className="image">
                <img src={emailLogo} alt="" />
              </div>
              <div className="link">
                <a href="mailto:valomosh254@gmail.com">Valomosh254@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="image">
                <img src={telephoneLogo} alt="" />
              </div>
              <div className="link">
                <a href="tel:0768133220">0768133220</a>
              </div>
            </div>
          </div>
        </div>
        <p>&copy;CopyRight @ DevalentineOmonya {currentYear}</p>
        <p>Have a blessed {dayName}</p>
      </div>
    </div>
  );
};

export default Contact;
