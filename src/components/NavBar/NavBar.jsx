import { NavLink } from "react-router-dom";
import {
  HeartEmpty,
  HeartSolid,
  ShoppingBag,
  ShoppingCart,
} from "../FontAwesomeIcons/FontAwesomeIcons";
import styles from "./NavBar.module.scss";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";

const NavBar = ({ dark }) => {
  const styleList = dark ? styles.nav__text__dark : styles.nav__text__light;

  const { globalState } = useContext(GlobalContext);
  const defaultHasItems = { favourites: false, cart: false };
  const [hasItems, setHasItems] = useState(defaultHasItems);
  const { favItems, cartItems } = globalState;

  useEffect(() => {
    if (favItems.length > 0) {
      setHasItems({ ...hasItems, favourites: true });
    }
    if (cartItems.length > 0) {
      setHasItems({ ...hasItems, cart: true });
    }
  }, [favItems, cartItems]);

  return (
    <nav className={styles.nav}>
      <NavLink to="/products" style={{ textDecoration: "none" }}>
        <span className={styleList}>Products</span>
      </NavLink>
      {hasItems.favourites ? <HeartSolid /> : <HeartEmpty />}
      {/* <ShoppingCart /> */}
      <ShoppingBag />
    </nav>
  );
};

export default NavBar;
