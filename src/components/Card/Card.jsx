import { HeartEmpty } from "../FontAwesomeIcons/FontAwesomeIcons";
import styles from "./Card.module.scss";

const Card = ({ item }) => {
  const onClick = (e) => {
    console.log(e.currentTarget.id);
  };

  return (
    <div className={styles.card__item}>
      <figure>
        <img src={item.image} alt={item.title} />
      </figure>
      <div className={styles.card__item__info}>
        <div className={styles.card__item__info__top}>
          <h5 className={styles.card__item__info__top__title}>{item.title}</h5>
          <div
            onClick={onClick}
            id="favIcon"
            className={styles.card__item__info__top__icon_wrapper}
          >
            <HeartEmpty className={styles.heart} />
          </div>
        </div>

        <div className={styles.card__item__info__bottom}>
          <p>${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
