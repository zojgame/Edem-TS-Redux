import React from "react";
import styles from "./styles.module.scss";
var UserProfileUI = function () {
    var userPhotoPath = "images/user.png";
    return (React.createElement("div", { className: styles.profile },
        React.createElement("img", { src: userPhotoPath, alt: "user" }),
        React.createElement("div", { className: styles.username },
            React.createElement("p", null, "\u041E\u043A\u0441\u0430\u043D\u0430"))));
};
export { UserProfileUI };
