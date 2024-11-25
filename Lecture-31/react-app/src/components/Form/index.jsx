import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../action";

const index = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    //Validation;
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(name));
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Name</label>
        <input
          type="text"
          placeholder="Please enter name"
          id="name"
          value={name}
          onChange={handleChange}
        />
        <button>Submit</button>

        <h2> Employee List</h2>
      </form>
    </>
  );
};

export default index;
