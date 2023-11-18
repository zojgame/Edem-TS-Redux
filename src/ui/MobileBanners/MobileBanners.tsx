import React from "react";
import styles from "./styles.module.scss";

const MobileBannersUI = () => {
  return (
    <div className={styles.banners}>
      <img src="images/GooglePlay.png" alt="google play banner" />
      <img src="images/AppStore.png" alt="app store banner" />
    </div>
  );
};
export { MobileBannersUI };
