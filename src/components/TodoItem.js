import styled from "@emotion/styled";
import { Button, Input } from "antd";
import React from "react";
import { Edit2, Trash2 } from "react-feather";
import { useState } from "react";
const TodoItem = ({ data }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
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
      />
      {isEdit ? <Input value={data.title} /> : <span>{data.title}</span>}
      <Edit2 onClick={handleEdit} />
      <Trash2 onClick={handleDelete} />
    </TodoWrapper>
  );
};

export default TodoItem;

const TodoWrapper = styled.div`
  display: flex;
`;
