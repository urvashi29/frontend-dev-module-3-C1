import { useRouter } from "next/router";
import React, { useState } from "react";

const login = () => {
  const [userName, setuserName] = useState(null);
  const [password, setPassword] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userName, password);
    try {
      const res = await fetch("/api/login", {
        body: JSON.stringify({ userName, password }),
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      });

      console.log(res.json());
      router.push("/");//Home component

      //   console.log("calling login api from here");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Please enter username"
          id="username"
          onChange={(e) => setuserName(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Please enter password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Login</button>
      </form>
    </div>
  );
};

export default login;
