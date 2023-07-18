import { useParams } from "react-router-dom";
import styles from "./CollectionPage.module.scss";
import Title from "../../components/Title/Title";
import ProductsList from "../../components/ProductsList/ProductsList";

const CollectionPage = () => {
  const { id } = useParams();

  console.log("Collection page - ", id);
  return (
    <section className={styles.container}>
      <Title dark capitalize>
        {id} collection
      </Title>
      <ProductsList isCollection />
    </section>
  );
};

export default CollectionPage;
