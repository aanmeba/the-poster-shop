import Carousel from "../../components/Carousel/Carousel";
import CollectionWrapper from "../../components/Collections/CollectionWrapper";
import Hero from "../../components/Hero/Hero";
import Subtitle from "../../components/SubTitle/SubTItle";

import ProductsDataLoader from "../../containers/ProductsDataLoader";
import { ProductsContextProvider } from "../../context/ProductsContextProvider";

const Home = () => {
  return (
    <>
      <Hero />
      <Subtitle>New Arrivals</Subtitle>
      <Carousel />
      {/* <ProductsContextProvider> */}
      <CollectionWrapper />
      <ProductsDataLoader />
      {/* </ProductsContextProvider> */}
    </>
  );
};

export default Home;
