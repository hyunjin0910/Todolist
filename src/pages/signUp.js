import { Button, Input } from "antd";
import styled from "@emotion/styled";
const SignUp = () => {
  return (
    <Wrapper>
      <h1>가입하기</h1>
      <FormContainer>
        <Input size="large" placeholder="이메일을 입력해주세요" />
        <Input size="large" placeholder="비밀번호를 입력해주세요" />
        <Button type="primary" shape="round" size="large">
          Sign Up!
        </Button>
      </FormContainer>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const FormContainer = styled.form`
  height: 200px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;