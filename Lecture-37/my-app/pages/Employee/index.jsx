import React from "react";
import styled from "styled-components";
// import Button from "@/components/Button";

// styles-components: allow to add css in js

const Button = styled.button`
  background-color: palevioletred;
  color: white;
  padding: 10px;
  &:hover {
    background: green;
  }
`;

function Employee() {
  return (
    <>
      <Button>Hello</Button>
    </>
  );
}

export default Employee;
