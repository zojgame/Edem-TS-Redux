import React from "react";
import { Toast } from "../../types";
import { ToastComponent } from "../Toast/Toast";
import styles from "./styles.module.scss";

interface IToastListComponent {
  removeToast: (toast: string) => void;
  data: Toast[];
}

const ToastListComponent = React.memo(
  ({ removeToast, data }: IToastListComponent) => {
    return (
      data.length > 0 && (
        <div className={styles.toastList} aria-live="assertive">
          {data.map((toast) => (
            <ToastComponent
              key={toast.id}
              message={toast.message}
              type={toast.type}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </div>
      )
    );
  }
);

export { ToastListComponent };
