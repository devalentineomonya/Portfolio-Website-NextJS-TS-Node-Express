export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (sectionId !== "home" && sectionId !== "") {
    if (section) {
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
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
