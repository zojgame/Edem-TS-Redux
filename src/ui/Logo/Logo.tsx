import React from "react";
import styles from "./styles.module.scss";

const LogoUI = () => {
  const logoPath = "/images/Logotype.png";
  return (
    <div className={styles.logo}>
      <img src={logoPath} alt="logo" />
      <div className={styles.tagline}>Лучший способ путешествовать дешевле</div>
    </div>
  );
};

export { LogoUI };
