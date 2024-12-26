import { data } from "@/data";
import { withSession } from "@/session";

const handler = async function (req, res) {
  console.log("login api called");
  res.status(200);

  let requestBody = JSON.parse(req.body);
  const { userName, password } = requestBody;

  const user = data.find((item) => item.username == userName);
  if (user && user.password == password) {
    //setting the session
    req.session.set("user", "user");//manually 
    await req.session.save();
    res.status(200).json({ message: "user authenticated" });
  } else {
    res.status(403).json({ message: "user not authenticated" });
  }
};

export default withSession(handler);
