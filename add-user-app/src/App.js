import React, { useState } from "react";
import UserForm from "./Components/UserForm";
import UserList from "./Components/Userlist";
import Error from "./Components/UI/Error";

const USERS_LIST_INITIAL = [
  {
    id: Math.random().toString(),
    userName: "Franek",
    userAge: "22",
  },
];

function App() {
  const [newUser, setNewUser] = useState(USERS_LIST_INITIAL);
  const [errorState, setErrorState] = useState();

  const saveUserDataHandler = (enteredUserData) => {
    if (
      enteredUserData.userAge <= 0 ||
      enteredUserData.userAge.trim() === 0 ||
      isNaN(Number(enteredUserData.userAge))
    ) {
      setErrorState({
        title: "Invalid age",
        message: "Age must be a number",
      });
    }

    setNewUser((prevUsers) => {
      return [...prevUsers, enteredUserData];
    });
  };

  const removeErrorHandler = () => {
    setErrorState("");
  };

  return (
    <div>
      {errorState && (
        <Error
          errorRemover={removeErrorHandler}
          title={errorState.title}
          message={errorState.message}
        />
      )}
      <UserForm onSaveUserData={saveUserDataHandler} />
      <UserList users={newUser} />
    </div>
  );
}

export default App;
