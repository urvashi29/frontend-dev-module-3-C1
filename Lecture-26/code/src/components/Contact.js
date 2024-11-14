import React, { useState } from "react";
import Form from "./Form";
import Display from "./Display";

const Contact = () => {
  const [users, setUsers] = useState([]);

  const getContactData = (props) => {
    console.log(props);
    setUsers([...users, props]);
    //store props in users
  };

  return (
    <div>
      Contact Us
      <Display users={users} />
      <Form getContactData={getContactData} />
    </div>
  );
};

export default Contact;
