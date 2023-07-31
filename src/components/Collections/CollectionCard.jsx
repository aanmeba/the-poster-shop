// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import Title from "../Title/Title";
import styles from "./Collection.module.scss";

const CollectionCard = ({ content }) => {
  const { collection, image } = content;
  const bgImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`;

  return (
    <div className={styles.card}>
      <div
        className={styles.card__img}
        style={{ backgroundImage: bgImage }}
      ></div>
      <div className={styles.card__text}>
        <Title capitalize>{collection} collection</Title>

        <span className={styles.card__text__linkWrapper}>
          <Link
            to={`/collection/${collection}`}
            style={{ textDecoration: "none" }}
          >
            <span className={styles.card__text__link}>Explore</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default CollectionCard;
