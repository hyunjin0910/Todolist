import axios from "axios";

const TOKEN = localStorage.getItem("TOKEN");
const todoApi = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

export const getTodos = async (token) => {
  const response = await todoApi.get("/todos", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": `application/json`,
    },
  });
  return response.data;
};

export const addTodos = async (addData) => {
  const [token, newTodo] = addData;
  try {
    const response = await todoApi.post("/todos", newTodo, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const deleteTodos = async (deleteInfo) => {
  const [token, id] = deleteInfo;
  const response = await todoApi.delete(`/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateTodos = async (newInfo) => {
  const [token, id, updatedInfo] = newInfo;
  try {
    const response = await todoApi.put(`/todos/${id}`, updatedInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": `application/json`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export default todoApi;
