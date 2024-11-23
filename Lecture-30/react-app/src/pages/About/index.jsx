import React, { useState } from "react";
import styles from "./styles.module.css";
import Counter from "../../components/Counter";

const index = () => {
  return (
    <>
      <div className={styles.sample}>Counter</div>
      <Counter />
    </>
  );
};

export default index;
