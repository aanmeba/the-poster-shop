// import { Link } from "react-router-dom";

import styles from "./Collection.module.scss";

const CollectionCard = ({ content }) => {
  const { title, imageUrl } = content;
  const bgImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageUrl})`;
  return (
    <div className={styles.card}>
      <div
        className={styles.card__img}
        style={{ backgroundImage: bgImage }}
      ></div>
      <div className={styles.card__text}>
        <h3 className={styles.card__text__title}>{title}</h3>
        <span className={styles.card__text__linkWrapper}>
          <span className={styles.card__text__link}>Explore</span>
        </span>
      </div>
    </div>
  );
};

export default CollectionCard;
