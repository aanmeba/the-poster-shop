// import { Link } from "react-router-dom";

import styles from "./Collection.module.scss";

const CollectionCard = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>Collection Name</h3>
      {/* <Link */}
      <button className={styles.card__link}>Shop more</button>
    </div>
  );
};

export default CollectionCard;
