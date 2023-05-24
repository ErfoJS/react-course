import styles from "../UI/Styles/Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      onClick={props.onClick}
      type={props.type || "submit"}
    >
      {props.children}
    </button>
  );
};

export default Button;
