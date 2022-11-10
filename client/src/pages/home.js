import React from "react";
import { FileText } from "react-feather";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Button } from "antd";
const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <FileText size="40px" />
      <h1 style={{ color: "blue" }}> TO DO LIST</h1>
      <UserWrapper>
        <Button onClick={() => navigate("/signIn")}>로그인하기</Button>
        <Button onClick={() => navigate("/signUp")}>회원 가입하기</Button>
      </UserWrapper>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  margin-top: 200px;
  text-align: center;
`;

const UserWrapper = styled.div`
  display: flex;
  margin-top: 100px;
`;
