import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductsContextProvider";
import { CollectionContext } from "../context/CollectionContextProvider";
import ProductsList from "../components/ProductsList/ProductsList";
import { checkDatabaseStatus } from "../services/firestore-services";
import { useParams } from "react-router-dom";
import CollectionPage from "../pages/CollectionPage/CollectionPage";

const ProductsDataLoader = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const { setCollection } = useContext(CollectionContext);
  const [fetchState, setFetchState] = useState("LOADING");

  /** check if it's collection */
  const { id } = useParams();
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
      // 🚨 is it acceptable practice?
      // setTimeout(() => {
      const collectionItems = products.filter((prod) => prod.collection === id);
      console.log(id, collectionItems, "collectionItems");
      setCollection(collectionItems);
      setFetchState("SUCCESS");
      // }, 2000);
    }
  }, [id]);
  return (
    <>
      {fetchState === "SUCCESS" && id ? <CollectionPage /> : <ProductsList />}
    </>
  );
};

export default ProductsDataLoader;
