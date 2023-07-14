import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Carousel.module.scss";
import CarouselSlider from "./CarouselSlider";

const Carousel = () => {
  const items = [
    [
      { title: "one", price: "$10.00" },
      { title: "two", price: "$20.00" },
      { title: "three", price: "$30.00" },
    ],
    [
      { title: "four", price: "$30.00" },
      { title: "five", price: "$10.00" },
      { title: "six", price: "$20.00" },
    ],
    [
      { title: "xxxxx", price: "$30.00" },
      { title: "aaaaa", price: "$10.00" },
      { title: "bbbbb", price: "$20.00" },
    ],
  ];
  const [active, setActive] = useState(0);

  const onClick = (e) => {
    const currentBtn = e.target.id;

    if (currentBtn === "right") {
      if (active === items.length - 1) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    } else {
      if (active === 0) {
        setActive(items.length - 1);
      } else {
        setActive(active - 1);
      }
    }
  };

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <section className={styles.casoursel}>
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
        >
          👈
        </button>
        <button className={styles.indicators__dot}></button>
        <button className={styles.indicators__dot}></button>
        <button className={styles.indicators__dot}></button>
        <button
          onClick={onClick}
          className={`${styles.arrows} ${styles.arrows__right}`}
        >
          👉
        </button>
      </div>
    </section>
  );
};

export default Carousel;

{
  /* <div className={styles.slide}>
          <div className={styles.slide__item}>{items[0].title}</div>
          <p>{items[0].price}</p>
        </div>
        <div className={styles.slide}>
          <div className={styles.slide__item}>{items[1].title}</div>
          <p>{items[1].price}</p>
        </div>
        <div className={styles.slide}>
          <div className={styles.slide__item}>{items[2].title}</div>
          <p>{items[2].price}</p>
        </div> */
}
