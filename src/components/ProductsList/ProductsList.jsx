import { useContext } from "react";
import styles from "./ProductsList.module.scss";
import { ProductsContext } from "../../context/ProductsContextProvider";

const ProductsList = () => {
  const { products } = useContext(ProductsContext);
  console.log(products, "--- in ProductsList");
  return (
    <section className={styles.container}>
      {products.map((p, i) => (
        <div key={i}>
          <h3>{p.title}</h3>
        </div>
      ))}
    </section>
  );
};

export default ProductsList;
