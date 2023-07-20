import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductsContextProvider";
import { CollectionContext } from "../context/CollectionContextProvider";
import ProductsList from "../components/ProductsList/ProductsList";
import { checkDatabaseStatus } from "../services/firestore-services";
import { useLocation, useParams } from "react-router-dom";
import CollectionPage from "../pages/CollectionPage/CollectionPage";
import Home from "../pages/Home/Home";
import ProductPage from "../pages/ProductPage/ProductPage";
// import ProductDataLoader from "./ProductDataLoader";

const ProductsDataLoader = () => {
  console.log("********* Product s DataLoader *********");
  const { products, setProducts } = useContext(ProductsContext);
  const { setCollection } = useContext(CollectionContext);
  const [fetchState, setFetchState] = useState("LOADING");
  const [product, setProduct] = useState(null);

  /** check if it's collection */
  const { id } = useParams();
  const param = id?.includes("-") ? id.replace("-", " ") : id;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/product/") && products.length > 0) {
      const productId = location.pathname.split("/").pop();
      const foundItem = products.find((prod) => prod.id === productId);

      /*******
       * 🚨 CHECK how the product page load,
       * is it use the foundItem, product
       * how to load products before loading product specific page
       * is this process used just for handling the fetch state? because productPage has its own product state
       */
      if (foundItem) {
        setProduct(foundItem);
        setFetchState("SUCCESS");
      } else {
        setFetchState("ERROR");
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    setFetchState("LOADING");
    checkDatabaseStatus()
      .then((data) => {
        setProducts(data);
        setFetchState("SUCCESS");
      })
      .catch((err) => {
        console.log(err);
        setFetchState("ERROR");
      });
  }, []);

  useEffect(() => {
    setFetchState("LOADING");

    if (location.pathname.includes("collection")) {
      // 🚨 might be used instead of param
      // const collectionName = location.pathname.split("/").pop();
      const collectionItems = products.filter(
        (prod) => prod.collection === param
      );
      setCollection(collectionItems);
      setFetchState("SUCCESS");
    }

    if (location.pathname === "/" && products.length > 0) {
      setFetchState("SUCCESS");
    }
  }, [location.pathname, products]);

  return (
    <>
      {fetchState === "SUCCESS" && location.pathname === "/" && <Home />}
      {fetchState === "SUCCESS" && location.pathname === "/products" && (
        <ProductsList />
      )}
      {fetchState === "SUCCESS" && location.pathname.includes("/product/") && (
        // product &&
        <ProductPage />
        // <ProductPage item={product} />
        // <ProductDataLoader />
      )}
      {fetchState === "SUCCESS" && location.pathname.includes("collection") && (
        <CollectionPage />
      )}
    </>
  );
};

export default ProductsDataLoader;
