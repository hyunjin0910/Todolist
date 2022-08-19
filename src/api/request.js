import axios from "axios";

export const postData = async (path, userInfo) => {
  const baseURL = process.env.REACT_APP_URL;
  const URL = baseURL + path;
  try {
    const response = await axios.post(URL, userInfo);
    return response;
  } catch (error) {
    return error;
  }
};
