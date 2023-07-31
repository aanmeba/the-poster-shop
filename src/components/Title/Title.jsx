import styles from "./Title.module.scss";

const Title = ({ children, fontSize, capitalize, dark, gray }) => {
  const styleList = [styles.title];
  if (dark) styleList.push(styles.title__dark);
  else if (gray) styleList.push(styles.title__gray);
  else styleList.push(styles.title__light);

  if (fontSize) styleList.push(styles.title__fontSize);
  if (capitalize) styleList.push(styles.title__capitalize);

  return <h1 className={styleList.join(" ")}>{children}</h1>;
};

export default Title;
