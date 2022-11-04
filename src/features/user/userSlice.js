import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const basicURL = process.env.REACT_APP_URL;

const initialState = {
  info: {
    isLoggedIn: false,
    token: "",
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
    return response.data;
  } catch (error) {
    return error.response.data;
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
        const { access_token } = action.payload;
        state.status = "succeeded";
        if (access_token === undefined) {
          const { message } = action.payload;
          alert(message);
        } else {
          alert("회원가입 성공");
        }
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
