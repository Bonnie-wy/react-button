import React from "react";
import styles from "./Button.module.css";

function Button({
  type = "button",
  children,
  onClick,
  color = "button--primary",
}) {
  return (
    <button
      className={`${styles.button} ${styles[color]}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
