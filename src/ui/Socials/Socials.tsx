import React from "react";
import styles from "./styles.module.scss";
import { OkIconUI, TelegramIconUI, VkIconUI } from "..";

const SocialsUI = () => {
  return (
    <div className={styles.socials}>
      <VkIconUI />
      <OkIconUI />
      <TelegramIconUI />
    </div>
  );
};
export { SocialsUI };
