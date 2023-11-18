import styles from "./styles.module.scss";
import { LogoUI } from "../../ui";
import { UserInfoComponent } from "../UserInfo/UserInfo";

const HeaderComponent = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <LogoUI />
        <UserInfoComponent />
      </div>
    </header>
  );
};
export { HeaderComponent };
