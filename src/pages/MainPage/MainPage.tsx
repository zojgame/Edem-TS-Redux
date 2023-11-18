import styles from "./styles.module.scss";
import {
  HeaderComponent,
  FooterComponent,
  TripListComponent,
} from "../../components";

const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <HeaderComponent />
      <TripListComponent />
      <FooterComponent />
    </div>
  );
};
export { MainPage };
