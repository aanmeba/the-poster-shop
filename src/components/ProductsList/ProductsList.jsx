import { useContext } from "react";
import styles from "./ProductsList.module.scss";
import { ProductsContext } from "../../context/ProductsContextProvider";
// import ProductPage from "../../pages/ProductPage/ProductPage";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const ProductsList = () => {
  const { products } = useContext(ProductsContext);

  const product = products.find((prod) => prod.id === "z8ym2XTZ0ig");

  console.log(products, "found", product, "--- in ProductsList");
  return (
    <section className={styles.container}>
      {products.map((p, i) => (
        <Link to={p.id} key={i} style={{ textDecoration: "none" }}>
          <Card item={p} />
        </Link>
      ))}
    </section>
  );
};

export default ProductsList;
