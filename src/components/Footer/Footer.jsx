import styles from "./Footer.module.scss";
import { Github } from "../FontAwesomeIcons/FontAwesomeIcons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/aanmeba/the-poster-shop"
        target="_blank"
        rel="noreferrer"
      >
        <Github />
      </a>
      <p>© The Poster Shop by Jungah Ahn 2023</p>
    </footer>
  );
};

export default Footer;
