import React, { useContext } from "react";
import "./services.css";
import Service from "../Service/Service";
import { ServicesContext } from "../../Context/ServicesContext";
import HeadLine from "../HeadLine/HeadLine";

const Services = () => {
  const { servicesList } = useContext(ServicesContext);
  return (
    <div className="services-section" >
    <HeadLine id="services" number={"01"} description={"What i do as a service"} name={"Services"} />
      <div className="services-container">
        {servicesList.map((service, i) => (
          <Service key={i} name={service.name} image={service.image} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default Services;
