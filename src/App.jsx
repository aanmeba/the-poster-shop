// import "./App.css";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsDataLoader from "./containers/ProductsDataLoader";
import ProductPage from "./pages/ProductPage/ProductPage";
import { ProductsContextProvider } from "./context/ProductsContextProvider";
import { CollectionContextProvider } from "./context/CollectionContextProvider";
import { GlobalContextProvider } from "./context/GlobalContextProvider";

function App() {
  return (
    <div className={styles.wrapper}>
      <ProductsContextProvider>
        <GlobalContextProvider>
          <CollectionContextProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<ProductsDataLoader />} />
                <Route path="/products" element={<ProductsDataLoader />} />
                <Route
                  path="/product/:id"
                  element={
                    <>
                      {/* <ProductsDataLoader /> */}
                      <ProductPage />
                    </>
                  }
                />
                <Route
                  path="/collection/:id"
                  element={<ProductsDataLoader />}
                />
                {/* <Route path="/" element={<ProductsDataLoader />} />
              <Route path="/products" element={<ProductsList />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/collection/:id" element={<CollectionPage />} /> */}
              </Routes>
            </BrowserRouter>
          </CollectionContextProvider>
        </GlobalContextProvider>
      </ProductsContextProvider>
      <Footer />
    </div>
  );
}

export default App;
