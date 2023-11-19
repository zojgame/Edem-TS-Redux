import styles from "./styles.module.scss";
import { NavigationComponent } from "..";
import { MobileBannersUI, SocialsUI, PrivacyPolicyUI } from "../../ui";

const FooterComponent = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <NavigationComponent />
        <MobileBannersUI />
        <SocialsUI />
        <PrivacyPolicyUI />
      </div>
    </footer>
  );
};

export { FooterComponent };
