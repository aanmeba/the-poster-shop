import styles from "./Badge.module.scss";

const Badge = ({ count, theme }) => {
  const iconStyleList = [styles.badge__icon];
  theme === "dark"
    ? iconStyleList.push(styles.badge__icon_dark)
    : iconStyleList.push(styles.badge__icon_light);

  const countStyleList = [styles.badge__icon__count];
  theme === "dark"
    ? iconStyleList.push(styles.badge__icon__count_dark)
    : iconStyleList.push(styles.badge__icon__count_light);

  return (
    <div className={styles.badge}>
      <div className={iconStyleList.join(" ")}>
        <span className={countStyleList.join(" ")}>{count}</span>
      </div>
    </div>
  );
};

export default Badge;
