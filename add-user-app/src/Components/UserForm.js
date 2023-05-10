import { useState } from "react";
import styles from "./Styles/UserForm.module.css";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernametHandler = (event) => {
    event.preventDefault();
    setEnteredName(event.target.value);
  };

  const userAgeHandler = (event) => {
    event.preventDefault();
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      id: Math.random().toString(),
      userName: enteredName,
      userAge: enteredAge,
    };
    setEnteredName("");
    setEnteredAge("");

    props.onSaveUserData(userData);
  };

  return (
    <div className={styles.formSpace}>
      <form onSubmit={submitHandler}>
        <div>
          <div className={styles.form}>
            <label className={styles.label}>Username</label>
            <input
              value={enteredName}
              onChange={usernametHandler}
              className={styles.input}
              type="text"
            />
          </div>

          <div className={styles.form}>
            <label className={styles.label}>Age (Years)</label>
            <input
              value={enteredAge}
              onChange={userAgeHandler}
              className={styles.input}
              type="text"
            />
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
