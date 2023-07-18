import { useParams } from "react-router-dom";
import styles from "./CollectionPage.module.scss";
import Title from "../../components/Title/Title";
import ProductsList from "../../components/ProductsList/ProductsList";

const CollectionPage = () => {
  const { id } = useParams();

  const collectionName = id.includes("-") ? id.replace("-", " ") : id;
  console.log("Collection page - ", id, collectionName);
  return (
    <section className={styles.container}>
      <Title dark capitalize>
        {collectionName} collection
      </Title>
      <ProductsList isCollection collectionName={collectionName} />
    </section>
  );
};

export default CollectionPage;
