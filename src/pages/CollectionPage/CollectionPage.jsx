import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import ProductsList from "../../components/ProductsList/ProductsList";
import { useContext } from "react";
import { CollectionContext } from "../../context/CollectionContextProvider";
import PageContainer from "../../components/PageContainer/PageContainer";

const CollectionPage = () => {
  console.log("********* CollectionPage *********");
  const { id } = useParams();

  const collectionName = id.includes("-") ? id.replace("-", " ") : id;

  const { collection } = useContext(CollectionContext);
  console.log("Collection page - ", id, collectionName);
  return (
    <PageContainer>
      <Title dark capitalize>
        {collectionName} collection
      </Title>
      <ProductsList collectionName={collectionName} items={collection} />
    </PageContainer>
  );
};

export default CollectionPage;
