import styles from "./ProductPage.module.scss";
import { useContext, useRef, useState } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import FavButton from "../../components/FavButton/FavButton";
import Button from "../../components/Button/Button";
import {
  checkAvailability,
  calcPrice,
  cartItemData,
} from "../../helpers/helpers";

const ProductPage = ({ product }) => {
  const { onClick } = useContext(GlobalContext);
  const { variants, price } = product;
  const formRef = useRef();
  const [size, setSize] = useState("small");

  const handleChange = (e) => setSize(e.target.value);

  const handleClick = (e) => {
    e.preventDefault();

    // const variantId = variants.find((va) => va.option == size).id;

    // const form = formRef.current;
    // const data = new FormData(form);
    // const selectedSize = data.get("variants");

    // handle addToCart, addToFav is handled in FavButton
    const { id: key } = e.nativeEvent.submitter;
    console.log("-- product page -- ", key, product.id, size);
    const cartData = cartItemData(product, size);
    onClick(key, cartData);
    // onClick(key, product, variantId);
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
        <p className={styles.info__price}>${calcPrice(size, price)}</p>
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
            onChange={handleChange}
            required
          >
            <option value="select size" disabled hidden>
              select size
            </option>
            {variants?.map((variant) => (
              <option value={variant.option} key={variant.id}>
                {variant.option}
              </option>
            ))}
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
