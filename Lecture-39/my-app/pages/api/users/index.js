import { connectToDatabase } from "@/mongo";

export default async function handler(req, res) {
  //   console.log(req.query);
  // if (req.method === "GET") {
  //   res.status(200).json({ name: "Success" });
  // } else {
  //   res.status(200).json({ name: "Not Found!" });
  // }

  const client = await connectToDatabase();
  const db = client.db();
  const usersCollection = db.collection("users");
  const users = await usersCollection.find().toArray();

  res.status(200).json(users);
}
