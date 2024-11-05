import React, { useState } from "react";

const Hook = () => {
  // [state variable, method to update it]
  const [firstName, setFirstName] = useState("Alaya");
  const [age, setAge] = useState(20);

  const [person, setPerson] = useState({
    designation: "developer",
    salary: 909090,
  });

  const [arr, setArr] = useState([90, 28, 48]);

  return (
    <>
    <h2>Hook</h2>
      <p>{firstName}</p>
      <p>{age}</p>
      <p>{person.designation}</p>
      <p>{person.salary}</p>
    </>
  );
};

export default Hook;
