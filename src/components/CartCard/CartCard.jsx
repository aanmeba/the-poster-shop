import { useContext, useState } from "react";
import { Delete } from "../FontAwesomeIcons/FontAwesomeIcons";
import styles from "./CartCard.module.scss";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { capitalise } from "../../helpers/helpers";

const CartCard = ({ item, calculateTotal }) => {
  const { onClick } = useContext(GlobalContext);
  const { sizes, size, id, price, image, artist, title } = item;
  const [qty, setQty] = useState(1);

  const handleDelete = (e) => {
    const { id: buttonId } = e.currentTarget;
    onClick(buttonId, item);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (value > 1) {
      setQty(+value);
      calculateTotal(id, +value);
    }
  };

  return (
    <article className={styles.row}>
      <div className={styles.row__left}>
        <div className={styles.row__left__wrapper}>
          <button
            id="removeBtn"
            className={styles.row__left__wrapper__delete}
            onClick={handleDelete}
          >
            <Delete />
          </button>
        </div>
        <figure className={styles.row__left__prod}>
          <img src={image} alt={title} />
        </figure>
        <div className={styles.row__left__info}>
          <div className={styles.row__left__info__top}>
            <p className={styles.row__left__info__top__title}>{title}</p>
            <p>{artist}</p>
          </div>
          <div className={styles.row__left__info__bottom}>
            <p>
              {capitalise(size)} - {sizes[size]}
            </p>
            <p>${price}</p>
          </div>
        </div>
      </div>
      <div className={styles.row__right}>
        <div className={styles.row__right__quantity}>
          <input type="number" value={qty} onChange={handleChange} />
        </div>
        <div className={styles.row__right__sub_total}>
          <p>${price * qty}</p>
        </div>
      </div>
    </article>
  );
};

export default CartCard;
