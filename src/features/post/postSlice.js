import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  error: "",
  post: { userId: "", id: "", title: "", body: "" },
};

//Generates Pending, Fulfilled and Rejected action types
export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return response.data;
});

export const addPost = createAsyncThunk("post/addPost", async (post) => {
  // console.log(post);
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    post
  );
  const newPost = {
    ...response.data,
    id: post.id,
  };
  return newPost;
});

export const deletePost = createAsyncThunk("post/deletePost", async (id) => {
  // console.log(id);
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  console.log(response);
  return id;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });

    // -----------------------------

    builder.addCase(addPost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts.unshift(action.payload);
      state.error = "";
    });
    builder.addCase(addPost.rejected, (state, action) => {
      state.loading = false;
      //   state.posts = [];
      state.error = action.error.message;
    });

    // ------------------------------

    builder.addCase(deletePost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      state.error = "";
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      //   state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
