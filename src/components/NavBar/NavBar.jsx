// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HeartSolid, ShoppingCart } from "../FontAwesomeIcons/FontAwesomeIcons";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/products" style={{ textDecoration: "none" }}>
        <span>Products</span>
      </NavLink>
      <HeartSolid />
      <ShoppingCart />
    </nav>
  );
};

export default NavBar;
