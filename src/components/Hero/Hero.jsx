import "./hero.css";

import HeroAmimation from "../HeroAmimation/HeroAmimation";

const Hero = () => {
  return (
    <HeroAmimation>
      <div id="home">
        <div className="hero-content">
          <div className="hero-text-container">
            <p>
              I am a <span>----</span> Software Engineer
            </p>
            <h1>Valentine Omonya</h1>
            <p>
              <span>FrontEnd</span> -<span>Backend</span>-
              <span>Mobile Apps</span>
            </p>
            <div className="hero-button">
              <a
                href="https://1drv.ms/b/s!AmD6S1sK2c1egZ101PCxsR-KkcDtug?e=KsjvFV"
                target="_blank"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </HeroAmimation>
  );
};

export default Hero;
