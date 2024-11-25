import React from "react";

const index = () => {
  function throttle(fn, delay) {
    let run = false;
    return function (...args) {
      if (!run) {
        fn(...args);
        run = true;
        setTimeout(() => (run = false), delay);
      }
    };
  }

  const handleChange = () => {};

  return (
    <div>
      {/* <input type="text" onChange={handleChange} /> */}
      <input type="text" onChange={throttle(handleChange, 500)} />
    </div>
  );
};

export default index;
