import React from "react";
import styles from "./styles.module.scss";
var LogoUI = function () {
    var logoPath = "/images/Logotype.png";
    return (React.createElement("div", { className: styles.logo },
        React.createElement("img", { src: logoPath, alt: "logo" }),
        React.createElement("div", { className: styles.tagline }, "\u041B\u0443\u0447\u0448\u0438\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0434\u0435\u0448\u0435\u0432\u043B\u0435")));
};
export { LogoUI };
