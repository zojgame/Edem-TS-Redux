import { nanoid } from "nanoid";
import { useCallback, useState } from "react";
import { Toast } from "../types";

const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string) => {
    const toast: Toast = {
      id: nanoid(),
      message,
      type: "failure",
    };

    setToasts((prevToasts) => [...prevToasts, toast]);

    setTimeout(() => {
      removeToast(toast.id);
    }, 3 * 1000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return { toasts, setToasts, showToast, removeToast };
};

export { useToast };
