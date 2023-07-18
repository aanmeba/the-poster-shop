import Carousel from "../../components/Carousel/Carousel";
import CollectionWrapper from "../../components/Collections/CollectionWrapper";
import Hero from "../../components/Hero/Hero";
import Subtitle from "../../components/SubTitle/SubTItle";

import ProductsDataLoader from "../../containers/ProductsDataLoader";

const Home = () => {
  return (
    <>
      <Hero />
      <Subtitle>New Arrivals</Subtitle>
      <Carousel />
      <CollectionWrapper />
      {/* <ProductsDataLoader /> */}
    </>
  );
};

export default Home;
