import styles from "./NoApartments.module.css";

const NoApartments = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>No Apartments Found</h2>
        <p className={styles.message}>
          We couldn't find any apartments matching your search criteria. Try
          adjusting your filters.
        </p>
      </div>
    </div>
  );
};

export default NoApartments;
