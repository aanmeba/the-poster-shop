import NavBar from "../NavBar/NavBar";
import Title from "../Title/Title";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <Title />
      <NavBar />
    </header>
  );
};

export default Header;
