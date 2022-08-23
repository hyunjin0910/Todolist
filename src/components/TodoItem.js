import styled from "@emotion/styled";
import { Input } from "antd";
import React from "react";
import { Edit2, Trash2, Square, CheckSquare } from "react-feather";
import { useState } from "react";
import { deleteTodo, updateTodo } from "../api/fetchData";
const TodoItem = ({ data }) => {
  const [isEdit, setIsEdit] = useState(false);
  const handleCheck = () => {
    updateTodo(data.id, { todo: data.todo, isCompleted: !data.isCompleted });
  };
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleDelete = () => {
    deleteTodo(data.id);
  };
  return (
    <TodoWrapper>
      {data.isCompleted ? (
        <CheckSquare onClick={handleCheck} />
      ) : (
        <Square onClick={handleCheck} />
      )}
      <InputContainer>
        {isEdit ? (
          <Input
            value={data.todo}
            style={{
              width: 100,
            }}
          />
        ) : (
          <span className={data.isCompleted ? "checked" : ""}>{data.todo}</span>
        )}
      </InputContainer>
      <IconContainer>
        <Edit2 onClick={handleEdit} />
      </IconContainer>
      <IconContainer>
        <Trash2 onClick={handleDelete} />
      </IconContainer>
    </TodoWrapper>
  );
};

export default TodoItem;

const TodoWrapper = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;

const InputContainer = styled.div`
  width: 10rem;
  padding: 0.2rem 0;

  .checked {
    text-decoration: line-through;
  }
`;

const IconContainer = styled.div`
  padding: 0.1rem 0.4rem;
  cursor: pointer;
`;
