import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import PartnersList from "../../assets/PartnersList/PartnersList";
import Partner from "../Partner/Partner";
import "./partners.css"; // Assuming this file contains additional styles

const Partners = () => {
  const overrideStyles = `
    .owl-carousel .owl-item img {
      width: unset;
    }
  `;

  // Define the number of items to display based on the screen width
  const getItemsPerScreen = () => {
    if (window.innerWidth < 768) {
      return 1; // Show 1 item on smaller screens
    } else if (window.innerWidth < 992) {
      return 2; // Show 2 items on medium screens
    } else {
      return 4; // Show 4 items on larger screens
    }
  };

  return (
    <div className="partner-section">
      <style>{overrideStyles}</style>
      <OwlCarousel
        className="owl-theme"
        style={{ width: "80%" }}
        loop
        margin={40}
        items={getItemsPerScreen()}
        responsive={{ 0: { items: 1 }, 992: { items: 2 }, 1200: { items: 4 } }}
      >
        {PartnersList.map((partner, i) => (
          <Partner key={i} partner={partner} />
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Partners;

