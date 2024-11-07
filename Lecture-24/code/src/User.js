import React, { useState } from "react";

const User = () => {
  // [state varaible, method to update it]
  const [firstName, setFirstName] = useState("alina");
  const [age, setAge] = useState(20);
  const [person, setPerson] = useState({
    designation: "developer",
    city: "pune",
  });

  const [isLogged, setIsLogged] = useState(true);

  const [arr, setArr] = useState([90, 29, 39]);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "alex",
    },
    {
      id: 2,
      name: "harry",
    },
  ]);

  const handleUpdate = () => {
    setFirstName("harry");
    setAge(30);
    setPerson({ ...person, designation: "manager" });
    setArr([...arr, 100, 29]);

    let newUsers = [...users];
    newUsers[0].name = "Alaya";
    setUsers(newUsers);
  };

  return (
    <>
      <p>FirstName: {firstName}</p>
      <p>Age: {age}</p>
      <p>
        Person: {person.designation}, {person.city}
      </p>
      <p>{arr.map((item) => item)}</p>
      <p>
        {users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </p>

      <button onClick={handleUpdate}>Update</button>
    </>
  );
};

export default User;

// {
//     designation: "a",city: "pune"
// }

// // update
// {
//     designation: "b", city: "banglore"
// }

// // replace
// {
//     designation: "manager"
// }
