import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = process.env.REACT_APP_URL;
const URL = `${POSTS_URL}/todos`;
const accessToken = localStorage.getItem("TOKEN");
const initialState = {
  posts: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
});

export const addNewPost = createAsyncThunk("posts/addNewPost", async (newTodo) => {
  try {
    const response = await axios.post(URL, newTodo, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-type": `application/json`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  const idURL = URL + `/${id}`;

  try {
    const response = await axios.delete(idURL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
});

export const updatePost = createAsyncThunk("posts/updatePost", async (editData) => {
  const [id, updatedInfo] = editData;
  const idURL = URL + `/${id}`;
  try {
    const response = await axios.put(idURL, updatedInfo, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-type": `application/json`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(content) {
        return {
          payload: {
            content,
          },
        };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedPosts = action.payload;
        state.posts = [...loadedPosts];
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
