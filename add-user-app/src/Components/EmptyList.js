import styles from "./Styles/EmptyList.module.css";

const EmptyList = () => {
  return (
    <div className={styles.emptyList}>
      <p>No Users found.</p>
    </div>
  );
};

export default EmptyList;
