import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    fetch("/api/getuser").then(async (res) => {
      const response = await res.json();
      if (!response.loggedIn) {
        router.push("/login");
      } else {
        setUser(res);
        console.log(response);
      }
    });
  }, []);

  const logout = async () => {
    const response = await fetch("/api/logout");
    console.log(response);
    router.push("/login");
  };

  return (
    <>
      Name: user {user?.name}
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Home;
