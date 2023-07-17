import { NavLink } from "react-router-dom";
import styles from "./Title.module.scss";

const Title = () => {
  return (
    <NavLink to="/" style={{ textDecoration: "none" }}>
      <h1 className={styles.title}>the poster shop</h1>
    </NavLink>
  );
};

export default Title;
