import PageContainer from "../../components/PageContainer/PageContainer";
import ProductsList from "../../components/ProductsList/ProductsList";
import Title from "../../components/Title/Title";

const FavouritesPage = ({ items }) => {
  return (
    <PageContainer>
      <Title dark capitalize>
        Favourites
      </Title>
      {items.length > 0 ? (
        <ProductsList items={items} />
      ) : (
        <h3>Your favourite list is currently empty</h3>
      )}
    </PageContainer>
  );
};

export default FavouritesPage;
