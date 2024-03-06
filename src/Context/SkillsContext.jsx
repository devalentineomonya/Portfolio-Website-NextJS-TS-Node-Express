import React, { createContext } from "react";
import SkillsList from "../assets/SkillsList/SkillsList";

export const SkillsContext = createContext(null);

const SkillsContextProvider = (props) => {
  const contextValue = { SkillsList };
  return (
    <SkillsContext.Provider value={contextValue}>
      {props.children}
    </SkillsContext.Provider>
  );
};
export default SkillsContextProvider;
