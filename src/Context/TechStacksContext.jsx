import React, { createContext } from "react";
import TechStacksList from "../assets/TechStacksList/TechStacksList";

export const TechStacksContext = createContext(null);

const ServicesContextProvider = (props) => {
  const contextValue = { TechStacksList };
  return (
    <TechStacksContext.Provider value={contextValue}>
      {props.children}
    </TechStacksContext.Provider>
  );
};
export default ServicesContextProvider;
