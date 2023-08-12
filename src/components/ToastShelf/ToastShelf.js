import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import ToastProvider from "../ToastProvider/ToastProvider";

function ToastShelf({ toasts, onDismiss }) {
  return (
    <ToastProvider value={{ onDismiss }}>
      <ol className={styles.wrapper}>
        {toasts?.map(({ uuid, variant, message }, index) => (
          <li key={index} className={styles.toastWrapper}>
            <Toast variant={variant} uuid={uuid}>
              {message}
            </Toast>
          </li>
        ))}
      </ol>
    </ToastProvider>
  );
}

export default ToastShelf;
