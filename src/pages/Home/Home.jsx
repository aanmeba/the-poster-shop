import Carousel from "../../components/Carousel/Carousel";
import Hero from "../../components/Hero/Hero";

// import ProductsDataLoader from "../../containers/ProductsDataLoader";
import { ProductsContextProvider } from "../../context/ProductsContextProvider";

const Home = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <ProductsContextProvider>
        {/* <ProductsDataLoader /> */}
      </ProductsContextProvider>
    </>
  );
};

export default Home;
