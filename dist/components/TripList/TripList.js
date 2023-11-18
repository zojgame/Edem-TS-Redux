import React, { useEffect, useState } from "react";
import { fetchGetTrips } from "../../mockApi/mockApi";
import { useAppDispatch, useAppSelector } from "../../hooks";
// import { useAppDispatch } from "hooks/index";
import { getTrips, setTrips, addTrips } from "store";
import styles from "./styles.module.scss";
import { TripComponent } from "..";
var TripListComponent = function () {
    var trips = useAppSelector(getTrips);
    var dispatch = useAppDispatch();
    var _a = useState(true), isLoading = _a[0], setIsLoading = _a[1];
    var _b = useState(false), isFetching = _b[0], setIsFetching = _b[1];
    var _c = useState(false), isError = _c[0], setIsError = _c[1];
    var _d = useState(3), currentPage = _d[0], setCurrentPage = _d[1];
    useEffect(function () {
        setIsLoading(true);
        fetchGetTrips(1, 30).then(function (data) {
            setIsLoading(false);
            dispatch(setTrips(data));
        });
    }, [dispatch]);
    useEffect(function () {
        document.addEventListener("scroll", scrollHandler);
        return function () {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    useEffect(function () {
        if (isFetching) {
            var page_1 = currentPage + 1;
            fetchGetTrips(page_1, 10)
                .then(function (data) {
                dispatch(addTrips(data));
                setCurrentPage(page_1);
            })
                .catch(function (err) {
                if (err.status === 404) {
                    setIsError(true);
                    // console.log("err", err);
                }
            })
                .finally(function () { return setIsFetching(false); });
        }
    }, [currentPage, dispatch, isFetching]);
    var scrollHandler = function (e) {
        var windowHeight = window.innerHeight;
        var scrollHeight = e.target.documentElement.scrollHeight;
        var currentScroll = e.target.documentElement.scrollTop;
        if (scrollHeight - 200 <= currentScroll + windowHeight && !isError) {
            setIsFetching(true);
        }
    };
    return (React.createElement("div", { className: styles.tripListContainer },
        trips.length > 0 && !isLoading && (React.createElement("p", { className: styles.tripsCount },
            "\u041D\u0430\u0439\u0434\u0435\u043D\u043E: ",
            trips.length)),
        isLoading
            ? "loading..."
            : trips.map(function (trip) { return React.createElement(TripComponent, { trip: trip, key: trip.id }); }),
        isFetching && !isError && "loading..."));
};
export { TripListComponent };
