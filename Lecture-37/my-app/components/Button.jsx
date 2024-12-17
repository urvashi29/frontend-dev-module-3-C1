import React from "react";
import styles from "@/styles/Button.module.css";

const Button = ({ children }) => {
  console.log(children);
  
  return <button className={styles.styleButton}>{children}</button>;
};

export default Button;
