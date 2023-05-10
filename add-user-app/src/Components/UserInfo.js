import styles from "./Styles/UserInfo.module.css";

const UserInfo = (props) => {
  return (
    <div>
      <div className={styles.userInfoSpace}>
        <div className={styles.userInfoBorder}>
          {props.userName} ({props.userAge} years old)
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
