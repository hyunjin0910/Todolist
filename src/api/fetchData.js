import { postData } from "./request";

export const fetchPostLogin = async (loginUser) => {
  try {
    const { data } = await postData("/auth/signin", loginUser);
    return data;
  } catch (error) {
    return error;
  }
 
};
