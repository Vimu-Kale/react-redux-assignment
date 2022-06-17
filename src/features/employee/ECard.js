import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "./employeeSlice";

function ECard({ employee }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate("/employeeupdateform", { state: employee });
  };

  const handleOnDelete = () => {
    dispatch(deleteEmployee(employee.id));
  };

  return (
    <Card
      sx={{
        width: 300,
        maxWidth: 445,
        textAlign: "left",
        border: "0.3rem solid #4285F4",
        borderRadius: "25px",
        padding: "1rem",
        ":hover": { boxShadow: 24 },
      }}
      elevation={8}
    >
      <CardContent>
        <div className="name-font card-text">
          <Typography
            gutterBottom
            variant="h6"
            fontSize="large"
            component="div"
          >
            Full Name:
          </Typography>
          {employee.name}
        </div>
        <div className="name-font card-text">
          <Typography
            gutterBottom
            variant="h6"
            fontSize="large"
            component="div"
          >
            Email
          </Typography>
          {employee.email}
        </div>
        <div className="name-font card-text">
          <Typography
            gutterBottom
            variant="h6"
            fontSize="large"
            component="div"
          >
            address
          </Typography>
          {employee.address.street} {employee.address.city}
        </div>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleOnDelete}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          size="small"
          color="success"
          startIcon={<EditIcon />}
          onClick={handleUpdate}
        >
          Update
        </Button>
      </CardActions>
    </Card>
  );
}

export default ECard;
