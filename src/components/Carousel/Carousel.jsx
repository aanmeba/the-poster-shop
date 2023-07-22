import { useContext, useEffect, useState } from "react";
import styles from "./Carousel.module.scss";
import CarouselSlider from "./CarouselSlider";
import { ArrowLeft, ArrowRight } from "../FontAwesomeIcons/FontAwesomeIcons";
import { ProductsContext } from "../../context/ProductsContextProvider";
import { chunkArray, getNumberWithinRange } from "../../helpers/helpers";

const Carousel = () => {
  const { products } = useContext(ProductsContext);
  const [selectedProducts, setSelectedPRoducts] = useState([]);
  const [numberOfCards, setNumberOfCards] = useState(4);
  const [active, setActive] = useState(0);

  // get random number in the multiples of 4 between 8 to 16
  const randNum = getNumberWithinRange(8, 4, 4);
  const selected = products.slice(0, randNum);

  useEffect(() => {
    const chunked = chunkArray(selected, numberOfCards);
    setSelectedPRoducts(chunked);
  }, [numberOfCards]);

  // detect screen size
  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth < 590) {
        setNumberOfCards(1);
      } else if (window.innerWidth < 830) {
        setNumberOfCards(2);
      } else if (window.innerWidth < 1120) {
        setNumberOfCards(3);
      } else if (window.innerWidth >= 1120) {
        setNumberOfCards(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window]);

  const onClick = (e) => {
    // event delegation
    const currentBtn = e.currentTarget.id;

    if (currentBtn === "arrowRight") {
      if (active === selectedProducts.length - 1) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    } else if (currentBtn === "arrowLeft") {
      if (active === 0) {
        setActive(selectedProducts.length - 1);
      } else {
        setActive(active - 1);
      }
    } else {
      const index = currentBtn.includes("buttonDot") && currentBtn.slice(-1);

      setActive(+index);
    }
  };

  useEffect(() => {
    // console.log(active);
  }, [active]);

  return (
    <section className={styles.caroursel}>
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {selectedProducts &&
          selectedProducts.map((itemArr, i) => (
            <CarouselSlider key={i} itemArr={itemArr} />
          ))}
      </div>
      <div className={styles.indicators}>
        <button
          onClick={onClick}
          className={`${styles.arrows} ${styles.arrows__left}`}
          id="arrowLeft"
        >
          <ArrowLeft />
        </button>
        {selectedProducts.map((_, i) => {
          return (
            <button
              onClick={onClick}
              id={`buttonDot${i}`}
              key={i}
              className={`${styles.indicators__dot}
                ${active === i ? styles.indicators__dot__active : ""}`}
            ></button>
          );
        })}

        <button
          onClick={onClick}
          id="arrowRight"
          className={`${styles.arrows} ${styles.arrows__right}`}
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
