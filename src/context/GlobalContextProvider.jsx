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
    key && saveItemsInLocalStorage(key);
  }, [globalState, key]);

  const addNewItem = (key, item) => {
    console.log(key, item);
    setGlobalState({
      ...globalState,
      [key]: [...globalState[key], item],
    });
    setkey(key);
  };

  const filterItems = (key, item, prop) => {
    console.log(key, item.id, item.size, prop);
    return globalState[key].filter((el) => {
      if (!prop) return el.id !== item.id;
      else return el.id !== item.id && el[prop] !== item[prop];
    });
  };
  const removeItem = (key, item) => {
    // const filteredItems = globalState[key].filter((el) => el.id !== item.id);
    const filteredItems =
      key === "favItems"
        ? filterItems(key, item, "id")
        : filterItems(key, item, "size");

    console.log(key, item.id, item.size, " ---- ", filteredItems);
    setGlobalState({
      ...globalState,
      [key]: [...filteredItems],
    });

    setkey(key);
  };

  const isDuplicated = (key, itemId) =>
    globalState[key].some((el) => el.id === itemId);

  const checkDuplication = (key, item) => {
    if (globalState[key].length === 0) return addNewItem(key, item);

    if (key === "favItems") {
      // toggle the favourite item
      const duplicatedItem = isDuplicated(key, item.id);
      if (duplicatedItem) return removeItem(key, item);
      else return addNewItem(key, item);
    }

    if (key === "cartItems")
      return checkVariants(key, item) && addNewItem(key, item);
  };

  const checkVariants = (key, item) => {
    console.log(key, item);
    const duplicatedSize = globalState[key].find(
      (el) => el.id === item.id && el.size === item.size
    );
    // variants handling!!!!!!! 🚨
    console.log(duplicatedSize, "-- duplicatedSize");

    // add up the orderQty
    if (duplicatedSize) return false;
    return true;
  };

  const onClick = (id, product, size) => {
    // update size if the product already exists
    if (size) product.size = size;

    if (id === "addToFav") checkDuplication("favItems", product);
    if (id === "addToCart") checkDuplication("cartItems", product);
    if (id === "removeBtn") removeItem("cartItems", product);
  };

  return (
    <GlobalContext.Provider value={{ globalState, onClick }}>
      {children}
    </GlobalContext.Provider>
  );
};
