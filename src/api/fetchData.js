import { postData } from "./request";

export const fetchPostLogin = async (loginUser) => {
  const { data } = await postData("/auth/signin", loginUser);
  const { access_token } = await data;
  console.log(access_token);
  localStorage.setItem("TOKEN", access_token);
  return data;
};
