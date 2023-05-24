import React, { useState } from "react";
import UserForm from "./Components/UserForm";
import UserList from "./Components/Userlist";
import Error from "./Components/UI/Error";
import EmptyList from "./Components/EmptyList";
import Wrapper from "./Components/Helpers/Wrapper";

const USERS_LIST_INITIAL = [
  {
    id: Math.random().toString(),
    userName: "Scot",
    userAge: "22",
  },
];

function App() {
  const [newUser, setNewUser] = useState(USERS_LIST_INITIAL);
  const [errorState, setErrorState] = useState(false);
  const [emptyList, setEmptyList] = useState(false);

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

  const SaveUserDataHandler = (enteredUserData) => {
    if (typeof newUser === "undefined") {
      setNewUser([]);
    }
    setEmptyList(false);
    setNewUser((prevUsers) => {
      return [...prevUsers, enteredUserData];
    });
  };

  const invalidInputHandler = (error) => {
    setErrorState(error);
  };

  const removeErrorHandler = () => {
    setErrorState(false);
  };

  const userListDisplay = emptyList ? (
    <EmptyList />
  ) : (
    <UserList users={newUser} onDeleteUser={deleteUserHandler} />
  );

  return (
    <Wrapper>
      {errorState && (
        <Error
          onRemoveError={removeErrorHandler}
          title={errorState.title}
          message={errorState.message}
        />
      )}
      <UserForm
        onSaveUserData={SaveUserDataHandler}
        onInvalidInput={invalidInputHandler}
      />
      {userListDisplay}
    </Wrapper>
  );
}

export default App;
