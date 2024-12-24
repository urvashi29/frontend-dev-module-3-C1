import { data } from "@/data";

export default async function handler(req, res) {
  console.log("login api called");
  res.status(200);

  console.log(JSON.parse(req.body));
  const { userName, password } = req.body;

  const user = data.find((item) => item.username == userName);
  if (user && user.password == password) {
    res.status(200).json({ message: "user authenticated" });
  } else {
    res.status(403).json({ message: "user not authenticated" });
  }
}
