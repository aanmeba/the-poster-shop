// import { NavLink } from "react-router-dom";
import { HeartSolid, ShoppingCart } from "../FontAwesomeIcons/FontAwesomeIcons";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <span>Products</span>
      <HeartSolid />
      <ShoppingCart />
    </nav>
  );
};

export default NavBar;
