import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/features/counter/counterSlice";
import todoReducer from "../src/features/todos/todoSlice";
export const store = configureStore({
  reducer: { counter: counterReducer, posts: todoReducer },
});
