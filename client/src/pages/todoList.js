import { Button, Input } from "antd";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { useNavigate, Link } from "react-router-dom";
import { getTodos, addTodos } from "../api/todoApi";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Home, LogOut } from "react-feather";
const TodoList = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    if (token === "" || token === null) navigate("/signIn");
  }, [token]);
  const queryClient = useQueryClient();
  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = useQuery(["todos", token], () => getTodos(token));

  const addTodoMutation = useMutation(addTodos, {
    onSuccess: () => {
      // 화면에 보여주는 데이터를 리프레쉬 해줘야 해서
      queryClient.invalidateQueries("todos");
    },
  });
  const [newTodo, setNewTodo] = useState("");

  const handleAddClick = () => {
    const addData = [token, { todo: newTodo }];
    addTodoMutation.mutate(addData);
    setNewTodo("");
  };
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handleLogout = () => {
    localStorage.setItem("TOKEN", "");
    navigate("/signIn");
  };
  return (
    <>
      <Wrapper>
        <span>
          <Link to="/">
            <Home style={{ color: "black", width: "50px" }} />
          </Link>
          <LogOut style={{ cursor: "pointer", width: "50px" }} onClick={handleLogout} />
        </span>
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
          {todos !== undefined ? (
            todos.map((todo, idx) => <TodoItem data={todo} key={idx} />)
          ) : (
            <></>
          )}
        </ListWrapper>
      </Wrapper>
    </>
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