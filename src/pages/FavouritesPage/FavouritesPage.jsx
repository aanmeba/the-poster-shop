import PageContainer from "../../components/PageContainer/PageContainer";
import ProductsList from "../../components/ProductsList/ProductsList";
import Title from "../../components/Title/Title";
import CTAButton from "../../components/CTAButton/CTAButton";

const FavouritesPage = ({ items }) => {
  const message = "Your favourite list is currently empty";
  const cta = "see our favourites";
  return (
    <PageContainer>
      <Title dark capitalize>
        Favourites
      </Title>
      {items.length > 0 ? (
        <ProductsList items={items} />
      ) : (
        <CTAButton message={message} cta={cta} />
      )}
    </PageContainer>
  );
};

export default FavouritesPage;
