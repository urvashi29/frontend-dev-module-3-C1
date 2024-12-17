import React from "react";
import styles from "@/styles/User.module.css";
import Button from "@/components/Button";

const User = () => {
  return (
    <>
      {/* see styles/User.module.css */}
      <button className={styles.btn}>Submit</button>

      <p className="sample">Almabetter</p>

      {/* Button component see components/Button.jsx */}
      <Button>Signup</Button>
    </>
  );
};

export default User;
