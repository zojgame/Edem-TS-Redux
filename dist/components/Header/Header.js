import React from "react";
import styles from "./styles.module.scss";
import { LogoUI } from "../../ui";
import { UserInfoComponent } from "../UserInfo/UserInfo";
var HeaderComponent = function () {
    return (React.createElement("header", { className: styles.headerContainer },
        React.createElement("div", { className: styles.header },
            React.createElement(LogoUI, null),
            React.createElement(UserInfoComponent, null))));
};
export { HeaderComponent };
