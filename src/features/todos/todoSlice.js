import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = process.env.REACT_APP_URL;
const URL = `${POSTS_URL}/todos`;

const postsAdapter = createEntityAdapter();

const initialState = postsAdapter.getInitialState({
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
});

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { getState }) => {
    const { user } = getState();
    const TOKEN = user.info.token;
    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      return error.response;
    }
  }
);

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (newTodo, { getState }) => {
    const { user } = getState();
    const TOKEN = user.info.token;
    try {
      const response = await axios.post(URL, newTodo, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-type": `application/json`,
        },
      });
      return response.data;
    } catch (error) {
      return error.response;
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, { getState }) => {
    const { user } = getState();
    const TOKEN = user.info.token;
    const idURL = URL + `/${id}`;

    try {
      const response = await axios.delete(idURL, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      return id;
    } catch (error) {
      return error.response;
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (editData, { getState }) => {
    const { user } = getState();
    const TOKEN = user.info.token;
    const [id, updatedInfo] = editData;
    const idURL = URL + `/${id}`;
    try {
      const response = await axios.put(idURL, updatedInfo, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-type": `application/json`,
        },
      });
      return response.data;
    } catch (error) {
      return error.response;
    }
  }
);

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

        postsAdapter.upsertMany(state, loadedPosts);
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
        postsAdapter.addOne(state, loadedPosts);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        const id = action.payload;
        if (!id) {
          console.log("Delete could not complete");
          return;
        }
        postsAdapter.removeOne(state, id);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Update could not complete");
          return;
        }
        action.payload.date = new Date().toISOString();
        postsAdapter.upsertOne(state, action.payload);
      });
  },
});

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.posts);

export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
