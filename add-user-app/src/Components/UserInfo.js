import styles from "./Styles/UserInfo.module.css";

const UserInfo = (props) => {
  const deleteHandler = () => {
    props.deleteUser(props.userId);
  };

  return (
    <div>
      <div className={styles.userInfoSpace}>
        <div onClick={deleteHandler} className={styles.userInfoBorder}>
          {props.userName} ({props.userAge} years old)
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
