import React from "react";
import styles from "./styles.module.scss";
var links = [
    { id: 1, title: "О проекте", link: "/.." },
    { id: 2, title: "Способы оплаты", link: "/.." },
    { id: 3, title: "Автовокзалы России", link: "/.." },
    { id: 4, title: "Популярные маршруты", link: "/.." },
    { id: 5, title: "Блог", link: "/.." },
    { id: 6, title: "Обратная связь", link: "/.." },
    { id: 7, title: "Автобусные направления", link: "/.." },
    { id: 8, title: "СМИ и Рекламодатели", link: "/.." },
    { id: 9, title: "Безопасность", link: "/.." },
    { id: 10, title: "Вопросы и ответы", link: "/.." },
    { id: 11, title: "Расписание автобусов", link: "/.." },
];
var NavigationComponent = function () {
    return (React.createElement("nav", { className: styles.navigation },
        React.createElement("div", { className: styles.column },
            React.createElement("div", null, "\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435"),
            React.createElement("div", null, "\u0411\u043B\u043E\u0433"),
            React.createElement("div", null, "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C")),
        React.createElement("div", { className: styles.column },
            React.createElement("div", null, "\u0421\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0442\u044B"),
            React.createElement("div", null, "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C"),
            React.createElement("div", null, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B")),
        React.createElement("div", { className: styles.column },
            React.createElement("div", null, "\u0410\u0432\u0442\u043E\u0432\u043E\u043A\u0437\u0430\u043B\u044B \u0420\u043E\u0441\u0441\u0438\u0438"),
            React.createElement("div", null, "\u0410\u0432\u0442\u043E\u0431\u0443\u0441\u043D\u044B\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"),
            React.createElement("div", null, "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0430\u0432\u0442\u043E\u0431\u0443\u0441\u043E\u0432")),
        React.createElement("div", { className: styles.column },
            React.createElement("div", null, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u044B"),
            React.createElement("div", null, "\u0421\u041C\u0418 \u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u043E\u0434\u0430\u0442\u0435\u043B\u0438"))));
};
export { NavigationComponent };
