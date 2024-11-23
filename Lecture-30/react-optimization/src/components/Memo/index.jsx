import React, { useMemo, useState } from "react";

const index = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  // without useMemo
  // const squaredNum = squareNum(num);

  // useMemo(() => {
  //   return function expensive()
  // }, [array dependecies])

  // using useMemo
  const squaredNum = useMemo(() => {
    return squareNum(num);
  }, [num]);

  const incrementCounter = () => {
    setCount((prev) => prev + 1);
  };

  const handleChange = (e) => {
    setNum(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Please enter Number"
        onChange={handleChange}
        value={num}
      />
      <p>{squaredNum}</p>

      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Inc Count</button>
    </>
  );
};

function squareNum(n) {
  console.log(n);
  return n * n;
}

export default index;
