import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function UCard({ user }) {
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
          {user.name}
        </div>
        <div className="name-font card-text">
          <Typography
            gutterBottom
            variant="h6"
            fontSize="large"
            component="div"
          >
            Username
          </Typography>
          {user.username}
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
          {user.email}
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
          {user.address.street} {user.address.suite}
        </div>
      </CardContent>
    </Card>
  );
}

export default UCard;
