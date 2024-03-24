// scrollUtils.js
export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (sectionId !== "home" && sectionId !== "") {
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
  behavior: "smooth",
      });
    } else {
      console.error(`Element with ID "${sectionId}" not found.`);
    }
  } else {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  }
};
