import styled from "@emotion/styled";
import { Input } from "antd";
import React from "react";
import { Edit2, Trash2 } from "react-feather";
import { useState } from "react";
const TodoItem = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleDelete = () => {
    setIsDeleted(!isDeleted);
  };
  return (
    <TodoWrapper>
      <Input
        type="checkbox"
        style={{
          width: 20,
        }}
        onClick={handleCheck}
      />
      <InputContainer>
        {isEdit ? (
          <Input
            value={data.title}
            style={{
              width: 100,
            }}
          />
        ) : (
          <span className={isChecked ? "checked" : ""}>{data.title}</span>
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
