import React, { useEffect, useState } from "react";
import { CgChevronRight } from "react-icons/cg";
import { useRouter, usePathname } from "next/navigation"; // usePathname gets the current path in Next.js 13+
import styles from "./dropdown.module.css";

// Define the type for the pages
type Page = {
  name: string;
  href: string;
};

const pages: Page[] = [
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/about" },
  { name: "Home", href: "/" },
  { name: "404", href: "/404" },
];

const Dropdown = ({setShowSideMenu}:{setShowSideMenu:(state:boolean)=>void}) => {
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const router = useRouter();
  const pathname = usePathname(); 


  const handleSelect = (page: Page): void => {
    setShowSideMenu(false)
    setSelectedPage(page);
    router.push(page.href);
  };

  useEffect(() => {
    const currentPage = pages.find((page) => page.href === pathname);
    if (currentPage) {
      setSelectedPage(currentPage); 
    }
  }, [pathname]); 
  const filteredPages: Page[] = pages.filter((page) => page !== selectedPage);

  return (
    <div className={styles.select}>
      <div className={styles.selected}>
        {selectedPage ? selectedPage.name : "Dedicated Pages"}
        <CgChevronRight size={24} className={styles.arrow} />
      </div>
      <div className={styles.options}>
        {filteredPages.map((page) => (
          <div
            key={page.name}
            title={page.name.toLowerCase()}
            className="py-1 w-full cursor-pointer hover:bg-gray-100 my-1"
            onClick={() => handleSelect(page)}
          >
            <input id={page.name} name="option" type="radio" />
            <label className={styles.option} htmlFor={page.name} data-txt={page.name}>
              {page.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;