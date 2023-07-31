import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";
import { useLocation } from "react-router-dom";
import FavouritesPage from "../pages/FavouritesPage/FavouritesPage";
import CartPage from "../pages/CartPage/CartPage";

const GlobalStateLoader = () => {
  const [fetchState, setFetchState] = useState("LOADING");
  const { globalState } = useContext(GlobalContext);
  const { favItems, cartItems } = globalState;
  const { pathname } = useLocation();

  useEffect(() => {
    if (globalState) {
      setFetchState("SUCCESS");
    }
  }, [pathname, globalState]);

  return (
    <>
      {fetchState === "SUCCESS" && pathname === "/favourites" && (
        <FavouritesPage items={favItems} />
      )}
      {fetchState === "SUCCESS" && pathname === "/cart" && (
        <CartPage items={cartItems} />
      )}
    </>
  );
};

export default GlobalStateLoader;
