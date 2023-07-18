import { useContext } from "react";
import styles from "./Collection.module.scss";
import CollectionCard from "./CollectionCard";
import { ProductsContext } from "../../context/ProductsContextProvider";

const CollectionWrapper = () => {
  const { products } = useContext(ProductsContext);
  const featuredCollections = ["urban", "aurora"];
  const collectionCardData = featuredCollections.map((c) =>
    products.find((prod) => prod.collection === c)
  );

  console.log(
    products.length,
    products && collectionCardData.length,
    "-- collection wrapper"
  );
  return (
    <section className={styles.container}>
      {products.length > 0 &&
        collectionCardData.map((c, i) => (
          <CollectionCard key={i} content={c} />
        ))}
    </section>
  );
};

export default CollectionWrapper;
