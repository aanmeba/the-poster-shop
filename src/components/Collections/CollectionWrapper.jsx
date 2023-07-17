import styles from "./Collection.module.scss";
import CollectionCard from "./CollectionCard";

const CollectionWrapper = () => {
  return (
    <section className={styles.container}>
      <CollectionCard />
      <CollectionCard />
    </section>
  );
};

export default CollectionWrapper;
