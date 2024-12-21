import { connectToDatabase } from "@/mongo";
import React from "react";

const Home = ({ users }) => {
  //display the users
  return <></>
};

export default Home;

export async function getServerSideProps() {
  const client = await connectToDatabase();
  const db = client.db();
  const usersCollection = db.collection("users");
  const users = await usersCollection.find().toArray();

  let usersData = users.map((user) => ({
    id: user._id.toString(),
    name: user.name,
    email: user.email,
  }));

  return {
    props: {
      users: usersData,
    },
  };
}
