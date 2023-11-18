import React from "react";
import styles from "./styles.module.scss";
import { OkIconUI, TelegramIconUI, VkIconUI } from "..";
var SocialsUI = function () {
    return (React.createElement("div", { className: styles.socials },
        React.createElement(VkIconUI, null),
        React.createElement(OkIconUI, null),
        React.createElement(TelegramIconUI, null)));
};
export { SocialsUI };
