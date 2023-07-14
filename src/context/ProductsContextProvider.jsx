import { createContext, useState } from "react";

export const ProductsContext = createContext(null);

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
