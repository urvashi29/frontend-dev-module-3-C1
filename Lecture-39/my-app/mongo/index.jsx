import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect("mongodb://localhost:27017"); //get the connect string link from mondisb compass
  return client;
}
