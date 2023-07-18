import { createContext, useState } from "react";

export const CollectionContext = createContext(null);

export const CollectionContextProvider = ({ children }) => {
  const [collection, setCollection] = useState([]);
  return (
    <CollectionContext.Provider value={{ collection, setCollection }}>
      {children}
    </CollectionContext.Provider>
  );
};
