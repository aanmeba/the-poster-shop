import styles from "./Carousel.module.scss";
import CarouselItem from "./CarouselItem";

const CarouselSlider = ({ itemArr }) => {
  return (
    <div className={styles.slide}>
      {itemArr.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </div>
  );
};

export default CarouselSlider;
