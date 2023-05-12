import styles from "./Styles/UserInfo.module.css";

const UserInfo = (props) => {
  const deleteUserHandler = () => {
    props.onDeleteUser(props.userId);
  };

  return (
    <div className={styles.userInfoSpace}>
      <div onClick={deleteUserHandler} className={styles.userInfoBorder}>
        {props.userName} ({props.userAge} years old)
      </div>
    </div>
  );
};

export default UserInfo;
