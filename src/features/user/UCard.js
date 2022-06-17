import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';

// import UserDialogue from '../UserDialogue/UserDialogue';
// import { Grid } from '@mui/material';

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "70%",
//   height: 400,
//   overflow: "scroll",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 4,
// };

function UCard({ user }) {
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => setOpen(true);
  // const handleClose =() => setOpen(false);

  // const handleOnCardClick = () => {
  //   handleOpen();
  // };

  // let d = new Date(user.dob);
  // const date = d.toLocaleDateString();

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
      <CardContent
      // onClick={handleOnCardClick}
      >
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
      {/* <CardActions>
        <Button variant="contained" size="small" color="error" startIcon={<DeleteIcon/>} onClick={handleOnDelete}>Delete</Button>
        <Button variant="contained" size="small" color="success" startIcon={<EditIcon/>} onClick={handleOpen}>Update</Button>
      </CardActions> */}

      {/* <Grid container>
      <Grid item md={3}> 
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box 
          sx={style} 
          >
              <UserDialogue data={user} setOpen={setOpen}/>
          </Box>
        </Fade>
      </Modal>
      </Grid>
      </Grid> */}
    </Card>
  );
}

export default UCard;
