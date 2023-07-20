import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const getItemsFromLocalStorage = (key) =>
    JSON.parse(localStorage.getItem(key));

  const initialState = {
    favItems: getItemsFromLocalStorage("favItems") || [],
    cartItems: getItemsFromLocalStorage("cartItems") || [],
  };

  const [globalState, setGlobalState] = useState(initialState);

  const saveItemsInLocalStorage = (key) => {
    localStorage.setItem(key, JSON.stringify(globalState[key]));
  };

  const addNewItem = (key, item) => {
    setGlobalState({
      ...globalState,
      [key]: [...globalState[key], item],
    });

    saveItemsInLocalStorage(key);
  };

  const removeItem = (key, item) => {
    const filteredItems = globalState[key].filter((el) => el.id !== item.id);
    setGlobalState({
      ...globalState,
      [key]: [...filteredItems],
    });

    saveItemsInLocalStorage(key);
  };

  const isDuplicated = (key, itemId) =>
    globalState[key].some((el) => el.id === itemId);

  const checkDuplication = (key, item) => {
    if (globalState[key].length === 0) return addNewItem(key, item);

    const duplicatedItem = isDuplicated(key, item.id);

    // toggle the favourite item
    if (duplicatedItem && key === "addToFav") return removeItem(key, item);
    if (duplicatedItem) return;
    if (!duplicatedItem) return addNewItem(key, item);
  };

  const onClick = (id, product, size) => {
    // update size if the product already exists
    if (size) product.size = size;

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
