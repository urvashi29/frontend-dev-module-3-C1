import React, { useState } from "react";

const index = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 data-testid="counter">{counter}</h1>
      <button onClick={() => setCounter(counter + 1)} data-testid="button-up">
        Up
      </button>
      <button onClick={() => setCounter(counter - 1)} data-testid="button-down">
        Down
      </button>
    </div>
  );
};

export default index;
