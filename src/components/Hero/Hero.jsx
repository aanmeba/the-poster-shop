import Button from "../Button/Button";
import Title from "../Title/Title";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <Title fontSize={3}>Most Popular</Title>
      <Button>discover</Button>
    </section>
  );
};

export default Hero;
