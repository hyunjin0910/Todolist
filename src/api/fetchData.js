import { postUser, getData, postData, deleteData, updateData } from "./request";

export const fetchPostLogin = async (loginUser) => {
  try {
    const { data } = await postUser("/auth/signin", loginUser);
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchPostSignUp = async (signUpUser) => {
  try {
    const { data } = await postUser("/auth/signup", signUpUser);
    return data;
  } catch (error) {
    const { data } = await error;
    return data;
  }
};

export const fetchTodoList = async () => {
  try {
    const { data } = await getData("/todos");
    return data;
  } catch (error) {
    return error;
  }
};

export const createTodo = async (newTodo) => {
  try {
    const { data } = await postData("/todos", newTodo);
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const { data } = await deleteData("/todos", id);
    return data;
  } catch (error) {
    return error;
  }
};

export const updateTodo = async (id, info) => {
  try {
    const { data } = await updateData("/todos", id, info);
    return data;
  } catch (error) {
    return error;
  }
};
