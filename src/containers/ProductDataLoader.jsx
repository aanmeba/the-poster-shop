// import { useContext, useEffect, useState } from "react";
// import ProductPage from "../pages/ProductPage/ProductPage";
// import { useLocation, useParams } from "react-router-dom";
// import { ProductsContext } from "../context/ProductsContextProvider";

// const ProductDataLoader = () => {
//   console.log("********* Product DataLoader *********");
//   const location = useLocation();
//   const { id } = useParams();

//   console.log(id, location.pathname, "--- productDataLoader param");

//   const [fetchState, setFetchState] = useState("LOADING");
//   const { products } = useContext(ProductsContext);
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     setFetchState("LOADING");

//     if (location.pathname.includes("/product/") && products.length > 0) {
//       const productId = location.pathname.split("/").pop();
//       const foundItem = products.find((prod) => prod.id === productId);

//       if (foundItem) {
//         setProduct(foundItem);
//         setFetchState("SUCCESS");
//       } else {
//         setFetchState("ERROR");
//       }
//     }
//   }, [products, location.pathname]);

//   return (
//     <>
//       {fetchState === "SUCCESS" && product && <ProductPage product={product} />}
//     </>
//   );
// };

// export default ProductDataLoader;
