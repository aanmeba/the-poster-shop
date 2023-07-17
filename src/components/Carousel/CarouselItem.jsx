import { HeartEmpty } from "../FontAwesomeIcons/FontAwesomeIcons";
import styles from "./Carousel.module.scss";

const CarouselItem = ({ item }) => {
  const onClick = (e) => {
    // add favourite list
    // 🚨 how to get the unique id from the item
    console.log(e.currentTarget.id);
  };

  return (
    <div className={styles.slide__item}>
      <figure>
        <img src="../../../public/poster_4.jpeg" alt="" />
      </figure>
      <div className={styles.slide__item__info}>
        <div className={styles.slide__item__info__top}>
          <h5 className={styles.slide__item__info__top__title}>{item.title}</h5>
          <div
            onClick={onClick}
            id="favIcon"
            className={styles.slide__item__info__top__icon_wrapper}
          >
            <HeartEmpty className={styles.heart} />
          </div>
        </div>

        <div className={styles.slide__item__info__bottom}>
          <p>{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
