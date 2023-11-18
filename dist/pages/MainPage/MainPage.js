import React from "react";
import styles from "./styles.module.scss";
import { HeaderComponent, FooterComponent, TripListComponent, } from "../../components";
var MainPage = function () {
    return (React.createElement("div", { className: styles.mainPageContainer },
        React.createElement(HeaderComponent, null),
        React.createElement(TripListComponent, null),
        React.createElement(FooterComponent, null)));
};
export { MainPage };
