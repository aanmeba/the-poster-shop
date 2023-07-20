import { useLocation, useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { ProductsContext } from "../../context/ProductsContextProvider";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { HeartEmpty } from "../../components/FontAwesomeIcons/FontAwesomeIcons";
import FavButton from "../../components/FavButton/FavButton";

const ProductPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { products } = useContext(ProductsContext);
  const { globalState, onClick } = useContext(GlobalContext);
  const [product, setProduct] = useState({});
  const formRef = useRef();

  useEffect(() => {
    const foundItem = products.find((prod) => prod.id === id);
    // console.log(foundItem, "--found");
    setProduct(foundItem);
  }, [id, location.pathname, products]);

  // console.log(id, product, location, "-- productpage");

  const handleClick = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const data = new FormData(form);
    const selectedSize = data.get("sizes");

    // handle addToCart, addToFav is handled in FavButton
    const { id } = e.nativeEvent.submitter;
    // || e.currentTarget.id
    console.log("productPage +++ ", id, product.id, selectedSize);
    onClick(id, product, selectedSize);
  };

  console.log("********* ProductPage *********", product);

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
        <h2 className={styles.info__title}>{product.title}</h2>
        <span className={styles.info__copyright}>by {product.artist}</span>
        <p className={styles.info__price}>${product.price}</p>
        <p className={styles.info__desc}>{product.description}</p>
        <hr />
        <form ref={formRef} onSubmit={handleClick}>
          <select
            name="sizes"
            defaultValue="default"
            className={styles.info__sizes}
            required
          >
            <option value="select size" disabled hidden>
              select size
            </option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
          </select>
          <button
            // onClick={handleClick}
            type="submit"
            id="addToCart"
            className={styles.button}
          >
            add to bag
          </button>
        </form>
        <FavButton item={product} styleList={styles.button__heart} />
        {/* <button
          className={styles.button__heart}
          id="addToFav"
          onClick={handleClick}
        >
          <HeartEmpty />
        </button> */}
      </div>
    </section>
  );
};

export default ProductPage;
