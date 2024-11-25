import React from "react";
import Form from "../../components/Form";
import Card from "../../components/Card";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

const index = () => {
  const employees = useSelector((state) => state.employees);
  console.log(employees);

  const employeeList = employees.length ? (
    <>
      {employees.map((emp) => (
        <Card user={emp} flag={"emp"} />
      ))}
    </>
  ) : (
    <p>No Post Yet!</p>
  );

  return (
    <>
      <Form />
      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "20px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {employeeList}
        </Grid>
      </Box>
    </>
  );
};

export default index;
