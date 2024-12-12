import Link from "next/link";
import React from "react";

const Users = ({ users }) => {
  const userList = users.map((user) => {
    return (
      <p>
        <Link href={`/Users/${user.id}`}>{user.name}</Link>
      </p>
    );
  });
  return <>{userList}</>;
};

export default Users;

//server end
export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
