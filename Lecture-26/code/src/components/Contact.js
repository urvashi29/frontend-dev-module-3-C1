import React, { useState } from "react";
import Form from "./Form";

const Contact = () => {
  const [users, setUsers] = useState([]);

  const getContactData = (props) => {
    console.log(props);
    //store props in users
  };

  return (
    <div>
      Contact Us
      <Form getContactData={getContactData} />
    </div>
  );
};

export default Contact;
