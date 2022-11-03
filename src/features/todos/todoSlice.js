import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";
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
    return id;
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
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedPosts = action.payload.map((post) => {
          post.date = new Date().toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });
        state.posts = state.posts.concat(loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        const loadedPosts = action.payload;
        loadedPosts.date = new Date().toISOString();
        loadedPosts.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        };
        state.posts.push(loadedPosts);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        const id = action.payload;
        if (!id) {
          console.log("Delete could not complete");
          return;
        }
        const posts = state.posts.filter((post) => post.id !== id);
        state.posts = posts;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Update could not complete");
          return;
        }
        const { id } = action.payload;
        const posts = state.posts.filter((post) => post.id !== id);
        state.posts = [...posts, action.payload];
      });
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
