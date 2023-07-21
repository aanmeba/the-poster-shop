import { NavLink } from "react-router-dom";
import {
  HeartEmpty,
  HeartSolid,
  ShoppingBag,
} from "../FontAwesomeIcons/FontAwesomeIcons";
import styles from "./NavBar.module.scss";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";

const NavBar = ({ dark }) => {
  const styleList = dark ? styles.nav__text__dark : styles.nav__text__light;

  const { globalState } = useContext(GlobalContext);
  // const defaultHasItems = { favourites: false, cart: false };

  /***
   * Can't I control the true/false using object?? 🚨
   *
   */
  // const [hasItems, setHasItems] = useState(defaultHasItems);
  const [hasFav, setHasFav] = useState(false);
  const [hasCart, setHasCart] = useState(false);
  const { favItems, cartItems } = globalState;

  useEffect(() => {
    if (favItems.length > 0) {
      console.log(favItems.length, "--- favItems length");
      // setHasItems({ ...hasItems, favourites: true });
      setHasFav(true);
    } else {
      setHasFav(false);
    }
    if (cartItems.length > 0) {
      console.log(cartItems.length, "--- cartItems length");
      // setHasItems({ ...hasItems, cart: true });
      setHasCart(true);
    } else {
      setHasCart(false);
    }
  }, [favItems, cartItems]);

  useEffect(() => {
    console.log(globalState, hasFav, hasCart, "--- navbar");
  }, [globalState]);

  const linkColour = () => ({
    color: dark ? "rgb(51, 51, 51)" : "rgb(248, 247, 246)",
  });

  return (
    <nav className={styles.nav}>
      <NavLink to="/favourites" style={linkColour()}>
        {hasFav ? <HeartSolid /> : <HeartEmpty />}
      </NavLink>
      {/* {hasItems.favourites ? <HeartSolid /> : <HeartEmpty />} */}
      <NavLink to="/cart" style={linkColour()}>
        <ShoppingBag />
      </NavLink>
    </nav>
  );
};

export default NavBar;
