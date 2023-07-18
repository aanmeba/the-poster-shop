import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import TitleLink from "../TitleLink/TitleLink";
import styles from "./Header.module.scss";

const Header = () => {
  const defaultStyle = [styles.container];
  const [styleList, setStyleList] = useState(defaultStyle);
  const [colorDark, setColorDark] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 3) {
      setStyleList([...defaultStyle, styles.container__bg]);
      setColorDark(true);
    } else {
      setStyleList([...defaultStyle, styles.container__default]);
      setColorDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(styleList.join(" "));

  return (
    <header className={styleList.join(" ")}>
      <TitleLink dark={colorDark} />
      <NavBar dark={colorDark} />
    </header>
  );
};

export default Header;
