import React, { useEffect, useState } from "react";
import "./hero.css";
import slider1 from "../../assets/images/slider1.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import slider2 from "../../assets/images/slider2.jpg";

const Hero = () => {
  const [sliderImage, setSliderImage] = useState(slider1);
  const sliders = [slider1, slider2, slider3];
  let index = 0;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSliderImage(sliders[index]);
      index = (index + 1) % sliders.length;
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="home"
      className="hero-section"
      style={{
        top: "-100px",
        zIndex: "1",
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${sliderImage})`,       
        transition: "0.4s",
        animation: "zoomBackground 8s infinite",        
      }}
    >
      <div className="hero-content">
        <div className="hero-text-container">
          <p>
            I am a <span>----</span> Software Engineer
          </p>
          <h1>Valentine Omonya</h1>
          <p>
            <span>FrontEnd</span> -<span>Backend</span>-<span>Mobile Apps</span>
          </p>
          <div className="hero-button">
            <a href="https://1drv.ms/b/s!AmD6S1sK2c1egZ101PCxsR-KkcDtug?e=KsjvFV" target="_blank">Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
