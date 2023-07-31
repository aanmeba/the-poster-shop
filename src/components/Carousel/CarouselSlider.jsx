import { Link } from "react-router-dom";
import Card from "../Card/Card";
import styles from "./Carousel.module.scss";

const CarouselSlider = ({ itemArr }) => {
  return (
    <div className={styles.slide}>
      {itemArr.map((item, i) => (
        <Link
          to={`/product/${item.id}`}
          key={i}
          style={{ textDecoration: "none" }}
        >
          <Card key={i} item={item} />
        </Link>
      ))}
    </div>
  );
};

export default CarouselSlider;
