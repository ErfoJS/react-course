import styles from "./Styles/Error.module.css";
import Button from "./Button";
const Error = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onRemoveError}>
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
            <Button onClick={props.onRemoveError}>Okay</Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Error;
