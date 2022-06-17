import React from "react";
import { useSelector } from "react-redux";
import ECard from "./ECard";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const EmployeeView = () => {
  const navigate = useNavigate();

  const employees = useSelector((state) => state.employee.employees);

  const onHandleCreateUser = () => {
    navigate("/employeeform");
  };

  const back = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>List Of Employees</h1>
      <Button
        variant="contained"
        color="primary"
        sx={{ height: "3rem", width: "20rem", mt: 5 }}
        style={{ fontFamily: "Poppins", fontSize: "large", fontWeight: "bold" }}
        onClick={() => {
          onHandleCreateUser();
        }}
      >
        Create Employee
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ height: "3rem", width: "3rem", mt: 5, ml: 1 }}
        style={{
          fontFamily: "Poppins",
          fontSize: "large",
          fontWeight: "bold",
          borderRadius: "25px",
        }}
        onClick={() => {
          back();
        }}
      >
        <ArrowBackIcon />
      </Button>
      {employees?.length > 0 ? (
        <div style={{ margin: "2rem" }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {employees.map((employee) => (
              <Grid
                item
                key={employee.id}
                xs={12}
                md={6}
                lg={3}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ECard key={employee.id} employee={employee} />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <div>
          <h1>Employee List Empty! create Employees</h1>
        </div>
      )}
    </div>
  );
};
