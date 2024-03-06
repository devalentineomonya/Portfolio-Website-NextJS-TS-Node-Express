import React, { createContext } from "react";
import SwipperList from "../assets/SwipperList/SwipperList";

export const SwipperContext = createContext(null);

const SwipperContextProvider = (props) => {
  const contextValue = SwipperList;
  return (
    <SwipperContext.Provider value={contextValue}>
      {props.children}
    </SwipperContext.Provider>
  );
};
export default SwipperContextProvider;
