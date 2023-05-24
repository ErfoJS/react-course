import { useState, useRef } from "react";
import styles from "./Styles/UserForm.module.css";
import Button from "../Components/UI/Button";

const UserForm = (props) => {
  const enteredNameRef = useRef();
  const enteredAgeRef = useRef();

  const UserDataValidation = (props, userData) => {
    if (userData.userName.toString().trim().length === 0) {
      props.onInvalidInput({
        title: "Invalid Name",
        message: "Name field cannot be empty",
      });
    } else if (
      userData.userAge <= 0 ||
      userData.userAge.trim() === 0 ||
      isNaN(Number(userData.userAge))
    ) {
      props.onInvalidInput({
        title: "Invalid age",
        message: "Age must be a number",
      });
    } else {
      return true;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      id: Math.random().toString(),
      userName: enteredNameRef.current.value,
      userAge: enteredAgeRef.current.value,
    };
    if (UserDataValidation(props, userData)) {
      props.onSaveUserData(userData);
    }
    enteredAgeRef.current.value = "";
    enteredNameRef.current.value = "";
  };

  return (
    <div className={styles.formSpace}>
      <form onSubmit={submitHandler}>
        <div>
          <div className={styles.form}>
            <label className={styles.label}>Username</label>
            <input className={styles.input} type="text" ref={enteredNameRef} />
          </div>

          <div className={styles.form}>
            <label className={styles.label}>Age (Years)</label>
            <input className={styles.input} type="text" ref={enteredAgeRef} />
          </div>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
