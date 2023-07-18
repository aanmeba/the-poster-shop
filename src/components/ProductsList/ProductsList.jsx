import { useContext } from "react";
import styles from "./ProductsList.module.scss";
import { ProductsContext } from "../../context/ProductsContextProvider";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { CollectionContext } from "../../context/CollectionContextProvider";

const ProductsList = ({ isCollection }) => {
  const { products } = useContext(ProductsContext);
  const { collection } = useContext(CollectionContext);

  const items = isCollection ? collection : products;

  return (
    <section className={styles.container}>
      {items.map((p, i) => (
        <Link
          to={`/product/${p.id}`}
          key={i}
          style={{ textDecoration: "none" }}
        >
          <Card item={p} />
        </Link>
      ))}
    </section>
  );
};

export default ProductsList;
