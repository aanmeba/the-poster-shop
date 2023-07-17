import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductsContextProvider";
import ProductsList from "../components/ProductsList/ProductsList";
import { checkDatabaseStatus } from "../services/firestore-services";

const ProductsDataLoader = () => {
  const { setProducts } = useContext(ProductsContext);
  const [fetchState, setFetchState] = useState("LOADING");

  useEffect(() => {
    checkDatabaseStatus()
      .then((data) => {
        setProducts(data);
        setFetchState("SUCCESS");
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return <>{fetchState === "SUCCESS" && <ProductsList />}</>;
};

export default ProductsDataLoader;
