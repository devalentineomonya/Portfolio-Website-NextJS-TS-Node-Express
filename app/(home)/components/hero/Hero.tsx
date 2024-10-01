import Link from "next/link";
// import Animation from "./Animation";
import React from "react"
import styles from "./hero.module.css";
import { sectionMetadata } from "@/assets/data/metaDatas";
import heroImage from "@/assets/images/hero-image.png";
import heroWave from "@/assets/images/shape.png";
import { Metadata } from "next";

const { title, description } = sectionMetadata.home;
export const metadata: Metadata = {
  title,
  description,
};

const Hero = () => {
  return (
    <>
      <section
        className="w-full h-screen flex items-center justify-center flex-col -mt-24 relative"
        style={{
          background: `url(${heroImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* <Animation> */}
        <div
          className="w-full h-screen flex items-center justify-center"
          id="home"
        >
          <div className="flex items-center justify-center  h-full w-full max-w-8xl px-4 lg:p-0">
            <div className="flex flex-col items-center">
              <div className="flex w-full gap-x-5 text-start text-white text-lg sm:text-2xl font-medium cursor-default ">
                <p className="flex items-center justify-start">
                  I am a{" "}
                  <span className="ml-2 h-[2px] w-10 bg-white inline-block "></span>
                </p>
                <p className={`overflow-hidden relative h-12 ${styles.words}`}>
                  <span className={styles.word}>Software Engineer</span>
                  <span className={styles.word}>Web Developer</span>
                  <span className={styles.word}>AI / ML Engineer</span>
                  <span className={styles.word}>Content Creator</span>
                  <span className={styles.word}>Mobile Developer</span>
                </p>
              </div>
              <div className="flex items-center justify-start ">
                <h1 className={styles.heroTextContainer}>Valentine</h1>
              </div>
              <div className="flex flex-col items-start">
                <p className="flex gap-x-5 text-start text-lg sm:text-3xl font-medium cursor-default mt-8 md:mt-3 text-white">
                  <span>Full Stack</span> -<span>Mobile Apps</span>-
                  <span>ML Engineer</span>
                </p>

                <Link
                  className="py-3 px-4 bg-primary font-xl text-white rounded-md mt-4 hover:bg-pink-600"
                  href="https://1drv.ms/b/s!AmD6S1sK2c1egZ101PCxsR-KkcDtug?e=KsjvFV"
                  target="_blank"
                >
                  Read Resume
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden lg:inline-flex"></div>
        </div>
        {/* </Animation> */}
        <div
          className="absolute bottom-0 w-full h-[70px] sm:h-[105px] md:h-[135px] lg:-[182px] xl:h-[260px]"
          style={{
            background: `url(${heroWave.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "repeat-x",
          }}
        ></div>
      </section>
    </>
  );
};

export default Hero;
