import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children, value }) {
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
