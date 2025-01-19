import styles from "./Loader.module.css";

const SkeletonCard = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonImage} />
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonText} style={{ width: "60%" }} />
        <div className={styles.skeletonText} style={{ width: "75%" }} />
      </div>
    </div>
  );
};

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderGrid}>
        {[...Array(6)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Loader;
