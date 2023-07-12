// import "./App.css";
import Home from "./pages/Home/Home";
import { getAllProducts } from "./services/firestore-services";

function App() {
  getAllProducts();
  return (
    <>
      <Home />
    </>
  );
}

export default App;
