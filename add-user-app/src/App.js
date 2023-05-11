import React, { useState } from "react";
import UserForm from "./Components/UserForm";
import UserList from "./Components/Userlist";
import Error from "./Components/UI/Error";
import EmptyList from "./Components/EmptyList";

const USERS_LIST_INITIAL = [
  {
    id: Math.random().toString(),
    userName: "Franek",
    userAge: "22",
  },
];

function App() {
  const [newUser, setNewUser] = useState(USERS_LIST_INITIAL);
  const [errorState, setErrorState] = useState("");
  const [emptyList, setEmptyList] = useState(false);
  const [nameInputClearer, setNameInputClearer] = useState(false);
  const [ageInputClearer, setAgeInputClearer] = useState(false);

  const deleteUserHandler = (userId) => {
    setNewUser((prevUsers) => {
      const users = [...prevUsers].filter((user) => user.id !== userId);
      if (users.length === 0) {
        setEmptyList(true);
      } else {
        return users;
      }
    });
  };

  const errorStateHandler = (error) => {
    setErrorState(error);
    console.log(errorState);
  };

  // const isUserDataValid = (enteredUserData) => {
  //   if (enteredUserData.userName.toString().trim().length === 0) {
  //     setErrorState({
  //       title: "Invalid Name",
  //       message: "Name field cannot be empty",
  //     });
  //     setNameInputClearer(true);
  //     return false;
  //   } else if (
  //     enteredUserData.userAge <= 0 ||
  //     enteredUserData.userAge.trim() === 0 ||
  //     isNaN(Number(enteredUserData.userAge))
  //   ) {
  //     setErrorState({
  //       title: "Invalid age",
  //       message: "Age must be a number",
  //     });
  //     setAgeInputClearer(true);
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  const SaveUserDataHandler = (enteredUserData) => {
    if (typeof newUser === "undefined") {
      setNewUser([]);
    } else {
      setEmptyList(false);
      setNewUser((prevUsers) => {
        return [...prevUsers, enteredUserData];
      });
    }
  };

  const removeErrorHandler = () => {
    setErrorState("");
  };

  const emptyListSytuation = emptyList ? (
    <EmptyList />
  ) : (
    <UserList users={newUser} deleteUser={deleteUserHandler} />
  );

  return (
    <div>
      {errorState && (
        <Error
          errorRemover={removeErrorHandler}
          title={errorState.title}
          message={errorState.message}
        />
      )}
      <UserForm
        onSaveUserData={SaveUserDataHandler}
        errorState={errorStateHandler}
      />
      {emptyListSytuation}
    </div>
  );
}

export default App;
