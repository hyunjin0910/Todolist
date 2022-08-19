import { Button, Input } from "antd";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchPostLogin } from "../api/fetchData";
import useForm from "../hooks/useForm";
const SignIn = () => {
  const navigate = useNavigate();

  fetchPostLogin({
    email: "jenet@email.com",
    password: "12345678",
  });

  return (
    <Wrapper>
      <h1>로그인</h1>
      <FormContainer>
        <Input size="large" placeholder="이메일을 입력해주세요" />
        <Input size="large" placeholder="비밀번호를 입력해주세요" />
        <Button type="primary" shape="round" size="large">
          Sign In!
        </Button>
        <GoSignUp>
          오늘 처음이신가요? <Link to={"/signUp"}>회원가입 하기</Link>
        </GoSignUp>
      </FormContainer>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 200px;
  text-align: center;
`;

const FormContainer = styled.form`
  height: 300px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const GoSignUp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
`;