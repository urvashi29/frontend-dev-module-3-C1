import React, { useCallback, useState } from "react";

const funcCount = new Set();

const index = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  const incremenetCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  const incremenetNum = useCallback(() => {
    setNum((prev) => prev + 1);
  }, [num]);

  // const incremenetCount = () => {
  //   setCount((prev) => prev + 2);
  // };

  // const incremenetNum = () => {
  //   setNum((prev) => prev + 1);
  // };

  funcCount.add(incremenetCount);
  funcCount.add(incremenetNum);

  return (
    <div>
      Count : {count} & {num}
      <p>{funcCount.size}</p>
      <button onClick={incremenetCount}>Increase Count</button>
      <button onClick={incremenetNum}>Increase Num</button>
    </div>
  );
};

export default index;
