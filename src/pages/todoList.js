import { Button, Input } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";
import TodoItem from "../components/todoItem";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const dummy = [
    {
      id: 1,
      title: "빨래하기",
      isDone: false,
    },
    {
      id: 2,
      title: "청소하기",
      isDone: false,
    },
    {
      id: 3,
      title: "밥하기",
      isDone: true,
    },
  ];
  return (
    <>
      <Input placeholder="할일을 입력하세요" />
      <Button>추가하기</Button>
    </>
  );
};

export default TodoList;
