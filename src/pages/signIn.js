import { Button, Input } from "antd";
import styled from "@emotion/styled";
const SignIn = () => {
  return (
    <Wrapper>
      <h1>로그인</h1>
      <FormContainer>
        <Input size="large" placeholder="이메일을 입력해주세요" />
        <Input size="large" placeholder="비밀번호를 입력해주세요" />
        <Button type="primary" shape="round" size="large">
          Sign In!
        </Button>
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
