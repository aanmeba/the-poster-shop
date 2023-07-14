// import "./App.css";
import styles from "./App.module.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { getAllProducts } from "./services/firestore-services";

function App() {
  getAllProducts();
  return (
    <div className={styles.wrapper}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
