import styles from "./PageContainer.module.scss";

const PageContainer = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

export default PageContainer;
