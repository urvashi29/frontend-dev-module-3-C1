import React from "react";
import { onInc, onDec } from "../../action";
import { useDispatch } from "react-redux";

const index = ({ counter }) => {
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(onInc(1));
  };

  const handleDec = () => {
    dispatch(onDec(1));
  };

  return (
    <>
      <button onClick={handleInc}>+</button>
      {counter}
      <button onClick={handleDec}>-</button>
    </>
  );
};

export default index;
