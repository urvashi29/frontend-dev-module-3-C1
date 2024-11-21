import React, { useState } from "react";
import styles from "./styles.module.css";
import Counter from "../../components/Counter";
import { useSelector } from "react-redux";
import Posts from "../../components/Posts";
import Form from "../../components/Form";

const index = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <>
      <div className={styles.sample}>Counter</div>
      <Counter counter={counter} />
      <Posts />
      <Form />
    </>
  );
};

export default index;
