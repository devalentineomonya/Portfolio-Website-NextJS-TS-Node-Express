"use client";
import { useState } from "react";
import Link from "next/link";
import Animation from "./Animation";
import styles from "./hero.module.css";
import socialLinks from "./socialLinks";
import { CgShare } from "react-icons/cg";
const Hero = () => {
  const [active, setActive] = useState(true);
  return (
    <div id="home">
      <Animation>
        <div className="w-full h-screen">
          <div className="flex items-center justify-center flex-col absolute left-1/2 top-[40%] w-full h-full -translate-x-1/2 -translate-y-1/2">
            <div className="flex gap-x-5 text-center text-gray-800 text-lg sm:text-2xl font-medium cursor-default ">
              <p>
                I am a <span>---</span>
              </p>
              <p className={`overflow-hidden relative h-12 ${styles.words}`}>
                <span className={styles.word}>Software Engineer</span>
                <span className={styles.word}>Web Developer</span>
                <span className={styles.word}>AI / ML Engineer</span>
                <span className={styles.word}>Content Creator</span>
                <span className={styles.word}>Mobile Developer</span>
              </p>
            </div>

            <h1 className={styles.heroTextContainer}>Valentine Omonya</h1>
            <div
              className=" flex-1 w-full flex justify-center items-center fixed top-[90%]  lg:top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 lg:translate-x-40"
              onClick={() => setActive((prev) => !prev)}
            >
              <div className={`${styles.socialLinkMenu}`}>
                <div
                  className={`${styles.socialLinksToggle} ${
                    active
                      ? "rotate-[360deg] shadow-[0_6px_8px_rgba(0,_0,_0,_0.15),_0_0_0_2px_#333,_0_0_0_8px_#fff]"
                      : ""
                  }`}
                >
                  <CgShare size={44} />
                </div>
                {socialLinks?.map(({ color, name, href, icon }, i) => (
                  <li
                    style={
                      {
                        "--i": i,
                        "--clr": color,
                        scale: `${active ? "1" : "0"}`,
                      } as React.CSSProperties
                    }
                    key={`${i}-${name}`}
                    className="scale-1"
                  >
                    <Link
                      target="_blank"
                      href={href}
                      title={name}
                      aria-label={name}
                    >
                      {icon}
                    </Link>
                  </li>
                ))}
              </div>
            </div>

            <p className="flex gap-x-5 text-center text-gray-800 text-xl sm:text-3xl font-medium cursor-default mt-8 md:mt-3">
              <span>Full Stack</span> -<span>Mobile Apps</span>-
              <span>ML Engineer</span>
            </p>

            <Link
              className="py-4 px-6 bg-primary font-xl text-white rounded-md mt-4 hover:bg-pink-600"
              href="https://1drv.ms/b/s!AmD6S1sK2c1egZ101PCxsR-KkcDtug?e=KsjvFV"
              target="_blank"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </Animation>
    </div>
  );
};

export default Hero;
