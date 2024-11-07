import React from "react";
import User from "./User";
import Counter from "./Counter";
import Search from "./Search";

const App = () => {
  return (
    <>
      <User />
      <Counter />
      <Search />
    </>
  );
};

export default App;

// const obj = {
//   x: "abc", y: "pqr"
// }

//shallow copy
// const objTwo = obj;
// objTwo.x = "xyz";
// console.log(obj, objTwo);

//deep copy
// const objTwo = {...obj, x: "xyz", z: "jfi"} ;
// console.log(obj, objTwo);
