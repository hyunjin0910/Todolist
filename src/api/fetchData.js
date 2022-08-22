import { getData, postData } from "./request";

export const fetchTodoList = async () => {
  try {
    const { data } = await getData("/todos");
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchPostLogin = async (loginUser) => {
  try {
    const { data } = await postData("/auth/signin", loginUser);
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchPostSignUp = async (signUpUser) => {
  try {
    const { data } = await postData("/auth/signup", signUpUser);
    return data;
  } catch (error) {
    const { data } = await error;
    return data;
  }
};
