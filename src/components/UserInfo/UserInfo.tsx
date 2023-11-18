import { ChatUI, UserProfileUI, NotifictionUI } from "../../ui";
import styles from "./styles.module.scss";

const UserInfoComponent = () => {
  return (
    <div className={styles.userInfo}>
      <ChatUI />
      <NotifictionUI notificationCount={54} />
      <UserProfileUI />
    </div>
  );
};
export { UserInfoComponent };
