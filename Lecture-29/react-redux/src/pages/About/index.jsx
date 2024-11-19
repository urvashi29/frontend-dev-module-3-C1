import React, { useState } from "react";
import styles from "./styles.module.css";
import Counter from "../../components/Counter";
import { useSelector } from "react-redux";

const index = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <>
      <div className={styles.sample}>Counter</div>
      <Counter counter={counter} />
    </>
  );
};

export default index;

