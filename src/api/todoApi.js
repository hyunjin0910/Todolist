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

export const deleteTodos = async (id) => {
  const response = await todoApi.delete(`/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response.data;
};

export const updateTodos = async (newInfo) => {
  const [id, updatedInfo] = newInfo;
  try {
    const response = await todoApi.put(`/todos/${id}`, updatedInfo, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": `application/json`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export default todoApi;
