// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HeartSolid, ShoppingCart } from "../FontAwesomeIcons/FontAwesomeIcons";
import styles from "./NavBar.module.scss";

const NavBar = ({ dark }) => {
  const styleList = dark ? styles.nav__text__dark : styles.nav__text__light;

  return (
    <nav className={styles.nav}>
      <NavLink to="/products" style={{ textDecoration: "none" }}>
        <span className={styleList}>Products</span>
      </NavLink>
      <HeartSolid />
      <ShoppingCart />
    </nav>
  );
};

export default NavBar;
