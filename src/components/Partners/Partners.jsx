import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import PartnersList from "../../assets/PartnersList/PartnersList";
import Partner from "../Partner/Partner";
import "./partners.css"; // Assuming this file contains additional styles

const Partners = () => {
  const oveWriteStyles = `
    .owl-carousel .owl-item img {
      width: unset;
    }
  `;

  return (
    <div className="partner-section">
      <style>{oveWriteStyles}</style>
      <OwlCarousel className="owl-theme" style={{ width: "80%" }} loop margin={40} items={4}>
        {PartnersList.map((partner, i) => (
          <Partner key={i} partner={partner} />
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Partners;
