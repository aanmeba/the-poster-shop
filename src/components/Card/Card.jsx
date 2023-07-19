import { useContext, useState } from "react";
import { HeartEmpty, HeartSolid } from "../FontAwesomeIcons/FontAwesomeIcons";
import styles from "./Card.module.scss";
import { GlobalContext } from "../../context/GlobalContextProvider";

const Card = ({ item }) => {
  const { onClick } = useContext(GlobalContext);
  // 🔥 make the data persistant
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    onClick(id, item);
    setIsClicked(true);
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
            onClick={handleClick}
            id="addToFav"
            className={styles.card__item__info__top__icon_wrapper}
          >
            {isClicked ? (
              <HeartSolid className={styles.heart__filled} />
            ) : (
              <HeartEmpty className={styles.heart} />
            )}
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
