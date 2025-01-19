import styles from "./DetailsLoader.module.css";

const DetailsLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderWrapper}>
        <div className={styles.imageLoader}></div>
        <div className={styles.contentLoader}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsLoader;
