import axios from "axios";

const userApi = axios.create({
  baseURL: `${process.env.REACT_APP_URL}/auth`,
});

export const signIn = async (loginUser) => {
  try {
    const response = await userApi.post("/signin", loginUser);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const signUp = async (signUpUser) => {
  try {
    const response = await userApi.post("/signup", signUpUser);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default userApi;
