import Hero from "../../components/Hero/Hero";

import ProductsDataLoader from "../../containers/ProductsDataLoader";
import { ProductsContextProvider } from "../../context/ProductsContextProvider";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsContextProvider>
        <ProductsDataLoader />
      </ProductsContextProvider>
    </>
  );
};

export default Home;
