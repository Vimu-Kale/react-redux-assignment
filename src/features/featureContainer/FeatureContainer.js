import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const FeatureContainer = () => {
  const navigate = useNavigate();

  const onHandleCRUD = () => {
    navigate("/employeeview");
  };

  const onHandleAsyncFetch = () => {
    navigate("/userview");
  };

  return (
    <div>
      <h1>REACT-REDUX</h1>
      <Button
        variant="contained"
        color="primary"
        sx={{ height: "3rem", width: "20rem", mt: "13rem" }}
        style={{ fontFamily: "Poppins", fontSize: "large", fontWeight: "bold" }}
        onClick={() => {
          onHandleCRUD();
        }}
      >
        User List (CRUD)
      </Button>
      <br />
      <Button
        variant="contained"
        color="primary"
        sx={{ height: "3rem", width: "20rem", mt: 5 }}
        style={{ fontFamily: "Poppins", fontSize: "large", fontWeight: "bold" }}
        onClick={() => {
          onHandleAsyncFetch();
        }}
      >
        Async Fetch Users
      </Button>
    </div>
  );
};
