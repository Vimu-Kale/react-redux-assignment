import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";
import UCard from "./UCard";
import { Grid } from "@mui/material";

export const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>List Of Users</h1>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? (
        <div>
          <h1>Error: {user.error}</h1>
        </div>
      ) : null}
      {!user.loading && user.users.length ? (
        <div style={{ margin: "2rem" }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {user.users.map((user) => (
              <Grid
                item
                key={user.id}
                xs={12}
                md={6}
                lg={3}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <UCard key={user.id} user={user} />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : null}
    </div>
  );
};
