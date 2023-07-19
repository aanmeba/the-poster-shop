import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const initialState = {
    favItems: [],
    cartItems: [],
  };

  const [globalState, setGlobalState] = useState(initialState);

  const addNewItem = (key, item) => {
    setGlobalState({
      ...globalState,
      [key]: [...globalState[key], item],
    });
  };

  const isDuplicated = (key, itemId) =>
    globalState[key].some((el) => el.id === itemId);

  const checkDuplication = (key, item) => {
    if (globalState[key].length === 0) return addNewItem(key, item);

    const duplicatedItem = isDuplicated(key, item.id);
    console.log(
      globalState,
      duplicatedItem,
      item,
      "-- globalState -- check with size"
    );
    if (duplicatedItem) return;
    if (!duplicatedItem) return addNewItem(key, item);
  };

  const onClick = (id, product, size) => {
    // update size if the product already exists
    if (size) product.size = size;

    console.log(" --- global state ---- ", id, product.id, size, product);
    if (id === "addToFav") {
      console.log("addToFav --");
      checkDuplication("favItems", product);
    }

    if (id === "addToCart") {
      console.log("addToCart --");
      checkDuplication("cartItems", product);
    }
  };

  return (
    <GlobalContext.Provider value={{ globalState, onClick }}>
      {children}
    </GlobalContext.Provider>
  );
};
