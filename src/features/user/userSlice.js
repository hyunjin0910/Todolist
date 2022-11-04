import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const basicURL = process.env.REACT_APP_URL;

const initialState = {
  info: {
    isLoggedIn: false,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplbmV0QGplbmV0LmNvbSIsInN1YiI6MTAyNiwiaWF0IjoxNjY3MzEwNjI3LCJleHAiOjE2Njc5MTU0Mjd9.0c1g3i7QPzAPNNxubEp_B7jTuslYy27Q1wTa_1c33p4",
  },
  status: "idle",
  error: null,
};

export const userLogin = createAsyncThunk("user/userLogin", async (loginUser) => {
  const URL = `${basicURL}/auth/signin`;
  try {
    const response = await axios.post(URL, loginUser);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const userSignUp = createAsyncThunk("user/userSignUp", async (signUpUser) => {
  const URL = `${basicURL}/auth/signup`;
  try {
    const response = await axios.post(URL, signUpUser);
    return response.data.data;
  } catch (error) {
    return error.response;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: {
      reducer(state, action) {
        state.info.isLoggedIn = false;
        state.info.token = "";
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        const { access_token } = action.payload;
        state.status = "succeeded";
        if (access_token === undefined) {
          const { message } = action.payload;
          message !== "Unauthorized" ? alert(message) : alert("비밀번호가 틀렸습니다");
          return;
        } else {
          state.info.isLoggedIn = true;
          state.info.token = access_token;
          alert("로그인 성공");
        }
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(userSignUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.info.isLoggedIn = true;
        state.info.token = action.payload;
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectUserInfo = (state) => state.user.info;
export default userSlice.reducer;
export const { logout } = userSlice.actions;
