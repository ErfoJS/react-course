import styles from "./Styles/Error.module.css";
const Error = (props) => {
  return (
    <div>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>

        <footer className={styles.actions}>
          <button onClick={props.errorRemover}>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default Error;