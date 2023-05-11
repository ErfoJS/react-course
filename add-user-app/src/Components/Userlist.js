import UserInfo from "./UserInfo";
import styles from "./Styles/UserList.module.css";

const UserList = (props) => {
  return (
    <div className={styles.userList}>
      {props.users.map((user) => (
        <UserInfo
          userName={user.userName}
          userAge={user.userAge}
          userId={user.id}
          key={Math.random().toString()}
          deleteUser={props.deleteUser}
        />
      ))}
    </div>
  );
};

export default UserList;
