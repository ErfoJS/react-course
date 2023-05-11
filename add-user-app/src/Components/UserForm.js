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

  // const isUserDataValid = (props) => {
  //   if (enteredUserData.userName.toString().trim().length === 0) {
  //     props.errorState({
  //       title: "Invalid Name",
  //       message: "Name field cannot be empty",
  //     });
  //   } else if (
  //     enteredUserData.userAge <= 0 ||
  //     enteredUserData.userAge.trim() === 0 ||
  //     isNaN(Number(enteredUserData.userAge))
  //   ) {
  //     props.errorState({
  //       title: "Invalid age",
  //       message: "Age must be a number",
  //     });
  //   } else {
  //     return true;
  //   }
  // };

  // const clearRightInputHandler = (props) => {
  //   if (props.nameInputClearing) {
  //     setEnteredName("");
  //   }
  //   if (props.ageInputClearing) {
  //     setEnteredAge("");
  //   } else {
  //     setEnteredAge("");
  //     setEnteredName("");
  //   }
  //   console.log(props.nameInputClearing);
  //   console.log(props.ageInputClearing);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      id: Math.random().toString(),
      userName: enteredName,
      userAge: enteredAge,
    };

    const isUserDataValid = (props) => {
      if (userData.userName.toString().trim().length === 0) {
        props.errorState({
          title: "Invalid Name",
          message: "Name field cannot be empty",
        });
        setEnteredName("");
      } else if (
        userData.userAge <= 0 ||
        userData.userAge.trim() === 0 ||
        isNaN(Number(userData.userAge))
      ) {
        props.errorState({
          title: "Invalid age",
          message: "Age must be a number",
        });
        setEnteredAge("");
      } else {
        props.onSaveUserData(userData);
        setEnteredAge("");
        setEnteredName("");
      }
    };
    isUserDataValid(props);
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
