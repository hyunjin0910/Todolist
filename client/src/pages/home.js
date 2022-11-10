import React from "react";
import { FileText } from "react-feather";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Button } from "antd";
import axios from "axios";
const Home = () => {
  const callApi = async () => {
    const response = await axios.get("/api/todos");
    return response.data;
  };

  const handleTest = async () => {
    const testData = await callApi();
    console.log(testData);
  };
  const navigate = useNavigate();
  return (
    <Wrapper>
      <FileText size="40px" />
      <button onClick={handleTest}>테스트</button>
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
