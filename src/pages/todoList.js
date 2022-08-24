import { Button, Input } from "antd";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { fetchTodoList, createTodo } from "../api/fetchData";
import { useNavigate } from "react-router-dom";
const TodoList = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("TOKEN");
  const [todos, setTodos] = useState([]);
  const getData = async () => {
    const data = await fetchTodoList();
    setTodos(data);
    return data;
  };
  useEffect(() => {
    if (token === null) {
      navigate("/signIn");
    }
    getData();
  }, [navigate, token]);

  const [newTodo, setNewTodo] = useState("");
  const handleAddClick = () => {
    createTodo({ todo: newTodo });
    getData();
    setNewTodo("");
  };
  const handleChange = (e) => {
    return setNewTodo(e.target.value);
  };
  return (
    <Wrapper>
      <h1>나의 할일 목록</h1>
      <Input
        placeholder="할일을 입력하세요"
        style={{
          width: "calc(100% - 200px)",
        }}
        size="large"
        value={newTodo}
        onChange={handleChange}
      />
      <Button type="primary" size="large" onClick={handleAddClick}>
        추가하기
      </Button>
      <ListWrapper>
        {todos.map((todo, idx) => (
          <TodoItem data={todo} key={idx} />
        ))}
      </ListWrapper>
    </Wrapper>
  );
};
export default TodoList;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  text-align: center;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;