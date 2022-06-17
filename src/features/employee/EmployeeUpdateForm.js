import { Paper, Typography, TextField, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { updateEmployee } from "./employeeSlice";

export const EmployeeUpdateForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const dispatch = useDispatch();

  const [name, setName] = useState(state.name);
  const [email, setEmail] = useState(state.email);
  const [street, setStreet] = useState(state.address.street);
  const [city, setCity] = useState(state.address.city);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const employeeDetails = {
      id: state.id,
      name: name,
      email: email,
      address: {
        street: street,
        city: city,
      },
    };

    dispatch(updateEmployee(employeeDetails));
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
              Update Employee Details
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
                    Update
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
