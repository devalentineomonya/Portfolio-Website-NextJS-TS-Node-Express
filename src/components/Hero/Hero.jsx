import "./hero.css";

import HeroAmimation from "../HeroAmimation/HeroAmimation";

const Hero = () => {
  return (
    <div id="home">
      <HeroAmimation>
        <div className="hero-content">
          <div className="hero-text-container">
            <p>
              I am a <span>----</span> Software Engineer
            </p>
            {/* <h1>Valentine Omonya</h1> */}
            <div class="animated-text-container">
              <div class="animated-text-upper ">Valentine Omonya</div>
              <div class="animated-text-lower">Valentine Omonya</div>
              <div class="animated-text-inside">A passionate software engineer.</div>
            </div>
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
      </HeroAmimation>
    </div>
  );
};

export default Hero;
