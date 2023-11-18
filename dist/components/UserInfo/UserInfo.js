import React from "react";
import { ChatUI, UserProfileUI, NotifictionUI } from "../../ui";
import styles from "./styles.module.scss";
var UserInfoComponent = function () {
    return (React.createElement("div", { className: styles.userInfo },
        React.createElement(ChatUI, null),
        React.createElement(NotifictionUI, { notificationCount: 54 }),
        React.createElement(UserProfileUI, null)));
};
export { UserInfoComponent };
