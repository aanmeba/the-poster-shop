// import { NavLink } from "react-router-dom";
import {
  HeartEmpty,
  HeartSolid,
  ShoppingCart,
} from "../FontAwesomeIcons/FontAwesomeIcons";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <span>Products</span>
      {/* <HeartEmpty /> */}
      <HeartSolid />
      <ShoppingCart />
    </nav>
  );
};

export default NavBar;
