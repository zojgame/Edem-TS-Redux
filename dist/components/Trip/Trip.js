import React from "react";
import styles from "./styles.module.scss";
var TripComponent = function (_a) {
    var trip = _a.trip;
    return (React.createElement("div", { className: styles.tripContainer },
        React.createElement("div", { className: styles.image },
            React.createElement("img", { src: trip.image, alt: trip.title })),
        React.createElement("div", { className: styles.tripInfoContainer },
            React.createElement("div", { className: styles.titleAndPriceContainer },
                React.createElement("div", { className: styles.title }, trip.title),
                React.createElement("div", { className: styles.priceContainer },
                    React.createElement("div", null, "\u0417\u0430 1 \u0447\u0430\u0441"),
                    React.createElement("div", { className: styles.price },
                        "\u043E\u0442 ",
                        trip.price,
                        " \u20BD"))),
            React.createElement("div", { className: styles.locationAndDateContainer },
                React.createElement("div", { className: styles.location },
                    React.createElement("svg", { width: "16", height: "20", viewBox: "0 0 16 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("path", { d: "M7.26758 19.0088C7.59717 19.5215 8.36621 19.5215 8.6958 19.0088C14.0425 11.3184 15.0312 10.5127 15.0312 7.65625C15.0312 3.77441 11.8818 0.625 8 0.625C4.08154 0.625 0.96875 3.77441 0.96875 7.65625C0.96875 10.5127 1.9209 11.3184 7.26758 19.0088Z", fill: "#01B4A8" })),
                    trip.location),
                React.createElement("div", { className: styles.date }, trip.date)),
            React.createElement("div", { className: styles.cargoType },
                React.createElement("div", { className: styles.title },
                    React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("path", { d: "M8.82585 2.09416C9.57886 1.78886 10.4212 1.78886 11.1742 2.09416L17.4225 4.6275C17.6917 4.73651 17.9221 4.9234 18.0844 5.16421C18.2467 5.40501 18.3334 5.68878 18.3334 5.97916V14.0233C18.3332 14.3136 18.2464 14.5972 18.0842 14.8378C17.9219 15.0784 17.6915 15.2652 17.4225 15.3742L11.1742 17.9075C10.4212 18.2128 9.57886 18.2128 8.82585 17.9075L2.57752 15.3742C2.30838 15.2651 2.07791 15.0783 1.91564 14.8375C1.75337 14.5966 1.66669 14.3129 1.66669 14.0225V5.98C1.66669 5.68962 1.75337 5.40585 1.91564 5.16504C2.07791 4.92423 2.30838 4.73735 2.57752 4.62833L8.82585 2.095V2.09416ZM10.7042 3.2525C10.2526 3.0695 9.74746 3.0695 9.29585 3.2525L7.70002 3.9L13.9725 6.33916L16.1967 5.48083L10.7034 3.25333L10.7042 3.2525ZM12.2425 7.00666L6.01252 4.58333L3.82502 5.47L10.0009 7.87166L12.2425 7.00666ZM2.91669 14.0233C2.9168 14.0647 2.92922 14.1051 2.95237 14.1394C2.97552 14.1737 3.00835 14.2003 3.04669 14.2158L9.29585 16.7492C9.32169 16.76 9.34835 16.77 9.37502 16.7792V8.97L2.91669 6.45833V14.0233ZM10.7042 16.7492L16.9534 14.2158C16.9918 14.2002 17.0247 14.1735 17.0479 14.139C17.0711 14.1046 17.0834 14.064 17.0834 14.0225V6.47833L10.625 8.97166V16.78C10.6516 16.7706 10.678 16.7606 10.7042 16.75V16.7492Z", fill: "#0B1524", fillOpacity: "0.66" })),
                    "\u0422\u0438\u043F \u0433\u0440\u0443\u0437\u0430:"),
                React.createElement("div", { className: styles.cargoTypeItems },
                    trip.cargoType.slice(0, 3).join(", "),
                    trip.cargoType.slice(3).length > 0 ? (React.createElement(React.Fragment, null,
                        " и",
                        React.createElement("div", { className: styles.anotherType },
                            "\u0435\u0449\u0435 ",
                            trip.cargoType.slice(3).length,
                            " \u0442\u0438\u043F\u043E\u0432"))) : (React.createElement(React.Fragment, null)))))));
};
export { TripComponent };
