import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductsDataLoader from "../../containers/ProductsDataLoader";
import { ProductsContextProvider } from "../../context/ProductsContextProvider";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <ProductsContextProvider>
        <ProductsDataLoader />
      </ProductsContextProvider>
      <Footer />
    </>
  );
};

export default Home;
