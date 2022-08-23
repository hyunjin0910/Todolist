import axios from "axios";

export const postUser = async (path, userInfo) => {
  const baseURL = process.env.REACT_APP_URL;
  const URL = baseURL + path;
  try {
    const response = await axios.post(URL, userInfo);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getData = async (path) => {
  const baseURL = process.env.REACT_APP_URL;
  const URL = baseURL + path;
  const accessToken = localStorage.getItem("TOKEN");
  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const postData = async (path, newTodo) => {
  const baseURL = process.env.REACT_APP_URL;
  const URL = baseURL + path;
  const accessToken = localStorage.getItem("TOKEN");
  try {
    const response = await axios.post(URL, newTodo, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-type": `application/json`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteData = async (path, id) => {
  const baseURL = process.env.REACT_APP_URL;
  const URL = baseURL + path + `/${id}`;
  const accessToken = localStorage.getItem("TOKEN");
  try {
    const response = await axios.delete(URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateData = async (path, id, updatedInfo) => {
  const baseURL = process.env.REACT_APP_URL;
  const URL = baseURL + path + `/${id}`;
  const accessToken = localStorage.getItem("TOKEN");
  try {
    const response = await axios.put(URL, updatedInfo, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-type": `application/json`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};


