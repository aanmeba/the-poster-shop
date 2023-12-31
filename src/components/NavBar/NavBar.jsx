import { NavLink } from "react-router-dom";
import {
  HeartEmpty,
  HeartSolid,
  ShoppingBag,
} from "../FontAwesomeIcons/FontAwesomeIcons";
import styles from "./NavBar.module.scss";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import Badge from "../Badge/Badge";

const NavBar = ({ dark }) => {
  const { globalState } = useContext(GlobalContext);

  const defaultHasItems = { favourites: false, cart: false };
  const [hasItems, setHasItems] = useState(defaultHasItems);
  const { favItems, cartItems } = globalState;

  useEffect(() => {
    if (favItems.length > 0)
      setHasItems((prev) => ({ ...prev, favourites: true }));
    else setHasItems((prev) => ({ ...prev, favourites: false }));

    if (cartItems.length > 0) setHasItems((prev) => ({ ...prev, cart: true }));
    else setHasItems((prev) => ({ ...prev, cart: false }));
  }, [favItems, cartItems]);

  const linkColour = () => ({
    color: dark ? "rgb(51, 51, 51)" : "rgb(248, 247, 246)",
  });

  const badgeColourTheme = dark ? "dark" : "light";

  const totalItemsInCart = cartItems.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );

  return (
    <nav className={styles.nav}>
      <NavLink to="/favourites" style={linkColour()}>
        {hasItems.favourites ? <HeartSolid /> : <HeartEmpty />}
      </NavLink>
      <NavLink to="/cart" style={linkColour()}>
        <ShoppingBag />
        {hasItems.cart && (
          <Badge count={totalItemsInCart} theme={badgeColourTheme} />
        )}
      </NavLink>
    </nav>
  );
};

export default NavBar;
