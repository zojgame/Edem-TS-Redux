import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { MainPage } from "./pages/MainPage/MainPage";
import "./index.css";
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(React.StrictMode, null,
    React.createElement(Provider, { store: store },
        React.createElement(MainPage, null))));
