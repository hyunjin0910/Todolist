import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../src/features/todos/todoSlice";
export const store = configureStore({
  reducer: { posts: todoReducer },
});
