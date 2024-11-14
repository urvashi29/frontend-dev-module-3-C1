import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

const UseEffect = () => {
  const [name, setName] = useState("alina");
  const [users, setUsers] = useState([]);

  //componentDidMount
  useEffect(() => {
    //API calls
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      console.log(response);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  //componentDidUpdate
  //   useEffect(() => {
  //     //POST request
  //     console.log("data updated");
  //   }, [name]);

  //componentWillUnmount
  //   useEffect(() => {
  //     let id = setTimeout(() => {
  //       console.log("hello");
  //     }, 1000);

  //     return () => {
  //       //   ele.removeListerner()
  //       console.log("clearTime Out ");
  //     };
  //   }, [name]);

  return (
    <div>
      {users.length ? (
        users.map((user) => {
          return <p key={user.id}>{user.email}</p>;
        })
      ) : (
        <p>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </p>
      )}

      <button onClick={() => setName("Harry")}>Update</button>
    </div>
  );
};

export default UseEffect;
