import { useLocation, useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContextProvider";
import { HeartEmpty } from "../../components/FontAwesomeIcons/FontAwesomeIcons";

const ProductPage = () => {
  const { id } = useParams();
  // const location = useLocation();
  const { products } = useContext(ProductsContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const foundItem = products.find((prod) => prod.id === id);
    setProduct(foundItem);
  }, [id]);

  console.log(id, product, location, products, "-- productpage");
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
        <select className={styles.info__sizes}>
          <option value="default">select size</option>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
        <button className={styles.button}>add to bag</button>
        <button className={styles.button__heart}>
          <HeartEmpty />
        </button>
      </div>
    </section>
  );
};

export default ProductPage;
