import styles from "./Collection.module.scss";
import CollectionCard from "./CollectionCard";

const CollectionWrapper = () => {
  const collectionData = [
    {
      title: "Most Popular",
      imageUrl:
        "https://images.unsplash.com/photo-1631509716275-59e9d106504a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80",
    },
    {
      title: "New Arrivals",
      imageUrl:
        "https://images.unsplash.com/photo-1632566853092-a0faa4665585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=899&q=80",
    },
  ];
  return (
    <section className={styles.container}>
      {collectionData.map((c, i) => (
        <CollectionCard key={i} content={c} />
      ))}
    </section>
  );
};

export default CollectionWrapper;
