// import "./App.css";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsDataLoader from "./containers/ProductsDataLoader";
import ProductPage from "./pages/ProductPage/ProductPage";
import { ProductsContextProvider } from "./context/ProductsContextProvider";
import { CollectionContextProvider } from "./context/CollectionContextProvider";

function App() {
  return (
    <div className={styles.wrapper}>
      <ProductsContextProvider>
        <CollectionContextProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsDataLoader />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/collection/:id" element={<ProductsDataLoader />} />
            </Routes>
          </BrowserRouter>
        </CollectionContextProvider>
      </ProductsContextProvider>
      <Footer />
    </div>
  );
}

export default App;
