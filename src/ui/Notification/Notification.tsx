import React from "react";
import styles from "./styles.module.scss";

interface INotifictionUI {
  notificationCount?: number;
}

const NotifictionUI = ({ notificationCount }: INotifictionUI) => {
  return (
    <div className={styles.notification}>
      {notificationCount && notificationCount > 0 ? (
        <div className={styles.count}>{notificationCount}</div>
      ) : (
        <></>
      )}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.89 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63001 5.36 6.00001 7.92 6.00001 11V16L4.71001 17.29C4.08001 17.92 4.52001 19 5.41001 19H18.58C19.47 19 19.92 17.92 19.29 17.29L18 16Z"
          fill="#0B1524"
          fillOpacity="0.46"
        />
      </svg>
    </div>
  );
};
export { NotifictionUI };
