import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const getItemsFromLocalStorage = (key) =>
    JSON.parse(localStorage.getItem(key));

  /**
   * I just need ids for localStorage, but it requires more calculation
   * when getting & setting the items
   */
  const initialState = {
    favItems: getItemsFromLocalStorage("favItems") || [],
    cartItems: getItemsFromLocalStorage("cartItems") || [],
  };

  const [globalState, setGlobalState] = useState(initialState);
  const [key, setkey] = useState(null);

  const saveItemsInLocalStorage = (key) => {
    localStorage.setItem(key, JSON.stringify(globalState[key]));
  };

  useEffect(() => {
    console.log("** use effect **", key);
    key && saveItemsInLocalStorage(key);
  }, [key]);

  const addNewItem = (key, item) => {
    const existingItem = globalState[key].find(
      (el) => el.variantId === item.variantId
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      setGlobalState((prev) => ({
        ...prev,
        [key]: [...prev[key], item],
      }));
    }
    setkey(key);

    console.log(key, item, globalState);
  };

  const removeItem = (key, item) => {
    let filteredItems;

    if (key === "favItems") {
      filteredItems = globalState[key].filter((el) => el.id !== item.id);
    } else if (key === "cartItems") {
      filteredItems = globalState[key].filter(
        (el) => el.variantId !== item.variantId
      );
    }

    setGlobalState((prev) => ({
      ...prev,
      [key]: [...filteredItems],
    }));

    setkey(key);
  };

  const isDuplicated = (key, itemId) =>
    globalState[key].some((el) => el.id === itemId);

  const checkDuplication = (key, item) => {
    if (globalState[key].length === 0) return addNewItem(key, item);

    // toggle the favourite item
    const duplicatedItem = isDuplicated(key, item.id);
    if (duplicatedItem) return removeItem(key, item);
    else return addNewItem(key, item);
  };

  const onClick = (key, product) => {
    console.log("-- onClick -- ", key, "-", product.id, "-");

    if (key === "addToFav") checkDuplication("favItems", product);
    if (key === "addToCart") addNewItem("cartItems", product);
    if (key === "removeBtn") removeItem("cartItems", product);
  };

  return (
    <GlobalContext.Provider value={{ globalState, onClick }}>
      {children}
    </GlobalContext.Provider>
  );
};
