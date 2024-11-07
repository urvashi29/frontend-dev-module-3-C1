import React, { useState } from "react";
import ColorChange from "./ColorChange";

const Search = () => {
  const fruits = [
    "apple",
    "mango",
    "orange",
    "banana",
    "strawberry",
    "watermelon",
  ];

  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    //capture user input
    console.log(e);
    console.log(e.target.value);
    setUserInput(e.target.value);
  };

  const filteredFruits = fruits.filter((fruit) => {
    return fruit.toLowerCase().includes(userInput.toLowerCase());
  });

  return (
    <>
      <h2>Search Fruits</h2>
      <input
        type="text"
        placeholder="Search..."
        id="fruit"
        onChange={handleChange}
      />

      <ul>
        {filteredFruits.map((fruit) => {
          return <li key={fruit}>{fruit}</li>;
        })}
      </ul>
    </>
  );
};

export default ColorChange(Search);


