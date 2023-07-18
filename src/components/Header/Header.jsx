import NavBar from "../NavBar/NavBar";
import TitleLink from "../TitleLink/TitleLink";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <TitleLink />
      <NavBar />
    </header>
  );
};

export default Header;
