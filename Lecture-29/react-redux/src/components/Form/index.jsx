import React, { useState } from "react";
import { createUser } from "../../action";
import { useDispatch, useSelector } from "react-redux";

const index = () => {
  const users = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    //validation
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(name));
    setName("");
  };

  const handleDelete = (id) => {
    //
  };

  const userList = users.length ? (
    users.map((user) => {
      return (
        <ul key={user.id}>
          <li>
            {user.name} <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        </ul>
      );
    })
  ) : (
    <p>No Users Data</p>
  );

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

        <h2> User List</h2>
        {userList}
      </form>
    </>
  );
};

export default index;
