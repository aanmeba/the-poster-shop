import { useState } from "react";
import { Delete } from "../FontAwesomeIcons/FontAwesomeIcons";
import styles from "./CartCard.module.scss";
import { capitalise } from "../../helpers/helpers";

const CartCard = ({ item, calculateTotal, handleDelete }) => {
  const {
    image,
    artist,
    title,
    variantId,
    variantOption,
    variantSize,
    priceInVariant,
    quantity,
  } = item;
  const [qty, setQty] = useState(quantity);

  const deleteItem = (e) => {
    const { id: buttonId } = e.currentTarget;
    handleDelete(buttonId, item, variantId);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (value >= 1) {
      setQty(+value);
      calculateTotal(variantId, +value, priceInVariant);
    }
  };

  return (
    <article className={styles.row}>
      <div className={styles.row__left}>
        <div className={styles.row__left__wrapper}>
          <button
            id="removeBtn"
            className={styles.row__left__wrapper__delete}
            onClick={deleteItem}
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
              {capitalise(variantOption)} - {variantSize}
            </p>
            <p>${priceInVariant}</p>
          </div>
        </div>
      </div>
      <div className={styles.row__right}>
        <div className={styles.row__right__quantity}>
          <input type="number" value={qty} onChange={handleChange} />
        </div>
        <div className={styles.row__right__sub_total}>
          <p>${priceInVariant * qty}</p>
        </div>
      </div>
    </article>
  );
};

export default CartCard;
