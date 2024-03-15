import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./socialinks.css";
import { faFacebook, faGit } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const element = <div></div>;

const SocialLinks = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`social-links ${isSticky ? "sticky" : ""}`}>
      <a href="https://www.facebook.com/devalentineomonya" target="_blank" className="social-link">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com/devalentineomonya" target="_blank" className="social-link">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com/in/devalentineomonya" target="_blank" className="social-link">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://www.youtube.com/@devalentineomonya" target="_blank" className="social-link">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a href="https://twitter.com/devalenthcohen" target="_blank" className="social-link">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://github.com/devalentineomonya" target="_blank" className="social-link">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default SocialLinks;
