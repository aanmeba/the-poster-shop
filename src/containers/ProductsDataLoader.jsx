import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductsContextProvider";
import { CollectionContext } from "../context/CollectionContextProvider";
import ProductsList from "../components/ProductsList/ProductsList";
import { checkDatabaseStatus } from "../services/firestore-services";
import { useLocation, useParams } from "react-router-dom";
import CollectionPage from "../pages/CollectionPage/CollectionPage";
import Home from "../pages/Home/Home";
import ProductPage from "../pages/ProductPage/ProductPage";
import LoadingShimmer from "../components/LoadingShimmer/LoadingShimmer";

const ProductsDataLoader = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const { setCollection } = useContext(CollectionContext);
  const [fetchState, setFetchState] = useState("LOADING");
  const [product, setProduct] = useState(null);

  /** check if it's collection */
  const { id } = useParams();
  const param = id?.includes("-") ? id.replace("-", " ") : id;
  const { pathname } = useLocation();

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

    if (pathname.includes("collection")) {
      const collectionItems = products.filter(
        (prod) => prod.collection === param
      );
      setCollection(collectionItems);
      setFetchState("SUCCESS");
    }

    if (pathname === "/" && products.length > 0) {
      setFetchState("SUCCESS");
    }
  }, [pathname, products]);

  useEffect(() => {
    if (pathname.includes("/product/") && products.length > 0) {
      const productId = pathname.split("/").pop();
      const foundItem = products.find((prod) => prod.id === productId);

      if (foundItem) {
        setProduct(foundItem);
        setFetchState("SUCCESS");
      } else {
        setFetchState("ERROR");
      }
    }
  }, [fetchState]);

  return (
    <>
      {fetchState === "LOADING" && <LoadingShimmer />}
      {fetchState === "SUCCESS" && pathname === "/" && <Home />}
      {fetchState === "SUCCESS" && pathname === "/products" && (
        <ProductsList items={products} />
      )}
      {fetchState === "SUCCESS" &&
        pathname.includes("/product/") &&
        product && <ProductPage product={product} />}
      {fetchState === "SUCCESS" && pathname.includes("collection") && (
        <CollectionPage />
      )}
    </>
  );
};

export default ProductsDataLoader;
