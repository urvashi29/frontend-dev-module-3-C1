import React, { useEffect } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import { onGetUsers } from "../../action";
import Card from "../../components/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

const index = () => {
  const users = useSelector((state) => state.users);
  console.log(users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetUsers());
  }, []);

  const userList = users.length ? (
    <>
      {users.map((user) => (
        <Card user={user} />
      ))}
    </>
  ) : (
    <p>Loading...</p>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "20px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {userList}
        </Grid>
      </Box>
    </>
  );
};

export default index;
