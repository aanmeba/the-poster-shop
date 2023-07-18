import { useContext, useEffect, useState } from "react";
import styles from "./Carousel.module.scss";
import CarouselSlider from "./CarouselSlider";
import { ArrowLeft, ArrowRight } from "../FontAwesomeIcons/FontAwesomeIcons";
import { ProductsContext } from "../../context/ProductsContextProvider";

const Carousel = () => {
  // 🚨 replace items with new arrivals collection
  const items = [
    [
      { title: "one", price: "$10.00" },
      { title: "two", price: "$20.00" },
      { title: "three", price: "$30.00" },
      { title: "four", price: "$30.00" },
    ],
    [
      { title: "five", price: "$10.00" },
      { title: "six", price: "$20.00" },
      { title: "xxxxx", price: "$30.00" },
      { title: "aaaaa", price: "$10.00" },
    ],
    [
      {
        title: "long title test",
        price: "$20.00",
      },
      { title: "cccc", price: "$30.00" },
      { title: "getting to know", price: "$10.00" },
      { title: "get personalised ", price: "$15.00" },
    ],
  ];

  // const { products } = useContext(ProductsContext);
  // const items = products.slice(0, 8);

  // console.log(items, "--- items");
  const [active, setActive] = useState(0);

  const onClick = (e) => {
    // event delegation
    const currentBtn = e.currentTarget.id;

    if (currentBtn === "arrowRight") {
      if (active === items.length - 1) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    } else if (currentBtn === "arrowLeft") {
      if (active === 0) {
        setActive(items.length - 1);
      } else {
        setActive(active - 1);
      }
    } else {
      const index = currentBtn.includes("buttonDot") && currentBtn.slice(-1);

      setActive(+index);
    }
  };

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <section className={styles.caroursel}>
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {items.map((itemArr, i) => (
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
        {items.map((item, i) => {
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
