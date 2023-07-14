// import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <span>Products</span>
      <span>Favourites</span>
      <span>Cart</span>
    </nav>
  );
};

export default NavBar;
