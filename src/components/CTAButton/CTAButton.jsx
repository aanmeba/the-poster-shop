import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./CTAButton.module.scss";

const CTAButton = ({ message, cta }) => {
  return (
    <div className={styles.container}>
      {message && <p>{message}</p>}
      <Link to={`/collection/most-popular`} style={{ textDecoration: "none" }}>
        <Button dark>{cta}</Button>
      </Link>
    </div>
  );
};

export default CTAButton;
