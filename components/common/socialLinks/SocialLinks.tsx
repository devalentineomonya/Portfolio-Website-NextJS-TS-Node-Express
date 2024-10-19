"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import socialLinksList from "./socialLinksList";
import { CgShare } from "react-icons/cg";
import styles from "./socialLinks.module.css";
import { usePathname } from "next/navigation";

const SocialLinks = () => {
  const [active, setActive] = useState(false);
  const [scaleActive, setScaleActive] = useState(false);
  const pathname = usePathname().substring(1)

  useEffect(() => {

    const handleResize = () => {
      setActive(window.innerHeight >= 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (active) {
      const timeoutId = setTimeout(() => {
        setScaleActive(true);
      }, 300);
      return () => clearTimeout(timeoutId);
    } else {
      setScaleActive(false);
    }
  }, [active]);

  return (
    <div
      className={`${pathname.includes("admin") ? "hidden" : "flex" } flex-1  justify-center items-center fixed top-1/2 transition-all ease-in-out duration-400 ${
        active
          ? " right-1/2 md:right-[85%] w-full md:w-[280px] z-10 bg-black bg-opacity-40 md:bg-transparent h-full"
          : " right-[90%] md:right-[85%] w-fit h-fit z-[2]"
      } -translate-y-1/2 translate-x-1/2 lg:translate-x-40`}
      onClick={() => setActive((prev) => !prev)}
    >
      <div className={`${active ? " w-[280px]" : " w-[80px]"} aspect-square ${styles.socialLinkMenu}`}>
        <div
          className={`${styles.socialLinksToggle} ${
            active
              ? "rotate-[360deg] shadow-[0_6px_8px_rgba(0,_0,_0,_0.15),_0_0_0_2px_#333,_0_0_0_8px_#fff] z-20"
              : ""
          }`}
        >
          <CgShare size={44} />
        </div>
        {socialLinksList?.map(({ color, name, href, icon }, i) => (
          <li
            style={{
              "--i": i,
              "--clr": color,
              scale: `${scaleActive ? "1" : "0"}`,
            } as React.CSSProperties}
            key={`${i}-${name}`}
          >
            <Link target="_blank" href={href} title={name} aria-label={name}>
              {icon}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
