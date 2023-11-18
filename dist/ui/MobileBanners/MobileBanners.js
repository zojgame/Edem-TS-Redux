import React from "react";
import styles from "./styles.module.scss";
var MobileBannersUI = function () {
    return (React.createElement("div", { className: styles.banners },
        React.createElement("img", { src: "images/GooglePlay.png", alt: "google play banner" }),
        React.createElement("img", { src: "images/AppStore.png", alt: "app store banner" })));
};
export { MobileBannersUI };
