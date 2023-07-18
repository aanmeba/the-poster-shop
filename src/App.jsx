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
import ProductsList from "./components/ProductsList/ProductsList";
import CollectionPage from "./pages/CollectionPage/CollectionPage";

function App() {
  return (
    <div className={styles.wrapper}>
      <ProductsContextProvider>
        <CollectionContextProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <ProductsDataLoader />
                    {/* <Home /> */}
                  </>
                }
              />
              <Route
                path="/products"
                element={
                  <>
                    <ProductsList />
                    {/* <ProductsDataLoader /> */}
                  </>
                }
              />
              <Route
                path="/product/:id"
                element={
                  <>
                    <ProductPage />
                    {/* <ProductsDataLoader /> */}
                  </>
                }
              />
              <Route
                path="/collection/:id"
                element={
                  <>
                    <CollectionPage />
                    {/* <ProductsDataLoader /> */}
                  </>
                }
              />
            </Routes>
          </BrowserRouter>
        </CollectionContextProvider>
      </ProductsContextProvider>
      <Footer />
    </div>
  );
}

export default App;
