import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import PartnersList from "../../assets/PartnersList/PartnersList";
import Certification from "../Certification/Certification";
import "./certifications.css"

const Certifications = ({certifications}) => {
  const overrideStyles = `
    .owl-carousel .owl-item img {
      width: unset;
    }
  `;


  const getItemsPerScreen = () => {
    if (window.innerWidth < 768) {
      return 1; 
    } else if (window.innerWidth < 992) {
      return 2; 
    } else {
      return 4; 
    }
  };
  console.log("Certificate = >"+certifications)

  return (
    <div className="certifications-section">
      <style>{overrideStyles}</style>
      <OwlCarousel
        className="owl-theme"
        style={{ width: "80%" }}
        loop
        margin={40}
        items={getItemsPerScreen()}
        responsive={{ 0: { items: 1 }, 992: { items: 2 }, 1200: { items: 4 } }}
      >
        {certifications.map((certification, i) => (
          <Certification key={i} certification={certification} />
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Certifications;

