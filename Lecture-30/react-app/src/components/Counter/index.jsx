import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../slices/counterSlice";
import {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
} from "../../slices/userSlice";

const index = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  const userData = useGetAllUsersQuery();
  const particularUser = useGetUserByIdQuery(6);

  console.log(userData);
  console.log(particularUser);

  const handleInc = () => {
    dispatch(increment());
  };

  const handleDec = () => {
    dispatch(decrement());
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
