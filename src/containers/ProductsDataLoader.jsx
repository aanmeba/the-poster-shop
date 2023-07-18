import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductsContextProvider";
import { CollectionContext } from "../context/CollectionContextProvider";
import ProductsList from "../components/ProductsList/ProductsList";
import { checkDatabaseStatus } from "../services/firestore-services";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CollectionPage from "../pages/CollectionPage/CollectionPage";
import Home from "../pages/Home/Home";
import ProductPage from "../pages/ProductPage/ProductPage";

const ProductsDataLoader = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const { setCollection } = useContext(CollectionContext);
  const [fetchState, setFetchState] = useState("LOADING");

  /** check if it's collection */
  const { id } = useParams();
  const param = id?.includes("-") ? id.replace("-", " ") : id;
  const navigate = useNavigate();
  const location = useLocation();

  // most popular -> most-popular
  // new arrivals -> select items

  useEffect(() => {
    setFetchState("LOADING");
    checkDatabaseStatus()
      .then((data) => {
        setProducts(data);
        setFetchState("SUCCESS");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setFetchState("ERROR");
      });
  }, []);

  useEffect(() => {
    setFetchState("LOADING");

    if (id) {
      const collectionItems = products.filter(
        (prod) => prod.collection === param
      );
      console.log(param, collectionItems, "collectionItems");
      setCollection(collectionItems);
      setFetchState("SUCCESS");
    }
    if (location.pathname === "/" && products.length > 0) {
      setFetchState("SUCCESS");
      navigate("/");
    }
  }, [location.pathname, products]);

  // 🚨 do I need id?
  console.log(id, param, location, fetchState, products.length);
  return (
    <>
      {fetchState === "SUCCESS" && location.pathname === "/" && <Home />}
      {fetchState === "SUCCESS" && location.pathname === "/products" && (
        <ProductsList />
      )}
      {fetchState === "SUCCESS" && location.pathname.includes("/product/") && (
        <ProductPage />
      )}
      {fetchState === "SUCCESS" && location.pathname.includes("collection") && (
        <CollectionPage />
      )}
    </>
  );
};

export default ProductsDataLoader;
