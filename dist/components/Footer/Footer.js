import React from "react";
import styles from "./styles.module.scss";
import { NavigationComponent } from "..";
import { MobileBannersUI, SocialsUI, PrivacyPolicyUI } from "../../ui";
var FooterComponent = function () {
    return (React.createElement("footer", { className: styles.footerContainer },
        React.createElement("div", { className: styles.footer },
            React.createElement(NavigationComponent, null),
            React.createElement(MobileBannersUI, null),
            React.createElement(SocialsUI, null),
            React.createElement(PrivacyPolicyUI, null))));
};
export { FooterComponent };
