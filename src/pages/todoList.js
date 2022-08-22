import { Button, Input } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";
import TodoItem from "../components/TodoItem";
const TodoList = () => {
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
  const [todos, setTodos] = useState(dummy);
  const [newTodo, setNewTodo] = useState("");
  const handleAddClick = () => {
    setTodos([...todos, { id: todos.length + 1, title: newTodo, isdone: false }]);
  };
  return (
    <ListWrapper>
      <h1>나의 할일 목록</h1>
      <Input
        placeholder="할일을 입력하세요"
        style={{
          width: "calc(100% - 200px)",
        }}
        size="large"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button type="primary" size="large" onClick={handleAddClick}>
        추가하기
      </Button>
      {todos.map((todo, idx) => (
        <TodoItem data={todo} key={idx} />
      ))}
    </ListWrapper>
  );
};

export default TodoList;

const ListWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  text-align: center;
`;