import Link from "next/link";
import Animation from "./Animation";
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
        <Animation>
          <div
            className="w-full h-screen flex items-center justify-center"
            id="home"
          >
            <div className="flex items-start justify-center flex-col h-full w-full max-w-8xl px-4 lg:p-0">
              <div className="flex gap-x-5 text-start text-gray-800 text-lg sm:text-2xl font-medium cursor-default ">
                <p>
                  I am a <span className="h-[2px] w-5 bg-white "></span>
                </p>
                <p className={`overflow-hidden relative h-12 ${styles.words}`}>
                  <span className={styles.word}>Software Engineer</span>
                  <span className={styles.word}>Web Developer</span>
                  <span className={styles.word}>AI / ML Engineer</span>
                  <span className={styles.word}>Content Creator</span>
                  <span className={styles.word}>Mobile Developer</span>
                </p>
              </div>

              <h1 className={styles.heroTextContainer}>Valentine</h1>

              <p className="flex gap-x-5 text-center text-gray-800 text-lg sm:text-3xl font-medium cursor-default mt-8 md:mt-3">
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
            <div className="flex-1 hidden lg:inline-flex"></div>
          </div>
        </Animation>
        <div
          className="absolute bottom-0 w-full h-20"
          style={{
            background: `url(${heroWave.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </section>
    </>
  );
};

export default Hero;
