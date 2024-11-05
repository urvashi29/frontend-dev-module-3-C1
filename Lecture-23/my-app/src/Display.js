import React from "react";

const Display = (props) => {
  console.log(props);
  const { firstName, employee } = props; //destructuring of objects

  return (
    <>
    <h2>Display</h2>
      <p>Hello, {firstName} </p>
      <p>
        {employee.map((emp) => {
          return <p> {emp.designation}</p>;
        })}
      </p>
    </>
  );
};

Display.defaultProps = {
  firstName: "alina",
  employee: [
    { id: 3, designation: "testing" },
    { id: 4, designation: "manager" },
  ],
};

export default Display;

// function Display() {

// }

// Display(firstName, emp)
