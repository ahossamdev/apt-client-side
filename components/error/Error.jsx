import styles from "./Error.module.css";

const Error = ({ message }) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Oops! Something went wrong</h2>
      <p className={styles.message}>
        {"Failed to load data. Please try again later."}
      </p>
      <button onClick={handleReload} className={styles.button}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
