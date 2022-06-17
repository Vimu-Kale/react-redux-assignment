import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
import { deletePost } from "./postSlice";
import { useDispatch } from "react-redux/es/exports";

function PCard({ post }) {
  const dispatch = useDispatch();

  const handleOnDelete = () => {
    dispatch(deletePost(post.id));
  };

  //   const handleUpdate = () => {};

  return (
    <Card
      sx={{
        width: 300,
        maxWidth: 445,
        height: 260,
        textAlign: "left",
        border: "0.3rem solid #4285F4",
        borderRadius: "25px",
        padding: "1rem",
        ":hover": { boxShadow: 24 },
      }}
      elevation={8}
    >
      <CardActions style={{ float: "right" }}>
        <Button
          //   variant="outlined"
          size="small"
          color="error"
          //   startIcon={<DeleteIcon />}
          onClick={handleOnDelete}
        >
          <DeleteIcon />
        </Button>
        {/* <Button
          variant="contained"
          size="small"
          color="success"
          startIcon={<EditIcon />}
          onClick={handleUpdate}
        >
          Update
        </Button> */}
      </CardActions>
      <CardContent>
        <div className="name-font card-text">
          <Typography
            gutterBottom
            variant="h6"
            fontSize="large"
            component="div"
          >
            Title
          </Typography>
          {post.title}
        </div>
        <div className="name-font card-text">
          <Typography
            sx={{ mt: 2 }}
            gutterBottom
            variant="h6"
            fontSize="large"
            component="div"
          >
            Body
          </Typography>

          <p
            style={{
              height: "5rem",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {post.body}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default PCard;
