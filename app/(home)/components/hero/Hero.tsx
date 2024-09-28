import Link from "next/link";
import Animation from "./Animation";
import styles from "./hero.module.css";
import { sectionMetadata } from "@/assets/data/metaDatas";
import {Metadata} from "next"

const { title, description } = sectionMetadata.home;
export const metadata: Metadata = {
  title,
  description
}

const Hero = () => {

  return (
    <>
 
    <section className="w-full h-screen flex items-center justify-center flex-col -mt-24">
      <Animation>
        <div className="w-full h-screen" id="home">
          <div className="flex items-center justify-center flex-col h-full w-full">
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
            

            <p className="flex gap-x-5 text-center text-gray-800 text-lg sm:text-3xl font-medium cursor-default mt-8 md:mt-3">
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
    </section>
    </>
  );
};

export default Hero;
