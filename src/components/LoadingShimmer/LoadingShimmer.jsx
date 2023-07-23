import Title from "../Title/Title";
import styles from "./LoadingShimmer.module.scss";

const LoadingShimmer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.shine}>
        <div className={styles.container__inner}>
          <Title gray fontSize>
            Loading...
          </Title>
        </div>
      </div>
    </div>
  );
};

export default LoadingShimmer;
