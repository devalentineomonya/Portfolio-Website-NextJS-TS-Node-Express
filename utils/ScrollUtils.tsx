export const scrollToSection = (sectionId:string) => {
  const section = document.getElementById(sectionId);
  if (section && sectionId !== "home" && sectionId !== "") {
    window.scrollTo({
      top: section.offsetTop - 100,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
