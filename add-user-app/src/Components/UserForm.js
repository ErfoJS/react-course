import { useState } from "react";
import styles from "./Styles/UserForm.module.css";
import Button from "../Components/UI/Button";

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
    if (UserDataValidation(props, userData)) {
      props.onSaveUserData(userData);
      setEnteredAge("");
      setEnteredName("");
    }
  };

  const UserDataValidation = (props, userData) => {
    if (userData.userName.toString().trim().length === 0) {
      props.onInvalidInput({
        title: "Invalid Name",
        message: "Name field cannot be empty",
      });
      setEnteredName("");
    } else if (
      userData.userAge <= 0 ||
      userData.userAge.trim() === 0 ||
      isNaN(Number(userData.userAge))
    ) {
      props.onInvalidInput({
        title: "Invalid age",
        message: "Age must be a number",
      });
      setEnteredAge("");
    } else {
      return true;
    }
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
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
