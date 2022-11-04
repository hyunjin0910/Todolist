import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../src/features/todos/todoSlice";
import userReducer from "../src/features/user/userSlice";
export const store = configureStore({
  reducer: { posts: todoReducer, user: userReducer },
});
