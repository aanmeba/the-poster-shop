import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <article className={styles.container}>
      <h4>title</h4>
      <p>$10.00</p>
    </article>
  );
};

export default ProductCard;
