import styles from "./Styles/UserForm.module.css";

const UserForm = () => {
  return (
    <div>
      <form>
        <div>
          <div className={styles.form}>
            <label className={styles.label}>Username</label>
            <input className={styles.input} type="text" />
          </div>

          <div className={styles.form}>
            <label className={styles.label}>Age (Years)</label>
            <input className={styles.input} type="text" />
          </div>
          <button className={styles.button} type="submit">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
