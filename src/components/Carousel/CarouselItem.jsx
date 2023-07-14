import styles from "./Carousel.module.scss";

const CarouselItem = ({ item }) => {
  return (
    <div className={styles.slide__item}>
      <h3>{item.title}</h3>
      <p>{item.price}</p>
    </div>
  );
};

export default CarouselItem;
