import Carousel from "../../components/Carousel/Carousel";
import CollectionWrapper from "../../components/Collections/CollectionWrapper";
import Hero from "../../components/Hero/Hero";

import ProductsDataLoader from "../../containers/ProductsDataLoader";
import { ProductsContextProvider } from "../../context/ProductsContextProvider";

const Home = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <ProductsContextProvider>
        <CollectionWrapper />
        <ProductsDataLoader />
      </ProductsContextProvider>
    </>
  );
};

export default Home;
