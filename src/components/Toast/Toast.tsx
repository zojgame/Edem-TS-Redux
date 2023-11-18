import styles from "./styles.module.scss";

interface IToastComponent {
  message: string;
  type: string;
  onClose: () => void;
}

const ToastComponent = ({ message, onClose }: IToastComponent) => {
  return (
    <div className={styles.toast}>
      <div>
        <p>{message}</p>
      </div>
      <button className={styles.toastCloseBtn} onClick={onClose}>
        <span>
          <div>x</div>
        </span>
      </button>
    </div>
  );
};

export { ToastComponent };
