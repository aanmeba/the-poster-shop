import styles from "./Card.module.scss";
import FavButton from "../FavButton/FavButton";

const Card = ({ item }) => {
  return (
    <article className={styles.card}>
      <div className={styles.card__item}>
        <figure>
          <img src={item.image} alt={item.title} />
        </figure>
        <div className={styles.card__item__info}>
          <div className={styles.card__item__info__top}>
            <h5 className={styles.card__item__info__top__title}>
              {item.title}
            </h5>
            <FavButton
              item={item}
              styleList={styles.card__item__info__top__icon_wrapper}
            />
          </div>

          <div className={styles.card__item__info__bottom}>
            <p>${item.price}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
