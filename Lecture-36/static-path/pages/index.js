import Link from "next/link";
import React from "react";

export default function Home({ users }) {
  const userList = users.length ? (
    users.map((user) => (
      <p>
        <Link href={`${user.id}`}>{user.name}</Link>
      </p>
    ))
  ) : (
    <p>No Post Yet!</p>
  );

  return <div>{userList}</div>;
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
