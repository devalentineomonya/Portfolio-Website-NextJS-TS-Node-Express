import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./contact.css";
import emailLogo from "../../assets/images/email.png";
import telephoneLogo from "../../assets/images/telephone.png";
const Contact = () => {
    const currentYear = new Date().getFullYear();
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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
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
      </div>
    </div>
  );
};

export default Contact;
