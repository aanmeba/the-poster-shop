import styles from "./Button.module.scss";

const Button = ({ children, light, dark, fill }) => {
  const styleList = [styles.button];

  if (dark) styleList.push(styles.button__dark);
  if (light) styleList.push(styles.button__light);
  if (fill) styleList.push(styles.button__fill);

  return <button className={styleList.join(" ")}>{children}</button>;
};

export default Button;
