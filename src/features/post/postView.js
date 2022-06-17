import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";
import PCard from "./PCard";
import { Paper, Typography, TextField, Button, Grid } from "@mui/material";
import Scroll from "./Scroll";
import { v4 as uuidv4 } from "uuid";
import { addPost } from "./postSlice";

export const PostView = () => {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const [title, settitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const postDetails = {
      id: uuidv4(),
      title: title,
      body: body,
    };
    // console.log(postDetails);
    dispatch(addPost(postDetails));

    settitle("");
    setBody("");
  };

  return (
    <div>
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
            <Paper
              elevation={24}
              sx={{ padding: "2rem", borderRadius: "25px" }}
            >
              <Typography
                variant="h6"
                fontSize="xx-large"
                color="primary"
                style={{ fontFamily: "Poppins", fontWeight: "bold" }}
              >
                Add Post
              </Typography>
              <br />
              <form onSubmit={handleOnSubmit}>
                {/* FORM CONTAINER */}
                <Grid container spacing="1rem" sx={{ alignItems: "center" }}>
                  <Grid item xs={12} sm={12} md={3} lg={4}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Title"
                      variant="outlined"
                      value={title}
                      onChange={(e) => {
                        settitle(e.target.value);
                      }}
                      required
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      //   inputProps={{
                      //     type: "email",
                      //   }}
                      label="Body"
                      variant="outlined"
                      value={body}
                      onChange={(e) => {
                        setBody(e.target.value);
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

      <h1>List Of Users</h1>
      {post.loading && <div>Loading...</div>}
      {!post.loading && post.error ? (
        <div>
          <h1>Error: {post.error}</h1>
        </div>
      ) : null}
      {!post.loading && post.posts.length ? (
        <div style={{ margin: "2rem" }}>
          <Scroll>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              {post.posts.map((post) => (
                <Grid
                  item
                  key={post.id}
                  xs={12}
                  md={6}
                  lg={3}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <PCard key={post.id} post={post} />
                </Grid>
              ))}
            </Grid>
          </Scroll>
        </div>
      ) : null}
    </div>
  );
};
