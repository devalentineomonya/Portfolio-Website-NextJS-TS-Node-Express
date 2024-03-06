import React, { createContext } from "react";
import servicesList from "../assets/ServicesList/ServicesList";

export const ServicesContext = createContext(null);

const ServicesContextProvider = (props) => {
  const contextValue = { servicesList };
  return (
    <ServicesContext.Provider value={contextValue}>
      {props.children}
    </ServicesContext.Provider>
  );
};
export default ServicesContextProvider;
