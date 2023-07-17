import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/aanmeba/the-poster-shop"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <p>© The Poster Shop by Jungah Ahn 2023</p>
    </footer>
  );
};

export default Footer;
