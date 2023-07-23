import styles from "./ProductPage.module.scss";
import { useContext, useRef } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import FavButton from "../../components/FavButton/FavButton";
import Button from "../../components/Button/Button";
import { checkAvailability } from "../../helpers/helpers";

const ProductPage = ({ product }) => {
  const { onClick } = useContext(GlobalContext);
  const formRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const data = new FormData(form);
    const selectedSize = data.get("sizes");

    // handle addToCart, addToFav is handled in FavButton
    const { id } = e.nativeEvent.submitter;
    onClick(id, product, selectedSize);
  };

  return (
    <section className={styles.container}>
      <div className={styles.figure}>
        <img
          className={styles.figure__image}
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className={styles.info}>
        <div className={styles.wrapper}>
          <h2 className={styles.info__title}>{product.title}</h2>
          <FavButton item={product} styleList={styles.button__heart} />
        </div>
        <span className={styles.info__copyright}>by {product.artist}</span>
        <p className={styles.info__price}>${product.price}</p>
        <p className={styles.info__desc}>{product.description}</p>
        <p className={styles.info__desc}>
          {checkAvailability(product.quantity)} available
        </p>

        <hr />
        <form
          ref={formRef}
          onSubmit={handleClick}
          className={styles.info__form}
        >
          <select
            name="sizes"
            defaultValue="default"
            className={styles.info__form__sizes}
            required
          >
            <option value="select size" disabled hidden>
              select size
            </option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
          </select>
          <div type="submit" className={styles.button}>
            <Button dark fill id="addToCart">
              add to bag
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProductPage;
