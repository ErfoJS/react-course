import styles from "./Styles/Error.module.css";
import Button from "./Button";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onRemoveError}></div>;
};

const ErrorOverlay = (props) => {
  return (
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
  );
};

const Error = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onRemoveError={props.onRemoveError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ErrorOverlay
          title={props.title}
          message={props.message}
          onRemoveError={props.onRemoveError}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Error;
