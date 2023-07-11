import { useContext, useEffect, useState } from "react";
import { getData } from "../services/dummy-fetch-services";
import { ProductsContext } from "../context/ProductsContextProvider";
import ProductsList from "../components/ProductsList/ProductsList";

const ProductsDataLoader = () => {
  const { setProducts } = useContext(ProductsContext);
  const [fetchState, setFetchState] = useState("LOADING");

  useEffect(() => {
    getData()
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
