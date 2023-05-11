import styles from "./Styles/Error.module.css";
const Error = (props) => {
  return (
    <div className={styles.backdrop}>
      <div></div>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>

        <footer className={styles.actions}>
          <div className={styles.errorButton}>
            <button onClick={props.errorRemover}>Okay</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Error;
