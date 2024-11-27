import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onDec, onInc } from "../../action";

const index = () => {
  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(onInc());
  };

  const decrement = () => {
    dispatch(onDec());
  };

  return (
    <div>
      <h1 data-testid="counter">{count}</h1>
      <button data-testid="button-up" onClick={increment}>
        Up
      </button>
      <button data-testid="button-down" onClick={decrement}>
        Down
      </button>
    </div>
  );
};

export default index;
