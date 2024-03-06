import React, { createContext } from "react";
import CountsList from "../assets/CountsList/CountsList";

export const CounterContext = createContext(null);

const CounterContextProvider = (props) => {
  const contextValue = { CountsList };
  return (
    <CounterContext.Provider value={contextValue}>
      {props.children}
    </CounterContext.Provider>
  );
};
export default CounterContextProvider;
