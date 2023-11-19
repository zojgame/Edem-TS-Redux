import { useEffect, useState } from "react";
import { fetchGetTrips } from "../../mockApi/mockApi";
import { useAppDispatch, useAppSelector, useToast } from "../../hooks";
import { getTrips, setTrips, addTrips } from "../../store";
import { ToastListComponent, TripComponent } from "..";
import styles from "./styles.module.scss";

function findWordEnding(count: number) {
  const remainder = count % 10;
  if (remainder >= 2 && remainder <= 4 && !(count >= 12 && count <= 14)) {
    return `${count} грузоперевозки`;
  }
  if (count % 10 === 1 && count !== 11) {
    return `${count} грузоперевозка`;
  }
  return `${count} грузоперевозок`;
}

const TripListComponent = () => {
  const trips = useAppSelector(getTrips);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(3);
  const tripCount = findWordEnding(trips.length);
  const { toasts, showToast, removeToast } = useToast();

  useEffect(() => {
    setIsLoading(true);

    fetchGetTrips(1, 30).then((data) => {
      setIsLoading(false);
      dispatch(setTrips(data));
    });
  }, [dispatch]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (isFetching && !isError && !isLoading) {
      const page = currentPage + 1;
      fetchGetTrips(page, 10)
        .then((data) => {
          dispatch(addTrips(data));
          setCurrentPage(page);
        })
        .catch((err) => {
          if (err.status === 404) {
            setIsError(true);
            showToast(err.errorMessage);
          }
        })
        .finally(() => setIsFetching(false));
    } else {
      setIsFetching(false);
    }
  }, [isFetching]);

  const scrollHandler = (e: Event) => {
    if (e.target instanceof Document) {
      const windowHeight = window.innerHeight;
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentScroll = e.target.documentElement.scrollTop;
      if (scrollHeight - 200 <= currentScroll + windowHeight && !isError) {
        setIsFetching(true);
      }
    }
  };

  return (
    <div className={styles.tripListContainer}>
      {trips.length > 0 && !isLoading && (
        <h3 className={styles.tripsCount}>Найдено: {tripCount}</h3>
      )}
      {isLoading
        ? "загрузка..."
        : trips.map((trip) => <TripComponent trip={trip} key={trip.id} />)}
      {isFetching && !isError && "загрузка..."}
      <ToastListComponent removeToast={removeToast} data={toasts} />
    </div>
  );
};

export { TripListComponent };
