import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import TitleLink from "../TitleLink/TitleLink";
import styles from "./Header.module.scss";
import { useLocation, useParams } from "react-router-dom";

const Header = () => {
  const defaultStyle = [styles.container];
  const [styleList, setStyleList] = useState(defaultStyle);
  const [colorDark, setColorDark] = useState(false);

  //useLocation or useparam
  const { id } = useParams();
  const { pathname } = useLocation();

  const transparentMode = () => {
    setStyleList([...defaultStyle, styles.container__default]);
    setColorDark(false);
  };

  const colouredMode = () => {
    setStyleList([...defaultStyle, styles.container__bg]);
    setColorDark(true);
  };

  const handleScroll = () => {
    if (window.scrollY > 5) colouredMode();
    else transparentMode();
  };

  useEffect(() => {
    if (pathname !== "/") colouredMode();
  }, [pathname]);

  useEffect(() => {
    if (!id && pathname === "/") {
      window.addEventListener("scroll", handleScroll);

      if (window.scrollY < 5) transparentMode();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id, pathname]);

  return (
    <header className={styleList.join(" ")}>
      <TitleLink dark={colorDark} />
      <NavBar dark={colorDark} />
    </header>
  );
};

export default Header;
