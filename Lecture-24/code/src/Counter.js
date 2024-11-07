import React, { useState } from "react";

const Counter = () => {
  // state variable vs normal variable
  //   const count = 0;

  // const handleCount = () => {
  //     console.log(count + 1);
  // };

  const [counter, setCounter] = useState(0);

  const handleDec = () => {
    setCounter((counter) => {
      return counter - 1;
    });

    console.log(counter); //
  };

  const handleInc = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h2>Counter App</h2>
      <button onClick={handleDec}>-</button>
      <p>{counter}</p>
      <button onClick={handleInc}>+</button>

      {/* <button onClick={handleCount}>+</button> */}
    </>
  );
};

export default Counter;
