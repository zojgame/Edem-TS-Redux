import styles from "./styles.module.scss";

const PrivacyPolicyUI = () => {
  return (
    <div className={styles.privacyPolicy}>
      <div className={styles.copyright}>© 2022 ООО «КОНТЕНТ»</div>
      <div className={styles.link}>Политика конфиденциальности</div>
      <div className={styles.link}>Пользовательское соглашение</div>
    </div>
  );
};

export { PrivacyPolicyUI };
