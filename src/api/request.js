import axios from "axios";

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


export const postData = async (path, userInfo) => {
  const baseURL = process.env.REACT_APP_URL;
  const URL = baseURL + path;
  try {
    const response = await axios.post(URL, userInfo);
    return response;
  } catch (error) {
    return error.response;
  }
};
