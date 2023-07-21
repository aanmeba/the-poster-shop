import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Title from "../Title/Title";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <Title fontSize={3}>Most Popular</Title>
      <Link to={`/collection/most-popular`} style={{ textDecoration: "none" }}>
        <Button light>discover</Button>
      </Link>
    </section>
  );
};

export default Hero;
