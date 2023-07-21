import { useContext } from "react";
import { Delete } from "../FontAwesomeIcons/FontAwesomeIcons";
import styles from "./CartCard.module.scss";
import { GlobalContext } from "../../context/GlobalContextProvider";

const CartCard = ({ item }) => {
  const { onClick } = useContext(GlobalContext);
  const { size } = item;
  const handleDelete = (e) => {
    const { id: buttonId } = e.currentTarget;
    console.log(buttonId);
    onClick(buttonId, item);
  };
  return (
    <article className={styles.row}>
      <div className={styles.row__wrapper}>
        <button
          id="removeBtn"
          className={styles.row__wrapper__delete}
          onClick={handleDelete}
        >
          <Delete />
        </button>
      </div>
      <figure className={styles.row__prod}>
        <img src={item.image} alt={item.title} />
      </figure>
      <div className={styles.row__info}>
        <div className={styles.row__info__top}>
          <p className={styles.row__info__top__title}>{item.title}</p>
          <p>{item.artist}</p>
        </div>
        <div className={styles.row__info__bottom}>
          <p>{item.sizes[size]}</p>
          <p>${item.price}</p>
        </div>
      </div>
    </article>
  );
};

export default CartCard;
