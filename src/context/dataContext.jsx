import { createContext, useContext, useState } from "react";

const NameContext = createContext();
export const NameProvider = ({ children }) => {
  const [name, setname] = useState("ajay");

  return (
    <NameContext.Provider value={{ name, setname }}>
      {children}
    </NameContext.Provider>
  );
};
export const useData = () => {
  return useContext(NameContext);
};
