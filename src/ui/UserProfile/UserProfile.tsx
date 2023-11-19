import styles from "./styles.module.scss";

const UserProfileUI = () => {
  const userPhotoPath = "images/user.png";
  return (
    <div className={styles.profile}>
      <img src={userPhotoPath} alt="user" />
      <div className={styles.username}>
        <p>Оксана</p>
      </div>
    </div>
  );
};

export { UserProfileUI };
