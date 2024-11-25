import React from "react";
import Grid from "@mui/material/Grid2";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { deleteUser } from "../../action";
import { useDispatch } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "teal",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const index = ({ user, flag }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <>
      <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
        <Item>
          <p>{user.name}</p>
          {flag == "emp" && (
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          )}
        </Item>
      </Grid>
    </>
  );
};

export default index;
