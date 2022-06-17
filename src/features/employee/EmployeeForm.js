import { Paper, Typography, TextField, Button, Grid } from "@mui/material";

import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmployee } from "./employeeSlice";
import { useNavigate } from "react-router-dom";

export const EmployeeForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const userDetails = {
      id: uuidv4(),
      name: name,
      email: email,
      address: {
        street: street,
        city: city,
      },
    };
    console.log(userDetails);
    dispatch(addEmployee(userDetails));
    navigate("/employeeview");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* CARD CONTAINER */}
      <Grid
        container
        sx={{ width: "70%", justifyContent: "center", marginTop: "5rem" }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper elevation={24} sx={{ padding: "2rem", borderRadius: "25px" }}>
            <Typography variant="h6" fontSize="xx-large" color="primary">
              Add Employee Details
            </Typography>
            <br />
            <form onSubmit={handleOnSubmit}>
              {/* FORM CONTAINER */}
              <Grid container spacing="1rem" sx={{ alignItems: "center" }}>
                <Grid item xs={12} sm={12} md={3} lg={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    inputProps={{
                      type: "email",
                    }}
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Street"
                    variant="outlined"
                    value={street}
                    onChange={(e) => {
                      setStreet(e.target.value);
                    }}
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="city"
                    variant="outlined"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <Button
                    type="submit"
                    sx={{ width: "10rem" }}
                    size="large"
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
