import { Button, Input } from "antd";
import styled from "@emotion/styled";
const SignUp = () => {
  return (
    <Wrapper>
      가입하기
      <Input />
      <Input />
      <Button>가입하기</Button>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div``;
